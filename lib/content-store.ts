export interface SiteContent {
  about: {
    name: string
    title: string
    bio: string
    location: string
    experience: string
    avatarEmoji: string
  }
  projects: Array<{
    name: string
    type: string
  }>
  contact: {
    intro: string
    email: string
    github: string
    linkedin: string
    twitter: string
  }
  music: {
    spotifyPlaylistId: string
  }
}

export const defaultContent: SiteContent = {
  about: {
    name: "John Doe",
    title: "Senior Frontend Engineer",
    bio: "Welcome to my digital workspace! I'm a passionate developer who loves building beautiful, interactive web experiences. With 5+ years of experience in React, TypeScript, and modern web technologies.",
    location: "San Francisco, CA",
    experience: "5+ Years",
    avatarEmoji: "👨‍💻",
  },
  projects: [
    { name: "E-Commerce Platform", type: "React / Next.js" },
    { name: "AI Chat Application", type: "TypeScript / OpenAI" },
    { name: "Design System", type: "Storybook / Tailwind" },
    { name: "Mobile App", type: "React Native" },
  ],
  contact: {
    intro: "Get in touch! I'm always open to discussing new projects and opportunities.",
    email: "hello@johndoe.dev",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
    twitter: "@johndoe",
  },
  music: {
    spotifyPlaylistId: "7zBJDKzhgWwHUoryN7Z4Vq",
  },
}

const STORAGE_KEY = "retro-desktop-content"

export function getContent(): SiteContent {
  if (typeof window === "undefined") return defaultContent

  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return defaultContent

  try {
    return { ...defaultContent, ...JSON.parse(stored) }
  } catch {
    return defaultContent
  }
}

export function saveContent(content: SiteContent): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
}
