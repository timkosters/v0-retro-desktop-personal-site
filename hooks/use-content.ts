"use client"

import { useState, useEffect } from "react"
import { getContent, saveContent, type SiteContent, defaultContent } from "@/lib/content-store"

export function useContent() {
  const [content, setContent] = useState<SiteContent>(defaultContent)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setContent(getContent())
    setIsLoaded(true)
  }, [])

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent)
    saveContent(newContent)
  }

  return { content, updateContent, isLoaded }
}
