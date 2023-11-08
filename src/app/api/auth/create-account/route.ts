import { authService, userService } from "@/server/services";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = authService.ironSessionWrapper(async (req) => {
  const { email, password, name, avatar } = await req.json();

  if (!(email && password && name)) {
    console.log("input");
    return NextResponse.json({ error: "Input Required" }, { status: 400 });
  }

  const AlreadyCreatedUser = await userService.getByEmail(email);

  if (AlreadyCreatedUser) {
    console.log("email");
    return NextResponse.json({ error: `email ${email} is already created` }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  const user = await userService.create({
    data: { email, password: hashedPassword, name, avatar: avatar || null },
  });

  return NextResponse.json({}, { status: 200 });
});
