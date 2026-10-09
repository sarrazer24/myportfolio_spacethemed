import type { Metadata } from "next"
import SiteShell from "@/components/SiteShell"
import ProjectsSection from "@/components/sections/ProjectsSection"

export const metadata: Metadata = {
  title: "Projects - Khayra Sarra Zerguerras",
  description: "AI, data science, web, and mobile projects by Khayra Sarra Zerguerras.",
}

export default function ProjectsPage() {
  return <SiteShell><ProjectsSection /></SiteShell>
}
