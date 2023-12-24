"use client";

import { Post } from "@/client/post/components";
import { useCreatePostMutation } from "@/client/post/hooks";
import { User } from "@/types";
import { useRouter } from "next/navigation";

export const CommentForm = ({ user, parentPostId }: { user: User; parentPostId: number }) => {
  const router = useRouter();

  const { mutate, error } = useCreatePostMutation({
    onSuccess: () => {
      router.back();
      router.refresh();
    },
    onError: () => console.log(error),
  });

  const handlePosting = (markdown: string) => {
    mutate({ body: markdown, userId: String(user.id), parentPostId: parentPostId });
  };

  return (
    <div className="relative m-10 ring-1 ring-gray-300 rounded-xl p-5 w-[70%] bg-white max-w-[680px]">
      <Post>
        <Post.Header user={user} />
        <Post.Editer onPosting={handlePosting} />
      </Post>
    </div>
  );
};
