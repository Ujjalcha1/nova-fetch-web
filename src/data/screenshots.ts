export interface Screenshot {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const screenshots: Screenshot[] = [
  {
    id: 1,
    title: "Home",
    description: "Beautiful dashboard with download options.",
    image: "/screenshots/home.jpg",
  },
  {
    id: 2,
    title: "Queue",
    description: "Track all active downloads in one place.",
    image: "/screenshots/queue.webp",
  },
  {
    id: 3,
    title: "Completed",
    description: "Access downloaded files instantly.",
    image: "/screenshots/completed.jpg",
  },
  {
    id: 4,
    title: "Settings",
    description: "Customize Nova Fetch the way you like.",
    image: "/screenshots/settings.jpg",
  },
];
