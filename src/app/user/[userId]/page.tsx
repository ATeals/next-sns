import { Avatar } from "@/components/Ui/Atom/Avatar";
import { LinkIcon } from "@/components/Ui/Atom/Icon/LinkIcon";
import { Title } from "@/components/Ui/Atom/Title";
import { authService, userService } from "@/server/services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async ({ params: { userId } }: { params: { userId: string } }) => {
  const session = await authService.getSession(cookies());
  const user = await userService.getById(Number(userId));

  if (!user) redirect("/");

  return (
    <section className="w-full flex flex-col justify-center items-center my-10 ">
      <Avatar size="xl" src={user.avatar || "/images/defaultAvatar.webp"} />
      <Title className="my-2">{user.name}</Title>
      {session?.user?.id === user.id && (
        <LinkIcon defaultIcon="bi bi-pencil-square text-gray-500" href={`/user/${userId}/update`} />
      )}
    </section>
  );
};
