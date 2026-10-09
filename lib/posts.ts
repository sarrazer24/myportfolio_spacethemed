import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const DIR = path.join(process.cwd(), "content", "posts")

export const postCategories = ["All", "Tech & AI", "Photography", "Life & Vlogs"] as const
export type PostCategory = (typeof postCategories)[number]

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  category: Exclude<PostCategory, "All">
  tags: string[]
  platform: string
  externalUrl?: string
  content?: string
}

const registry: Omit<Post, "content">[] = [
  {
    slug: "the-average-of-two-signs-is-not-a-sign",
    title: "The Average of Two Signs Is Not a Sign: Building a Text-to-ASL Generator with Diffusion Models",
    summary: "How we built GenSign, an AI that turns text into American Sign Language video, and why averaging breaks sign language generation.",
    date: "2026-07-09",
    category: "Tech & AI",
    tags: ["Sign Language Generation", "ASL", "Diffusion Models", "GenSign"],
    platform: "Portfolio",
  },
  {
    slug: "white-box-testing-looking-inside",
    title: "White-Box Testing: Looking Inside the System",
    summary: "What actually happens behind the scenes of software testing? And why does this matter for AI systems?",
    date: "2026-10-06",
    category: "Tech & AI",
    tags: ["Software Testing", "LLMs", "AI Safety"],
    platform: "Substack",
    externalUrl: "https://sarrazer.substack.com/p/white-box-testing-looking-inside",
  },
]

function getContent(slug: string) {
  const file = path.join(DIR, `${slug}.mdx`)
  if (!fs.existsSync(file)) return undefined
  return matter(fs.readFileSync(file, "utf8")).content
}

export function getPosts(): Post[] {
  return registry
    .map((post) => ({ ...post, content: getContent(post.slug) }))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug)
}
