import { getPosts } from "@/lib/posts"
import HeroSection from "@/components/home-compact/HeroSection"
import OverviewSection from "@/components/home-compact/OverviewSection"
import ProjectsSection from "@/components/home-compact/ProjectsSection"
import ToolkitSection from "@/components/home-compact/ToolkitSection"
import CertificatesSection from "@/components/home-compact/CertificatesSection"
import CommunitySection from "@/components/home-compact/CommunitySection"
import LatestNoteSection from "@/components/home-compact/LatestNoteSection"

export default function HomeCompact() {
  const latestPost = getPosts()[0]

  return (
    <main className="container mx-auto flex max-w-6xl flex-col px-6 pb-12 pt-24">
      <HeroSection />
      <OverviewSection />
      <ProjectsSection />
      <ToolkitSection />
      <CertificatesSection />
      <CommunitySection />
      <LatestNoteSection latestPost={latestPost} />
    </main>
  )
}
