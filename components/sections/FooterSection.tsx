import { siteConfig } from "@/config/site"

export default function FooterSection() {
  return (
    <footer className="relative border-t border-gray-800 px-6 py-5">
      <div className="container mx-auto text-center">
        <p className="text-xs text-gray-500">© 2026 Sarra Zerguerras.</p>
        <div className="mt-2 flex justify-center gap-4 text-xs text-cocoa-600">
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  )
}