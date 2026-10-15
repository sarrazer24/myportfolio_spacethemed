import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredProjects = [
  {
    title: "GenSign",
    description: "Research-oriented text-to-sign-language generation using NLP, diffusion models, cross-attention, and pose-based motion.",
    tags: "Python · PyTorch · NLP",
    href: "/projects/gensign",
  },
  {
    title: "Smart Notes Generator",
    description: "An AI application that turns educational content into structured notes and helps learners extract important information.",
    tags: "Python · LLM · Machine Learning",
    href: "https://github.com/sarrazer24/Smart-Notes-Generator",
  },
  {
    title: "What If? F1 Simulator",
    description: "A data science project using historical racing data, statistical analysis, simulation, and interactive visualizations.",
    tags: "Python · Statistics · Visualization",
    href: "https://github.com/sarrazer24",
  },
]

export default function ProjectsSection() {
  return (
    <section className="border-t border-cocoa-700/20 py-8">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
            Selected work
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-gray-900">AI, data, and dependable systems</h2>
        </div>
        <Link href="/projects" className="text-xs font-semibold text-cocoa-700 hover:text-cocoa-900">
          Explore all projects <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target={project.href.startsWith("http") ? "_blank" : undefined}
            rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 transition-colors hover:border-cocoa-500/50 hover:bg-white/70 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
          >
            <h3 className="text-sm font-semibold text-gray-900">{project.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-600">{project.description}</p>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-cocoa-600">
              {project.tags}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
