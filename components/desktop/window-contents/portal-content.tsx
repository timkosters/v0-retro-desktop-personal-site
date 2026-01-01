"use client"

interface PortalContentProps {
  windowPosition: { x: number; y: number }
  windowSize: { width: number; height: number }
}

export function PortalContent({ windowPosition, windowSize }: PortalContentProps) {
  const contentHeight = windowSize.height - 40 // Account for header

  return (
    <div
      className="w-full h-full"
      style={{
        height: contentHeight,
        backgroundImage: "url('/images/bliss.jpg')",
        backgroundSize: "auto 200vh",
        backgroundPosition: `calc(50% - ${windowPosition.x}px) calc(50% - ${windowPosition.y}px)`,
        backgroundRepeat: "no-repeat",
      }}
    />
  )
}
