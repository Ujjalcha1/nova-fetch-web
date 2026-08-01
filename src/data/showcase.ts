import type { LucideIcon } from "lucide-react";
import { Link2, Settings2, Download, Check, Minus } from "lucide-react";

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "250K+", label: "Downloads" },
  { value: "3.2×", label: "Faster Downloads" },
  { value: "1000+", label: "Supported Sites" },
  { value: "4.9★", label: "User Rating" },
];

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Paste a link",
    description:
      "Copy any media URL from your browser and paste it into Nova Fetch.",
    icon: Link2,
  },
  {
    step: "02",
    title: "Choose quality",
    description:
      "Pick the resolution or format you want to save.",
    icon: Settings2,
  },
  {
    step: "03",
    title: "Download",
    description:
      "Nova Fetch handles the rest — fast, reliable, and in the background.",
    icon: Download,
  },
];

export interface Platform {
  name: string;
  detail: string;
}

export const platforms: Platform[] = [
  { name: "Windows 10", detail: "Fully supported" },
  { name: "Windows 11", detail: "Fully supported" },
];

export interface SecurityBadge {
  title: string;
  description: string;
}

export const securityBadges: SecurityBadge[] = [
  { title: "No Ads", description: "Zero advertisements, ever." },
  { title: "No Malware", description: "Clean, signed installer." },
  { title: "No Tracking", description: "Your downloads stay private." },
];

export type CellValue = "yes" | "no" | "limited";

export interface ComparisonRow {
  feature: string;
  novaFetch: CellValue;
  browser: CellValue;
  mobile: CellValue;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: "Multi-threaded downloads", novaFetch: "yes", browser: "limited", mobile: "no" },
  { feature: "Queue management", novaFetch: "yes", browser: "no", mobile: "no" },
  { feature: "Resume support", novaFetch: "yes", browser: "no", mobile: "limited" },
  { feature: "MP3 conversion", novaFetch: "yes", browser: "no", mobile: "no" },
  { feature: "Batch downloads", novaFetch: "yes", browser: "no", mobile: "no" },
  { feature: "4K downloads", novaFetch: "yes", browser: "yes", mobile: "limited" },
  { feature: "No ads or tracking", novaFetch: "yes", browser: "no", mobile: "no" },
];

export const cellIcons: Record<CellValue, LucideIcon> = {
  yes: Check,
  limited: Settings2,
  no: Minus,
};

export const cellLabel: Record<CellValue, string> = {
  yes: "Yes",
  limited: "Limited",
  no: "No",
};
