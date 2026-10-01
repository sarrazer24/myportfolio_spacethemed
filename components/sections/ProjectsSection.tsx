"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Sparkles,
  Brain,
  Database,
  Smartphone,
  Code2,
} from "lucide-react";

const projects = [
  {
    title: "GenSign",
    subtitle: "AI-Powered Sign Language Production",
    description:
      "A research-oriented AI system that transforms text into 3D sign-language motion sequences. The project combines NLP, diffusion models, cross-attention, and pose-based generation, with a Flutter application for interaction.",
    image: null,
    icon: Brain,
    accent: "cyan",
    featured: true,
    tags: [
      "Python",
      "PyTorch",
      "Diffusion",
      "NLP",
      "T5",
      "Flutter",
    ],
    github:
      "https://github.com/sarrazer24/sign-language-production",
  },
  {
    title: "Smart Notes Generator",
    subtitle: "AI-Powered Note Generation",
    description:
      "An intelligent application that uses AI to transform educational content into structured notes, helping students extract and organize important information more efficiently.",
    image: null,
    icon: Sparkles,
    accent: "purple",
    featured: true,
    tags: [
      "Python",
      "AI",
      "NLP",
      "LLM",
      "Machine Learning",
    ],
    github:
      "https://github.com/sarrazer24/Smart-Notes-Generator",
  },
  {
    title: "AI Colorization",
    subtitle: "Computer Vision",
    description:
      "An AI-based image colorization project exploring computer vision techniques to transform grayscale images into colorized images using deep learning.",
    image: null,
    icon: Brain,
    accent: "pink",
    featured: true,
    tags: [
      "Python",
      "Computer Vision",
      "Deep Learning",
      "AI",
    ],
    github:
      "https://github.com/sarrazer24/AI_colorization",
  },
  {
    title: "Lektura",
    subtitle: "AI-Powered Reading Platform",
    description:
      "An AI-powered reading platform designed to help users discover, understand, and retain books through intelligent summaries, quizzes, and personalized learning features.",
    image: null,
    icon: Database,
    accent: "cyan",
    featured: true,
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "LLM",
      "NLP",
    ],
    github: "https://github.com/sarrazer24/lektura",
  },
  {
    title: "What If? F1 Simulator",
    subtitle: "Data Science & Simulation",
    description:
      "A counterfactual Formula 1 simulator exploring hypothetical race scenarios using historical racing data, statistical analysis, and interactive visualizations.",
    image: null,
    icon: Database,
    accent: "purple",
    featured: true,
    tags: [
      "Python",
      "Data Science",
      "Simulation",
      "Statistics",
      "Visualization",
    ],
    github: "#",
  },
  {
    title: "Bloom & Care",
    subtitle: "Full-Stack Management Platform",
    description:
      "A complete digital solution for managing daycare operations, including child registration, attendance, activity and meal planning, and parent communication.",
    image: "/Bloom_&_Care_logo.png",
    icon: Code2,
    accent: "cyan",
    featured: false,
    tags: [
      "Spring Boot",
      "React",
      "Tailwind CSS",
      "MySQL",
    ],
    github: "https://github.com/sarrazer24/bloom-care",
  },
  {
    title: "Educare",
    subtitle: "Healthcare Management Application",
    description:
      "A web and mobile application designed to digitalize medical services at ESI-SBA, with patient record management, secure access control, and REST APIs.",
    image: "/educare_logo.jpg",
    icon: Smartphone,
    accent: "purple",
    featured: false,
    tags: [
      "Node.js",
      "Flutter",
      "React",
      "REST APIs",
      "MySQL",
    ],
    github: "https://github.com/sarrazer24/educare",
  },
  {
    title: "7arfa",
    subtitle: "Local Services Mobile App",
    description:
      "A mobile application connecting users with local craftsmen, making it easier to discover professionals for repairs, construction, and maintenance services.",
    image: "/7arfa_logo.jpg",
    icon: Smartphone,
    accent: "pink",
    featured: false,
    tags: [
      "Flutter",
      "Dart",
      "Django",
      "SQLite",
    ],
    github: "https://github.com/sarrazer24/7arfa",
  },
];

