import Link from "next/link"
import { ArrowRight, Camera, Mail, Rocket } from "lucide-react"
import { siteConfig } from "@/config/site"
import { experience, researchInterests } from "@/lib/portfolio-data"
import { getPosts } from "@/lib/posts"

export default function HomeCompact() {
  const latestPost = getPosts()[0]

  return (
    <main className="container mx-auto flex max-w-6xl flex-col px-6 pb-12 pt-24">
      <section className="grid shrink-0 items-center gap-5 border-b border-cocoa-700/20 pb-5 md:grid-cols-[auto_1fr]">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg ring-2 ring-cocoa-500/50 dark:border-gray-800">
          <img
            src="/selfie.jpg"
            alt="Khayra Sarra Zerguerras"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
            <Rocket className="h-3.5 w-3.5" />
            AI & Data Science Engineer
          </p>
          <h1 className="text-3xl font-bold tracking-[-0.06em] text-gray-900 sm:text-4xl">
            Khayra Sarra Zerguerras
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            I build thoughtful systems at the intersection of AI, data, and human-centered design,
            with a strong interest in LLMs, NLP, and AI safety.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-cocoa-700/25 bg-cocoa-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-cocoa-700"
            >
              View projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="home-contact-button inline-flex items-center gap-2 border border-cocoa-700/25 bg-white px-3 py-2 text-xs font-semibold text-gray-800 transition-colors hover:border-cocoa-500 hover:text-cocoa-700"
            >
              <Mail className="h-3.5 w-3.5" />
              Get in touch
            </a>
            <a
              href="/KhayraSarraZerguerrasCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="home-cv-button inline-flex items-center gap-2 border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

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

      <section className="border-t border-cocoa-700/20 py-8">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
              Selected work
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-gray-900">AI, data, and dependable systems</h2>
          </div>
          <Link href="/projects" className="text-xs font-semibold text-cocoa-700 hover:text-cocoa-900">
            Explore all projects <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              title: "GenSign",
              description: "Research-oriented text-to-sign-language generation using NLP, diffusion models, cross-attention, and pose-based motion.",
              tags: "Python · PyTorch · NLP",
              href: "/projects/gensign",
            },
            {
              title: "Smart Notes Generator",
              description: "An AI application that turns educational content into structured notes and helps learners extract important information.",
              tags: "Python · LLM · Machine Learning",
              href: "https://github.com/sarrazer24/Smart-Notes-Generator",
            },
            {
              title: "What If? F1 Simulator",
              description: "A data science project using historical racing data, statistical analysis, simulation, and interactive visualizations.",
              tags: "Python · Statistics · Visualization",
              href: "https://github.com/sarrazer24",
            },
          ].map((project) => (
            <a
              key={project.title}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 transition-colors hover:border-cocoa-500/50 hover:bg-white/70 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
            >
              <h3 className="text-sm font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">{project.description}</p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-cocoa-600">
                {project.tags}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-4 border-t border-cocoa-700/20 py-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 dark:bg-white/[0.04]">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
            Technical toolkit
          </p>
          <p className="mt-2 text-xs leading-relaxed text-gray-600">
            A practical foundation spanning machine learning, data analysis, software engineering, and deployment.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Python", "PyTorch", "Hugging Face", "scikit-learn", "Pandas", "NLP",
              "LLMs", "Computer Vision", "SQL", "PostgreSQL", "TypeScript", "Next.js",
              "Docker", "Git", "AWS",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cocoa-700/15 bg-cocoa-500/5 px-3 py-1 text-xs text-gray-700 dark:text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-cocoa-700/15 bg-white/45 p-4 dark:bg-white/[0.04]">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
            Ideal internship direction
          </p>
          <h2 className="mt-2 text-lg font-semibold text-gray-900">
            AI and Data Science, with a focus on trustworthy technology
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-gray-600">
            I am especially interested in opportunities involving AI safety, model evaluation,
            cybersecurity, privacy, NLP, or reliable ML systems.
          </p>
          <p className="mt-3 text-xs font-semibold text-cocoa-700">
            Open to research, engineering, and applied data science internships.
          </p>
        </div>
      </section>

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
          {[
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

      <section className="grid shrink-0 gap-4 border-t border-cocoa-700/20 pt-4 md:grid-cols-[1fr_auto] md:items-end">
        <div className="min-w-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">
            Latest note
          </p>
          <h2 className="mt-1 truncate text-lg font-semibold text-gray-900">
            {latestPost?.title ?? "Writing on AI, engineering, and creative work"}
          </h2>
          <p className="mt-1 max-w-3xl truncate text-xs text-gray-600">
            {latestPost?.summary ?? "Thoughts on experiments, technical learning, and creative engineering."}
          </p>
        </div>
        <Link
          href={latestPost ? `/blog/${latestPost.slug}` : "/blog"}
          className="inline-flex items-center gap-2 text-xs font-semibold text-cocoa-700 hover:text-cocoa-900"
        >
          {latestPost ? "Read article" : "Explore blog"}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>
    </main>
  )
}
