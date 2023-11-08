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

export const updatePost = authService.ironSessionWrapper(async (req) => {
  const user = req.session.user;

  const reqBody: Post = await req.json();

  if (!user?.id) return NextResponse.json({ error: "Not Found User" }, { status: 404 });
  if (!reqBody?.body || !reqBody.id)
    return NextResponse.json({ error: "The body is required" }, { status: 400 });

  const { body, id } = reqBody;

  try {
    await postService.update(Number(id), { body });
  } catch (e) {
    return NextResponse.json({ error: "DB error" }, { status: 400 });
  }

  return NextResponse.json({ user: req.session.user });
});
