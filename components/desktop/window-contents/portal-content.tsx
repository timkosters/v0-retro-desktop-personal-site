"use client"

import { useEffect, useRef } from "react"

export function PortalContent() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bgRef.current
    if (!el) return

    let rafId: number

    const updatePosition = () => {
      const wrapper = el.closest("[data-window-portal]")
      if (!wrapper) return

      const rect = wrapper.getBoundingClientRect()
      el.style.backgroundPosition = `-${rect.left}px -${rect.top}px`
      rafId = requestAnimationFrame(updatePosition)
    }

    rafId = requestAnimationFrame(updatePosition)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bliss%20600dpi-tpNlRFU07O2wV1TPh8HVMZuuxG3tQk.jpg')`,
          backgroundSize: `max(100vw, 177vh) max(56vw, 100vh)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0px 0px",
          willChange: "background-position",
        }}
      />
    </div>
  )
}
