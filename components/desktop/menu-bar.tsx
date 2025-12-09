"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// ===========================================
// MENU BAR CONFIGURATION - Edit these easily!
// ===========================================
const MENU_CONFIG = {
  // Available wallpapers (add more URLs here)
  wallpapers: [
    {
      name: "Dreamy Clouds",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/timour_Clouds_slowly_move_in_the_background_while_the_window__7439470e-faa9-498a-976a-483ae1c790e6_2-qfwXUT4tYaxGtpBLFM3qcfO9Yh8uT3.mp4",
      type: "video" as const,
      thumbnail: "/images/dreamy-clouds-thumb.jpg",
    },
    { name: "Sunset Coast", url: "/images/sunset-coast.jpg", type: "image" as const },
    {
      name: "Flower Glitch",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flower%20Glitch%20shortened%20and%20compressed-5bLmCGOkaMIDova4kEwIAYuUEQXzZD.mp4",
      type: "video" as const,
      thumbnail: "/images/flower-glitch-thumb.jpg",
    },
    {
      name: "Blueprint Satellite",
      url: "/images/satellite-20no-20bottom-20blueprint-20paper-20light-20grain.jpg",
      type: "image" as const,
    },
    {
      name: "Floating Layers",
      url: "/images/timour-create-a-diagram-of-the-pace-layers-but-instead-of-the-121ab87e-f431-4d70-b107-52fa6f1e2fd0-0.png",
      type: "image" as const,
    },
    {
      name: "Mountain Blueprint",
      url: "/images/timour-httpss.png",
      type: "image" as const,
    },
  ],

  githubUrl: "https://github.com/timkosters/v0-retro-desktop-personal-site",

  // Contact email
  email: "hello@timour.dev",
}

export const WALLPAPERS = MENU_CONFIG.wallpapers

interface AppleParticle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  scale: number
}

interface MenuBarProps {
  onWallpaperChange?: (url: string, type: "image" | "video", thumbnail?: string) => void
  currentWallpaper?: string
}

export function MenuBar({ onWallpaperChange, currentWallpaper }: MenuBarProps) {
  const [currentTime, setCurrentTime] = useState("")
  const [systemOpen, setSystemOpen] = useState(false)
  const [viewOpen, setViewOpen] = useState(false)
  const [apples, setApples] = useState<AppleParticle[]>([])

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleAppleClick = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const newApples: AppleParticle[] = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX,
      y: centerY,
      vx: (Math.random() - 0.5) * 15,
      vy: Math.random() * -12 - 5,
      rotation: Math.random() * 360,
      scale: 0.6 + Math.random() * 0.6,
    }))

    setApples((prev) => [...prev, ...newApples])

    setTimeout(() => {
      setApples((prev) => prev.filter((a) => !newApples.find((na) => na.id === a.id)))
    }, 1500)
  }, [])

  useEffect(() => {
    if (apples.length === 0) return

    const interval = setInterval(() => {
      setApples((prev) =>
        prev.map((apple) => ({
          ...apple,
          x: apple.x + apple.vx,
          y: apple.y + apple.vy,
          vy: apple.vy + 0.8,
          rotation: apple.rotation + apple.vx * 2,
        })),
      )
    }, 16)

    return () => clearInterval(interval)
  }, [apples.length])

  const handleRestart = () => {
    document.body.style.transition = "opacity 0.5s"
    document.body.style.opacity = "0"
    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  const chicagoFont = { fontFamily: "'Chicago', 'Geneva', system-ui, sans-serif" }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-6 bg-[#f5f5f5] border-b border-black flex items-center justify-between px-2 z-[100]">
        <div className="flex items-center gap-1">
          {/* Apple logo */}
          <button
            onClick={handleAppleClick}
            className="text-black hover:bg-black hover:text-white px-1.5 py-0.5 transition-colors"
            title="Click me!"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </button>

          {/* System Menu */}
          <DropdownMenu open={systemOpen} onOpenChange={setSystemOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className="text-sm text-black hover:bg-black hover:text-white px-2 py-0.5 font-bold focus:outline-none"
                style={chicagoFont}
              >
                System
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-[#f5f5f5] border border-black rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)] min-w-48"
              style={chicagoFont}
            >
              {/* View Source */}
              {MENU_CONFIG.githubUrl && (
                <DropdownMenuItem
                  onClick={() => window.open(MENU_CONFIG.githubUrl, "_blank")}
                  className="text-sm text-black hover:bg-black hover:text-white rounded-none cursor-pointer"
                >
                  View Source
                </DropdownMenuItem>
              )}

              <DropdownMenuSeparator className="bg-black h-px my-1" />

              {/* Restart */}
              <DropdownMenuItem
                onClick={handleRestart}
                className="text-sm text-black hover:bg-black hover:text-white rounded-none cursor-pointer"
              >
                Restart...
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu open={viewOpen} onOpenChange={setViewOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className="text-sm text-black hover:bg-black hover:text-white px-2 py-0.5 font-bold focus:outline-none"
                style={chicagoFont}
              >
                View
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-[#f5f5f5] border border-black rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)] min-w-48"
              style={chicagoFont}
            >
              <DropdownMenuItem className="text-sm text-black rounded-none cursor-default font-bold" disabled>
                Wallpaper
              </DropdownMenuItem>
              {MENU_CONFIG.wallpapers.map((wp) => (
                <DropdownMenuItem
                  key={wp.url}
                  onClick={() => onWallpaperChange?.(wp.url, wp.type || "image", wp.thumbnail)}
                  className={`text-sm text-black hover:bg-black hover:text-white rounded-none cursor-pointer pl-6 ${currentWallpaper === wp.url ? "bg-[#d0d0d0]" : ""}`}
                >
                  {currentWallpaper === wp.url && "✓ "}
                  {wp.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right side - Clock */}
        <span className="text-black text-sm font-medium" style={chicagoFont}>
          {currentTime}
        </span>
      </div>

      {/* Apple particles */}
      {apples.map((apple) => (
        <div
          key={apple.id}
          className="fixed pointer-events-none z-[200] text-2xl"
          style={{
            left: apple.x,
            top: apple.y,
            transform: `translate(-50%, -50%) rotate(${apple.rotation}deg) scale(${apple.scale})`,
          }}
        >
          🍎
        </div>
      ))}
    </>
  )
}
