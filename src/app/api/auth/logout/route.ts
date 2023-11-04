import { authService } from "@/server/services";
import { NextResponse } from "next/server";

export const POST = authService.ironSessionWrapper(async (req) => {
  req.session.destroy();
  return NextResponse.json({ message: "Success Logout", status: 200 }, { status: 200 });
});
