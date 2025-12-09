"use client"

import type React from "react"
import { motion } from "framer-motion"

interface DesktopIconProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
  initialPosition?: { x: number; y: number }
  isExternal?: boolean
  iconType?:
    | "document"
    | "folder"
    | "disc"
    | "terminal"
    | "trash"
    | "soundcloud"
    | "twitter"
    | "instagram"
    | "spotify"
    | "socials"
    | "writing"
    | "edgecity"
}

export function DesktopIcon({
  icon,
  label,
  onClick,
  initialPosition = { x: 0, y: 0 },
  iconType = "document",
  isExternal = false,
}: DesktopIconProps) {
  const renderIcon = () => {
    switch (iconType) {
      case "document":
        return (
          <div className="w-12 h-14 relative">
            {/* Document body */}
            <div className="absolute inset-0 bg-[#e8e4dc] border-2 border-[#2a2a2a] rounded-sm">
              {/* Folded corner */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-[#c8c4bc] border-l-2 border-b-2 border-[#2a2a2a]" />
              {/* Lines on document */}
              <div className="absolute top-6 left-2 right-3 h-[2px] bg-[#2a2a2a] opacity-40" />
              <div className="absolute top-8 left-2 right-4 h-[2px] bg-[#2a2a2a] opacity-40" />
              <div className="absolute top-10 left-2 right-2 h-[2px] bg-[#2a2a2a] opacity-40" />
            </div>
          </div>
        )
      case "folder":
        return (
          <div className="w-14 h-11 relative">
            {/* Folder tab */}
            <div className="absolute top-0 left-1 w-5 h-3 bg-[#f5c842] border-2 border-b-0 border-[#2a2a2a] rounded-t-sm" />
            {/* Folder body */}
            <div className="absolute top-2 left-0 right-0 bottom-0 bg-[#f5c842] border-2 border-[#2a2a2a] rounded-sm" />
          </div>
        )
      case "socials":
        return (
          <div className="w-14 h-11 relative">
            {/* Folder tab */}
            <div className="absolute top-0 left-1 w-5 h-3 bg-[#7eb8da] border-2 border-b-0 border-[#2a2a2a] rounded-t-sm" />
            {/* Folder body */}
            <div className="absolute top-2 left-0 right-0 bottom-0 bg-[#7eb8da] border-2 border-[#2a2a2a] rounded-sm flex items-center justify-center gap-1 pt-1">
              {/* People silhouettes */}
              <div className="flex items-end">
                <div className="w-2 h-2 bg-[#2a2a2a] rounded-full" />
                <div className="w-2 h-3 bg-[#2a2a2a] rounded-t-sm -ml-0.5" />
              </div>
              <div className="flex items-end -ml-1">
                <div className="w-2 h-2 bg-[#2a2a2a] rounded-full" />
                <div className="w-2 h-3 bg-[#2a2a2a] rounded-t-sm -ml-0.5" />
              </div>
            </div>
          </div>
        )
      case "writing":
        return (
          <div className="w-12 h-14 relative">
            {/* Paper */}
            <div className="absolute inset-0 bg-[#e8e4dc] border-2 border-[#2a2a2a] rounded-sm">
              {/* Lines on paper */}
              <div className="absolute top-3 left-2 right-3 h-[2px] bg-[#2a2a2a] opacity-30" />
              <div className="absolute top-5 left-2 right-4 h-[2px] bg-[#2a2a2a] opacity-30" />
              <div className="absolute top-7 left-2 right-2 h-[2px] bg-[#2a2a2a] opacity-30" />
              <div className="absolute top-9 left-2 right-5 h-[2px] bg-[#2a2a2a] opacity-30" />
            </div>
            {/* Pen */}
            <div className="absolute -right-1 -top-1 w-3 h-10 rotate-[35deg] origin-bottom">
              {/* Pen body */}
              <div className="absolute top-0 left-0 right-0 h-7 bg-[#4a4a4a] rounded-t-full" />
              {/* Pen grip */}
              <div className="absolute top-7 left-0 right-0 h-2 bg-[#6a6a6a]" />
              {/* Pen tip */}
              <div className="absolute top-9 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#c0a060]" />
            </div>
          </div>
        )
      case "disc":
        return (
          <div className="w-12 h-12 relative">
            {/* Disc background */}
            <div className="absolute inset-0 bg-[#3a3a3a] border-2 border-[#2a2a2a] rounded-md">
              {/* Center ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#5a5a5a] bg-[#4a4a4a]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#f5f5f0] border border-[#c0c0c0]" />
              </div>
            </div>
          </div>
        )
      case "terminal":
        return (
          <div className="w-12 h-10 relative">
            {/* Terminal body */}
            <div className="absolute inset-0 bg-[#3a5a5a] border-2 border-[#2a2a2a] rounded-sm">
              {/* Screen lines */}
              <div className="absolute top-2 left-2 right-2 h-[2px] bg-[#4ade80]" />
              <div className="absolute top-4 left-2 w-4 h-[2px] bg-[#4ade80]" />
              <div className="absolute top-6 left-2 right-3 h-[2px] bg-[#4ade80]" />
            </div>
          </div>
        )
      case "trash":
        return (
          <div className="w-11 h-14 relative">
            {/* Trash lid */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-[#6a6a6a] border-2 border-[#2a2a2a] rounded-t-sm" />
            {/* Trash body */}
            <div className="absolute top-3 left-1 right-1 bottom-0 bg-[#5a5a5a] border-2 border-t-0 border-[#2a2a2a] rounded-b-sm">
              {/* Vertical lines */}
              <div className="absolute top-1 bottom-1 left-2 w-[2px] bg-[#4a4a4a]" />
              <div className="absolute top-1 bottom-1 left-1/2 -translate-x-1/2 w-[2px] bg-[#4a4a4a]" />
              <div className="absolute top-1 bottom-1 right-2 w-[2px] bg-[#4a4a4a]" />
            </div>
          </div>
        )
      case "soundcloud":
        return (
          <div className="w-14 h-10 relative">
            <div className="absolute inset-0 bg-[#ff5500] border-2 border-[#2a2a2a] rounded-lg flex items-center justify-center">
              {/* Sound waves */}
              <div className="flex items-end gap-[2px] h-5">
                <div className="w-[3px] h-2 bg-white rounded-sm" />
                <div className="w-[3px] h-4 bg-white rounded-sm" />
                <div className="w-[3px] h-5 bg-white rounded-sm" />
                <div className="w-[3px] h-3 bg-white rounded-sm" />
                <div className="w-[3px] h-4 bg-white rounded-sm" />
              </div>
            </div>
          </div>
        )
      case "twitter":
        return (
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-md flex items-center justify-center">
              {/* X logo */}
              <span className="text-white text-xl font-bold">𝕏</span>
            </div>
          </div>
        )
      case "instagram":
        return (
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] border-2 border-[#2a2a2a] rounded-md flex items-center justify-center">
              {/* Camera outline */}
              <div className="w-7 h-7 border-2 border-white rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white rounded-full" />
              </div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </div>
        )
      case "spotify":
        return (
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 bg-[#1DB954] border-2 border-[#2a2a2a] rounded-full flex items-center justify-center">
              {/* Spotify logo - three curved lines */}
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="black">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
          </div>
        )
      case "edgecity":
        return (
          <div className="w-14 h-12 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] to-[#5a9abf] border-2 border-[#2a2a2a] rounded-md overflow-hidden">
              {/* Sun/moon */}
              <div className="absolute top-1 right-2 w-2 h-2 bg-[#ffe4a0] rounded-full" />
              {/* City buildings */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[1px] px-[2px]">
                {/* Building 1 - short */}
                <div className="w-[5px] h-4 bg-[#2a3a4a] relative">
                  <div className="absolute top-1 left-[1px] w-[1px] h-[1px] bg-[#ffe066]" />
                  <div className="absolute top-2 left-[2px] w-[1px] h-[1px] bg-[#ffe066]" />
                </div>
                {/* Building 2 - tall with spire */}
                <div className="w-[6px] h-7 bg-[#3a4a5a] relative">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-[#4a5a6a]" />
                  <div className="absolute top-1 left-[1px] w-[1px] h-[1px] bg-[#ffe066]" />
                  <div className="absolute top-2 left-[3px] w-[1px] h-[1px] bg-[#ffe066]" />
                  <div className="absolute top-3 left-[1px] w-[1px] h-[1px] bg-[#ffe066]" />
                </div>
                {/* Building 3 - medium */}
                <div className="w-[7px] h-5 bg-[#2a3a4a] relative">
                  <div className="absolute top-1 left-[1px] w-[1px] h-[1px] bg-[#ffe066]" />
                  <div className="absolute top-1 left-[4px] w-[1px] h-[1px] bg-[#ffe066]" />
                  <div className="absolute top-2 left-[2px] w-[1px] h-[1px] bg-[#ffe066]" />
                </div>
                {/* Building 4 - tallest */}
                <div className="w-[5px] h-8 bg-[#4a5a6a] relative">
                  <div className="absolute top-1 left-[1px] w-[1px] h-[1px] bg-[#ffe066]" />
                  <div className="absolute top-2 left-[2px] w-[1px] h-[1px] bg-[#ffe066]" />
                  <div className="absolute top-4 left-[1px] w-[1px] h-[1px] bg-[#ffe066]" />
                  <div className="absolute top-5 left-[2px] w-[1px] h-[1px] bg-[#ffe066]" />
                </div>
                {/* Building 5 - medium with roof */}
                <div className="w-[6px] h-5 bg-[#3a4a5a] relative">
                  <div
                    className="absolute -top-1 left-0 right-0 h-1 bg-[#4a5a6a]"
                    style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
                  />
                  <div className="absolute top-1 left-[2px] w-[1px] h-[1px] bg-[#ffe066]" />
                </div>
                {/* Building 6 - short */}
                <div className="w-[4px] h-3 bg-[#2a3a4a] relative">
                  <div className="absolute top-1 left-[1px] w-[1px] h-[1px] bg-[#ffe066]" />
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return icon
    }
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      initial={initialPosition}
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 p-2 cursor-grab active:cursor-grabbing select-none group"
      whileDrag={{ scale: 1.05 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative">
        {renderIcon()}
        {isExternal && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/90 rounded-full flex items-center justify-center border border-[#2a2a2a]">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="#2a2a2a" strokeWidth="1.5">
              <path d="M1 7L7 1M7 1H3M7 1V5" />
            </svg>
          </div>
        )}
      </div>
      <span
        className="text-xs text-center font-medium text-white px-2 py-0.5 rounded-sm bg-black/70"
        style={{
          fontFamily:
            "ui-monospace, 'SF Mono', Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace",
          textShadow: "1px 1px 0px rgba(0,0,0,0.8)",
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}
