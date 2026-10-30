import { Mic } from "lucide-react";

import type { Project } from "./types";

export const smartNotesGenerator: Project = {
  title: "Smart Notes Generator",
  slug: "smart-notes-generator",
  subtitle: "Natural Language Processing",
  description:
    "A two-stage NLP pipeline that turns an audio recording into a short written summary, using Whisper for speech recognition and BART for abstractive summarization. It is deployed as a Streamlit web app.",
  image: null,
  icon: Mic,
  accent: "cocoa",
  featured: false,
  category: "AI",
  tags: ["Python", "NLP", "Speech Recognition", "Whisper", "BART", "Streamlit"],
  github: "https://github.com/sidsara/Smart-Notes-Generator",
  links: [
    { label: "Live demo", href: "https://smart-notes-generator.streamlit.app" },
  ],
  detailSections: [
    {
      heading: "Problem",
      body:
        "Lectures, meetings and interviews are slow to transcribe and summarize by hand. Turning audio into a short, accurate summary means solving two problems in sequence: converting speech to text with few errors, then condensing that transcript while keeping its key information.",
    },
    {
      heading: "Approach",
      body:
        "As part of a three-student project, we built a sequential pipeline: audio goes through Whisper-base (74M parameters) to produce a transcript, and BART summarizes it. The two stages communicate only through a text string, so each can be developed, tested and swapped independently. I worked on the speech-to-text stage, which wraps Whisper behind a single transcribe(audio_path) function. It loads the model once and reuses it, runs in half precision on GPU, accepts .flac, .wav, .mp3, .m4a, .ogg, .mp4 and .webm, and returns descriptive error strings instead of raising exceptions.\n\nFor summarization we compared BART-large-cnn (406M parameters) with DistilBART-cnn-12-6 (306M). Generation uses beam search with 6 beams, a length penalty of 2.0 and no repeated 3-grams. Output length scales with input length, and inputs under 30 words are returned unchanged.",
    },
    {
      heading: "Training",
      body:
        "Whisper was used pre-trained, with no fine-tuning. Both summarizers were originally trained on CNN/DailyMail news, so we fine-tuned BART-large-cnn on the SAMSum training split (14,732 dialogue-summary pairs) to adapt it to conversational text. We used a learning rate of 5×10⁻⁵, an effective batch size of 16, cosine decay with a 0.05 warmup ratio, weight decay of 0.01, and inputs capped at 512 tokens and summaries at 80. Training ran with Seq2SeqTrainer for up to 3 epochs, keeping the checkpoint with the best validation ROUGE-1. It took about 40 minutes per epoch on a Colab Tesla T4 with FP16.",
    },
    {
      heading: "Results",
      body:
        "On 10 randomly sampled LibriSpeech test-clean clips, the speech-to-text stage reached a 3.64% word error rate and a 1.60% character error rate at 0.41 s per clip on a Tesla T4, with 6 of 10 clips transcribed perfectly. The errors came from rare scientific terms, proper nouns, dialectal speech and fast speech.\n\nOn 25 SAMSum test dialogues, pre-trained BART scored ROUGE-1 0.3512, ROUGE-2 0.1487, ROUGE-L 0.2843, BERTScore 0.8674 and semantic similarity 0.8521 at 0.627 s per sample. DistilBART scored slightly lower on every metric (ROUGE-1 0.3421) and ran in 0.471 s, about 25% faster. Fine-tuning BART for 3 epochs raised ROUGE-1 to 0.5147 (+46.6%), ROUGE-2 to 0.2698, ROUGE-L to 0.4221, BERTScore to 0.9034 and semantic similarity to 0.8901, with inference time rising only from 0.627 s to 0.638 s. One epoch already reached ROUGE-1 0.4683. All summarization figures are test metrics on the 25-sample subset.",
    },
    {
      heading: "Impact",
      body:
        "The pipeline is deployed as a public Streamlit app. A user uploads an audio file, picks BART or DistilBART, and gets the transcript and the generated summary in separate tabs, with downloads for both and user-friendly error messages. We evaluated BART and DistilBART against each other and against the fine-tuned model, which gives a concrete speed-versus-quality comparison for choosing a summarizer.",
    },
    {
      heading: "Limitations and next steps",
      body:
        "The ASR numbers come from only 10 clips of clean audiobook speech, and the summarization numbers from 25 SAMSum dialogues in a single run. We have no end-to-end metric on real audio, and the summarization scores were computed on SAMSum text, not on Whisper transcripts. The system supports English only, cannot tell speakers apart, and ASR mistakes carry through into the summary. Abstractive summaries can also state wrong names or numbers, which ROUGE does not catch. Next steps include speaker diarization with pyannote.audio, multilingual summarization, a correction interface for users, and streaming transcription.",
    },
  ],
};