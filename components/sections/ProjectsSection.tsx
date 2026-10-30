"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import { ProjectCard } from "./projects/ProjectCard";
import { type ProjectCategory, projects } from "./projects/projectData";

export default function ProjectsSection() {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [query, setQuery] = useState("");

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects
      .filter((project) => {
        const matchesCategory = category === "All" || project.category === category;
        if (!matchesCategory) {
          return false;
        }

        if (!normalizedQuery) {
          return true;
        }

        const searchable = [
          project.title,
          project.subtitle,
          project.description,
          project.category,
          ...project.tags,
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(normalizedQuery);
      })
      .sort((first, second) => Number(second.featured) - Number(first.featured));
  }, [category, query]);

  return (
    <motion.section
      id="projects"
      className="relative px-6 py-20 sm:py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 border-b border-cocoa-700/15 pb-6 sm:mb-10">
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-gray-900 md:text-4xl dark:text-white">
            Projects
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            AI, data science, and software engineering projects, ordered by importance.
          </p>

          <label className="mt-6 flex max-w-xl items-center gap-3 rounded-xl border border-cocoa-700/15 bg-white/50 px-4 py-3 text-gray-500 transition-colors focus-within:border-cocoa-500/50 focus-within:ring-2 focus-within:ring-cocoa-500/10 dark:bg-white/[0.04]">
            <Search className="h-4 w-4 shrink-0 text-cocoa-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects, technologies, or topics..."
              aria-label="Search projects"
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500 dark:text-white"
            />
          </label>

          <div className="mt-5 flex flex-wrap gap-2" aria-label="Filter projects by category">
            {(["All", "AI", "Web", "Mobile"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                  category === item
                    ? "border-cocoa-500/40 bg-cocoa-500/10 font-semibold text-cocoa-800 dark:text-cocoa-300"
                    : "border-transparent text-gray-500 hover:border-cocoa-700/15 hover:bg-white/50 hover:text-cocoa-700 dark:hover:bg-white/[0.04] dark:hover:text-cocoa-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        {visibleProjects.length === 0 && (
          <p className="rounded-2xl border border-cocoa-700/15 bg-white/40 px-6 py-10 text-center text-sm text-gray-600 dark:bg-white/[0.04] dark:text-gray-400">
            No projects match your search.
          </p>
        )}
      </div>
    </motion.section>
  );
}
