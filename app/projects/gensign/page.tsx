import type { Metadata } from "next"
import Link from "next/link"
import SiteShell from "@/components/SiteShell"

export const metadata: Metadata = { title: "GenSign Case Study - Khayra Sarra Zerguerras", description: "GenSign case study." }

export default function GenSignPage() {
  return <SiteShell><main className="container mx-auto max-w-3xl px-6 pb-20 pt-32"><Link href="/projects" className="text-sm text-cocoa-400 hover:underline">← Back to projects</Link><h1 className="mb-10 mt-6 text-4xl font-bold text-gray-100">GenSign Case Study</h1><div className="space-y-8 text-gray-300"><section><h2 className="mb-2 text-2xl font-semibold text-cocoa-300">Problem</h2><p>TODO: Add the problem statement.</p></section><section><h2 className="mb-2 text-2xl font-semibold text-cocoa-300">Approach</h2><p>TODO: Add the technical approach.</p></section><section><h2 className="mb-2 text-2xl font-semibold text-cocoa-300">Results</h2><p>TODO: Add measurable results.</p></section><section><h2 className="mb-2 text-2xl font-semibold text-cocoa-300">What I learned</h2><p>TODO: Add lessons learned.</p></section></div></main></SiteShell>
}
