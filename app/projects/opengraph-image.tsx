import { createOgImage } from "@/lib/og-image"

export const runtime = "nodejs"
export const alt = "Selected AI, data science, and software projects"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return createOgImage({
    eyebrow: "Sarraverse · Projects",
    title: "Selected projects",
    description:
      "AI, data science, and software engineering projects by Khayra Sarra Zerguerras.",
    tags: ["AI", "Data Science", "Software"],
  })
}
