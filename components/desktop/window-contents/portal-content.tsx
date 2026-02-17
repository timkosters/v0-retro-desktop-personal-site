"use client"

interface PortalContentProps {
  windowPosition: { x: number; y: number }
  windowSize: { width: number; height: number }
}

export function PortalContent({ windowPosition, windowSize }: PortalContentProps) {
  const contentHeight = windowSize.height - 40 // Account for header

  // regardless of screen aspect ratio or window position. Auto height maintains aspect ratio.
  return (
    <div
      className="w-full h-full"
      style={{
        height: contentHeight,
        backgroundImage: "url('/images/bliss.jpg')",
        backgroundSize: "300vmax auto",
        backgroundPosition: `calc(50% - ${windowPosition.x}px) calc(50% - ${windowPosition.y}px)`,
        backgroundRepeat: "no-repeat",
      }}
    />
  )
}
