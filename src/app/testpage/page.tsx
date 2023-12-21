"use client";

import { useInfinityPosts, usePostMutation } from "@/client/post/hooks";
import { useEffect } from "react";

export default () => {
  const { fetchNextPage, isFetchingNextPage, posts, pageCursor } = useInfinityPosts();

  const { mutate, isPending } = usePostMutation().create();
  const { mutate: deleteMutate, isPending: isDeletePending } = usePostMutation().delete("88");
  const { mutate: updateMutate, isPending: isUpdatePending } = usePostMutation().update("89");

  useEffect(() => {
    console.log(pageCursor, posts);
  }, [posts]);

  return (
    <section>
      <button onClick={(e) => fetchNextPage()}>다음</button>
      <button className="block" onClick={(e) => mutate({ body: "hola" })}>
        새로운 포스트
      </button>
      <button onClick={(e) => deleteMutate()}>삭제</button>
      <button className="block" onClick={(e) => updateMutate({ body: "응애" })}>
        업데이트!
      </button>
    </section>
  );
};
