import { postService } from "@/server/services";
import { NextRequest, NextResponse } from "next/server";

export const getPosts = async (req: NextRequest) => {
  const searchParmas = req.nextUrl.searchParams;

  const cursor = Number(searchParmas.get("cursor"));
  const limit = Number(searchParmas.get("limit"));

  const skip = cursor * limit;

  const posts = await postService.getPostsWithPagination(skip, limit);

  if (posts.length === 0) return NextResponse.json({ posts });

  return NextResponse.json({ nextCursor: cursor + 1, posts });
};
