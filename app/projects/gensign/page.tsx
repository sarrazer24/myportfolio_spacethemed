import type { Metadata } from "next";

import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { gensign } from "@/components/sections/projects/projectData";

export const metadata: Metadata = {
  title: "GenSign - Khayra Sarra Zerguerras",
  description: gensign.description,
};

export default function GenSignPage() {
  return <ProjectDetailView project={gensign} />;
}

