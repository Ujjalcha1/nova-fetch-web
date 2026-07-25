import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
        fontSize: 72,
        fontWeight: 800,
      }}
    >
      <span>Nova Fetch</span>
      <span
        style={{
          fontSize: 28,
          fontWeight: 400,
          color: "#a1a1aa",
          marginTop: 16,
        }}
      >
        Fast Windows Video Downloader
      </span>
    </div>,
    size,
  );
}
