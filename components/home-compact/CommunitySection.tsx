export default function CommunitySection() {
  return (
    <section className="grid gap-4 border-t border-cocoa-700/20 py-8 md:grid-cols-2">
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
          Community and initiative
        </p>
        <h2 className="mt-1 text-lg font-semibold text-gray-900">Learning by building with others</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Alongside academic work, I have contributed to student communities and participated in
          Forsatic, AlphaAI, and DevFest Algiers 2024 hackathons.
        </p>
      </div>
      <div className="rounded-xl border-l-2 border-cocoa-500/40 bg-cocoa-500/5 p-4">
        <p className="text-xs font-semibold text-gray-900">What I bring to a team</p>
        <p className="mt-2 text-xs leading-relaxed text-gray-600">
          Curiosity, structured problem-solving, hands-on prototyping, clear communication, and
          a strong motivation to make intelligent systems useful, secure, and responsible.
        </p>
      </div>
    </section>
  )
}
