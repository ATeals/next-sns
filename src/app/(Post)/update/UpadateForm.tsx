"use client";

import { Post } from "@/client/post/components";
import { useUpdatePostMutation } from "@/client/post/hooks";
import { Post as PostType } from "@/client/post/type";
import { useRouter } from "next/navigation";

export const UpdateForm = ({ post }: { post: PostType }) => {
  const router = useRouter();

  const { mutate } = useUpdatePostMutation(String(post.id), {
    onSuccess: () => {
      router.back();
      router.refresh();
    },
    onError: () => console.log("err"),
  });

  const handlePosting = (markdown: string) => {
    mutate({ body: markdown });
  };

  return (
    <div className="relative m-10 ring-1 ring-gray-300 rounded-xl p-5 w-[70%] bg-white max-w-[680px]">
      <Post post={post}>
        <Post.Header />
        <Post.Editer onPosting={handlePosting} />
      </Post>
    </div>
  );
};
