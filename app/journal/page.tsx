import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/sections/Navbar"
import { getEntries } from "@/lib/journal"

export const metadata: Metadata = {
  title: "Journal - Sarra Zerguerras",
  description: "Paper notes, experiment logs, and project write-ups.",
}

export default function JournalPage() {
  const entries = getEntries()

  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-3xl px-6 pt-32 pb-20 text-gray-200">
        <h1 className="text-4xl font-bold mb-2">Journal</h1>
        <p className="text-gray-400 mb-10">
          Paper notes, experiment logs, and project write-ups.
        </p>

        {entries.length === 0 && <p>No entries yet.</p>}

        <ul className="space-y-8">
          {entries.map((e) => (
            <li key={e.slug} className="border-b border-cyan-500/20 pb-6">
              <p className="text-sm text-cyan-400">
                {e.date} · {e.type}
              </p>
              <Link href={`/journal/${e.slug}`}>
                <h2 className="text-2xl font-semibold hover:text-cyan-400 transition-colors">
                  {e.title}
                </h2>
              </Link>
              <p className="text-gray-400 mt-1">{e.summary}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}