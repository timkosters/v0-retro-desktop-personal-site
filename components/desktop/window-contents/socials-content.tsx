"use client"

import { motion } from "framer-motion"

const socialLinks = [
  {
    id: "twitter",
    label: "Twitter",
    url: "https://twitter.com/timourxyz",
    icon: (
      <div className="w-12 h-12 relative">
        <div className="absolute inset-0 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-md flex items-center justify-center">
          <span className="text-white text-xl font-bold">𝕏</span>
        </div>
      </div>
    ),
  },
  {
    id: "instagram",
    label: "IG",
    url: "https://www.instagram.com/timkosters/",
    icon: (
      <div className="w-12 h-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] border-2 border-[#2a2a2a] rounded-md flex items-center justify-center">
          <div className="w-7 h-7 border-2 border-white rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-full" />
          </div>
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/timkosters/",
    icon: (
      <div className="w-12 h-12 relative">
        <div className="absolute inset-0 bg-[#0077b5] border-2 border-[#005582] rounded-md flex items-center justify-center">
          <span className="text-white text-xl font-bold">in</span>
        </div>
      </div>
    ),
  },
]

export function SocialsContent() {
  return (
    <div className="p-4 flex gap-6 justify-center items-center h-full">
      {socialLinks.map((social) => (
        <motion.button
          key={social.id}
          onClick={() => window.open(social.url, "_blank")}
          className="flex flex-col items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            {social.icon}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/90 rounded-full flex items-center justify-center border border-[#2a2a2a]">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="#2a2a2a" strokeWidth="1.5">
                <path d="M1 7L7 1M7 1H3M7 1V5" />
              </svg>
            </div>
          </div>
          <span
            className="text-xs text-white px-2 py-0.5 rounded-sm bg-black/70"
            style={{
              fontFamily: "ui-monospace, 'SF Mono', Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', monospace",
              textShadow: "1px 1px 0px rgba(0,0,0,0.8)",
            }}
          >
            {social.label}
          </span>
        </motion.button>
      ))}
    </div>
  )
}
