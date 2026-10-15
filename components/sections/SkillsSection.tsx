"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

// Helper SVG Icon component
interface SvgIconProps {
  name: string;
  className?: string;
  size?: number;
}

const SvgIcon = ({ name, className, size = 64 }: SvgIconProps) => (
  <img
    src={`/svg/${name}.svg`}
    alt=""
    aria-hidden="true"
    className={className}
    width={size}
    height={size}
    style={{ objectFit: "contain", display: "inline-block" }}
    loading="lazy"
    onError={(e) => {
      const image = e.currentTarget;
      if (image.dataset.fallback) return;
      image.dataset.fallback = "true";
      image.src = "/svg/fallback.svg";
    }}
  />
);

// Skills grouped by their role
const skillCategories = [
  {
    title: "AI & Machine Learning",
    description: "Building and evaluating intelligent systems",
    skills: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "Pandas" },
      { name: "Transformers", label: "Hugging Face / Transformers" },
      { name: "scikit-learn", label: "scikit-learn" },
      { name: "R" },
    ],
  },
  {
    title: "LLMs & AI Security",
    description: "Exploring reliable and secure AI systems",
    skills: [
      { name: "Python" },
      { name: "OpenAI", label: "OpenAI API" },
      { name: "pytest", label: "pytest" },
      { name: "Pydantic" },
      { name: "HTTPX" },
      { name: "BeautifulSoup", label: "Beautiful Soup" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Building responsive, interactive experiences",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js", label: "Next.js" },
      { name: "Tailwind CSS", label: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Developing application logic and services",
    skills: [
      { name: "Django" },
      { name: "Node.js", label: "Node.js" },
      { name: "Express", label: "Express.js" },
      { name: "Spring", label: "Spring Boot" },
      { name: "Java" },
      { name: "Postman" },
      { name: "Swagger" },
    ],
  },
  {
    title: "Databases & Cloud",
    description: "Managing data and development environments",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    title: "Mobile, Design & Workflow",
    description: "From mobile applications to visual communication",
    skills: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Figma" },
      { name: "Canva" },
      { name: "Notion" },
      { name: "LaTeX" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className={`${styles.appContainer} px-4 md:px-12 lg:px-24 xl:px-32 py-20`}
      style={{ boxSizing: "border-box" }}
    >
      <div className={styles.wrapper}>
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-cocoa-400 mb-3">
            My toolkit
          </p>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cocoa-400 via-cocoa-400 to-cocoa-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            From machine learning and deep learning to software engineering,
            I enjoy building, testing, and understanding intelligent systems.
            I am particularly interested in the security and reliability of
            large language models.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative rounded-2xl border border-gray-800/80 bg-gray-950/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cocoa-400/30 hover:bg-gray-900/50 hover:-translate-y-1"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.08,
              }}
            >
              {/* Decorative glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cocoa-500/0 via-cocoa-500/0 to-cocoa-500/0 group-hover:from-cocoa-500/10 group-hover:via-cocoa-500/10 group-hover:to-cocoa-500/10 transition-all duration-500 pointer-events-none" />

              <div className="relative">
                <div className="mb-5">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {category.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-800 bg-gray-900/60 hover:border-cocoa-400/30 hover:bg-gray-800/70 transition-all duration-200"
                      title={skill.label || skill.name}
                    >
                      <SvgIcon
                        name={skill.name}
                        className="w-7 h-7 object-contain"
                        size={28}
                      />

                      <span className="text-sm text-gray-300 whitespace-nowrap">
                        {skill.label || skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-gray-500 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Continuously learning through coursework, research, and hands-on projects.
        </motion.p>
      </div>
    </section>
  );
}