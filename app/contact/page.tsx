import type { Metadata } from "next"
import SiteShell from "@/components/SiteShell"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = {
  title: "Contact - Khayra Sarra Zerguerras",
  description: "Get in touch with Khayra Sarra Zerguerras about internship opportunities and collaboration.",
}

export default function ContactPage() {
  return <SiteShell><ContactSection /></SiteShell>
}
