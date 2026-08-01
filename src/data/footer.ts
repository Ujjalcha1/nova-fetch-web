import type { LucideIcon } from "lucide-react";
import { GitBranch, X, Globe } from "lucide-react";

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterColumnData {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const footerColumns: FooterColumnData[] = [
  {
    title: "Quick Links",
    links: [
      { name: "Features", href: "/features" },
      { name: "Download", href: "/download" },
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/support" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: GitBranch,
    href: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: X,
    href: "https://x.com/",
    label: "X (Twitter)",
  },
  {
    icon: Globe,
    href: "https://novafetch.app",
    label: "Website",
  },
];
