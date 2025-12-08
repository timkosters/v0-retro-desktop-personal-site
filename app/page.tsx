"use client"

import { useState, useCallback, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { DesktopIcon } from "@/components/desktop/desktop-icon"
import { Window } from "@/components/desktop/window"
import { Dock } from "@/components/desktop/dock"
import { MenuBar } from "@/components/desktop/menu-bar"
import { AboutContent } from "@/components/desktop/window-contents/about-content"
import { MusicContent } from "@/components/desktop/window-contents/music-content"
import { ContactContent } from "@/components/desktop/window-contents/contact-content"
import { SocialsContent } from "@/components/desktop/window-contents/socials-content"

type WindowId = "about" | "music" | "contact" | "socials" | "writing" | "soundcloud" | "edgecity"

interface WindowState {
  id: WindowId
  isOpen: boolean
  zIndex: number
  position: { x: number; y: number }
}

const desktopIcons = [
  { id: "about" as WindowId, label: "About Me", iconType: "document" as const },
  {
    id: "writing" as const,
    label: "Writing",
    iconType: "writing" as const,
    externalUrl: "https://substack.com/@timour",
  },
  { id: "socials" as WindowId, label: "Socials", iconType: "socials" as const },
  { id: "music" as WindowId, label: "Spotify", iconType: "spotify" as const },
  {
    id: "soundcloud" as const,
    label: "Soundcloud",
    iconType: "soundcloud" as const,
    externalUrl: "https://soundcloud.com/timourxyz",
  },
  {
    id: "edgecity" as const,
    label: "Edge City",
    iconType: "edgecity" as const,
    externalUrl: "https://www.edgecity.live/",
  },
]

const getWindowConfigs = (
  isMobile: boolean,
): Record<
  WindowId,
  { title: string; defaultPosition: { x: number; y: number }; size?: { width: number; height: number } }
> => ({
  about: {
    title: "About Me",
    defaultPosition: { x: isMobile ? 10 : 80, y: isMobile ? 50 : 80 },
    size: { width: isMobile ? 300 : 520, height: isMobile ? 420 : 480 },
  },
  music: {
    title: "Spotify",
    defaultPosition: { x: isMobile ? 10 : 100, y: isMobile ? 50 : 80 },
    size: { width: isMobile ? 280 : 380, height: isMobile ? 400 : 450 },
  },
  contact: {
    title: "Uplink",
    defaultPosition: { x: isMobile ? 10 : 120, y: isMobile ? 50 : 100 },
    size: { width: isMobile ? 280 : 340, height: isMobile ? 260 : 280 },
  },
  socials: {
    title: "Socials",
    defaultPosition: { x: isMobile ? 10 : 150, y: isMobile ? 50 : 100 },
    size: { width: isMobile ? 300 : 360, height: isMobile ? 180 : 160 },
  },
  writing: {
    title: "Writing",
    defaultPosition: { x: isMobile ? 10 : 80, y: 60 },
    size: { width: isMobile ? 300 : 520, height: isMobile ? 420 : 480 },
  },
  soundcloud: {
    title: "Soundcloud",
    defaultPosition: { x: isMobile ? 10 : 100, y: 50 },
    size: { width: isMobile ? 280 : 380, height: isMobile ? 400 : 450 },
  },
  edgecity: {
    title: "Edge City",
    defaultPosition: { x: isMobile ? 10 : 120, y: 100 },
    size: { width: isMobile ? 280 : 340, height: isMobile ? 260 : 280 },
  },
})

export default function Desktop() {
  const [isMobile, setIsMobile] = useState(false)
  const [wallpaper, setWallpaper] = useState("https://i.imgur.com/VsXVEBT.jpeg")

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const windowConfigs = getWindowConfigs(isMobile)

  const [windows, setWindows] = useState<WindowState[]>([
    { id: "about", isOpen: false, zIndex: 1, position: { x: 80, y: 80 } },
    { id: "music", isOpen: false, zIndex: 1, position: { x: 100, y: 80 } },
    { id: "contact", isOpen: false, zIndex: 1, position: { x: 120, y: 100 } },
    { id: "socials", isOpen: false, zIndex: 1, position: { x: 150, y: 100 } },
  ])
  const [maxZIndex, setMaxZIndex] = useState(1)

  const openWindow = useCallback(
    (id: WindowId) => {
      setMaxZIndex((prev) => prev + 1)
      setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isOpen: true, zIndex: maxZIndex + 1 } : w)))
    },
    [maxZIndex],
  )

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w)))
  }, [])

  const focusWindow = useCallback(
    (id: WindowId) => {
      setMaxZIndex((prev) => prev + 1)
      setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, zIndex: maxZIndex + 1 } : w)))
    },
    [maxZIndex],
  )

  const handleIconClick = (icon: (typeof desktopIcons)[0]) => {
    if ("externalUrl" in icon && icon.externalUrl) {
      window.open(icon.externalUrl, "_blank")
    } else {
      openWindow(icon.id as WindowId)
    }
  }

  const getWindowContent = (id: WindowId) => {
    switch (id) {
      case "about":
        return <AboutContent />
      case "music":
        return <MusicContent />
      case "contact":
        return <ContactContent />
      case "socials":
        return <SocialsContent />
      case "writing":
        return null
      case "soundcloud":
        return null
      case "edgecity":
        return null
    }
  }

  return (
    <div
      className="h-screen w-screen overflow-hidden relative"
      style={{
        backgroundImage: `url('${wallpaper}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MenuBar onWallpaperChange={setWallpaper} currentWallpaper={wallpaper} />

      <div className="absolute top-12 left-6 pb-28 grid grid-cols-3 sm:grid-cols-1 sm:flex sm:flex-col gap-3">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={null}
            iconType={icon.iconType}
            label={icon.label}
            onClick={() => handleIconClick(icon)}
            isExternal={"externalUrl" in icon && !!icon.externalUrl}
          />
        ))}
      </div>

      <AnimatePresence>
        {windows.map((window) => (
          <Window
            key={window.id}
            title={windowConfigs[window.id].title}
            isOpen={window.isOpen}
            onClose={() => closeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            zIndex={window.zIndex}
            defaultPosition={windowConfigs[window.id].defaultPosition}
            position={window.position}
            size={windowConfigs[window.id].size}
          >
            {getWindowContent(window.id)}
          </Window>
        ))}
      </AnimatePresence>

      <Dock onOpenWindow={(id) => openWindow(id as WindowId)} />
    </div>
  )
}
