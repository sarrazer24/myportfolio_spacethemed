import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Exo_2 } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Khayra Sarra Zerguerras - AI & Data Science Portfolio",
  description: "Portfolio of Khayra Sarra Zerguerras, an AI and Data Science engineering student exploring cybersecurity, LLMs, NLP, and AI safety.",
  generator: 'sarra portfolio',
  openGraph: {
    title: "Khayra Sarra Zerguerras - AI & Data Science Portfolio",
    description: "Portfolio of Khayra Sarra Zerguerras, an AI and Data Science engineering student exploring cybersecurity, LLMs, NLP, and AI safety.",
    url: "https://sarra-zerguerras-portfolio.vercel.app",
    siteName: "Sarra Zerguerras Portfolio",
    images: [
      {
        url: "https://sarra-zerguerras-portfolio.vercel.app/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of Sarra Zerguerras Portfolio website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khayra Sarra Zerguerras - AI & Data Science Portfolio",
    description: "Portfolio of Khayra Sarra Zerguerras, an AI and Data Science engineering student exploring cybersecurity, LLMs, NLP, and AI safety.",
    images: ["https://sarra-zerguerras-portfolio.vercel.app/og-preview.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="font-exo2">{children}</body>
    </html>
  )
}
