"use client";

import { Post } from "@/types";
import Link from "next/link";
import { PostHeader } from "./PostHeader";
import { PostBody } from "./PostBody";
import { PostFooter } from "./PostFooter";

export default ({ post }: { post: Post }) => {
  const {
    user: { name, avatar },
    body,
  } = post;

  return (
    <div className="border-2 border-gray rounded-lg p-5">
      <Link href={"/"}>
        <PostHeader name={name} avatar={avatar} />
        <PostBody children={body} className="h-[300px] w-[400px] overflow-hidden" />
      </Link>
      <PostFooter post={post} />
    </div>
  );
};
