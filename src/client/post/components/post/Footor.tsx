"use client";

import { useContext } from "react";
import { postContext } from "./Main";
import Link from "next/link";
import { Avatar, Description } from "@/client/ui";

export const Footer = () => {
  const post = useContext(postContext);
  return (
    <div className="flex items-center [&>*]:px-1">
      <div className="m-2 ml-0">
        <Avatar
          src="https://i.pinimg.com/474x/63/4c/53/634c53818319ec85a06a172442db9e16.jpg"
          rounded={true}
          size="sm"
        />
      </div>
      <Link href={`/user/${post?.userId}/post/${post?.id}`}>
        <Description className="hover:underline" size="sm">
          댓글 {post?.childPosts?.length || 0}개
        </Description>
      </Link>
      <Description size="sm">좋아요 {post?.likes?.length || 0}개</Description>
    </div>
  );
};
