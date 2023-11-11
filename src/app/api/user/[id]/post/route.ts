import { postService } from "@/server/services";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params: { id } }: { params: { id: string } }) => {
  const posts = await postService.getByUserId(Number(id));

  if (!posts) NextResponse.json({ error: "Post Not Found" });

  return NextResponse.json(posts);
};
