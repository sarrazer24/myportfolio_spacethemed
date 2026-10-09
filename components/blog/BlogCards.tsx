"use client"

import Link from "next/link"
import { useState } from "react"
import { ExternalLink, Search } from "lucide-react"
import type { Post, PostCategory } from "@/lib/posts"

const postCategories = ["All", "Tech & AI", "Photography", "Life & Vlogs"] as const

function PostCard({ post }: { post: Post }) {
  const content = (
    <article className="group border-b border-cocoa-700/20 py-5 transition-colors first:border-t">
      <h2 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-cocoa-700">{post.title}</h2>
      <p className="mt-2 max-w-4xl text-xs leading-relaxed text-gray-600 sm:text-sm">{post.summary}</p>
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.12em] text-gray-500">
        <span>{post.date}</span>
        <span>{post.category}</span>
        {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <p className="mt-2 text-xs font-medium text-cocoa-500">
        {post.content ? "Read article" : `Read on ${post.platform}`}
        {!post.content && <ExternalLink className="ml-2 inline h-4 w-4" />}
      </p>
    </article>
  )

  return post.content ? <Link href={`/blog/${post.slug}`} className="block h-full">{content}</Link> : <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="block h-full">{content}</a>
}

export default function BlogCards({ posts }: { posts: Post[] }) {
  const [category, setCategory] = useState<PostCategory>("All")
  const [query, setQuery] = useState("")
  const filtered = posts.filter((post) => {
    const matchesCategory = category === "All" || post.category === category
    const searchable = [post.title, post.summary, post.category, ...post.tags].join(" ").toLowerCase()
    return matchesCategory && searchable.includes(query.toLowerCase().trim())
  })

  return (
    <>
      <label className="mb-5 flex items-center gap-2 border-b border-cocoa-700/20 pb-3 text-gray-500">
        <Search className="h-4 w-4" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search posts, topics, or tags..."
          aria-label="Search blog posts"
          className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500 dark:text-white"
        />
      </label>
      <div className="mb-7 flex flex-wrap gap-x-5 gap-y-2 border-b border-cocoa-700/20 pb-3">
        {postCategories.map((item) => (
          <button key={item} onClick={() => setCategory(item)} className={`text-xs transition-colors ${category === item ? "font-semibold text-cocoa-700 underline underline-offset-4" : "text-gray-500 hover:text-cocoa-600"}`}>
            {item}
          </button>
        ))}
      </div>
      {filtered.length > 0 ? <div>{filtered.map((post) => <PostCard key={post.slug} post={post} />)}</div> : <p className="border-b border-t border-cocoa-500/25 py-8 text-gray-500">No posts match your search.</p>}
      {posts.length === 1 && <p className="mt-10 border-t border-cocoa-500/20 pt-6 text-center text-gray-500">More posts coming soon.</p>}
    </>
  )
}
