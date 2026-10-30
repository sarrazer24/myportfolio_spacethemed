import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Project } from "./data/types";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const hasGithubLink = (project: Project) =>
  Boolean(project.github?.trim()) && project.github !== "#";

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const liveDemoLinks = project.links?.filter(
    (link) => link.label.toLowerCase() === "live demo",
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
      className="group border-b border-cocoa-700/20 py-5 transition-colors first:border-t hover:border-cocoa-500/40"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <Link
          href={`/projects/${project.slug}`}
          className="min-w-0 flex-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa-400/70"
        >
          <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-cocoa-700 dark:text-white dark:group-hover:text-cocoa-300">
            {project.title}
          </h3>
          <p className="mt-2 max-w-4xl text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-400">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.12em] text-gray-500">
            <span>{project.category}</span>
            <span>{project.subtitle}</span>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </Link>

        <div className="flex shrink-0 flex-wrap gap-2">
          {hasGithubLink(project) && (
            <Button
              size="sm"
              variant="outline"
              className="border-cocoa-700/25 text-cocoa-800 transition-colors hover:border-cocoa-500/50 hover:bg-cocoa-500/10 hover:text-cocoa-900 dark:text-cocoa-300 dark:hover:text-cocoa-200"
              asChild
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}

          {liveDemoLinks?.map((link) => (
            <Button
              key={link.href}
              size="sm"
              variant="outline"
              className="border-cocoa-700/25 text-cocoa-800 transition-colors hover:border-cocoa-500/50 hover:bg-cocoa-500/10 hover:text-cocoa-900 dark:text-cocoa-300 dark:hover:text-cocoa-200"
              asChild
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live demo
              </a>
            </Button>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
