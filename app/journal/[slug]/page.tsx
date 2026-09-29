import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import Navbar from "@/components/sections/Navbar"
import { getEntries, getEntry } from "@/lib/journal"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getEntries().map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = getEntry(slug)
  if (!entry) return {}
  return { title: `${entry.title} - Sarra Zerguerras`, description: entry.summary }
}

export default async function EntryPage({ params }: Props) {
  const { slug } = await params
  const entry = getEntry(slug)
  if (!entry) notFound()

  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-3xl px-6 pt-32 pb-20">
        <Link href="/journal" className="text-cyan-400 text-sm hover:underline">
          ← Back to journal
        </Link>
        <p className="text-sm text-cyan-400 mt-6">
          {entry.date} · {entry.type}
        </p>
        <h1 className="text-4xl font-bold text-gray-100 mt-1 mb-8">{entry.title}</h1>

        <article className="prose prose-invert prose-cyan max-w-none">
          <MDXRemote
            source={entry.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      </main>
    </>
  )
}