import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nova Fetch",

    short_name: "NovaFetch",

    description:
      "Nova Fetch is a modern desktop downloader with a beautiful interface, fast downloads, queue management, resume support and more.",

    start_url: "/",

    display: "standalone",

    background_color: "#09090b",

    theme_color: "#7c3aed",

    icons: [
      {
        src: "/logos/logo.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}
