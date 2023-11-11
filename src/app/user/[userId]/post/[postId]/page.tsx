import { PostBody, PostFooter, PostHeader } from "@/components/Post";
import PostPreview from "@/components/Post/PostPreview";
import { LinkIcon } from "@/components/Ui/Atom/Icon/LinkIcon";
import { authService, postService } from "@/server/services";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteButton from "./DeleteButton";

export default async ({ params: { postId } }: { params: { postId: string } }) => {
  const post = await postService.getById(Number(postId));
  const session = await authService.getSession(cookies());

  if (!post) redirect("/");
  if (!session?.user) return redirect("/");

  const user = session.user;

  const { user: owner, updatedAt, id, depth } = post;

  return (
    <section className="flex flex-col items-center">
      <div className="border-2 border-gray rounded-lg p-5 w-[70%]">
        <Link href={`/user/${post.userId}`}>
          <PostHeader name={owner.name} avatar={owner.avatar} timeLine={updatedAt?.toString()} />
        </Link>
        <PostBody children={post?.body || ""} className="min-h-[400px]" />
        <div className="px-5 border-l-2 border-l-gray-300 mx-4 [&>*]:mx-2">
          {depth < 2 && (
            <LinkIcon
              defaultIcon={"bi bi-chat text-gray-500"}
              href={`/comment?parentPostId=${id}`}
            />
          )}
          {owner.id === user.id && (
            <>
              <LinkIcon
                defaultIcon="bi bi-pencil-square text-gray-500"
                href={`/update?postId=${post.id}`}
              />
              <DeleteButton postId={id} userId={user.id} />
            </>
          )}
        </div>
        <PostFooter post={post} />
      </div>
      <div className="m-10 w-[60%]">
        {post.childPosts?.map((post) => (
          <PostPreview key={post.id} post={post} user={session?.user!} />
        ))}
      </div>
    </section>
  );
};
