import { authService } from "@/server/services";
import { CreatePost } from "./_components/CreatePost";
import { cookies } from "next/headers";

export default async () => {
  const session = await authService.getSession(cookies());

  return (
    <section className="flex flex-col items-center pt-20">
      <CreatePost user={session?.user} />
    </section>
  );
};
