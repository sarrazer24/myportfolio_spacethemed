import { notFound } from "next/navigation"
import { createOgImage } from "@/lib/og-image"
import { getPost, getPosts } from "@/lib/posts"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function OpenGraphImage({ params }: Props) {
  const post = getPost((await params).slug)
  if (!post) notFound()

  return createOgImage({
    eyebrow: "Sarraverse · Research notes",
    title: post.title,
    description: post.summary,
    tags: post.tags,
  })
}
