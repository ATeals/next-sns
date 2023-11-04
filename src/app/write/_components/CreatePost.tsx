"use client";

import { Button } from "@/components/Ui/Atom/Button";
import { PostBody } from "@/components/Ui/Molecule/Post";
import { PostEditor } from "@/components/Ui/Molecule/Post/PostEditor";
import { PostHeader } from "@/components/Ui/Molecule/Post/PostHeader";
import { DEFAULT_AVATAR } from "@/constants";
import type { User } from "@/types";

import { useState } from "react";
import useSWRMutation from "swr/mutation";

interface CreatePostProps {
  user?: User;
}

export const CreatePost = ({ user }: CreatePostProps) => {
  const [isWrite, setIsWrite] = useState(true);
  const [height, setheight] = useState("300px");
  const [markdown, setMarkdown] = useState<string | undefined>();

  // const {trigger} = useSWRMutation("api/post")

  return (
    <div className="relative m-10 ring-1 ring-gray-300 rounded-xl p-5 w-[70%] bg-white max-w-[680px]">
      <PostHeader
        avatar={user?.avatar || DEFAULT_AVATAR}
        name={user?.name || ""}
        timeLine="방금 전"
      />
      {isWrite ? (
        <PostEditor
          style={{ height, overflow: "scroll" }}
          onMouseUp={(e) => setheight(e.currentTarget.style.height)}
          value={markdown}
          onChange={(e) => setMarkdown(e.currentTarget.value)}
        />
      ) : (
        <PostBody
          style={{ height, overflow: "scroll" }}
          children={markdown?.replaceAll("\n", "\n\n") || ""}
        />
      )}

      <div className="flex justify-end items-center">
        <Button
          value={isWrite ? "미리 보기" : "작성 하기"}
          onClick={() => setIsWrite((isWrite) => !isWrite)}
        />
        <Button value={"게시"} fill={true} />
      </div>
    </div>
  );
};
