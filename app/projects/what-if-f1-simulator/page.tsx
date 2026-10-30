import type { Metadata } from "next";

import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { f1Simulator } from "@/components/sections/projects/projectData";

export const metadata: Metadata = {
  title: "What If? F1 Simulator - Khayra Sarra Zerguerras",
  description: f1Simulator.description,
};

export default function F1SimulatorPage() {
  return <ProjectDetailView project={f1Simulator} />;
}
