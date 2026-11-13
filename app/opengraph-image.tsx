import { createOgImage } from "@/lib/og-image"

export const runtime = "nodejs"
export const alt = "Khayra Sarra Zerguerras, AI & Data Science engineering student"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return createOgImage({
    eyebrow: "AI & Data Science Engineering Student",
    title: "Khayra Sarra Zerguerras",
    description:
      "Exploring trustworthy AI, LLM security, and the systems behind intelligent technology.",
  })
}
