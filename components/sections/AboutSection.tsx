"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative px-6 py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cocoa-400">Profile</p>
        <h2 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">About me</h2>
        <div className="space-y-3 text-base leading-relaxed text-gray-300">
          <p>
            I am Sarra Zerguerras, an AI and Data Science engineering student at ESI Sidi Bel Abbès in Algeria, expected to graduate in 2027.
          </p>
          <p>
            I am currently looking for a PFE or Master 2 thesis internship starting in January 2027, with a growing focus on cybersecurity, language technologies, and safer AI systems.
          </p>
          <p>
            Outside engineering, I photograph, create content on Instagram and TikTok, write on Substack, and occasionally vlog on YouTube. These creative practices are part of the same curiosity I bring to technical work.
          </p>
        </div>
      </div>
    </motion.section>
  )
}