import { Brain } from "lucide-react";

export type ProjectCategory = "AI" | "Web" | "Mobile";

export type ProjectDetailSection = {
  heading: string;
  body: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string | null;
  icon: typeof Brain;
  accent: "cocoa";
  featured: boolean;
  category: ProjectCategory;
  tags: string[];
  github: string;
  detailSections?: ProjectDetailSection[];
  links?: ProjectLink[];
};

export const accentStyles = {
  cocoa: {
    border: "hover:border-cocoa-400/50",
    title: "group-hover:text-cocoa-400",
    glow: "hover:shadow-cocoa-500/10",
    icon: "text-cocoa-400",
  },
} as const;
