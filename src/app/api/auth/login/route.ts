import { db } from "@/server/db";
import { authService } from "@/server/services";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = authService.ironSessionWrapper(async (req) => {
  const { email, password } = await req.json();

  if (!(email && password)) return NextResponse.json({ error: "Input Required" }, { status: 400 });

  const user = await db.user.findUnique({ where: { email } });

  if (!user) return NextResponse.json({ error: "Not Found User" }, { status: 401 });

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) return NextResponse.json({ error: "Not Match Password" }, { status: 401 });

  req.session.user = { id: user.id, avatar: user.avatar || undefined, name: user.name };
  await req.session.save();

  return NextResponse.json({ user: req.session.user });
});
