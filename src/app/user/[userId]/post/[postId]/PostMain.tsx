"use client";

import { Post } from "@/client/post/components";
import { Post as PostType } from "@/client/post/type";
import { User } from "@/client/common/types";
import Link from "next/link";

export default ({ post, user }: { post: PostType; user: User }) => {
  const { user: owner } = post;

  return (
    <Post post={post}>
      <Link href={`/user/${post.userId}`}>
        <Post.Header />
      </Link>
      <Post.Body className="min-h-[400px]" />
      <Post.ModifierMenu>
        <Post.CommentButton />
        {owner.id === user.id && (
          <>
            <Post.DeleteButton />
            <Post.UpdateButton />
          </>
        )}
      </Post.ModifierMenu>
      <Post.Footer />
    </Post>
  );
};
