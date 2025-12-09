import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Timour's Personal Site",
  description: "Welcome ☀️",
  generator: "v0.app",
  openGraph: {
    title: "Timour's Personal Site",
    description: "Welcome ☀️",
    type: "website",
    siteName: "Timour's Personal Site",
    images: [
      {
        url: "https://i.imgur.com/VsXVEBT.jpeg",
        width: 1200,
        height: 630,
        alt: "Timour's Personal Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timour's Personal Site",
    description: "Welcome ☀️",
    images: ["https://i.imgur.com/VsXVEBT.jpeg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
