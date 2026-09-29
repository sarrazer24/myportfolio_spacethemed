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

const SvgIcon = ({
  name,
  className,
  size = 64,
}: SvgIconProps) => (
  <img
    src={`/svg/${name}.svg`}
    alt={name}
    className={className}
    width={size}
    height={size}
    style={{
      objectFit: "contain",
      display: "inline-block",
    }}
    loading="lazy"
    onError={(e) => {
      (e.currentTarget as HTMLImageElement).src = "/svg/fallback.svg";
    }}
  />
);

// Skills grouped by their role
const skillCategories = [
  {
    title: "AI & Data",
    description: "The area I'm currently specializing in",
    skills: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "R" },
      { name: "PostgreSQL" },
    ],
  },
  {
    title: "Frontend",
    description: "Building interactive digital experiences",
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
    description: "Designing application logic and services",
    skills: [
      { name: "Django" },
      { name: "Node.js", label: "Node.js" },
      { name: "Express", label: "Express.js" },
      { name: "Spring", label: "Spring Boot" },
      { name: "Java" },
    ],
  },
  {
    title: "Mobile & Databases",
    description: "From mobile applications to data storage",
    skills: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
    ],
  },
  {
    title: "Tools & Cloud",
    description: "Development, deployment, and collaboration",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Postman" },
      { name: "Swagger" },
    ],
  },
  {
    title: "Design & Workflow",
    description: "Designing thoughtful user experiences",
    skills: [
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
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-3">
            My toolkit
          </p>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            A combination of AI and data science foundations, software
            engineering, and creative product development.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative rounded-2xl border border-gray-800/80 bg-gray-950/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-gray-900/50 hover:-translate-y-1"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.08,
              }}
            >
              {/* Decorative glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />

              <div className="relative">
                {/* Category title */}
                <div className="mb-5">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {category.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {category.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-800 bg-gray-900/60 hover:border-cyan-400/30 hover:bg-gray-800/70 transition-all duration-200"
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

        {/* Small closing statement */}
        <motion.p
          className="text-center text-sm text-gray-500 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Always learning, experimenting, and adding new tools to the stack.
        </motion.p>
      </div>
    </section>
  );
}