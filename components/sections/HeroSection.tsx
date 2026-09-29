import { Button } from "@/components/ui/button"
import { ArrowDown, Rocket } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void
}) {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen py-20 flex items-center justify-center px-6 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Photo */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-1 shadow-lg before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-cyan-400 before:via-purple-500 before:to-pink-500 before:animate-spin-slow">
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
          <div className="mb-4 flex items-center justify-center md:justify-start gap-2">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm md:text-base text-cyan-300 font-medium tracking-wide">
              AI & Data Science Engineering Student
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Khayra Sarra Zerguerras
          </h1>

          {/* Main positioning */}
          <h2 className="text-2xl md:text-3xl text-gray-200 mb-5 font-semibold">
            Building intelligent systems with{" "}
            <span className="text-cyan-300">AI</span>,{" "}
            <span className="text-purple-300">data</span>, and{" "}
            <span className="text-pink-300">code</span>.
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Fifth-year engineering student at ESI-SBA, interested in
            artificial intelligence, data science, and intelligent
            applications. I enjoy turning complex ideas into useful,
            interactive digital experiences.
          </p>

          {/* Focus tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {[
              "Artificial Intelligence",
              "Data Science",
              "Machine Learning",
              "Full-Stack Development",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full text-sm text-gray-300 border border-gray-700 bg-gray-900/40 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Explore My Work
              <ArrowDown className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" />
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
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        <div className="floating-element absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
        <div className="floating-element absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
      </div>
    </motion.section>
  )
}