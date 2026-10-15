import Link from "next/link"
import { ArrowRight, Mail, Rocket } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function HeroSection() {
  return (
    <section className="grid shrink-0 items-center gap-5 border-b border-cocoa-700/20 pb-5 md:grid-cols-[auto_1fr]">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg ring-2 ring-cocoa-500/50 dark:border-gray-800">
        <img
          src="/selfie.jpg"
          alt="Khayra Sarra Zerguerras"
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <p className="mb-2 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          <Rocket className="h-3.5 w-3.5" />
          AI & Data Science Engineer
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.06em] text-gray-900 sm:text-4xl">
          Khayra Sarra Zerguerras
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
          I build thoughtful systems at the intersection of AI, data, and human-centered design,
          with a strong interest in LLMs, NLP, and AI safety.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-cocoa-700/25 bg-cocoa-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-cocoa-700"
          >
            View projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="home-contact-button inline-flex items-center gap-2 border border-cocoa-700/25 bg-white px-3 py-2 text-xs font-semibold text-gray-800 transition-colors hover:border-cocoa-500 hover:text-cocoa-700"
          >
            <Mail className="h-3.5 w-3.5" />
            Get in touch
          </a>
          <a
            href="/KhayraSarraZerguerrasCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="home-cv-button inline-flex items-center gap-2 border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
