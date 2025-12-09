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
        url: "https://timour.xyz/images/sunset-coast.jpg",
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
    images: ["https://timour.xyz/images/sunset-coast.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
