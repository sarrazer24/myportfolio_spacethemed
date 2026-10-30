import { Network } from "lucide-react";
import type { Project } from "./types";

export const jobSkillsGapAnalysis: Project = {
  title: "Job Skills Extraction & Gap Analysis",
  slug: "job-skills-gap-analysis",
  subtitle: "Unsupervised Learning & Data Mining",
  description:
    "A skills gap analyzer built on 2.88M merged job postings: association rule mining finds skills that co-occur and MiniBatch K-Means groups postings into job families. A Streamlit and FastAPI app turns these results into skill-gap and learning-path suggestions.",
  image: null,
  icon: Network,
  accent: "cocoa",
  featured: false,
  category: "AI",
  tags: [
    "Python",
    "Unsupervised Learning",
    "Association Rules",
    "Clustering",
    "Streamlit",
    "FastAPI",
  ],
  github: "https://github.com/sarrazer24/skills-gap-analyzer",
  detailSections: [
    {
      heading: "Problem",
      body: "Graduates and job seekers struggle to tell which skills a role requires, which skills tend to appear together, and what to learn first. Job postings come with no labels, so supervised learning does not apply and we approached it as knowledge discovery with unsupervised methods.",
    },
    {
      heading: "Approach",
      body: "This was a two-person project with Riham Messaoudi, and I worked across every stage of the pipeline alongside her.\n\nData: we merged four Kaggle datasets into one schema, keyed on job_link where available:\n- LinkedIn Jobs & Skills (1.3M records)\n- a Kaggle job dataset (800K)\n- HireMe Global (450K)\n- a skill taxonomy dataset (1K)\n\nCleaning dropped rows with no title, description and skills, normalized text (lowercase, no HTML or special characters), filtered titles under 5 characters and descriptions under 30, and deduplicated by job key and by title + company + description.\n\nSkill categories: a dictionary lookup against the taxonomy maps each parsed skill to a category. No supervised model is trained for this step.\n\nAssociation rules: three models, all with min support 0.01 and min confidence 0.4.\n- A1: skill-level rules (FP-Growth)\n- A2: category-level rules (Apriori)\n- A3: skills and categories combined (FP-Growth)\n\nClustering: each posting is a binary sparse vector over a 61,954-skill vocabulary (skills below 50 occurrences removed), clustered with MiniBatch K-Means. We also tried standard K-Means, Agglomerative clustering on a dense sample, and DBSCAN.\n\nApp: a Streamlit front end calls a FastAPI backend that loads the rules and clustering model and returns JSON.",
    },
    {
      heading: "Training",
      body: "MiniBatch K-Means (batch size 1,000, 3 initializations, 100 max iterations, seed 42) was fit on all 2,884,556 postings. We tried K = 20, 40, 60 and 80. These are in-sample clustering metrics with no held-out set, and silhouette was computed on a 5,000-job sample.\n\n- K = 20: silhouette −0.256, inertia 2.376e7\n- K = 40: silhouette −0.107, inertia 2.290e7\n- K = 60: silhouette −0.229, inertia 2.360e7\n- K = 80: silhouette −0.025, inertia 2.255e7\n\nK = 80 scored best on both metrics, but manual inspection of job titles and dominant skills showed overly fragmented clusters, so we chose K = 40.\n\nDBSCAN, tried on a 20,000-vector sample, labeled about 99% of jobs as noise and was dropped. Agglomerative clustering has quadratic cost and ran only on a dense sample; we did not report its silhouette scores.",
    },
    {
      heading: "Results",
      body: "Association rules (rule counts and ranges as reported; the number of transactions mined is not stated):\n- A1: 308 rules, support 0.0101–0.1013, confidence 0.4010–0.9297, lift 1.3813–41.6524\n- A2: 22 rules, support 0.0136–0.4745, confidence 0.4756–1.0000, lift 1.0017–1.2677\n- A3: 7,147 rules, support 0.0100–0.4748, confidence 0.4010–1.0000, lift 0.8483–41.6524\n\nWe selected A2 for the recommender because its rules were stable, interpretable and less sensitive to skill-naming noise, though its lift is close to 1. That choice rests on qualitative judgment, not a measured recommendation score. A1 showed the strongest skill-to-skill dependencies but was sensitive to naming variations, and A3 was too redundant to use without heavy filtering, so we kept both for analysis.\n\nClustering: all silhouette scores were negative, which indicates weak cluster separation. The final run requested 40 clusters and produced 38 non-empty ones, ranging from 5 to 856,670 postings (standard deviation 157,637).",
    },
    {
      heading: "Impact",
      body: "The app lets a user enter skills by picking from a list, uploading a CV, or describing their experience in free text, then choose a target role. It shows the required skills for that role and splits the user's skills into matching, missing and additional ones. It also suggests co-occurring skills from the A2 rules, proposes a learning order and lists similar jobs. The demo screenshot we captured exposes a small subset (44 skills and 10 job titles), not the full vocabulary. We did not run a user study or measure recommendation quality.",
    },
    {
      heading: "Limitations and next steps",
      body: "- Weak clusters: negative silhouette scores and a highly unbalanced size distribution mean the clusters should be read as exploratory groupings, not validated job families.\n- No end-to-end evaluation of the gap analysis, learning paths or recommendations.\n- Skills come from the source datasets' skill fields and the taxonomy lookup. We did not quantify its coverage or accuracy, and we did not build a skill-extraction model.\n- A2 rules have lift between 1.0017 and 1.2677, so their association strength is modest.\n- No public deployment or live demo link.\n\nNatural next steps are validating recommendations against held-out postings, reducing vector dimensionality before clustering, and measuring how well the taxonomy covers the extracted skills.",
    },
  ],
};