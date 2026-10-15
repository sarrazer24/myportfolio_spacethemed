import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredCertificates = [
  {
    title: "AI Ethics",
    issuer: "DataCamp",
    date: "2025",
    sortDate: "2025-01",
    href: "https://drive.google.com/file/d/1I_ndf2y9wREFyt4__DRLGigqqcdV-yWO/view?usp=sharing",
  },
  {
    title: "Large Language Models (LLMs) Concepts",
    issuer: "DataCamp",
    date: "2025",
    sortDate: "2025-01",
    href: "https://drive.google.com/file/d/12ZUc3AxCgFy6kkgJ2gbSZgUx8-otkK4Q/view?usp=sharing",
  },
  {
    title: "Understanding Machine Learning",
    issuer: "DataCamp",
    date: "2025",
    sortDate: "2025-01",
    href: "https://drive.google.com/file/d/1YehdBkgY34x-SLVCaEdgww2keRdYzMuB/view?usp=sharing",
  },
  {
    title: "AI Fundamentals",
    issuer: "DataCamp",
    date: "2025",
    sortDate: "2025-01",
    href: "https://drive.google.com/file/d/1t15qFlGGlPoo1alCxmiuSqAw678sVegd/view?usp=sharing",
  },
  {
    title: "Certified Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure",
    date: "October 2025",
    sortDate: "2025-10",
    href: "https://drive.google.com/file/d/1i0RhP9g1rVN92irfuKihPLw_2PIUcNli/view?usp=drive_link",
  },
]

export default function CertificatesSection() {
  return (
    <section className="border-t border-cocoa-700/20 py-8">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
            Continuous learning
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-gray-900">Featured credentials</h2>
        </div>
        <Link href="/certificates" className="text-xs font-semibold text-cocoa-700 hover:text-cocoa-900">
          View all certificates <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {featuredCertificates
          .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
          .slice(0, 4)
          .map(({ title, issuer, date, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 transition-colors hover:border-cocoa-500/50 hover:bg-white/70 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cocoa-600">{issuer} · {date}</p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-3 text-xs font-medium text-cocoa-700">View credential →</p>
            </a>
          ))}
      </div>
    </section>
  )
}
