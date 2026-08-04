export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterColumnData {
  title: string;
  links: FooterLink[];
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
];
