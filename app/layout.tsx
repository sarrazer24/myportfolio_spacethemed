import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Exo_2 } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sarra Zerguerras - Portfolio",
    description: "Computer Science Student Portfolio - Exploring the cosmos of code and innovation",
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
