"use client";

import { Post } from "@/client/post/components";
import { Post as PostType } from "@/client/post/type";
import Link from "next/link";

export default ({ post }: { post: PostType }) => {
  return (
    <Post post={post}>
      <Post.Header />
      <Link href={`/user/${post.userId}/post/${post.id}`}>
        <Post.Body className="h-[300px] overflow-hidden" />
      </Link>
      <Post.ModifierMenu>
        <Post.CommentButton />
        <Post.DeleteButton />
        <Post.UpdateButton />
      </Post.ModifierMenu>
      <Post.Footer />
    </Post>
  );
};
