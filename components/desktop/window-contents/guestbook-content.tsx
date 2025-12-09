"use client"

import type React from "react"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"

export function GuestbookContent() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const supabase = createClient()
      const { error: insertError } = await supabase.from("guestbook_entries").insert({ name, message })

      if (insertError) throw insertError

      setSubmitted(true)
      setName("")
      setMessage("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="p-4 font-mono text-sm space-y-4">
        <div className="border-2 border-black p-4 bg-green-100">
          <p className="text-center">{">"} MESSAGE_RECEIVED</p>
          <p className="text-center mt-2">Thank you for signing my guestbook!</p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="w-full bg-black text-white py-2 px-4 hover:bg-gray-800 transition-colors"
        >
          [ SIGN AGAIN ]
        </button>
      </div>
    )
  }

  return (
    <div className="p-4 font-mono text-sm space-y-4">
      {/* Header */}
      <div className="text-center border-b-2 border-dashed border-gray-400 pb-3">
        <h2 className="text-lg font-bold">[ GUESTBOOK ]</h2>
        <p className="text-xs text-gray-600 mt-1">Leave a message for Timour</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-xs uppercase tracking-wide">{">"} Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={50}
            className="w-full border-2 border-black p-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Anonymous Traveler"
          />
        </div>

        <div>
          <label className="block mb-1 text-xs uppercase tracking-wide">{">"} Your Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            maxLength={500}
            rows={4}
            className="w-full border-2 border-black p-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
            placeholder="Write something nice..."
          />
          <p className="text-xs text-gray-500 mt-1 text-right">{message.length}/500</p>
        </div>

        {error && <div className="bg-red-100 border-2 border-red-400 p-2 text-red-700 text-xs">ERROR: {error}</div>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-2 px-4 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "[ SENDING... ]" : "[ SIGN GUESTBOOK ]"}
        </button>
      </form>

      {/* Footer decoration */}
      <div className="text-center text-xs text-gray-400 border-t-2 border-dashed border-gray-400 pt-3">
        ═══════════════════════════
      </div>
    </div>
  )
}
