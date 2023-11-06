import { PostBody, PostFooter, PostHeader } from "@/components/Post";
import PostPreview from "@/components/Post/PostPreview";
import { authService, postService } from "@/server/services";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async ({
  params: { postId, userId },
}: {
  params: { postId: string; userId: string };
}) => {
  const post = await postService.getById(Number(postId));
  const session = await authService.getSession(cookies());

  if (!post) redirect("/");

  const {
    user: { name, avatar },
    updatedAt,
  } = post;

  return (
    <section className="flex flex-col items-center">
      <div className="border-2 border-gray rounded-lg p-5 w-[70%]">
        <Link href={`/user/${post.userId}`}>
          <PostHeader name={name} avatar={avatar} timeLine={updatedAt?.toString()} />
        </Link>
        <PostBody children={post?.body || ""} className="min-h-[400px]" />
        <PostFooter comments={post.childPosts} likes={post.likes} />
      </div>
      <div className="m-10 w-[60%]">
        {post.childPosts?.map((post, index) => (
          <PostPreview key={post.id} post={post} user={session?.user!} />
        ))}
      </div>
      <div>+</div>
    </section>
  );
};
