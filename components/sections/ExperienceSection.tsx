import { motion } from "framer-motion"
import { experience, hackathons } from "@/lib/portfolio-data"

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="relative px-6 py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">Where I have contributed</p>
          <h2 className="mb-10 text-3xl font-bold text-gray-100 md:text-4xl">Experience</h2>
          <div className="space-y-8 border-l border-cyan-500/30 pl-6">
            {experience.map((item) => (
              <article key={`${item.organization}-${item.period}`} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                <p className="mb-1 text-sm text-cyan-400">{item.period}</p>
                <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
                <p className="text-gray-300">{item.organization}</p>
                {item.detail && <p className="text-gray-500">{item.detail}</p>}
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-pink-400">Selected events</p>
          <h2 className="mb-8 text-3xl font-bold text-gray-100 md:text-4xl">Hackathons</h2>
          <ul className="space-y-4">
            {hackathons.map((hackathon) => (
              <li key={hackathon} className="rounded-lg border border-pink-500/20 bg-gray-950/50 px-5 py-4 text-gray-300">
                {hackathon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}