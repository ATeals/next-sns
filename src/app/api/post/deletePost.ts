import { authService, postService } from "@/server/services";
import { NextResponse } from "next/server";

interface Post {
  id?: number;
  body: string;
  coverImg?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  userId: number;
  parentPostId?: number | null;
}

export const deletePost = authService.ironSessionWrapper(async (req) => {
  const owner = req.session.user;
  const reqBody: Post = await req.json();

  if (!owner?.id) return NextResponse.json({ error: "Not Found User" }, { status: 404 });
  if (!reqBody?.id) return NextResponse.json({ error: "The body is required" }, { status: 400 });

  const { id: postId, userId } = reqBody;

  if (userId !== owner.id) return NextResponse.json({ error: "Not Allowed" }, { status: 400 });

  await postService.delete(postId);

  return NextResponse.json({ user: req.session.user });
});
