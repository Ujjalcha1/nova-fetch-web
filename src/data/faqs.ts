export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is Nova Fetch?",
    answer:
      "Nova Fetch is a fast, modern desktop application for Windows that downloads videos, audio and subtitles from supported websites with a clean, beautiful interface.",
  },
  {
    question: "Which platforms are supported?",
    answer: "Nova Fetch runs on Windows 10 and Windows 11 (64-bit systems).",
  },
  {
    question: "Is Nova Fetch free?",
    answer: "Yes. Nova Fetch is completely free to download and use.",
  },
  {
    question: "Can I resume interrupted downloads?",
    answer:
      "Yes. Interrupted downloads can be resumed, so you never lose your progress.",
  },
  {
    question: "Is Nova Fetch secure?",
    answer:
      "Yes. Nova Fetch contains no ads, malware, tracking or bundled software.",
  },
  {
    question: "Does it receive updates?",
    answer:
      "Yes. Nova Fetch is updated regularly with new features, improvements and bug fixes.",
  },
];
