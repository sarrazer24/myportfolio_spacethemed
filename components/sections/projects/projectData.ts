export { accentStyles } from "./data/types";
export type { Project, ProjectCategory } from "./data/types";

export { gensign } from "./data/gensign";
export { smartNotesGenerator } from "./data/smartNotesGenerator";
export { aiColorization } from "./data/aiColorization";
export { lektura } from "./data/lektura";
export { f1Simulator } from "./data/f1Simulator";
export { bloomAndCare } from "./data/bloomAndCare";
export { educare } from "./data/educare";
export { arfa } from "./data/arfa";
export { jobSkillsGapAnalysis } from "./data/job-skills-gap-analysis";

import { aiColorization } from "./data/aiColorization";
import { arfa } from "./data/arfa";
import { bloomAndCare } from "./data/bloomAndCare";
import { educare } from "./data/educare";
import { f1Simulator } from "./data/f1Simulator";
import { gensign } from "./data/gensign";
import { jobSkillsGapAnalysis } from "./data/job-skills-gap-analysis";
import { lektura } from "./data/lektura";
import { smartNotesGenerator } from "./data/smartNotesGenerator";
import { deepGuard } from "./data/deepguard";

export const projects = [
  gensign,
  deepGuard,
  smartNotesGenerator,
  aiColorization,
  lektura,
  f1Simulator,
  jobSkillsGapAnalysis,
  bloomAndCare,
  educare,
  arfa,
];
