import { notFound } from "next/navigation"
import { createOgImage } from "@/lib/og-image"
import { projects } from "@/components/sections/projects/projectData"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()

  return createOgImage({
    eyebrow: "Sarraverse · Project",
    title: project.title,
    description: project.description,
    tags: project.tags,
  })
}
