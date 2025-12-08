"use client"

import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { useContent } from "@/hooks/use-content"

export function ContactContent() {
  const { content, isLoaded } = useContent()

  if (!isLoaded) {
    return <div className="text-sm text-[#808080]">Loading...</div>
  }

  return (
    <div className="space-y-4">
      <p className="text-sm">{content.contact.intro}</p>

      <div className="space-y-2">
        <a
          href={`mailto:${content.contact.email}`}
          className="flex items-center gap-3 p-2 hover:bg-[#000080] hover:text-white cursor-pointer group"
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm">{content.contact.email}</span>
        </a>
        <a
          href={`https://${content.contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-2 hover:bg-[#000080] hover:text-white cursor-pointer group"
        >
          <Github className="w-5 h-5" />
          <span className="text-sm">{content.contact.github}</span>
        </a>
        <a
          href={`https://${content.contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-2 hover:bg-[#000080] hover:text-white cursor-pointer group"
        >
          <Linkedin className="w-5 h-5" />
          <span className="text-sm">{content.contact.linkedin}</span>
        </a>
        <a
          href={`https://twitter.com/${content.contact.twitter.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-2 hover:bg-[#000080] hover:text-white cursor-pointer group"
        >
          <Twitter className="w-5 h-5" />
          <span className="text-sm">{content.contact.twitter}</span>
        </a>
      </div>
    </div>
  )
}
