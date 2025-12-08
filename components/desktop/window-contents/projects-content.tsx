"use client"
import { useContent } from "@/hooks/use-content"

export function ProjectsContent() {
  const { content, isLoaded } = useContent()

  if (!isLoaded) {
    return <div className="text-sm text-[#808080]">Loading...</div>
  }

  return (
    <div className="w-full h-full -m-4">
      <iframe
        src="https://substack.com/@timour"
        className="w-full h-full border-0"
        style={{ minHeight: "350px" }}
        title="Substack"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
