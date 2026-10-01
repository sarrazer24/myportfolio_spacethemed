import Link from "next/link"
import { motion } from "framer-motion"

const logTypes = [
  {
    id: "experiments",
    title: "Experiments",
    description: "A future log of implementations, evaluations, and lessons learned.",
  },
  {
    id: "notes",
    title: "Research notes",
    description: "Paper notes will be added here in my own words, with authors, venue, year, and links.",
  },
]

export default function ResearchLogSection() {
  return (
    <motion.section
      id="research-log"
      className="relative px-6 py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">Work in progress</p>
        <h2 className="mb-10 text-3xl font-bold text-gray-100 md:text-4xl">Research log</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {logTypes.map((log) => (
            <article key={log.id} className="rounded-lg border border-gray-700/60 bg-gray-950/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-100">{log.title}</h3>
              <p className="mb-5 leading-relaxed text-gray-400">{log.description}</p>
              <Link href="/journal" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                Visit the journal →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}