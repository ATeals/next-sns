import { authService, likeService } from "@/server/services";
import { NextResponse } from "next/server";

export const deleteLike = authService.ironSessionWrapper(async (req) => {
  const { userId, postId } = await req.json();

  if (!(userId && postId))
    return NextResponse.json({ error: "userId & postId is required" }, { status: 400 });

  const user = req.session.user;

  if (userId !== user?.id)
    return NextResponse.json({ error: "user is not match" }, { status: 400 });

  await likeService.delete({ postId, userId });

  return NextResponse.json({});
});
