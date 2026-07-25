function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const GITHUB_OWNER = requireEnv("GITHUB_OWNER");

export const GITHUB_REPO = requireEnv("GITHUB_REPO");
