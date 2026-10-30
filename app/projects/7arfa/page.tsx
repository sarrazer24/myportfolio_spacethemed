import type { Metadata } from "next";

import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { arfa } from "@/components/sections/projects/projectData";

export const metadata: Metadata = {
  title: "7arfa - Khayra Sarra Zerguerras",
  description: arfa.description,
};

export default function ArfaPage() {
  return <ProjectDetailView project={arfa} />;
}
