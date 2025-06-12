import { motion } from "framer-motion"

export default function CertificatesSection() {
  const courses = [
    {
      title: "AWS Concepts",
      issuer: "DataCamp",
      date: "2025",
      link: "https://drive.google.com/file/d/18LAvTFHPSng6qMgeXcmw7dpRZkA27XkG/view?usp=sharing"
    },
    {
      title: "PostgreSQL Data Functions",
      issuer: "DataCamp",
      date: "2025",
      link: "https://drive.google.com/file/d/1MNC-exHWJW7XGQQiMdzalWx8f9Ho7qE5/view?usp=sharing"
    },
    {
      title: "Intermediate SQL",
      issuer: "DataCamp",
      date: "2025",
      link: "https://drive.google.com/file/d/17QbWs-UORvoqY3AxqVGCx9NeI2xXECHe/view?usp=sharing"
    },
    {
      title: "Introduction to Python",
      issuer: "DataCamp",
      date: "2024",
      link: "https://drive.google.com/file/d/1w0maP1MxV23yQ3uJuwtA2clD9y7tOatC/view?usp=sharing"
    },
    {
      title: "Introduction to SQL",
      issuer: "DataCamp",
      date: "2025",
      link: "https://drive.google.com/file/d/1695aGhQqHFioHLwtYOlDg-cn-adOH6Om/view?usp=sharing"
    },
    {
      title: "Cloud Computing",
      issuer: "DataCamp",
      date: "2025",
      link: "https://drive.google.com/file/d/1dz7pyD28a0Pbf7_qM35KIgfGwM2MIXPy/view?usp=sharing"
    },
    {
      title: "Artificial Intelligence",
      issuer: "DataCamp",
      date: "2025",
      link: "https://drive.google.com/file/d/1hcobIPTVrkYYjBACEmToSWkAhweC3rox/view?usp=sharing"
    },
    {
      title: "Understanding ChatGPT",
      issuer: "DataCamp",
      date: "2025",
      link: "https://drive.google.com/file/d/1rKF9StzmudbVVrTgJ1_2_isZVflLYsln/view?usp=sharing"
    }
  ]

  return (
    <motion.section
      id="certificates"
      className="relative py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Learning Journey
        </h2>
        {/* Responsive Masonry Grid for many certificates */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900/70 p-3 rounded-lg border border-cyan-700/20 hover:border-cyan-400/60 transition-all duration-200 shadow group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.02 }}
            >
              <div className="flex-1">
                <div className="text-xs text-gray-400">{course.date}</div>
                <div className="font-semibold text-sm text-white leading-tight mb-1">{course.title}</div>
                <div className="text-xs text-purple-300 mb-2">{course.issuer}</div>
              </div>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline text-xs mt-auto"
              >
                View →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}