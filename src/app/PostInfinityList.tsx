"use client";

import { User } from "@/client/common/types";
import { useIntersectionObserver } from "@/client/common/hooks/useIntersectionObserver";
import { Post } from "@/client/post/components";
import { useInfinityPosts } from "@/client/post/hooks";

import Link from "next/link";
import { LoadingIndicator } from "@/client/ui";

export const PostInfinityList = ({ user }: { user: User }) => {
  const { posts, pageCursor, fetchNextPage, isFetchingNextPage } = useInfinityPosts();
  const { bottomItemRef } = useIntersectionObserver(() => fetchNextPage());

  return (
    <div className="w-[70%] [&>*]:m-10">
      {posts?.map((post) => (
        <Post post={post} key={post.id}>
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
      ))}
      <div className="flex justify-center">
        {isFetchingNextPage ? (
          <LoadingIndicator />
        ) : (
          pageCursor !== 0 && <div ref={bottomItemRef} />
        )}
      </div>
    </div>
  );
};
