import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Timour Kosters | Personal Site",
  description:
    "Timour Kosters - Building, advising, and investing in startups. Founder at Edge City, creating society incubators focused on prototyping the future in popup city environments.",
  keywords: [
    "Timour Kosters",
    "Timour",
    "Kosters",
    "Edge City",
    "startup advisor",
    "startup investor",
    "society incubator",
    "popup cities",
  ],
  authors: [{ name: "Timour Kosters", url: "https://timour.xyz" }],
  creator: "Timour Kosters",
  publisher: "Timour Kosters",
  metadataBase: new URL("https://timour.xyz"),
  alternates: {
    canonical: "https://timour.xyz",
  },
  openGraph: {
    title: "Timour Kosters | Personal Site",
    description:
      "Timour Kosters - Building, advising, and investing in startups. Founder at Edge City, creating society incubators focused on prototyping the future.",
    type: "website",
    siteName: "Timour Kosters",
    url: "https://timour.xyz",
    locale: "en_US",
    images: [
      {
        url: "https://timour.xyz/images/sunset-coast.jpg",
        width: 1200,
        height: 630,
        alt: "Timour Kosters Personal Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timour Kosters | Personal Site",
    description: "Timour Kosters - Building, advising, and investing in startups. Founder at Edge City.",
    images: ["https://timour.xyz/images/sunset-coast.jpg"],
    creator: "@timaborschel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Timour Kosters",
              url: "https://timour.xyz",
              description:
                "Building, advising, and investing in startups. Founder at Edge City, creating society incubators focused on prototyping the future.",
              sameAs: [
                "https://twitter.com/timaborschel",
                "https://substack.com/@timour",
                "https://soundcloud.com/timourxyz",
              ],
              jobTitle: "Founder",
              worksFor: {
                "@type": "Organization",
                name: "Edge City",
                url: "https://www.edgecity.live/",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
