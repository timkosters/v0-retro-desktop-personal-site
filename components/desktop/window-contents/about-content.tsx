"use client"

// ============================================
// EASY EDIT SECTION - Change your info here!
// ============================================

const ABOUT_CONFIG = {
  profileImage: "/images/young-timour.png",

  // Main greeting
  greeting: "HELLO, TRAVELER.",

  // Bio paragraphs (add as many as you like)
  bioParagraphs: [
    "Welcome to my digital garden. I am a software engineer and creative technologist floating through the void.",
    "I build interfaces, write synthesized prose, and explore the intersection of nostalgia and futurism.",
  ],

  // Skills to display (will show in 2-column grid)
  skills: ["TypeScript / React", "System Design", "Audio Synthesis", "Retro UI/UX"],

  // Contact info for terminal section
  contact: {
    email: "hello@retro-os.dev",
    status: "ONLINE", // Options: "ONLINE", "OFFLINE", "AWAY", "BUSY"
  },
}

// ============================================
// Component Code (no need to edit below)
// ============================================

export function AboutContent() {
  return (
    <div className="space-y-4 font-mono text-sm">
      {/* Profile Section */}
      <div className="flex gap-4">
        {/* Profile Image */}
        <div className="w-[120px] h-[120px] flex-shrink-0 border-2 border-black overflow-hidden">
          <img
            src={ABOUT_CONFIG.profileImage || "/placeholder.svg"}
            alt="Profile"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Bio Text */}
        <div className="flex-1 space-y-3">
          <h2 className="text-xl font-bold tracking-wide">{ABOUT_CONFIG.greeting}</h2>
          {ABOUT_CONFIG.bioParagraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-black">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Dotted Separator */}
      <div className="border-t border-dotted border-[#808080] pt-4" />

      {/* Skill Matrix */}
      <div>
        <h3 className="font-bold mb-3">[ SKILL_MATRIX ]</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {ABOUT_CONFIG.skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-3 h-3 bg-black" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Contact Section */}
      <div className="bg-[#1a1a1a] text-[#00ff00] p-3 font-mono text-xs space-y-1">
        <div>{"> "}CONTACT_PROTOCOL_INIT</div>
        <div>
          {"> "}EMAIL: {ABOUT_CONFIG.contact.email}
        </div>
        <div>
          {"> "}STATUS: {ABOUT_CONFIG.contact.status}
        </div>
      </div>
    </div>
  )
}
