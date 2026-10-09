import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import SiteShell from "@/components/SiteShell"
import { getPost, getPosts } from "@/lib/posts"

export function generateStaticParams() { return getPosts().filter((post) => post.content).map((post) => ({ slug: post.slug })) }

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug)
  return post ? { title: `${post.title} - Khayra Sarra Zerguerras`, description: post.summary } : {}
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug)
  if (!post?.content) notFound()
  return <SiteShell><main className="container mx-auto max-w-3xl px-6 pb-20 pt-32"><Link href="/blog" className="text-sm text-cocoa-400 hover:underline">← Back to blog</Link><p className="mt-6 text-sm text-cocoa-400">{post.date} · {post.category}</p><h1 className="mb-8 mt-1 text-4xl font-bold text-gray-100">{post.title}</h1><article className="blog-post prose prose-stone max-w-none dark:prose-invert"><MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} /></article>{post.externalUrl && <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block text-cocoa-400 hover:underline">Also on Substack →</a>}</main></SiteShell>
}
