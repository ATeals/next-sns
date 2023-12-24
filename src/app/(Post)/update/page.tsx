import { authService, postService } from "@/server/services";
import { cookies } from "next/headers";
import { UpdateForm } from "./UpadateForm";
import { redirect } from "next/navigation";

export default async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await authService.getSession(cookies());
  const { postId } = searchParams;

  if (!session?.user) return redirect("/");

  const post = await postService.getById(Number(postId));

  if (!post) return redirect("/");
  if (post.user.id !== session.user.id) return redirect("/");

  return (
    <section className="flex flex-col items-center pt-20">
      <UpdateForm post={post} />
    </section>
  );
};
