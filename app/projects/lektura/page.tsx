import type { Metadata } from "next";

import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { lektura } from "@/components/sections/projects/projectData";

export const metadata: Metadata = {
  title: "Lektura - Khayra Sarra Zerguerras",
  description: lektura.description,
};

export default function LekturaPage() {
  return <ProjectDetailView project={lektura} />;
}
