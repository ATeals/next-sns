import { authService, postService } from "@/server/services";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Post } from "@/client/post/components";
import PostMain from "./PostMain";
import PostPreview from "./PostPreview";

export default async ({ params: { postId } }: { params: { postId: string } }) => {
  const post = await postService.getById(Number(postId));
  const session = await authService.getSession(cookies());

  if (!post) redirect("/");
  if (!session?.user) return redirect("/");

  const user = session.user;

  return (
    <section className="flex flex-col items-center">
      <PostMain post={post} user={user} />

      <div className="m-10 w-[60%]">
        {post.childPosts?.map((post) => (
          <PostPreview post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
};
