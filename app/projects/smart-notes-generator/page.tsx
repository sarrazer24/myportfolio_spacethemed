import type { Metadata } from "next";

import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { smartNotesGenerator } from "@/components/sections/projects/projectData";

export const metadata: Metadata = {
  title: "Smart Notes Generator - Khayra Sarra Zerguerras",
  description: smartNotesGenerator.description,
};

export default function SmartNotesGeneratorPage() {
  return <ProjectDetailView project={smartNotesGenerator} />;
}
