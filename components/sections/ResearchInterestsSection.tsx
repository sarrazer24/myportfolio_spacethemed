import { motion } from "framer-motion"
import { researchInterests } from "@/lib/portfolio-data"

export default function ResearchInterestsSection() {
  return (
    <motion.section
      id="research"
      className="relative px-6 py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">Questions I am exploring</p>
        <h2 className="mb-10 text-3xl font-bold text-gray-100 md:text-4xl">Research interests</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {researchInterests.map((interest) => (
            <article key={interest.title} className="rounded-lg border border-cyan-500/20 bg-gray-950/50 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-semibold text-cyan-300">{interest.title}</h3>
              <p className="leading-relaxed text-gray-400">{interest.description}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}