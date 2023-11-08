"use client";

import { PostBody } from "@/components/Post";
import { Button } from "@/components/Ui/Atom/Button";
import { InputBox } from "@/components/Ui/Atom/InputBox";

import { useState } from "react";

interface CreatePostProps {
  onPosting: (markdown: string) => unknown;
  previousMarkdown?: string;
  isMutating?: boolean;
}

export const PostEditor = ({ onPosting, previousMarkdown, isMutating }: CreatePostProps) => {
  const [isWrite, setIsWrite] = useState(true);
  const [height, setheight] = useState("300px");
  const [markdown, setMarkdown] = useState<string | undefined>(previousMarkdown);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (markdown && !isMutating) onPosting(markdown);
  };

  return (
    <form onSubmit={handleSubmit}>
      {isWrite ? (
        <div className="m-4 p-2 mb-0 pb-0 pl-10 border-l-2 border-l-gray-300">
          <InputBox
            style={{ height, overflow: "scroll" }}
            onMouseUp={(e) => setheight(e.currentTarget.style.height)}
            value={markdown}
            onChange={(e) => setMarkdown(e.currentTarget.value)}
            resize={true}
          />
        </div>
      ) : (
        <PostBody style={{ height, overflow: "scroll" }} children={markdown} />
      )}

      <div className="flex justify-end items-center">
        <Button
          value={isWrite ? "미리 보기" : "작성 하기"}
          onClick={() => setIsWrite((isWrite) => !isWrite)}
        />
        <Button value={"게시"} fill={true} type="submit" disabled={isMutating} />
      </div>
    </form>
  );
};
