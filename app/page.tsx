"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/sections/HeroSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"
import CertificatesSection from "@/components/sections/CertificatesSection"
import ContactSection from "@/components/sections/ContactSection"
import FooterSection from "@/components/sections/FooterSection"
import Navbar from "@/components/sections/Navbar"

export default function SpacePortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative z-10 transition-colors duration-500">
      {/* Animated Starfield Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-500
        bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
