"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Instagram, Mail, ExternalLink, Code, Database, Cpu, Star, Rocket, Zap } from "lucide-react"

export default function SpacePortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Starfield Background */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Cosmic Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative group text-gray-300 hover:text-cyan-400 transition-all duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Sarra Zerguerras
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">Computer Science Student</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about exploring the infinite possibilities of technology, from artificial intelligence to web
              development. Currently navigating through the cosmos of code and innovation.
            </p>
          </div>

          <Button
            onClick={() => scrollToSection("projects")}
            className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            View My Projects
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="floating-element absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="floating-element absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1">
                  <img
                    src="/selfie.jpg"
                    alt="Sarra Zerguerras"
                    className="w-full h-full object-cover rounded-full border-4 border-gray-900"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-2xl font-bold text-cyan-400 mb-2">Hi 👋, I'm Sarra</p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Computer Engineering student at{" "}
                    <span className="text-purple-400 font-semibold">ESI SBA</span>.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Passionate about mobile development, backend logic, and elegant UI/UX.<br />
                    I'm currently working on a{" "}
                    <span className="text-purple-400 font-semibold">
                      Voice Emotion Recognition AI
                    </span>{" "}
                    — detecting human emotions through audio signals.<br />
                    I’m deepening my knowledge of AI/ML fundamentals, emotion analysis, and UI design using Tailwind CSS.<br />
                    I love building apps with{" "}
                    <span className="text-cyan-400 font-semibold">Flutter</span>,{" "}
                    <span className="text-cyan-400 font-semibold">Node.js</span>, and{" "}
                    <span className="text-cyan-400 font-semibold">MySQL</span> — with a touch of humor and lots of
                    chocolate 🍫.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                      Mobile Dev
                    </Badge>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                      Backend
                    </Badge>
                    <Badge variant="outline" className="border-pink-500/50 text-pink-400">
                      UI/UX
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                      AI/ML
                    </Badge>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                      Chocolate Lover
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bloom Care Backend */}
            <Card className="group bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <CardHeader>
                <div className="w-24 h-24 rounded-xl mb-4 flex items-center justify-center overflow-hidden group-hover:animate-pulse">
                  <img src="/Bloom_&_Care_logo.png" alt="Bloom & Care Logo" className="w-full h-full object-cover rounded-xl" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                  Bloom Care Platform
                </CardTitle>
                <CardDescription className="text-gray-400">
                  A complete digital solution for managing daycare operations: child registration, attendance tracking, activity and meal planning, and parent communication — all aimed at improving daily organization and ensuring children's well-being.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">Spring Boot</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">React</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">Tailwind CSS</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">CSS</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">MySQL (Aiven Cloud)</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    asChild
                  >
                    <a href="https://github.com/sarrazer24/Bloom-Care_backend" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Happy Birthday Asmae */}
            <Card className="group bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <CardHeader>
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-pink-200 to-pink-300 p-3 mb-4 flex items-center justify-center group-hover:animate-pulse text-6xl">
                  🎂
                </div>
                <CardTitle className="text-xl text-white group-hover:text-pink-400 transition-colors">
                  Happy Birthday Asmae
                </CardTitle>
                <CardDescription className="text-gray-400">
                  A fun and interactive birthday greeting web app.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">React</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">Tailwind CSS</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    asChild
                  >
                    <a href="https://github.com/sarrazer24/happy_birthday_asmae" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                    asChild
                  >
                    <a href="https://happy-birthday-asmae.onrender.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Educare Team Projects */}
            <Card className="group bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardHeader>
                <div className="w-24 h-24 rounded-xl mb-4 flex items-center justify-center overflow-hidden group-hover:animate-pulse">
                  <img src="/educare_logo.jpg" alt="Educare Logo" className="w-full h-full object-cover rounded-xl" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                  Educare Team Projects
                </CardTitle>
                <CardDescription className="text-gray-400">
                  A web application designed to digitalize the medical services at ESI-SBA, streamlining patient record management, minimizing human errors, ensuring data confidentiality through secure access control, and providing healthcare professionals with fast, reliable access to medical information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">Node.js (Backend)</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">Flutter & Dart (Mobile)</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">React</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">Tailwind CSS</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">REST APIs</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">MySQL (Aiven Cloud)</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    asChild
                  >
                    <a href="https://github.com/EducareEquipe1" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Team Repos
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 7arfa Mobile App */}
            <Card className="group bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardHeader>
                <div className="w-24 h-24 rounded-xl bg-white p-2 mb-4 flex items-center justify-center overflow-hidden group-hover:animate-pulse">
                  <img src="/7arfa_logo.jpg" alt="7arfa Logo" className="w-full h-full object-contain rounded" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                  7arfa Mobile App
                </CardTitle>
                <CardDescription className="text-gray-400">
                  A mobile application that connects users with local craftsmen, making it easier to find nearby professionals for repairs, construction, and maintenance services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">Flutter</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">Dart</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">Django</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">SQLite</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    asChild
                  >
                    <a href="https://github.com/riham-esi/2cp-project" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ...other projects... */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-cyan-400">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "React Router", "Next.js", "Vite", "Tailwind CSS"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-cyan-500/50 text-cyan-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Mobile - PURPLE */}
            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">Mobile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Dart", "Flutter"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-purple-500/50 text-purple-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Backend - PINK */}
            <Card className="bg-gray-900/50 border-pink-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-pink-400">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "Spring Boot", "Django", "JWT", "Nodemon"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-pink-500/50 text-pink-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Databases */}
            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-cyan-400">Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "MongoDB", "PostgreSQL"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-cyan-500/50 text-cyan-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* DevOps */}
            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Render", "Docker"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-purple-500/50 text-purple-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Languages */}
            <Card className="bg-gray-900/50 border-pink-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-pink-400">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "R", "LaTeX"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-pink-500/50 text-pink-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Tools */}
            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-cyan-400">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Gradle", "ESLint", "Swagger", "Postman"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-cyan-500/50 text-cyan-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Data */}
            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Pandas"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-purple-500/50 text-purple-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Design */}
            <Card className="bg-gray-900/50 border-pink-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-pink-400">Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Canva", "Dribbble"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-pink-500/50 text-pink-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Collaboration */}
            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-cyan-400">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Notion", "GitHub", "Git"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-cyan-500/50 text-cyan-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Networking */}
            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Cisco"].map(skill => (
                    <Badge key={skill} variant="outline" className="border-purple-500/50 text-purple-400">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to embark on a cosmic journey of collaboration? Whether you have a project idea, want to discuss
                technology, or just want to say hello, I'd love to hear from you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                  <span className="text-gray-300">ks.zerguerras@esi-sba.dz</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-6 h-6 text-purple-400 mr-4" />
                  <a href="https://linkedin.com/in/sarra-zerguerras-1b0978195" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">
                    linkedin.com/in/sarra-zerguerras-1b0978195
                  </a>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-6 h-6 text-pink-400 mr-4" />
                  <a
                    href="https://instagram.com/sarra.zerguerras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:underline"
                  >
                    instagram.com/sarra.zerguerras
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="w-6 h-6 text-gray-400 mr-4" />
                  <a href="https://github.com/sarrazer24" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">
                    github.com/sarrazer24
                  </a>
                </div>
              </div>
            </div>

            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-gray-800/50 border-gray-600 focus:border-cyan-500 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-gray-800/50 border-gray-600 focus:border-cyan-500 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-gray-800/50 border-gray-600 focus:border-cyan-500 text-white placeholder-gray-400 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Fact */}
      <section className="relative py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-lg text-cyan-400 font-semibold">
            ⚡ Fun fact: I debug better with chocolate 🍫 and a sense of humor 😄
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 Sarra Zerguerras. Crafted with 💜 in the digital cosmos.</p>
        </div>
      </footer>
    </div>
  )
}
