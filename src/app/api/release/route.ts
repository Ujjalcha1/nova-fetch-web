import { NextResponse } from "next/server";

import { getLatestRelease } from "@/lib/github";

export async function GET() {
  try {
    const release = await getLatestRelease();

    return NextResponse.json(release);
  } catch {
    return NextResponse.json(
      {
        message: "Failed",
      },
      {
        status: 500,
      },
    );
  }
}
