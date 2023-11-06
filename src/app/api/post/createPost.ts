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

export const createPost = authService.ironSessionWrapper(async (req) => {
  const user = req.session.user;

  const reqBody: Post = await req.json();

  if (!user?.id) return NextResponse.json({ error: "Not Found User" }, { status: 404 });
  if (!reqBody?.body) return NextResponse.json({ error: "The body is required" }, { status: 400 });

  const { body, parentPostId } = reqBody;

  if (parentPostId) {
    try {
      await postService.createChild(parentPostId, {
        data: { body, userId: user.id, parentPostId },
      });
    } catch (e) {
      return NextResponse.json({ error: "No More Child" }, { status: 400 });
    }
  } else {
    try {
      await postService.create({
        data: { body, userId: user.id },
      });
    } catch (e) {
      return NextResponse.json({ error: "DB error" }, { status: 400 });
    }
  }

  return NextResponse.json({ user: req.session.user });
});
