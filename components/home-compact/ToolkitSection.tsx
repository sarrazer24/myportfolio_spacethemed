const skills = [
  "Python", "PyTorch", "Hugging Face", "scikit-learn", "Pandas", "NLP",
  "LLMs", "Computer Vision", "SQL", "PostgreSQL", "TypeScript", "Next.js",
  "Docker", "Git", "AWS",
]

export default function ToolkitSection() {
  return (
    <section className="grid gap-4 border-t border-cocoa-700/20 py-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 dark:bg-white/[0.04]">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Technical toolkit
        </p>
        <p className="mt-2 text-xs leading-relaxed text-gray-600">
          A practical foundation spanning machine learning, data analysis, software engineering, and deployment.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cocoa-700/15 bg-cocoa-500/5 px-3 py-1 text-xs text-gray-700 dark:text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 dark:bg-white/[0.04]">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Ideal internship direction
        </p>
        <h2 className="mt-2 text-lg font-semibold text-gray-900">
          AI and Data Science, with a focus on trustworthy technology
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-gray-600">
          I am especially interested in opportunities involving AI safety, model evaluation,
          cybersecurity, privacy, NLP, or reliable ML systems.
        </p>
        <p className="mt-3 text-xs font-semibold text-cocoa-700">
          Open to research, engineering, and applied data science internships.
        </p>
      </div>
    </section>
  )
}
