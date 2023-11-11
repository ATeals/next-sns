"use client";

import PostPreview from "@/components/Post/PostPreview";
import { LoadingIndicator } from "@/components/Ui/Atom/LoadingIndicator";
import { Title } from "@/components/Ui/Atom/Title";
import { Post, User } from "@/types";
import useSWR from "swr";

export const UserPosts = ({ profileOwnerId, user }: { profileOwnerId: string; user: User }) => {
  const { data, isLoading } = useSWR<Post[]>(`/api/user/${profileOwnerId}/post`);

  return (
    <div className="flex flex-col items-center my-10">
      <Title className="mt-10 ">Posts</Title>
      <hr className="border-b-2 border-gray-500 w-full my-10" />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        data?.map((post) => <PostPreview key={post.id} post={post} user={user} />)
      )}
    </div>
  );
};
