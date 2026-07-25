import { Github, Twitter, Youtube, Globe } from "lucide-react";

export const footerColumns = [
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

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/",
  },
  {
    icon: Globe,
    href: "https://novafetch.app",
  },
];
