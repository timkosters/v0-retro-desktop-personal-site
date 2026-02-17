"use client"

export function PortalContent() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/bliss.jpg')`,
          backgroundAttachment: "fixed",
          backgroundSize: "300vmax auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  )
}
