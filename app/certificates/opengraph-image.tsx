import { createOgImage } from "@/lib/og-image"

export const runtime = "nodejs"
export const alt = "AI, data science, and technology certificates"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return createOgImage({
    eyebrow: "Sarraverse · Certificates",
    title: "Learning and certifications",
    description:
      "Certifications in AI, data science, cloud, SQL, and responsible AI.",
    tags: ["AI", "Data Science", "Responsible AI"],
  })
}
