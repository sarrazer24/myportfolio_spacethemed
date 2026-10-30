import type { Metadata } from "next";

import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { bloomAndCare } from "@/components/sections/projects/projectData";

export const metadata: Metadata = {
  title: "Bloom & Care - Khayra Sarra Zerguerras",
  description: bloomAndCare.description,
};

export default function BloomAndCarePage() {
  return <ProjectDetailView project={bloomAndCare} />;
}
