"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiReactrouter,
    SiNextdotjs,
    SiVite,
    SiTailwindcss,
    SiDart,
    SiFlutter,
    SiNodedotjs,
    SiExpress,
    SiSpringboot,
    SiDjango,
    SiJsonwebtokens,
    SiNodemon,
    SiMysql,
    SiMongodb,
    SiPostgresql,
    SiAmazon,
    SiRender,
    SiDocker,
    SiPython,
    SiR,
    SiLatex,
    SiGradle,
    SiEslint,
    SiSwagger,
    SiPostman,
    SiPandas,
    SiCanva,
    SiDribbble,
    SiNotion,
    SiGithub,
    SiGit,
    SiCisco,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const FigmaIcon = (props: any) => (
  <svg viewBox="0 0 256 384" fill="none" className={props.className} width="1em" height="1em" {...props}>
    <rect x="0" y="0" width="128" height="128" rx="64" fill="#F24E1E"/>
    <rect x="128" y="0" width="128" height="128" rx="64" fill="#FF7262"/>
    <rect x="0" y="128" width="128" height="128" rx="64" fill="#A259FF"/>
    <rect x="128" y="128" width="128" height="128" rx="64" fill="#1ABCFE"/>
    <rect x="0" y="256" width="128" height="128" rx="64" fill="#0ACF83"/>
  </svg>
);

const skills = [
  // Frontend
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "React Router", icon: SiReactrouter, color: "#CA4245", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  // Mobile
  { name: "Dart", icon: SiDart, color: "#0175C2", category: "Mobile" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B", category: "Mobile" },
  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#000000", category: "Backend" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", category: "Backend" },
  { name: "Django", icon: SiDjango, color: "#092E20", category: "Backend" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#000000", category: "Backend" },
  { name: "Nodemon", icon: SiNodemon, color: "#76D04B", category: "Backend" },
  // Databases
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Databases" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Databases" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "Databases" },
  // DevOps
  { name: "AWS", icon: SiAmazon, color: "#FF9900", category: "DevOps" },
  { name: "Render", icon: SiRender, color: "#46E3B7", category: "DevOps" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "DevOps" },
  // Languages
  { name: "Java", icon: FaJava, color: "#007396", category: "Languages" },
  { name: "LaTeX", icon: SiLatex, color: "#008080", category: "Languages" },
  // Tools
  { name: "Gradle", icon: SiGradle, color: "#02303A", category: "Tools" },
  { name: "ESLint", icon: SiEslint, color: "#4B32C3", category: "Tools" },
  { name: "Swagger", icon: SiSwagger, color: "#85EA2D", category: "Tools" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools" },
  // Data
  { name: "Pandas", icon: SiPandas, color: "#150458", category: "Data" },
  // Design
  { name: "Figma", icon: FigmaIcon, color: "none", category: "Design" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC", category: "Design" },
  { name: "Dribbble", icon: SiDribbble, color: "#EA4C89", category: "Design" },
  // Collaboration
  { name: "Notion", icon: SiNotion, color: "#000000", category: "Collaboration" },
  { name: "GitHub", icon: SiGithub, color: "#181717", category: "Collaboration" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Collaboration" },
  // Networking
  { name: "Cisco", icon: SiCisco, color: "#1BA0D7", category: "Networking" },
];

const categories = [
  "Frontend",
  "Mobile",
  "Backend",
  "Databases",
  "DevOps",
  "Languages",
  "Tools",
  "Data",
  "Design",
  "Collaboration",
  "Networking",
];

export default function SkillsSection() {
  // Flatten skills for carousel
  const allSkills = skills.map((s) => ({
    ...s,
    key: `${s.category}-${s.name}`,
  }));

  return (
    <motion.section
      id="skills"
      className="relative py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Technical Skills
      </h2>
      {/* Carousel for desktop */}
      <div className="hidden sm:block space-y-8">
        {/* Row 1 */}
        <div className="relative flex justify-center">
          {/* Fading effect left */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-10 bg-gradient-to-r from-[#0C081B] via-[#0C081B]/95 via-60% to-transparent to-100%" />
          {/* Fading effect right */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-10 bg-gradient-to-l from-[#0C081B] via-[#0C081B]/95 via-60% to-transparent to-100%" />
          <div className="overflow-hidden w-full max-w-5xl mx-auto">
            <div className="flex animate-marquee gap-12">
              {allSkills
                .slice(0, Math.ceil(allSkills.length / 2))
                .concat(allSkills.slice(0, Math.ceil(allSkills.length / 2)))
                .map((skill, idx) => (
                  <div key={skill.key + idx} className="flex flex-col items-center w-28">
                    <skill.icon
                      title={skill.name}
                      className="w-12 h-12 bg-white rounded-lg shadow p-2 transition-transform hover:scale-110"
                      color={skill.color !== "none" ? skill.color : undefined}
                    />
                    <span className="mt-2 text-xs text-gray-400 text-center">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Row 2 (reverse direction) */}
        <div className="relative flex justify-center">
          {/* Fading effect left */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-10 bg-gradient-to-r from-[#0C081B] via-[#0C081B]/95 via-60% to-transparent to-100%" />
          {/* Fading effect right */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-10 bg-gradient-to-l from-[#0C081B] via-[#0C081B]/95 via-60% to-transparent to-100%" />
          <div className="overflow-hidden w-full max-w-5xl mx-auto">
            <div className="flex animate-marquee-reverse gap-12">
              {allSkills
                .slice(Math.ceil(allSkills.length / 2))
                .concat(allSkills.slice(Math.ceil(allSkills.length / 2)))
                .map((skill, idx) => (
                  <div key={skill.key + idx} className="flex flex-col items-center w-28">
                    <skill.icon
                      title={skill.name}
                      className="w-12 h-12 bg-white rounded-lg shadow p-2 transition-transform hover:scale-110"
                      color={skill.color !== "none" ? skill.color : undefined}
                    />
                    <span className="mt-2 text-xs text-gray-400 text-center">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* Grid for mobile */}
      <div className="grid grid-cols-3 gap-6 sm:hidden w-full mt-8">
        {allSkills.map((skill) => (
          <div key={skill.key} className="flex flex-col items-center p-4">
            <skill.icon
              title={skill.name}
              className="w-10 h-10 bg-white rounded-lg shadow transition-transform hover:scale-110"
              color={skill.color !== "none" ? skill.color : undefined}
            />
            <span className="mt-2 text-xs text-gray-400 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
      {/* Marquee Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }
      `}</style>
    </motion.section>
  );
}