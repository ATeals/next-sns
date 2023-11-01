"use client";

import { generateClassName } from "@/utils/generateClassName";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

interface PostBodyProps extends React.HTMLProps<HTMLDivElement> {
  children: string;
  className?: string;
}

export const PostBody = ({ children, className, ...props }: PostBodyProps) => {
  return (
    <div className="m-4 p-2 mb-0 pb-0 pl-10 border-l-2 border-l-gray-300" {...props}>
      <div
        className={generateClassName(
          "prose prose-stone lg:prose-l w-full prose-p:break-words prose-quoteless prose-p:my-1",
          className
        )}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
      </div>
    </div>
  );
};
