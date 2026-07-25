"use client";

import useSWR from "swr";

import { GithubRelease } from "@/types/github";

const fetcher = (url: string): Promise<GithubRelease> =>
  fetch(url).then((r) => r.json());

export function useLatestRelease(): {
  release: GithubRelease | undefined;
  isLoading: boolean;
  error: Error | undefined;
} {
  const { data, isLoading, error } = useSWR<GithubRelease>(
    "/api/release",
    fetcher,
    {
      refreshInterval: 300000,
    },
  );

  return {
    release: data,
    isLoading,
    error,
  };
}
