import { URL_POSTS } from "@/api";
import { NextRequest } from "next/server";
import { PAGE_LIMIT } from "@/consts";

export async function GET(request: NextRequest) {
  const pageQuery = Number(request.nextUrl.searchParams.get("page"));
  if (!isNaN(pageQuery)) {
    const res = await fetch(URL_POSTS);
    const data = (await res.json()).slice(
      (pageQuery - 1) * PAGE_LIMIT,
      pageQuery * PAGE_LIMIT
    );

    return Response.json(data);
  }

  return new Response("Incorrect request");
}
