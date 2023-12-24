"use client";

import { useContext } from "react";
import { postContext } from "./Main";
import { generateClassName } from "@/utils";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PostBodyProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: string;
}

export const Body = ({ className, children, ...props }: PostBodyProps) => {
  const post = useContext(postContext);
  return (
    <div className="m-4 p-2 mb-0 pb-0 pl-10 border-l-2 border-l-gray-300" {...props}>
      <div
        className={generateClassName(
          "prose prose-stone lg:prose-l w-full prose-p:break-words prose-quoteless prose-p:my-1",
          className
        )}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{children || post?.body}</ReactMarkdown>
      </div>
    </div>
  );
};
