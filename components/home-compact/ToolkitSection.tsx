const skillGroups = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "scikit-learn",
      "NLP",
      "LLMs",
      "Computer Vision",
    ],
  },
  {
    title: "Data & Development",
    skills: [
      "Pandas",
      "SQL",
      "PostgreSQL",
      "TypeScript",
      "Next.js",
    ],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "Docker", "AWS"],
  },
]

export default function ToolkitSection() {
  return (
    <section className="grid gap-4 border-t border-cocoa-700/20 py-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 dark:bg-white/[0.04]">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Technical toolkit
        </p>

        <p className="mt-2 text-xs leading-relaxed text-gray-600">
          Tools and technologies I use across machine learning, AI research,
          data analysis, and software development.
        </p>

        <div className="mt-4 space-y-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-2 text-xs font-semibold text-gray-800 dark:text-gray-200">
                {group.title}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cocoa-700/15 bg-cocoa-500/5 px-3 py-1 text-xs text-gray-700 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 dark:bg-white/[0.04]">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Research interests
        </p>

        <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          Building AI systems we can trust
        </h2>

        <p className="mt-2 text-xs leading-relaxed text-gray-600">
          I’m particularly interested in AI safety and LLM security,
          including prompt injection, model evaluation, and the challenges
          of making AI systems more reliable and secure.
        </p>

        <p className="mt-3 text-xs font-semibold text-cocoa-700">
          Interested in research and engineering opportunities in AI.
        </p>
      </div>
    </section>
  )
}
