"use client"

import { useState, useEffect } from "react"
import { getContent, saveContent, type SiteContent, defaultContent } from "@/lib/content-store"
import { Save, Plus, Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const [content, setContent] = useState<SiteContent>(defaultContent)
  const [activeTab, setActiveTab] = useState<"about" | "projects" | "contact" | "music">("about")
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setContent(getContent())
  }, [])

  const handleSave = () => {
    saveContent(content)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const addProject = () => {
    setContent({
      ...content,
      projects: [...content.projects, { name: "New Project", type: "Technology" }],
    })
  }

  const removeProject = (index: number) => {
    setContent({
      ...content,
      projects: content.projects.filter((_, i) => i !== index),
    })
  }

  const updateProject = (index: number, field: "name" | "type", value: string) => {
    const newProjects = [...content.projects]
    newProjects[index] = { ...newProjects[index], [field]: value }
    setContent({ ...content, projects: newProjects })
  }

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-[#a0a0c0] hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Desktop
            </Link>
            <h1 className="text-2xl font-bold">Content Editor</h1>
          </div>
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              saved ? "bg-green-600 text-white" : "bg-[#6366f1] hover:bg-[#5558e3] text-white"
            }`}
          >
            <Save className="w-4 h-4" />
            {saved ? "Saved!" : "Save Changes"}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["about", "projects", "contact", "music"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                activeTab === tab ? "bg-[#6366f1] text-white" : "bg-[#2a2a4a] text-[#a0a0c0] hover:bg-[#3a3a5a]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Panels */}
        <div className="bg-[#2a2a4a] rounded-xl p-6">
          {activeTab === "about" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#a0a0c0] mb-1">Name</label>
                  <input
                    type="text"
                    value={content.about.name}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, name: e.target.value } })}
                    className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a0a0c0] mb-1">Title</label>
                  <input
                    type="text"
                    value={content.about.title}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, title: e.target.value } })}
                    className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#a0a0c0] mb-1">Avatar Emoji</label>
                <input
                  type="text"
                  value={content.about.avatarEmoji}
                  onChange={(e) => setContent({ ...content, about: { ...content.about, avatarEmoji: e.target.value } })}
                  className="w-24 bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white text-2xl text-center"
                />
              </div>
              <div>
                <label className="block text-sm text-[#a0a0c0] mb-1">Bio</label>
                <textarea
                  value={content.about.bio}
                  onChange={(e) => setContent({ ...content, about: { ...content.about, bio: e.target.value } })}
                  rows={4}
                  className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#a0a0c0] mb-1">Location</label>
                  <input
                    type="text"
                    value={content.about.location}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, location: e.target.value } })}
                    className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a0a0c0] mb-1">Experience</label>
                  <input
                    type="text"
                    value={content.about.experience}
                    onChange={(e) =>
                      setContent({ ...content, about: { ...content.about, experience: e.target.value } })
                    }
                    className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="space-y-4">
              {content.projects.map((project, index) => (
                <div key={index} className="flex items-center gap-4 bg-[#1a1a2e] p-4 rounded-lg">
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => updateProject(index, "name", e.target.value)}
                      placeholder="Project Name"
                      className="bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                    />
                    <input
                      type="text"
                      value={project.type}
                      onChange={(e) => updateProject(index, "type", e.target.value)}
                      placeholder="Technology"
                      className="bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                  <button
                    onClick={() => removeProject(index)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                onClick={addProject}
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] border border-dashed border-[#3a3a5a] rounded-lg text-[#a0a0c0] hover:border-[#6366f1] hover:text-[#6366f1] transition-colors w-full justify-center"
              >
                <Plus className="w-4 h-4" />
                Add Project
              </button>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#a0a0c0] mb-1">Intro Text</label>
                <textarea
                  value={content.contact.intro}
                  onChange={(e) => setContent({ ...content, contact: { ...content.contact, intro: e.target.value } })}
                  rows={2}
                  className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white resize-none"
                />
              </div>
              <div>
                <label className="block text-sm text-[#a0a0c0] mb-1">Email</label>
                <input
                  type="email"
                  value={content.contact.email}
                  onChange={(e) => setContent({ ...content, contact: { ...content.contact, email: e.target.value } })}
                  className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-[#a0a0c0] mb-1">GitHub</label>
                <input
                  type="text"
                  value={content.contact.github}
                  onChange={(e) => setContent({ ...content, contact: { ...content.contact, github: e.target.value } })}
                  className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-[#a0a0c0] mb-1">LinkedIn</label>
                <input
                  type="text"
                  value={content.contact.linkedin}
                  onChange={(e) =>
                    setContent({ ...content, contact: { ...content.contact, linkedin: e.target.value } })
                  }
                  className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-[#a0a0c0] mb-1">Twitter</label>
                <input
                  type="text"
                  value={content.contact.twitter}
                  onChange={(e) => setContent({ ...content, contact: { ...content.contact, twitter: e.target.value } })}
                  className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                />
              </div>
            </div>
          )}

          {activeTab === "music" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#a0a0c0] mb-1">Spotify Playlist ID</label>
                <input
                  type="text"
                  value={content.music.spotifyPlaylistId}
                  onChange={(e) =>
                    setContent({ ...content, music: { ...content.music, spotifyPlaylistId: e.target.value } })
                  }
                  placeholder="e.g., 37i9dQZF1DX0XUsuxWHRQd"
                  className="w-full bg-[#1a1a2e] border border-[#3a3a5a] rounded-lg px-3 py-2 text-white"
                />
                <p className="text-xs text-[#808080] mt-2">
                  To find your playlist ID, open the playlist in Spotify, click Share → Copy Link. The ID is the string
                  after /playlist/ in the URL.
                </p>
              </div>
              {content.music.spotifyPlaylistId && (
                <div>
                  <label className="block text-sm text-[#a0a0c0] mb-2">Preview</label>
                  <iframe
                    src={`https://open.spotify.com/embed/playlist/${content.music.spotifyPlaylistId}?theme=0`}
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
