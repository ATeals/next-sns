"use client";

import { useContext } from "react";
import { postContext } from "../post/Main";
import { LinkIcon } from "@/client/ui";

export const CommentButton = () => {
  const post = useContext(postContext);
  return (
    <LinkIcon defaultIcon={"bi bi-chat text-gray-500"} href={`/comment?parentPostId=${post?.id}`} />
  );
};
