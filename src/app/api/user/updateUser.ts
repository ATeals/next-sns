import { authService, userService } from "@/server/services";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const updateUser = authService.ironSessionWrapper(async (req) => {
  const { email, password, name, avatar } = await req.json();

  if (!(email && password && name)) {
    return NextResponse.json({ error: "Input Required" }, { status: 400 });
  }

  const user = await userService.getByEmail(email);

  if (!user) {
    return NextResponse.json({ error: `User Not Found` }, { status: 400 });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) return NextResponse.json({ error: "Not Match Password" }, { status: 404 });

  const newUser = await userService.update(user.id, {
    name: name || user.name,
    avatar: avatar || null,
  });

  req.session.user = { id: newUser.id, name: newUser.name, avatar: newUser.avatar };
  await req.session.save();

  return NextResponse.json({}, { status: 200 });
});
