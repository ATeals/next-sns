import { authService, userService } from "@/server/services";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const createUser = authService.ironSessionWrapper(async (req) => {
  const { email, password, name, avatar } = await req.json();

  if (!(email && password && name)) {
    return NextResponse.json({ error: "Input Required" }, { status: 400 });
  }

  const AlreadyCreatedUser = await userService.getByEmail(email);

  if (AlreadyCreatedUser) {
    return NextResponse.json({ error: `email ${email} is already created` }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  const user = await userService.create({
    data: { email, password: hashedPassword, name, avatar: avatar || null },
  });

  req.session.user = { id: user.id, name: user.name, avatar: user.avatar };

  await req.session.save();

  return NextResponse.json({}, { status: 200 });
});
