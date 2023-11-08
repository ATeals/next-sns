import { authService } from "@/server/services";
import { cookies } from "next/headers";
import { PostInfinityList } from "./PostInfinityList";

export default async () => {
  const session = await authService.getSession(cookies());

  return (
    <section className="flex flex-col items-center ">
      <PostInfinityList user={session?.user!} />
    </section>
  );
};
