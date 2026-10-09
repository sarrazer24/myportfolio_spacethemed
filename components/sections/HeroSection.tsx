"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      className="relative min-h-[560px] py-16 flex items-center justify-center px-6 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Photo */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full p-1 shadow-lg before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-cocoa-400 before:via-cocoa-500 before:to-cocoa-500 before:animate-spin-slow">
            <img
              src="/selfie.jpg"
              alt="Khayra Sarra Zerguerras"
              className="relative w-full h-full object-cover rounded-full border-4 border-gray-900"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          {/* Small identity label */}
          <div className="mb-3 flex items-center justify-center md:justify-start gap-2">
            <Rocket className="w-4 h-4 text-cocoa-400" />
            <span className="text-sm md:text-base text-cocoa-300 font-medium tracking-wide">
              AI & Data Science Engineering Student
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cocoa-400 via-cocoa-400 to-cocoa-400 bg-clip-text text-transparent">
            Khayra Sarra Zerguerras
          </h1>

          {/* Main positioning */}
          <h2 className="text-xl md:text-2xl text-gray-200 mb-4 font-semibold">
            Building intelligent systems with{" "}
            <span className="text-cocoa-300">AI</span>,{" "}
            <span className="text-cocoa-300">data</span>, and{" "}
            <span className="text-cocoa-300">code</span>.
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 mb-6 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Fifth-year engineering student at ESI-SBA, interested in
            artificial intelligence, data science, and intelligent
            applications. I enjoy turning complex ideas into useful,
            interactive digital experiences.
          </p>

          {/* Focus tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {[
              "Artificial Intelligence",
              "Data Science",
              "Machine Learning",
              "Full-Stack Development",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-xs text-gray-300 border border-gray-700 bg-gray-900/40 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              asChild
              className="group bg-gradient-to-r from-cocoa-500 to-cocoa-500 hover:from-cocoa-400 hover:to-cocoa-400 text-white px-6 py-3 text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cocoa-500/25"
            >
              <Link href="/projects">
                View Projects
                <ArrowDown className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-cocoa-400 text-cocoa-400 hover:bg-cocoa-500/10 hover:text-white px-6 py-3 text-base font-semibold rounded-full transition-all duration-300"
            >
              <a
                href="/KhayraSarraZerguerrasCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-2 h-2 bg-cocoa-400 rounded-full animate-ping" />
        <div className="floating-element absolute top-3/4 right-1/4 w-1 h-1 bg-cocoa-400 rounded-full animate-pulse" />
        <div className="floating-element absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cocoa-400 rounded-full animate-bounce" />
      </div>
    </motion.section>
  )
}