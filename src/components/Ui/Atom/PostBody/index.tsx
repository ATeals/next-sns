"use client";

import { generateClassName } from "@/utils/generateClassName";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

export const PostBody = ({ children, className }: { children: string; className?: string }) => {
  return (
    <div
      className={generateClassName(
        "prose prose-stone lg:prose-l w-full prose-p:break-words prose-quoteless",
        className
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
};
