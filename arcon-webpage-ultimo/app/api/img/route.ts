import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url")
  if (!url) return new NextResponse("Missing url", { status: 400 })

  try {
    const upstream = await fetch(decodeURIComponent(url), { cache: "force-cache" })
    if (!upstream.ok) return new NextResponse("Fetch failed", { status: 502 })

    const contentType = upstream.headers.get("content-type") ?? "image/jpeg"
    const buffer = await upstream.arrayBuffer()

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, immutable",
        "Access-Control-Allow-Origin": "*",
      },
    })
  } catch {
    return new NextResponse("Error fetching image", { status: 500 })
  }
}
