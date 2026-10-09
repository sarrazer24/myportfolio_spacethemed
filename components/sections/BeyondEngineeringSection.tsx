import { Camera, Instagram, Music2, PenLine, Youtube } from "lucide-react"
import { siteConfig } from "@/config/site"

const links = [
  ["Instagram", siteConfig.social.instagram, Instagram],
  ["TikTok", siteConfig.social.tiktok, Music2],
  ["YouTube", siteConfig.social.youtube, Youtube],
  ["Substack", siteConfig.social.substack, PenLine],
] as const

export default function BeyondEngineeringSection() {
  return <section className="relative px-6 py-12"><div className="container mx-auto max-w-6xl"><div className="grid gap-6 md:grid-cols-[1fr_1.3fr] md:items-center"><div><Camera className="mb-4 h-8 w-8 text-cocoa-400" /><p className="mb-2 text-sm uppercase tracking-[0.25em] text-cocoa-400">Beyond engineering</p><h2 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">The creative side of the signal</h2></div><div><p className="mb-5 text-base leading-relaxed text-gray-300">Photography, content creation, writing, and occasional vlogs are part of how I observe the world and communicate ideas. You can find that work across these spaces.</p><div className="flex flex-wrap gap-2">{links.map(([label, href, Icon]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:border-cocoa-400/50 hover:text-cocoa-300"><Icon className="h-4 w-4" />{label}</a>)}</div></div></div></div></section>
}
