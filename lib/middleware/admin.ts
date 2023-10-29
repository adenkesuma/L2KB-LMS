import { NextRequest, NextResponse } from "next/server";

export default async function AdminMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin/p2kb/documents/training-candidate")) {
    const adminAK = req.cookies.get("adminAK")?.value;
    const imageFetch = await fetch(
      `${process.env.NEXT_PUBLIC_P2KB_API}${pathname.split("/p2kb")[1]}`,
      {
        headers: {
          Authorization: `Bearer ${adminAK}`,
        },
      }
    );
    const imageContentType = imageFetch.headers.get("Content-Type");
    let bufs;
    await imageFetch.arrayBuffer().then((buf) => {
      bufs = buf;
    });

    const response = new NextResponse(Buffer.from(bufs as any));
    response.headers.set("Content-Type", "image/jpeg");
    return response;
  }
}
