import { Brain } from "lucide-react";

import type { Project } from "./types";

export const gensign: Project = {
  title: "GenSign",
  slug: "gensign",
  subtitle: "AI-Powered Sign Language Production",
  description:
    "A research-oriented AI system that transforms text into 3D sign-language motion sequences. The project combines NLP, diffusion models, cross-attention, and pose-based generation, with a Flutter application for interaction.",
  image: null,
  icon: Brain,
  accent: "cocoa",
  featured: true,
  category: "AI",
  tags: ["Python", "PyTorch", "Diffusion", "NLP", "T5", "Flutter"],
  github: "https://github.com/sarrazer24/sign-language-production",
};
