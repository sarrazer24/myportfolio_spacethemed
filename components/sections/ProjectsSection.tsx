import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="relative py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
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
                Bloom & Care 
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
                  <a href="https://github.com/sarrazer24/bloom-care" target="_blank" rel="noopener noreferrer">
                    GitHub
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
                Happy Birthday Gift
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
                  <a href="https://github.com/sarrazer24/happy-birthday-app" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                  asChild
                >
                  <a href="https://happy-birthday-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Live Demo
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
                Educare
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
                  <a href="https://github.com/sarrazer24/educare" target="_blank" rel="noopener noreferrer">
                    GitHub
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
                7arfa
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
                  <a href="https://github.com/sarrazer24/7arfa" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}