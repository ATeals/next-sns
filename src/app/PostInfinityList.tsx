"use client";

import useSWRInfinite from "swr/infinite";
import { Post, User } from "@/types";
import PostPreview from "@/components/Post/PostPreview";
import { LoadingIndicator } from "@/components/Ui/Atom/LoadingIndicator";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect } from "react";

interface PreviousPageData {
  nextCursor: number;
  posts: Post[];
}

const getKey = (pageIndex: number, previousPageData: PreviousPageData) => {
  if (previousPageData && previousPageData.posts.length === 0) return null;

  if (pageIndex == 0) return `/api/post?cursor=0&limit=${5}`;

  return `/api/post?cursor=${previousPageData.nextCursor}&limit=${5}`;
};

export const PostInfinityList = ({ user }: { user: User }) => {
  const { data, setSize, isValidating } = useSWRInfinite<PreviousPageData>(getKey);
  const { bottomItemRef } = useIntersectionObserver(() => setSize((size) => size + 1));

  const posts = data?.flatMap((page) => page.posts);
  const nextCursor = data?.at(-1)?.nextCursor;

  return (
    <div className="w-[70%] [&>*]:m-10">
      {posts?.map((post) => (
        <PostPreview post={post} key={post.id} user={user} />
      ))}
      <div className="flex justify-center">
        {isValidating ? <LoadingIndicator /> : <>{nextCursor && <div ref={bottomItemRef} />}</>}
      </div>
    </div>
  );
};
