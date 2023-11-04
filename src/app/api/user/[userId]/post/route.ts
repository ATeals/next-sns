import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { userId: string } }) => {
  console.log(params);
  return NextResponse.json({ hello: "hello" });
};
