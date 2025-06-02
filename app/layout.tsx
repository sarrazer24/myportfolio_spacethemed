import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Exo_2 } from "next/font/google"
import "./globals.css"
import Head from "next/head"

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
    images: [
      {
        url: "/og-preview.png", // <-- This should be a screenshot of your site, not your selfie
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
    images: ["/og-preview.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <Head>
        <meta property="og:image" content="/og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="/og-preview.png" />
      </Head>
      <body className="font-exo2">{children}</body>
    </html>
  )
}
