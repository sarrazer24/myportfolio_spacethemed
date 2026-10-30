import { ShieldCheck } from "lucide-react";

import type { Project } from "./types";

export const deepGuard: Project = {
  title: "DeepGuard",
  slug: "deepguard",
  subtitle: "Cybersecurity",
  description:
    "A machine learning system that classifies URLs as benign, phishing, malware, spam or defacement from 79 lexical features. We compared 11 algorithms across five scenarios and built a Flask API and web dashboard for scanning URLs.",
  image: null,
  icon: ShieldCheck,
  accent: "cocoa",
  featured: false,
  category: "AI",
  tags: ["Python", "Machine Learning", "Cybersecurity", "Scikit-learn", "XGBoost", "Flask"],
  github: "https://github.com/sarrazer24/url_detector",
  detailSections: [
    {
      heading: "Problem",
      body:
        "Malicious URLs are a main entry point for phishing, malware distribution, spam and defacement, and blacklists cannot keep up with newly created ones. We wanted a classifier that looks only at the structure of the URL string, with no blacklist lookup and no page fetching, and that tells the threat types apart rather than only flagging a URL as bad.",
    },
    {
      heading: "Approach",
      body:
        "This was a four-student Machine Learning and Cybersecurity project at ESI. My role was training the models.\n\nWe used a dataset derived from ISCX-URL2016, with 79 pre-extracted numeric lexical features: length features, special-character counts, word-based features and entropy. It is split into five scenarios:\n\n- All: a 5-class problem (Benign, Phishing, Malware, Spam, Defacement).\n- Phishing, Malware, Spam and Defacement: four binary problems, each Benign vs one threat.\n\nPreprocessing replaces infinite values with NaN, imputes with the median, standardizes with StandardScaler, and uses a stratified 80/20 train-test split with random_state=42. We compared 11 algorithms: Random Forest, XGBoost, LightGBM, Gradient Boosting, AdaBoost, Decision Tree, Logistic Regression, LinearSVC, KNN, Gaussian Naive Bayes and an MLP. Models were scored with weighted F1, false positive rate (FPR), ROC-AUC and confusion matrices, because accuracy alone is misleading on imbalanced security data.",
    },
    {
      heading: "Training",
      body:
        "I trained the models, and the pipeline fits 11 algorithms on each of the five scenarios, 55 models in total. The configurations we specified were:\n\n- Random Forest: 100 trees.\n- KNN: k=5 with Euclidean distance.\n- MLP: one hidden layer of 50 neurons, up to 500 iterations.\n- Parallel training with n_jobs=-1 where the model supports it.\n\nFeatures were standardized because the MLP, KNN, SVM and Logistic Regression are sensitive to scale. Trained models and the label encoder are saved with joblib.",
    },
    {
      heading: "Results",
      body:
        "All figures are test-set results from a single stratified 80/20 split (one run per model, no cross-validation).\n\nIn the 5-class scenario, LightGBM scored best with accuracy 0.9867, weighted F1 0.9867, FPR 0.0033 and ROC-AUC 0.9995. XGBoost followed at 0.9841 accuracy, then Random Forest at 0.9774 and the MLP at 0.9661. Gaussian Naive Bayes reached only 0.5700 accuracy and AdaBoost 0.7137.\n\nThe best model in each binary scenario:\n\n- Phishing: Random Forest, F1 0.9867, FPR 0.0134. This was the hardest binary scenario.\n- Malware: LightGBM, F1 0.9962, FPR 0.0038.\n- Spam: XGBoost, F1 1.0000, FPR 0.0000 on this split.\n- Defacement: LightGBM, F1 0.9994, FPR 0.0006.\n\nIn the Random Forest's Gini feature importances for the 5-class scenario, SymbolCount_Domain, ArgUrlRatio, NumberofDotsinURL, domain_token_count and avgdomaintokenlen ranked highest, though the top 15 were close (about 0.021 to 0.028). In feature-selection experiments (InfoGain and BestFirst, evaluated with a 100-tree Random Forest on a separate test set), we found that the feature count can sometimes drop from 79 to under 20 while accuracy stays above 95%.",
    },
    {
      heading: "Impact",
      body:
        "Beyond the benchmark, the project includes a working application. A Flask backend loads the saved imputer, scaler and a Random Forest or XGBoost model, and its /api/predict endpoint computes the 79 features from a raw URL and returns a class with a confidence probability. A single-page dashboard (HTML, CSS, JavaScript) lets an analyst scan a URL, see the predicted category with colour-coded alerts, and browse the Plotly visualizations generated during training.",
    },
    {
      heading: "Limitations and next steps",
      body:
        "These scores come from one dataset and one split, and a perfect Spam result on a single split should not be read as a guarantee on unseen traffic. We did not measure detection of previously unseen (zero-day) URLs, inference latency, or the accuracy of the app's own feature extraction on live URLs, since the reported metrics use the dataset's pre-extracted features. The dashboard is not hosted as a live demo yet.\n\nNext steps:\n\n- Sequence models (Bi-LSTM, Transformers) that read the URL as text instead of using hand-built features.\n- Active analysis that loads the page or runs its JavaScript in a sandbox.\n- Scheduled retraining on new data to handle drift in phishing techniques.",
    },
  ],
};