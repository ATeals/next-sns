import { Avatar } from "@/components/Ui/Atom/Avatar";
import { Title } from "@/components/Ui/Atom/Title";
import { userService } from "@/server/services";
import { redirect } from "next/navigation";

export default async ({ params: { userId } }: { params: { userId: string } }) => {
  const user = await userService.getById(Number(userId));

  if (!user) redirect("/");

  return (
    <section className="w-full flex flex-col justify-center items-center my-10 ">
      <Avatar size="xl" src={user.avatar || "/images/defaultAvatar.webp"} />
      <Title className="my-2">{user.name}</Title>
    </section>
  );
};
