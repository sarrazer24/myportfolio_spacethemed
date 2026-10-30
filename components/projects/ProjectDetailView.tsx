import Link from "next/link";

import SiteShell from "@/components/SiteShell";
import type { Project } from "@/components/sections/projects/data/types";

const defaultSections = (project: Project) => [
  {
    heading: "Problem",
    body: `This project focused on solving a real-world challenge around ${project.category.toLowerCase()} systems, combining user needs, technical constraints, and practical delivery requirements into a working product or research prototype.`,
  },
  {
    heading: "Approach",
    body: `I designed and built the solution using ${project.tags.join(", ")}, balancing product thinking, system architecture, and iterative experimentation to turn the idea into a usable outcome.`,
  },
  {
    heading: "Impact",
    body: "The result is a project that demonstrates applied software engineering, AI/data-driven problem solving, and a strong focus on user value, maintainability, and measurable outcomes.",
  },
];

export default function ProjectDetailView({ project }: { project: Project }) {
  const sections = project.detailSections ?? defaultSections(project);

  return (
    <SiteShell>
      <main className="container mx-auto max-w-4xl px-6 pb-20 pt-28 text-gray-100">
        <Link href="/projects" className="text-sm text-cocoa-400 hover:underline">
          ← Back to projects
        </Link>

        <div className="mt-8 rounded-2xl border border-cocoa-500/20 bg-gray-950/60 p-6 shadow-2xl shadow-cocoa-500/5">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cocoa-500/30 bg-cocoa-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-cocoa-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-cocoa-300">{project.subtitle}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cocoa-500/40 bg-cocoa-500/10 px-4 py-2 text-sm font-medium text-cocoa-200 transition-colors hover:bg-cocoa-500/20"
              >
                {link.label}
              </a>
            ))}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cocoa-500/40 bg-cocoa-500/10 px-4 py-2 text-sm font-medium text-cocoa-200 transition-colors hover:bg-cocoa-500/20"
            >
              View GitHub
            </a>
            <Link
              href="/projects"
              className="rounded-full border border-gray-700 bg-gray-900/70 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:border-gray-500"
            >
              Explore more projects
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading} className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
              <h2 className="mb-3 text-2xl font-semibold text-cocoa-300">
                {section.heading}
              </h2>
              <p className="leading-relaxed text-gray-300">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