const accentStyles = {
  cyan: {
    border: "hover:border-cyan-400/50",
    title: "group-hover:text-cyan-400",
    glow: "hover:shadow-cyan-500/10",
    icon: "text-cyan-400",
  },
  purple: {
    border: "hover:border-purple-400/50",
    title: "group-hover:text-purple-400",
    glow: "hover:shadow-purple-500/10",
    icon: "text-purple-400",
  },
  pink: {
    border: "hover:border-pink-400/50",
    title: "group-hover:text-pink-400",
    glow: "hover:shadow-pink-500/10",
    icon: "text-pink-400",
  },
};

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <motion.section
      id="projects"
      className="relative py-24 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Selected work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            A selection of AI, data science, and software engineering projects
            where I turn ideas into working systems.
          </p>
        </div>

        {/* Featured projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-7">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h3 className="text-2xl font-semibold text-gray-200">
              Featured Work
            </h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              const accent =
                accentStyles[
                  project.accent as keyof typeof accentStyles
                ];

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <Card
                    className={`group h-full bg-gray-900/50 border-gray-700/50 backdrop-blur-sm ${accent.border} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${accent.glow} overflow-hidden`}
                  >
                    {/* Project image */}
                    <div className="relative h-48 bg-gray-950/70 overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} logo`}
                          className="w-full h-full object-contain p-10 transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Icon
                            className={`w-16 h-16 ${accent.icon}`}
                          />
                        </div>
                      )}

                      {/* Featured label */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-950/80 border border-gray-700 text-gray-300 backdrop-blur-sm">
                          Featured
                        </span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle
                        className={`text-xl text-white ${accent.title} transition-colors`}
                      >
                        {project.title}
                      </CardTitle>

                      <p className={`text-sm ${accent.icon} font-medium`}>
                        {project.subtitle}
                      </p>

                      <CardDescription className="text-gray-400 leading-relaxed pt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-col h-full">
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-gray-800/80 text-gray-300 border border-gray-700/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 mt-auto">
                        {project.github !== "#" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                        )}

                        {project.title === "GenSign" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-500/40 text-purple-400 hover:bg-purple-500/10"
                            asChild
                          >
                            <a
                              href="#contact"
                              onClick={(e) => {
                                e.preventDefault();
                                document
                                  .getElementById("contact")
                                  ?.scrollIntoView({
                                    behavior: "smooth",
                                  });
                              }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Case Study
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Other projects */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <Code2 className="w-5 h-5 text-purple-400" />
            <h3 className="text-2xl font-semibold text-gray-200">
              Other Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => {
              const Icon = project.icon;
              const accent =
                accentStyles[
                  project.accent as keyof typeof accentStyles
                ];

              return (
                <Card
                  key={project.title}
                  className={`group bg-gray-900/40 border-gray-800/70 backdrop-blur-sm ${accent.border} transition-all duration-300 hover:-translate-y-1 ${accent.glow}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-xl bg-gray-950/80 flex items-center justify-center overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.title} logo`}
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <Icon className={`w-7 h-7 ${accent.icon}`} />
                        )}
                      </div>

                      <div>
                        <CardTitle
                          className={`text-lg text-white ${accent.title} transition-colors`}
                        >
                          {project.title}
                        </CardTitle>

                        <p className="text-xs text-gray-500 mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <CardDescription className="text-gray-400 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-gray-800 text-gray-400 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">
            More projects and experiments are available on my GitHub.
          </p>

          <Button
            variant="outline"
            className="border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 rounded-full px-6"
            asChild
          >
            <a
              href="https://github.com/sarrazer24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              Explore GitHub
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}