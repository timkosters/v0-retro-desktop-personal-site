"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      router.push("/admin/guestbook")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#c0c0c0] flex items-center justify-center p-4 font-mono">
      <div className="bg-[#dfdfdf] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full max-w-sm">
        {/* Title bar */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-500 text-white px-2 py-1 flex items-center justify-between">
          <span className="text-sm font-bold">Admin Login</span>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="text-center border-b-2 border-dashed border-gray-400 pb-3">
            <h2 className="text-lg font-bold">[ ADMIN ACCESS ]</h2>
            <p className="text-xs text-gray-600 mt-1">Authorized personnel only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1 text-xs uppercase tracking-wide">{">"} Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-2 border-black p-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs uppercase tracking-wide">{">"} Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-2 border-black p-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {error && <div className="bg-red-100 border-2 border-red-400 p-2 text-red-700 text-xs">ERROR: {error}</div>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-2 px-4 hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {isLoading ? "[ AUTHENTICATING... ]" : "[ LOGIN ]"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
