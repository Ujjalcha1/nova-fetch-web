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
      Nova Fetch
    </div>,
    size,
  );
}
