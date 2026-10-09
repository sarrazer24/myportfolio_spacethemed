import type { Metadata } from "next"
import SiteShell from "@/components/SiteShell"
import BlogPageContent from "@/components/blog/BlogPageContent"

export const metadata: Metadata = {
  title: "Blog - Khayra Sarra Zerguerras",
  description: "Notes on AI, engineering, creative work, and the questions that connect them.",
}

export default function BlogPage() {
  return <SiteShell><BlogPageContent /></SiteShell>
}
