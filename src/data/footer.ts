import type { LucideIcon } from "lucide-react";
import { GitBranch, X, Play, Globe } from "lucide-react";

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
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Download", href: "/download" },
      { name: "Changelog", href: "/changelog" },
      { name: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "#faq" },
      { name: "Support", href: "/support" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "License", href: "/license" },
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
    icon: Play,
    href: "https://youtube.com/",
    label: "YouTube",
  },
  {
    icon: Globe,
    href: "https://novafetch.app",
    label: "Website",
  },
];
