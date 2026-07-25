import { GITHUB_OWNER, GITHUB_REPO } from "./env";

import { GithubRelease } from "@/types/github";

export async function getLatestRelease(): Promise<GithubRelease> {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`,
    {
      next: {
        revalidate: 300,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch release");
  }

  return response.json();
}
