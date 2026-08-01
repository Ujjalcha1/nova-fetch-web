import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Nova Fetch - Fast, Modern & Secure Downloader";

export default async function Image() {
  let logoDataUrl = "";

  try {
    const buffer = await readFile(
      path.join(process.cwd(), "public", "logos", "logo.png"),
    );

    logoDataUrl = `data:image/png;base64,${buffer.toString("base64")}`;
  } catch {
    // Fall back to a text-only card if the logo can't be read.
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#09090b",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {logoDataUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoDataUrl}
          width={220}
          height={220}
          alt=""
          style={{ borderRadius: 32, marginBottom: 32 }}
        />
      ) : null}

      <span
        style={{
          fontSize: 72,
          fontWeight: 800,
        }}
      >
        Nova Fetch
      </span>

      <span
        style={{
          fontSize: 28,
          fontWeight: 400,
          color: "#a1a1aa",
          marginTop: 16,
        }}
      >
        Fast, Modern &amp; Secure Downloader
      </span>
    </div>,
    size,
  );
}
