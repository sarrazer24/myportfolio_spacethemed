import type { Metadata } from "next";

import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { educare } from "@/components/sections/projects/projectData";

export const metadata: Metadata = {
  title: "Educare - Khayra Sarra Zerguerras",
  description: educare.description,
};

export default function EducarePage() {
  return <ProjectDetailView project={educare} />;
}
