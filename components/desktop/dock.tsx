"use client"

import { motion } from "framer-motion"

interface DockProps {
  onOpenWindow: (windowId: string) => void
  onOpenExternalLink?: (url: string) => void
}

const dockItems = [
  { id: "about", iconType: "document" as const, label: "About Me" },
  {
    id: "writing" as const,
    label: "Writing",
    iconType: "writing" as const,
    externalUrl: "https://substack.com/@timour",
  },
  { id: "socials", iconType: "socials" as const, label: "Socials" },
  { id: "music", iconType: "spotify" as const, label: "Spotify" },
  {
    id: "soundcloud",
    iconType: "soundcloud" as const,
    label: "Soundcloud",
    externalUrl: "https://soundcloud.com/timourxyz",
  },
  {
    id: "edgecity",
    iconType: "edgecity" as const,
    label: "Edge City",
    externalUrl: "https://www.edgecity.live/",
  },
]

function DockIcon({
  iconType,
  isExternal,
}: {
  iconType:
    | "document"
    | "folder"
    | "disc"
    | "terminal"
    | "soundcloud"
    | "twitter"
    | "instagram"
    | "spotify"
    | "socials"
    | "writing"
    | "edgecity"
  isExternal?: boolean
}) {
  const renderIcon = () => {
    switch (iconType) {
      case "document":
        return (
          <div className="w-8 h-10 relative">
            <div className="absolute inset-0 bg-[#e8e4dc] border-2 border-[#2a2a2a] rounded-sm">
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#c8c4bc] border-l-2 border-b-2 border-[#2a2a2a]" />
              <div className="absolute top-4 left-1 right-2 h-[1px] bg-[#2a2a2a] opacity-40" />
              <div className="absolute top-5 left-1 right-3 h-[1px] bg-[#2a2a2a] opacity-40" />
              <div className="absolute top-6 left-1 right-1 h-[1px] bg-[#2a2a2a] opacity-40" />
            </div>
          </div>
        )
      case "folder":
        return (
          <div className="w-10 h-8 relative">
            <div className="absolute top-0 left-1 w-4 h-2 bg-[#f5c842] border-2 border-b-0 border-[#2a2a2a] rounded-t-sm" />
            <div className="absolute top-1.5 left-0 right-0 bottom-0 bg-[#f5c842] border-2 border-[#2a2a2a] rounded-sm" />
          </div>
        )
      case "socials":
        return (
          <div className="w-10 h-8 relative">
            <div className="absolute top-0 left-1 w-4 h-2 bg-[#7eb8da] border-2 border-b-0 border-[#2a2a2a] rounded-t-sm" />
            <div className="absolute top-1.5 left-0 right-0 bottom-0 bg-[#7eb8da] border-2 border-[#2a2a2a] rounded-sm flex items-center justify-center gap-0.5">
              <div className="flex items-end">
                <div className="w-1.5 h-1.5 bg-[#2a2a2a] rounded-full" />
                <div className="w-1.5 h-2 bg-[#2a2a2a] rounded-t-sm -ml-0.5" />
              </div>
              <div className="flex items-end -ml-0.5">
                <div className="w-1.5 h-1.5 bg-[#2a2a2a] rounded-full" />
                <div className="w-1.5 h-2 bg-[#2a2a2a] rounded-t-sm -ml-0.5" />
              </div>
            </div>
          </div>
        )
      case "writing":
        return (
          <div className="w-8 h-10 relative">
            <div className="absolute inset-0 bg-[#e8e4dc] border-2 border-[#2a2a2a] rounded-sm">
              <div className="absolute top-2 left-1 right-2 h-[1px] bg-[#2a2a2a] opacity-30" />
              <div className="absolute top-3.5 left-1 right-3 h-[1px] bg-[#2a2a2a] opacity-30" />
              <div className="absolute top-5 left-1 right-1 h-[1px] bg-[#2a2a2a] opacity-30" />
              <div className="absolute top-6.5 left-1 right-4 h-[1px] bg-[#2a2a2a] opacity-30" />
            </div>
            <div className="absolute -right-0.5 -top-0.5 w-2 h-7 rotate-[35deg] origin-bottom">
              <div className="absolute top-0 left-0 right-0 h-5 bg-[#4a4a4a] rounded-t-full" />
              <div className="absolute top-5 left-0 right-0 h-1 bg-[#6a6a6a]" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#c0a060]" />
            </div>
          </div>
        )
      case "disc":
        return (
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-[#3a3a3a] border-2 border-[#2a2a2a] rounded-md">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#5a5a5a] bg-[#4a4a4a]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f5f5f0] border border-[#c0c0c0]" />
              </div>
            </div>
          </div>
        )
      case "spotify":
        return (
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-[#1DB954] border-2 border-[#2a2a2a] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="black">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
          </div>
        )
      case "terminal":
        return (
          <div className="w-8 h-7 relative">
            <div className="absolute inset-0 bg-[#3a5a5a] border-2 border-[#2a2a2a] rounded-sm">
              <div className="absolute top-1.5 left-1.5 right-1.5 h-[1px] bg-[#4ade80]" />
              <div className="absolute top-3 left-1.5 w-3 h-[1px] bg-[#4ade80]" />
              <div className="absolute top-4 left-1.5 right-2 h-[1px] bg-[#4ade80]" />
            </div>
          </div>
        )
      case "soundcloud":
        return (
          <div className="w-10 h-7 relative">
            <div className="absolute inset-0 bg-[#ff5500] border-2 border-[#2a2a2a] rounded-lg flex items-center justify-center">
              <div className="flex items-end gap-[1px] h-4">
                <div className="w-[2px] h-1.5 bg-white rounded-sm" />
                <div className="w-[2px] h-3 bg-white rounded-sm" />
                <div className="w-[2px] h-4 bg-white rounded-sm" />
                <div className="w-[2px] h-2 bg-white rounded-sm" />
                <div className="w-[2px] h-3 bg-white rounded-sm" />
              </div>
            </div>
          </div>
        )
      case "twitter":
        return (
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-md flex items-center justify-center">
              <span className="text-white text-sm font-bold">𝕏</span>
            </div>
          </div>
        )
      case "instagram":
        return (
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] border-2 border-[#2a2a2a] rounded-md flex items-center justify-center">
              <div className="w-5 h-5 border-[1.5px] border-white rounded-md flex items-center justify-center">
                <div className="w-2 h-2 border-[1.5px] border-white rounded-full" />
              </div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full" />
            </div>
          </div>
        )
      case "edgecity":
        return (
          <div className="w-10 h-8 relative">
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-white/80 to-white/20 rounded-full blur-[1px]" />
            <div className="absolute bottom-1 left-1 w-1.5 h-4 bg-[#6a8caf] border border-[#4a6c8f]" />
            <div className="absolute bottom-1 left-3 w-2 h-5 bg-[#8aa4c4] border border-[#6a84a4]" />
            <div className="absolute bottom-1 left-5 w-1.5 h-3 bg-[#7a94b4] border border-[#5a74a4]" />
            <div className="absolute bottom-1 right-1 w-1.5 h-4 bg-[#6a8caf] border border-[#4a6c8f]" />
            <div className="absolute bottom-2.5 left-[7px] w-0.5 h-0.5 bg-[#fffacd]" />
            <div className="absolute bottom-4 left-[7px] w-0.5 h-0.5 bg-[#fffacd]" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative">
      {renderIcon()}
      {isExternal && (
        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-white/90 rounded-full flex items-center justify-center border border-[#2a2a2a]">
          <svg width="6" height="6" viewBox="0 0 8 8" fill="none" stroke="#2a2a2a" strokeWidth="1.5">
            <path d="M1 7L7 1M7 1H3M7 1V5" />
          </svg>
        </div>
      )}
    </div>
  )
}

export function Dock({ onOpenWindow }: DockProps) {
  const handleClick = (item: (typeof dockItems)[0]) => {
    if ("externalUrl" in item && item.externalUrl) {
      window.open(item.externalUrl, "_blank")
    } else {
      onOpenWindow(item.id)
    }
  }

  return (
    <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <div className="flex items-end gap-0 sm:gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-[#3a3a3a]">
        {dockItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => handleClick(item)}
            className="p-1 sm:p-2 flex items-center justify-center rounded-md scale-75 sm:scale-100"
            title={item.label}
            whileHover={{ scale: 1.4, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <DockIcon iconType={item.iconType} isExternal={"externalUrl" in item && !!item.externalUrl} />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
