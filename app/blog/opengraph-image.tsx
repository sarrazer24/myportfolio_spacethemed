import { createOgImage } from "@/lib/og-image"

export const runtime = "nodejs"
export const alt = "AI, engineering, and creative work from Sarra Zerguerras"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return createOgImage({
    eyebrow: "Sarraverse · Blog",
    title: "Notes on AI and technology",
    description:
      "Research notes, experiments, and ideas on AI, engineering, and the questions that connect them.",
    tags: ["AI", "Engineering", "Research"],
  })
}
