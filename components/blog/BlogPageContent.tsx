import { getPosts } from "@/lib/posts"
import BlogCards from "@/components/blog/BlogCards"

export default function BlogPageContent() {
  const posts = getPosts()
  return (
    <main className="container mx-auto max-w-4xl px-6 pb-14 pt-24">
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">Writing and learning</p>
      <h1 className="text-3xl font-bold tracking-[-0.04em] text-gray-900">Blog</h1>
      <p className="mb-7 mt-2 text-xs tracking-wide text-gray-600 sm:text-sm">Thoughts on AI, engineering, creative work, and technology.</p>
      <BlogCards posts={posts} />
    </main>
  )
}
