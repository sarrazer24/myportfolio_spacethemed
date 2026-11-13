import { createOgImage } from "@/lib/og-image"

export const runtime = "nodejs"
export const alt = "Contact Khayra Sarra Zerguerras"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return createOgImage({
    eyebrow: "Sarraverse · Contact",
    title: "Let's connect",
    description:
      "Get in touch about AI research, internship opportunities, and collaboration.",
    tags: ["AI Safety", "Research", "Collaboration"],
  })
}
