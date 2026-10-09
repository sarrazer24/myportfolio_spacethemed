import Link from "next/link"
import { getPosts } from "@/lib/posts"

export default function LatestBlogSection() {
  const posts = getPosts().slice(0, 3)
  return <section className="relative px-6 py-12"><div className="container mx-auto max-w-6xl"><div className="mb-6 flex items-end justify-between gap-4"><div><p className="mb-2 text-sm uppercase tracking-[0.25em] text-cocoa-400">Latest from the blog</p><h2 className="text-3xl font-bold text-gray-100 md:text-4xl">Recent posts</h2></div><Link href="/blog" className="text-sm font-semibold text-cocoa-400 hover:text-cocoa-300">View all posts →</Link></div><div className="grid gap-4 md:grid-cols-3">{posts.map((post) => <Link key={post.slug} href={post.content ? `/blog/${post.slug}` : post.externalUrl ?? "/blog"} target={post.content ? undefined : "_blank"} rel={post.content ? undefined : "noopener noreferrer"} className="rounded-lg border border-cocoa-500/20 bg-gray-950/50 p-4 transition-colors hover:border-cocoa-400/50"><p className="mb-2 text-xs text-cocoa-400">{post.category} · {post.date}</p><h3 className="mb-2 text-lg font-semibold text-gray-100">{post.title}</h3><p className="text-sm leading-relaxed text-gray-400">{post.summary}</p></Link>)}</div></div></section>
}
