import type { Metadata } from "next";

import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { jobSkillsGapAnalysis } from "@/components/sections/projects/projectData";

export const metadata: Metadata = {
  title: "Job Skills Extraction & Gap Analysis - Khayra Sarra Zerguerras",
  description: jobSkillsGapAnalysis.description,
};

export default function JobSkillsGapAnalysisPage() {
  return <ProjectDetailView project={jobSkillsGapAnalysis} />;
}
