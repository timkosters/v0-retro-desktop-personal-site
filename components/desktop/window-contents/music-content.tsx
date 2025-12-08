"use client"

import { useContent } from "@/hooks/use-content"

export function MusicContent() {
  const { content, isLoaded } = useContent()

  if (!isLoaded) {
    return <div className="text-sm text-[#808080]">Loading...</div>
  }

  return (
    <div className="w-full h-full">
      <iframe
        src={`https://open.spotify.com/embed/playlist/${content.music.spotifyPlaylistId}?theme=0`}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-lg border-0"
      />
    </div>
  )
}
