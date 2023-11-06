import PostPreview from "@/components/Post/PostPreview";
import { Print } from "@/components/Print";
import { authService, postService, userService } from "@/server/services";
import { cookies } from "next/headers";

export default async () => {
  const posts = await postService.getAll();
  const session = await authService.getSession(cookies());

  return (
    <section className="flex flex-col items-center ">
      <div className="w-[70%] [&>*]:m-10">
        {posts.map((post) => (
          <PostPreview post={post} key={post.id} user={session?.user!} />
        ))}
      </div>
    </section>
  );
};
