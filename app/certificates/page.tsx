import type { Metadata } from "next"
import SiteShell from "@/components/SiteShell"
import CertificatesSection from "@/components/sections/CertificatesSection"

export const metadata: Metadata = {
  title: "Certificates - Khayra Sarra Zerguerras",
  description: "AI, data science, cloud, SQL, and responsible AI certificates earned by Khayra Sarra Zerguerras.",
}

export default function CertificatesPage() {
  return <SiteShell><CertificatesSection /></SiteShell>
}
