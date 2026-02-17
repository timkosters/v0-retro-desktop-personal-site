"use client"

import { motion, useMotionValue } from "framer-motion"
import type { ReactNode } from "react"
import { useEffect, useState } from "react"

interface WindowProps {
  title: string
  children?: ReactNode
  renderContent?: (position: { x: number; y: number }) => ReactNode
  isOpen: boolean
  onClose: () => void
  onFocus: () => void
  zIndex: number
  defaultPosition?: { x: number; y: number }
  size?: { width: number; height: number }
  hideScrollbar?: boolean
}

export function Window({
  title,
  children,
  renderContent,
  isOpen,
  onClose,
  onFocus,
  zIndex,
  size,
  hideScrollbar,
}: WindowProps) {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })
  const [initialized, setInitialized] = useState(false)
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const updateSize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight })
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  useEffect(() => {
    if (isOpen && viewportSize.width > 0 && !initialized) {
      const windowWidth = size?.width || 300
      const windowHeight = size?.height || 300
      const centerX = Math.max(10, (viewportSize.width - windowWidth) / 2)
      const centerY = Math.max(50, (viewportSize.height - windowHeight) / 3)
      x.set(centerX)
      y.set(centerY)
      setCurrentPosition({ x: centerX, y: centerY })
      setInitialized(true)
    }
  }, [isOpen, viewportSize, size, initialized, x, y])

  useEffect(() => {
    if (!isOpen) {
      setInitialized(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleDrag = (_: any, info: { delta: { x: number; y: number } }) => {
    const newX = x.get() + info.delta.x
    const newY = y.get() + info.delta.y
    const maxX = viewportSize.width - (size?.width || 300) - 20
    const maxY = viewportSize.height - (size?.height || 300) - 100

    const clampedX = Math.max(0, Math.min(newX, maxX))
    const clampedY = Math.max(40, Math.min(newY, maxY))

    x.set(clampedX)
    y.set(clampedY)
    setCurrentPosition({ x: clampedX, y: clampedY })
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      style={{
        zIndex,
        x,
        y,
        width: size?.width,
        minHeight: size?.height,
        maxWidth: "calc(100vw - 20px)",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute top-0 left-0 bg-[#e8e4dc] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] select-none"
      onMouseDown={onFocus}
      dragListener={false}
    >
      {/* Window Header */}
      <motion.div
        className="relative flex items-center justify-between px-1 py-1 cursor-grab active:cursor-grabbing border-b-[3px] border-black"
        style={{ touchAction: "none" }}
        onPointerDown={(e) => {
          const parent = e.currentTarget.parentElement
          if (parent) {
            parent.style.pointerEvents = "auto"
          }
        }}
        drag
        dragMomentum={false}
        dragElastic={0}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        onDrag={handleDrag}
      >
        <div
          className="flex-1 h-5 mr-2"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, #2a2a2a, #2a2a2a 2px, transparent 2px, transparent 4px)",
          }}
        />
        <span
          className="text-black text-sm font-bold px-3 bg-[#e8e4dc] whitespace-nowrap"
          style={{
            fontFamily: "ui-monospace, 'SF Mono', Monaco, 'Cascadia Mono', monospace",
          }}
        >
          {title}
        </span>
        <div
          className="flex-1 h-5 ml-2"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, #2a2a2a, #2a2a2a 2px, transparent 2px, transparent 4px)",
          }}
        />
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="ml-2 w-6 h-6 bg-[#e8e4dc] border-2 border-black text-sm font-bold flex items-center justify-center hover:bg-[#d8d4cc] active:bg-[#c8c4bc]"
          style={{
            fontFamily: "ui-monospace, monospace",
          }}
        >
          x
        </button>
      </motion.div>

      {/* Window Content */}
      <div
        className="p-4 text-black text-sm overflow-auto"
        data-window-portal={hideScrollbar ? "true" : undefined}
        style={{
          minHeight: size ? size.height - 40 : 260,
          maxHeight: size ? size.height - 40 : undefined,
          fontFamily: "ui-monospace, 'SF Mono', Monaco, 'Cascadia Mono', monospace",
          padding: hideScrollbar ? 0 : undefined,
        }}
      >
        {renderContent ? renderContent(currentPosition) : children}
      </div>

      {/* Scrollbar track - hide for portal */}
      {!hideScrollbar && (
        <div className="absolute right-0 top-8 bottom-0 w-4 border-l-[3px] border-black bg-[#c8c4bc]">
          <div className="absolute top-0 left-0 right-0 h-8 bg-[#a8a4a0] border-b-2 border-black" />
        </div>
      )}
    </motion.div>
  )
}
