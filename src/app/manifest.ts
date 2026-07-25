import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nova Fetch",

    short_name: "NovaFetch",

    description: "Modern Windows Video Downloader",

    start_url: "/",

    display: "standalone",

    background_color: "#09090b",

    theme_color: "#7c3aed",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
