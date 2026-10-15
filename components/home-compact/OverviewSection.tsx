import { Camera } from "lucide-react"
import { siteConfig } from "@/config/site"
import { experience, researchInterests } from "@/lib/portfolio-data"

export default function OverviewSection() {
  return (
    <section className="grid min-h-0 flex-1 gap-4 py-4 lg:grid-cols-[0.8fr_1.2fr_1fr]">
      <div className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 dark:bg-white/[0.04]">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Current focus
        </p>
        <div className="space-y-3 text-sm leading-relaxed text-gray-600">
          <p>AI systems, data-driven reasoning, and dependable product thinking.</p>
          <p>Exploring how machine learning can be useful, grounded, and ethically designed.</p>
        </div>
        <p className="mb-3 mt-7 text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Beyond engineering
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
          {[
            ["Instagram", siteConfig.social.instagram],
            ["TikTok", siteConfig.social.tiktok],
            ["YouTube", siteConfig.social.youtube],
            ["Substack", siteConfig.social.substack],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-700 transition-colors hover:text-cocoa-700 dark:text-gray-200"
            >
              <Camera className="h-3 w-3" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 dark:bg-white/[0.04]">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Experience snapshot
        </p>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {experience.map((item) => (
            <div key={`${item.organization}-${item.period}`} className="border-l border-cocoa-500/30 pl-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cocoa-600">
                {item.period}
              </p>
              <h2 className="mt-1 text-sm font-semibold text-gray-900">{item.title}</h2>
              <p className="text-xs text-gray-600">{item.organization}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 dark:bg-white/[0.04]">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Research interests
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {researchInterests.map((interest) => (
            <article key={interest.title} className="border-b border-cocoa-700/15 pb-2 last:border-b-0">
              <h3 className="text-sm font-semibold text-gray-900">{interest.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">{interest.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
