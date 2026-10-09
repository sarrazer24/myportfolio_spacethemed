"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Instagram, Github } from "lucide-react"
import { useState } from "react"
import { useRef } from "react"
import { siteConfig } from "@/config/site"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState({ name: false, email: false, message: false })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  const isEmpty = (field: string) => touched[field as keyof typeof touched] && !form[field as keyof typeof form].trim()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    setError(null)
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.")
      return
    }
    setLoading(true)
    setSuccess(false)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ name: "", email: "", message: "" })
        setTouched({ name: false, email: false, message: false })
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="relative px-6 pb-20 pt-32 md:pt-36"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-4xl">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">Let&apos;s connect</p>
        <h2 className="text-3xl font-bold tracking-[-0.04em] text-gray-900 md:text-4xl">Contact Me</h2>
        <p className="mb-10 mt-2 text-sm leading-relaxed text-gray-600">
          Open to AI, data science, AI safety, and security internship opportunities.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cocoa-400">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Open to PFE / Master 2 internship opportunities starting January 2027. I would be glad to discuss a research or engineering collaboration.
            </p>
            <div className="flex items-center space-x-6 mt-2">
              <a
                href={`mailto:${siteConfig.email}`}
                title="Send Email"
                className="hover:scale-110 transition-transform"
              >
                <Mail className="w-6 h-6 text-cocoa-400" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6 text-cocoa-400" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6 text-cocoa-400" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="hover:scale-110 transition-transform"
              >
                <Github className="w-6 h-6 text-gray-400" />
              </a>
              <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" title="TikTok" className="hover:scale-110 transition-transform"><span className="text-cocoa-400 text-xl">♪</span></a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" title="YouTube" className="hover:scale-110 transition-transform"><span className="text-cocoa-400 text-xl">▶</span></a>
              <a href={siteConfig.social.substack} target="_blank" rel="noopener noreferrer" title="Substack" className="hover:scale-110 transition-transform"><span className="text-cocoa-400 text-xl">S</span></a>
              <a
                href={siteConfig.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                title="Dribbble"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src="/svg/dribbble.svg"
                  alt="Dribbble"
                  className="w-6 h-6"
                  style={{ display: "inline-block" }}
                />
              </a>
            </div>
            <div className="mt-8 border border-cocoa-700/40 px-4 py-5 sm:px-5">
              <h4 className="mb-2 text-lg font-bold text-gray-900">Get in touch!</h4>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">Anything to share? Write to <a href={`mailto:${siteConfig.email}`} className="text-cocoa-600 hover:text-cocoa-800">{siteConfig.email}</a> or follow along through <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-cocoa-600 hover:text-cocoa-800">Instagram</a>.</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-cocoa-600">
                {([['YouTube', siteConfig.social.youtube], ['Instagram', siteConfig.social.instagram], ['TikTok', siteConfig.social.tiktok], ['Substack', siteConfig.social.substack]] as const).map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-cocoa-800">{label}</a>)}
              </div>
            </div>
          </div>
          <Card className="bg-gray-900/50 border-cocoa-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="bg-gray-800/50 border-gray-600 focus:border-cocoa-500 text-white placeholder-gray-400"
                />
                {isEmpty("name") && (
                  <div className="text-red-400 text-xs pl-1">Name is required.</div>
                )}
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="bg-gray-800/50 border-gray-600 focus:border-cocoa-500 text-white placeholder-gray-400"
                />
                {isEmpty("email") && (
                  <div className="text-red-400 text-xs pl-1">Email is required.</div>
                )}
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="bg-gray-800/50 border-gray-600 focus:border-cocoa-500 text-white placeholder-gray-400 resize-none"
                />
                {isEmpty("message") && (
                  <div className="text-red-400 text-xs pl-1">Message is required.</div>
                )}
                {error && (
                  <div className="text-red-400 text-center pt-2">{error}</div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cocoa-500 to-cocoa-500 hover:from-cocoa-400 hover:to-cocoa-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cocoa-500/25"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {success && (
                  <div className="text-green-400 text-center pt-2">
                    Your message has been sent!
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}