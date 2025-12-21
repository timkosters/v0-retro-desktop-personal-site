"use client"

// ============================================
// EASY EDIT SECTION - Change your info here!
// ============================================

const ABOUT_CONFIG = {
  profileImage: "/images/young-timour.png",

  // Main greeting
  greeting: "Hey! I'm Timour",

  // Bio paragraphs (add as many as you like)
  bioParagraphs: [
    "I've been building, advising, and investing in startups for the last ten years. Now, I'm building Edge City, where we're creating a 'society incubator' focused on prototyping the future. We do this in popup city environments. ",
  ],

  edgeCityLink: "https://www.edgecity.live/",

  contact: {
    status: "ONLINE", // Options: "ONLINE", "OFFLINE", "AWAY", "BUSY"
  },
}

// ============================================
// Component Code (no need to edit below)
// ============================================

export function AboutContent() {
  return (
    <div className="space-y-4 font-mono text-sm pr-6 overflow-hidden">
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Profile Image */}
        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex-shrink-0 border-2 border-black overflow-hidden mx-auto sm:mx-0">
          <img
            src={ABOUT_CONFIG.profileImage || "/placeholder.svg"}
            alt="Profile"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Bio Text */}
        <div className="flex-1 min-w-0 space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-center sm:text-left">{ABOUT_CONFIG.greeting}</h2>
          {ABOUT_CONFIG.bioParagraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-black break-words">
              {paragraph}
            </p>
          ))}
          <p className="leading-relaxed text-black break-words">
            More here:{" "}
            <a
              href={ABOUT_CONFIG.edgeCityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              www.edgecity.live
            </a>
          </p>
        </div>
      </div>

      {/* Dotted Separator */}
      <div className="border-t border-dotted border-[#808080] pt-4" />

      <div className="bg-[#1a1a1a] text-[#00ff00] p-3 font-mono text-xs space-y-1">
        <div>
          {"> "}STATUS: {ABOUT_CONFIG.contact.status}
        </div>
      </div>
    </div>
  )
}
