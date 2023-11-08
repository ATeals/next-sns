"use client";

import { PostHeader } from "@/components/Post";
import { PostEditor } from "@/components/Post/PostEditor";
import { User } from "@/types";
import mutateFetch from "@/utils/mutateFetch";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";

export const WriteForm = ({ user }: { user: User }) => {
  const router = useRouter();

  const { trigger } = useSWRMutation(
    "api/post",
    (url, { arg }: { arg: string }) => mutateFetch(url, { body: { body: arg, userId: user?.id } }),
    {
      onSuccess: () => {
        router.back();
      },
      onError: (err) => console.log(err),
    }
  );

  const handlePosting = (markdown: string) => {
    trigger(markdown);
  };

  return (
    <div className="relative m-10 ring-1 ring-gray-300 rounded-xl p-5 w-[70%] bg-white max-w-[680px]">
      <PostHeader avatar={user?.avatar} name={user?.name} timeLine="방금 전" />
      <PostEditor onPosting={handlePosting} />
    </div>
  );
};
