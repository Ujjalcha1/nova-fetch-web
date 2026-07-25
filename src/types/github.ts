export interface GithubAsset {
  id: number;
  name: string;
  browser_download_url: string;
  size: number;
}

export interface GithubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  assets: GithubAsset[];
}
