import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const DIR = path.join(process.cwd(), "content", "journal")

export type Entry = {
  slug: string
  title: string
  date: string
  type: string
  tags: string[]
  summary: string
  content: string
}

function readEntry(file: string): Entry {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8")
  const { data, content } = matter(raw)
  return {
    slug: file.replace(/\.mdx$/, ""),
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? ""),
    type: String(data.type ?? "note"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    summary: String(data.summary ?? ""),
    content,
  }
}

export function getEntries(): Entry[] {
  if (!fs.existsSync(DIR)) return []
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(readEntry)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getEntry(slug: string): Entry | undefined {
  return getEntries().find((e) => e.slug === slug)
}