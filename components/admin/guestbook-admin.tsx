"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

type GuestbookEntry = {
  id: string
  name: string
  message: string
  created_at: string
}

export function GuestbookAdmin({
  entries,
  error,
}: {
  entries: GuestbookEntry[]
  error: string | null
}) {
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-[#c0c0c0] p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        {/* Window */}
        <div className="bg-[#dfdfdf] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {/* Title bar */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-500 text-white px-2 py-1 flex items-center justify-between">
            <span className="text-sm font-bold">Guestbook Admin - Private</span>
            <button onClick={handleLogout} className="bg-gray-600 hover:bg-gray-500 px-2 py-0.5 text-xs">
              Logout
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <div className="text-center border-b-2 border-dashed border-gray-400 pb-3">
              <h2 className="text-lg font-bold">[ GUESTBOOK ENTRIES ]</h2>
              <p className="text-xs text-gray-600 mt-1">
                {entries.length} message{entries.length !== 1 ? "s" : ""} received
              </p>
            </div>

            {error && <div className="bg-red-100 border-2 border-red-400 p-2 text-red-700 text-xs">ERROR: {error}</div>}

            {entries.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>{">"} No messages yet...</p>
                <p className="text-xs mt-2">Share your site to get some!</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                {entries.map((entry) => (
                  <div key={entry.id} className="border-2 border-black p-3 bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-sm">
                        {">"} {entry.name}
                      </span>
                      <span className="text-xs text-gray-500">{formatDate(entry.created_at)}</span>
                    </div>
                    <p className="text-sm whitespace-pre-wrap">{entry.message}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center pt-3 border-t-2 border-dashed border-gray-400">
              <a href="/" className="text-xs text-blue-600 hover:underline">
                ← Back to Desktop
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
