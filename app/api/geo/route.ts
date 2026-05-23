import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    country: (req as any).geo?.country ?? "Only available on production",
    city: (req as any).geo?.city ?? "Test on your deployed URL",
    runtime: "edge",
  });
}