"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

// Helper SVG Icon component with types
interface SvgIconProps {
  name: string;
  className?: string;
  size?: number;
}
const SvgIcon = ({ name, className, size = 64 }: SvgIconProps) => (
  <img
    src={`/svg/${name}.svg`}
    alt={name}
    className={className}
    width={size}
    height={size}
    style={{ objectFit: 'contain', display: 'inline-block' }}
    loading="lazy"
    onError={(e) => {
      (e.currentTarget as HTMLImageElement).src = "/svg/fallback.svg";
    }}
  />
);

const skills = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js", label: "Next.js" },
  { name: "Vite.js", label: "Vite" },
  { name: "Tailwind CSS", label: "Tailwind CSS" },
  { name: "Dart" },
  { name: "Flutter" },
  { name: "Node.js", label: "Node.js" },
  { name: "Express", label: "Express.js" },
  { name: "Spring", label: "Spring Boot" },
  { name: "Django" },
  { name: "Nodemon" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "AWS" },
  { name: "Docker" },
  { name: "Java" },
  { name: "Python" },
  { name: "R" },
  { name: "LaTeX" },
  { name: "Gradle" },
  { name: "ESLint" },
  { name: "Swagger" },
  { name: "Postman" },
  { name: "Pandas" },
  { name: "Figma" },
  { name: "Canva" },
  { name: "Dribbble" },
  { name: "Notion" },
  { name: "GitHub" },
  { name: "Git" },
  { name: "Cisco" },
];

// Split skills into two roughly equal rows for desktop
const midpoint = Math.ceil(skills.length / 2);
const row1Skills = skills.slice(0, midpoint);
const row2Skills = skills.slice(midpoint);

export default function SkillsSection() {
  return (
    <section
      className={`${styles.appContainer} px-4 md:px-12 lg:px-24 xl:px-32 py-16`}
      style={{ boxSizing: "border-box" }}
    >
      <div className={styles.wrapper}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        {/* Desktop Marquee */}
        <div className="hidden sm:block w-full">
          {/* Row 1 */}
          <div className="flex justify-center">
            <div className={styles.marquee + " max-w-6xl w-full"}>
              <div className={styles.marqueeGroup}>
                {row1Skills.map((skill) => (
                  <div className={styles.imageGroup} key={skill.name}>
                    <SvgIcon name={skill.name} className={styles.image} size={64} />
                  </div>
                ))}
              </div>
              <div className={styles.marqueeGroup}>
                {row1Skills.map((skill) => (
                  <div className={styles.imageGroup} key={skill.name + "-2"}>
                    <SvgIcon name={skill.name} className={styles.image} size={64} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex justify-center mt-2">
            <div className={styles.marquee + " max-w-6xl w-full"}>
              <div className={styles.marqueeGroup2}>
                {row2Skills.map((skill) => (
                  <div className={styles.imageGroup} key={skill.name}>
                    <SvgIcon name={skill.name} className={styles.image} size={64} />
                  </div>
                ))}
              </div>
              <div className={styles.marqueeGroup2}>
                {row2Skills.map((skill) => (
                  <div className={styles.imageGroup} key={skill.name + "-2"}>
                    <SvgIcon name={skill.name} className={styles.image} size={64} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Grid */}
        <div className="grid grid-cols-3 sm:hidden w-full">
          {skills.map((skill) => (
            <div key={skill.name} className="flex justify-center items-center p-4">
              <SvgIcon name={skill.name} className="w-11 h-11 object-contain" size={44} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}