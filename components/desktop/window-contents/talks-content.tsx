"use client"

// ============================================
// EASY EDIT SECTION - Change your talks here!
// ============================================

const TALKS_CONFIG = [
  {
    title: "Timour on Endgame Podcast with Amanda Cassatt",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=QgyiZ4aJCKI&t=1s" },
      { platform: "Spotify", url: "https://open.spotify.com/episode/6OHZtD8qb34agsKUBuB2RG?si=6cd18e741cdc4a92" },
    ],
  },
  {
    title: "Talk at the Network State Conference 2025",
    links: [
      { platform: "X (Twitter)", url: "https://x.com/JoinEdgeCity/status/1975241403463557595?s=20" },
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=lc8XSxEx4bo" },
    ],
  },
  {
    title: "Audrey Tang - Plurality and Digital Democracy",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=LbuDzJh8Meg&t=4s" },
      { platform: "Spotify", url: "https://open.spotify.com/episode/7MBxAszAYDWL3evoN0DgXW?si=3e8708877da340a6" },
    ],
  },
  {
    title: "Appearance on Velocity of Change podcast",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/episode/44IhHMmYlSHjiS2pwY94Tw?si=BJNwpavCSYOEYKHFfuUArw" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/watch?v=3kHy0kA3tas&list=PLhuBigpl7lqtJGEuwySnnvliDzSfooC0_&index=5",
      },
    ],
  },
  {
    title: "Cybernetic Communities (cyberEconomy Podcast)",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/episode/0P0A6hw0C6RDrzyS8yYF59?si=ab488411daed4d35" },
    ],
  },
  {
    title: "Bankless Podcast: Edge City Patagonia",
    links: [
      { platform: "X (Twitter)", url: "https://x.com/timourxyz/status/1957847075674083399?s=20" },
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=h47CcgGTdEc" },
    ],
  },
  {
    title: "Green Pill Podcast: Network Nations - Entanglement, Building Voluntary Interdependencies",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/episode/646H5fe3lrQ5EwdhRQ0DOx?si=336c3dfad8394ffe" },
    ],
  },
  {
    title: "Conversation with Glen Weyl: Network Societies, Civic Tech & Democracy",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/episode/6sl9s5S3DT21CIGFTSBd4E?si=23ffd819309a42de" },
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=B9RQlwyeYCY&t" },
    ],
  },
]

// ============================================
// Component Code (no need to edit below)
// ============================================

const getPlatformIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "youtube":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    case "spotify":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      )
    case "x (twitter)":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    default:
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )
  }
}

const getPlatformColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "youtube":
      return "bg-[#FF0000] hover:bg-[#cc0000]"
    case "spotify":
      return "bg-[#1DB954] hover:bg-[#1aa34a]"
    case "x (twitter)":
      return "bg-[#000000] hover:bg-[#333333]"
    default:
      return "bg-[#4a4a4a] hover:bg-[#3a3a3a]"
  }
}

export function TalksContent() {
  return (
    <div className="space-y-4 font-mono text-sm pr-4 overflow-hidden">
      <h2 className="text-lg font-bold tracking-wide border-b-2 border-black pb-2">[ TALKS & PODCASTS ]</h2>

      <div className="space-y-4">
        {TALKS_CONFIG.map((talk, index) => (
          <div key={index} className="border-2 border-[#2a2a2a] bg-[#f5f5f0] p-3">
            <h3 className="font-bold text-sm mb-2 leading-snug">{talk.title}</h3>
            <div className="flex flex-wrap gap-2">
              {talk.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-2 py-1 text-xs text-white rounded transition-colors ${getPlatformColor(link.platform)}`}
                >
                  {getPlatformIcon(link.platform)}
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
