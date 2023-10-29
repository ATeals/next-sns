import { PARAMS } from "@/constants";
import { db } from "@/server/db";
import { authService } from "@/server/services";
import { NextResponse } from "next/server";

export const POST = authService.ironSessionWrapper(async (req) => {
  const id = Number(req.nextUrl.searchParams.get(PARAMS.USER_ID));

  const user = await db.user.findUnique({ where: { id } });

  if (!user) return NextResponse.json({ error: "Not Found User" }, { status: 404 });

  req.session.user = { id };
  await req.session.save();

  return NextResponse.json({ user: req.session.user });
});

export const DELETE = authService.ironSessionWrapper(async (req) => {
  req.session.destroy();
  return NextResponse.json({ message: "Success Logout" }, { status: 200 });
});
