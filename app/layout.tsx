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
  title: "Sarra Zerguerras - Portfolio",
  description: "Computer Science Student Portfolio - Exploring the cosmos of code and innovation",
  generator: 'sarra portfolio',
  openGraph: {
    title: "Sarra Zerguerras - Portfolio",
    description: "Computer Science Student Portfolio - Exploring the cosmos of code and innovation",
    url: "https://sarra-zerguerras-portfolio-space-themed.onrender.com/",
    siteName: "Sarra Zerguerras Portfolio",
    images: [
      {
        url: "https://sarra-zerguerras-portfolio-space-themed.onrender.com/og-preview.jpg",
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
    title: "Sarra Zerguerras - Portfolio",
    description: "Computer Science Student Portfolio - Exploring the cosmos of code and innovation",
    images: ["https://sarra-zerguerras-portfolio-space-themed.onrender.com/og-preview.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${orbitron.variable} ${exo2.variable}`}>
      <body className="font-exo2">{children}</body>
    </html>
  )
}
