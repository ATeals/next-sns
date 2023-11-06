import { authService } from "@/server/services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CommentForm } from "./CommentForm";

export default async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await authService.getSession(cookies());
  const { parentPostId } = searchParams;

  if (!session?.user) return redirect("/");
  if (!parentPostId) return redirect("/");

  return (
    <section className="flex flex-col items-center pt-20">
      <CommentForm user={session.user} parentPostId={Number(parentPostId)} />
    </section>
  );
};
