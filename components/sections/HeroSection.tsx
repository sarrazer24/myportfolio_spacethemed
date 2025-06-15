import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function HeroSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen py-20 flex items-center justify-center px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Photo */}
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-1 shadow-lg before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-cyan-400 before:via-purple-500 before:to-pink-500 before:animate-spin-slow">
            <img
              src="/selfie.jpg"
              alt="Sarra Zerguerras"
              className="relative w-full h-full object-cover rounded-full border-4 border-gray-900"
            />
          </div>
        </div>
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Khayra Sarra Zerguerras
          </h1>
          {/* Added extra margin below the name */}
          <div className="mb-6"></div>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Computer Engineering Student @ ESI SBA
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-xl leading-relaxed mx-auto md:mx-0">
            Passionate about building creative digital experiences.<br />
            I love mobile apps, backend logic, and dreamy UI/UX.<br />
            Currently exploring AI, emotion recognition, and the cosmos of code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={() => scrollToSection("contact")}
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Contact Me
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <a
                href="/KhayraSarraZerguerrasCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="floating-element absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="floating-element absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
      </div>
    </motion.section>
  )
}