"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Instagram, Github } from "lucide-react"
import { useState } from "react"
import { useRef } from "react"

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
      className="relative py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready to embark on a cosmic journey of collaboration? Whether you have a project idea, want to discuss
              technology, or just want to say hello, I'd love to hear from you!
            </p>
            <div className="flex items-center space-x-6 mt-2">
              <a
                href="mailto:ks.zerguerras@esi-sba.dz"
                title="Send Email"
                className="hover:scale-110 transition-transform"
              >
                <Mail className="w-6 h-6 text-cyan-400" />
              </a>
              <a
                href="https://linkedin.com/in/sarra-zerguerras-1b0978195"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6 text-purple-400" />
              </a>
              <a
                href="https://instagram.com/sarra.zerguerras"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6 text-pink-400" />
              </a>
              <a
                href="https://github.com/sarrazer24"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="hover:scale-110 transition-transform"
              >
                <Github className="w-6 h-6 text-gray-400" />
              </a>
              <a
                href="https://dribbble.com/zerguerras-khayra-sarra"
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
          </div>
          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="bg-gray-800/50 border-gray-600 focus:border-cyan-500 text-white placeholder-gray-400"
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
                  className="bg-gray-800/50 border-gray-600 focus:border-cyan-500 text-white placeholder-gray-400"
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
                  className="bg-gray-800/50 border-gray-600 focus:border-cyan-500 text-white placeholder-gray-400 resize-none"
                />
                {isEmpty("message") && (
                  <div className="text-red-400 text-xs pl-1">Message is required.</div>
                )}
                {error && (
                  <div className="text-red-400 text-center pt-2">{error}</div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
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