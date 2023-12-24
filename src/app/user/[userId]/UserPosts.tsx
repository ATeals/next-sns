"use client";

import { Post } from "@/client/post/components";
import { Post as PostType } from "@/client/post/type";
import { LoadingIndicator, Title } from "@/client/ui";
import { User } from "@/client/common/types";
import Link from "next/link";
import useSWR from "swr";

export const UserPosts = ({ profileOwnerId, user }: { profileOwnerId: string; user: User }) => {
  const { data, isLoading } = useSWR<PostType[]>(`/api/user/${profileOwnerId}/post`);

  return (
    <div className="flex flex-col items-center my-10">
      <Title className="mt-10 ">Posts</Title>
      <hr className="border-b-2 border-gray-500 w-full my-10" />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        data?.map((post) => (
          <Post post={post} key={post.id}>
            <Post.Header />
            <Link href={`/user/${post.userId}/post/${post.id}`}>
              <Post.Body className="h-[300px] overflow-hidden" />
            </Link>
            <Post.ModifierMenu>
              <Post.CommentButton />
            </Post.ModifierMenu>
            <Post.Footer />
          </Post>
        ))
      )}
    </div>
  );
};
