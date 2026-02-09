"use client"

interface PortalContentProps {
  windowPosition: { x: number; y: number }
  windowSize: { width: number; height: number }
  wallpaper: string
  wallpaperType: "image" | "video"
}

export function PortalContent({ windowPosition, windowSize, wallpaper, wallpaperType }: PortalContentProps) {
  const contentHeight = windowSize.height - 40 // Account for header

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ height: contentHeight }}
    >
      {/* 
        Using fixed position alignment trick:
        By placing a fixed-position background inside an overflow-hidden container,
        the background stays perfectly aligned with the desktop background 
        regardless of window movement.
      */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {wallpaperType === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={wallpaper} type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url('${wallpaper}')`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        )}
      </div>

      {/* Glass/Reflections Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-white/5 backdrop-blur-[1px]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)"
        }}
      />
    </div>
  )
}
