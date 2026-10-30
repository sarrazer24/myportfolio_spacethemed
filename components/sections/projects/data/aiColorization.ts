import { Brain } from "lucide-react";

import type { Project } from "./types";

export const aiColorization: Project = {
  title: "AI Colorization",
  slug: "ai-colorization",
  subtitle: "Computer Vision",
  description:
    "A Deep Learning course project that explores conditional GANs for automatic grayscale-to-color image translation using the COCO dataset.",
  image: null,
  icon: Brain,
  accent: "cocoa",
  featured: true,
  category: "AI",
  tags: ["Python", "Computer Vision", "Deep Learning", "GANs", "PyTorch"],
  github: "https://github.com/Amina212004/AI_colorization",
  links: [
    { label: "Live demo", href: "https://aicolorization.streamlit.app/" },
    { label: "Model weights", href: "https://huggingface.co/amelakh/best_cgan_V1" },
  ],
  detailSections: [
    {
      heading: "Problem",
      body:
        "Image colorization is ill-posed: a single grayscale image can correspond to many plausible colorizations, so a model has to infer likely colors rather than recover one correct answer. The goal was to keep the scene's structure intact while producing vivid, believable color, training only on ordinary color photos converted to grayscale, with no manual color annotation.",
    },
    {
      heading: "Approach",
      body:
        "As part of a four-student Deep Learning project, we trained conditional GANs in PyTorch on COCO 2017, resized to 256×256. My role covered fine-tuning and training the models and fixing the dataset. A random 8,000-image subset (seed 42) gave 7,000 training, 500 validation, and 500 test images, and the third model used 8,000 training images. The grayscale image is the generator's input, the original RGB is the target, and the discriminator sees the grayscale and color images together. A learned adversarial loss gives sharper results than regression alone, which tends to look desaturated or blurry.\n\nWe compared three variants:\n\n- Model 1: A UNet generator (16.66M parameters) with skip connections and a global discriminator.\n- Model 2: A ResUNet generator (70.05M parameters) with residual blocks and CBAM attention, against a spectral-normalized PatchGAN discriminator.\n- Model 3: The Model 1 architecture trained on 1,000 more images, to isolate the effect of data scale.",
    },
    {
      heading: "Training",
      body:
        "I ran and tuned the training for all three models. The generator loss combined adversarial BCE with an L1 reconstruction term weighted ×10, and a ConvNeXt perceptual loss was implemented but left disabled. Training used AdamW (learning rate 2×10⁻⁴ for both networks), batch size 32, up to 30 epochs, ReduceLROnPlateau scheduling and early stopping on validation generator loss.",
    },
    {
      heading: "Results",
      body:
        "Model 1 reached a best validation generator loss of 1.9924 at epoch 9 and stayed stable. Model 2 reached 1.7926 at epoch 1, but then the discriminator became too strong: discriminator loss fell from about 0.66 to 0.05–0.15 while generator loss rose above 10, and the output showed visible artifacts such as cyan patches. The report attributes this to spectral normalization over-constraining the discriminator, PatchGAN giving it more to latch onto, and equal learning rates. Model 3 reached 1.9620 at epoch 2, a 1.5% improvement from 14% more data, suggesting diminishing returns for this architecture. Overall, Model 2 was the lowest-loss model by a narrow margin, but Model 1 was chosen because it was stable, competitive, and lightweight.",
    },
    {
      heading: "Impact",
      body:
        "We deployed Model 1 because it was stable, competitive and light enough for fast inference. It is live as a Streamlit app where a user uploads a grayscale image and gets a colorized result back, with the weights hosted on Hugging Face. The result shows that a stable, lightweight architecture can be worth more than a lower-loss but brittle one.",
    },
    {
      heading: "Limitations and next steps",
      body:
        "Evaluation used loss values and visual inspection only, with no PSNR, SSIM or FID yet. The models do not understand objects explicitly, and training on COCO only may not transfer to medical or satellite images. Next steps include training in Lab color space, enabling the perceptual loss, stabilizing Model 2 with a two-timescale update rule or gradient penalty, and adding user color hints.",
    },
  ],
};
