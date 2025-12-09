"use client"

import { motion } from "framer-motion"
import { WALLPAPERS } from "./menu-bar"

interface DockProps {
  onWallpaperChange: (url: string, type: "image" | "video") => void
  currentWallpaper?: string
}

export function Dock({ onWallpaperChange, currentWallpaper }: DockProps) {
  return (
    <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <div className="flex items-end gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-[#3a3a3a]">
        {WALLPAPERS.map((wallpaper) => (
          <motion.button
            key={wallpaper.url}
            onClick={() => onWallpaperChange(wallpaper.url, wallpaper.type || "image")}
            className={`relative rounded-md overflow-hidden border-2 transition-colors ${
              currentWallpaper === wallpaper.url ? "border-white" : "border-[#3a3a3a] hover:border-[#5a5a5a]"
            }`}
            title={wallpaper.name}
            whileHover={{ scale: 1.3, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Wallpaper thumbnail */}
            <div className="w-10 h-7 sm:w-12 sm:h-8 relative">
              {wallpaper.type === "video" ? (
                <video src={wallpaper.url} className="w-full h-full object-cover" muted playsInline />
              ) : (
                <img
                  src={wallpaper.url || "/placeholder.svg"}
                  alt={wallpaper.name}
                  className="w-full h-full object-cover"
                />
              )}
              {/* Selection indicator */}
              {currentWallpaper === wallpaper.url && (
                <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
