import type { Metadata } from "next";

import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { aiColorization } from "@/components/sections/projects/projectData";

export const metadata: Metadata = {
  title: "AI Colorization - Khayra Sarra Zerguerras",
  description: aiColorization.description,
};

export default function AiColorizationPage() {
  return <ProjectDetailView project={aiColorization} />;
}
