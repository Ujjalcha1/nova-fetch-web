export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Content Creator",
    avatar: "/avatars/avatar-1.jpg",
    rating: 5,
    review:
      "Nova Fetch is the fastest downloader I've ever used. The interface is beautiful and downloads are incredibly reliable.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    role: "Video Editor",
    avatar: "/avatars/avatar-2.jpg",
    rating: 5,
    review:
      "Playlist downloads and MP3 conversion save me hours every week. Highly recommended.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Software Engineer",
    avatar: "/avatars/avatar-3.jpg",
    rating: 5,
    review:
      "Modern UI, lightning-fast performance and no ads. Exactly what I wanted.",
  },
];
