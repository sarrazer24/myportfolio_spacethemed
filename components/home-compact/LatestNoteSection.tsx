import Link from "next/link"
import { ArrowRight } from "lucide-react"

type LatestPost = {
  slug: string
  title: string
  summary: string
}

type LatestNoteSectionProps = {
  latestPost?: LatestPost
}

export default function LatestNoteSection({ latestPost }: LatestNoteSectionProps) {
  return (
    <section className="grid shrink-0 gap-4 border-t border-cocoa-700/20 pt-4 md:grid-cols-[1fr_auto] md:items-end">
      <div className="min-w-0">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Latest note
        </p>
        <h2 className="mt-1 truncate text-lg font-semibold text-gray-900">
          {latestPost?.title ?? "Writing on AI, engineering, and creative work"}
        </h2>
        <p className="mt-1 max-w-3xl truncate text-xs text-gray-600">
          {latestPost?.summary ?? "Thoughts on experiments, technical learning, and creative engineering."}
        </p>
      </div>
      <Link
        href={latestPost ? `/blog/${latestPost.slug}` : "/blog"}
        className="inline-flex items-center gap-2 text-xs font-semibold text-cocoa-700 hover:text-cocoa-900"
      >
        {latestPost ? "Read article" : "Explore blog"}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </section>
  )
}
