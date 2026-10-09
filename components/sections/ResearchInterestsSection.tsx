"use client"

import { motion } from "framer-motion"
import { researchInterests } from "@/lib/portfolio-data"

export default function ResearchInterestsSection() {
  return (
    <motion.section
      id="research"
      className="relative px-6 py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cocoa-400">Questions I am exploring</p>
        <h2 className="mb-6 text-3xl font-bold text-gray-100 md:text-4xl">Research interests</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {researchInterests.map((interest) => (
            <article key={interest.title} className="rounded-lg border border-cocoa-500/20 bg-gray-950/50 p-5 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-cocoa-300">{interest.title}</h3>
              <p className="leading-relaxed text-gray-400">{interest.description}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}