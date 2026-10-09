"use client"

import type { ReactNode } from "react"
import Navbar from "@/components/sections/Navbar"
import FooterSection from "@/components/sections/FooterSection"
import StarsGame from "@/components/StarsGame"

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell relative z-10 min-h-screen overflow-x-hidden bg-[#f7f3ee] text-slate-900 transition-colors duration-500">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="stars opacity-30"></div>
        <div className="stars2 opacity-20"></div>
        <div className="stars3 opacity-20"></div>
      </div>
      <div className="site-backdrop pointer-events-none fixed inset-0 z-0 bg-gradient-to-br from-cocoa-100/60 via-transparent to-cocoa-50/80 transition-colors duration-500" />
      <Navbar />
      {children}
      <FooterSection />
      <StarsGame />
    </div>
  )
}
