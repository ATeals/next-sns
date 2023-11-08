import { authService, userService } from "@/server/services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import UserUpdateForm from "./UserUpdateForm";

export default async ({ params: { userId } }: { params: { userId: string } }) => {
  const session = await authService.getSession(cookies());
  const profileUser = await userService.getById(Number(userId));

  if (!session?.user || !profileUser || session.user.id !== profileUser.id) {
    redirect("/");
  }

  return <UserUpdateForm user={session.user} />;
};
