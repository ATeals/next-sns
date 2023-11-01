"use client";

import { InputBox } from "../../Atom/InputBox";

interface PostBodyProps extends React.HTMLProps<HTMLTextAreaElement> {}

export const PostEditor = ({ ...props }: PostBodyProps) => {
  return (
    <div className="m-4 p-2 mb-0 pb-0 pl-10 border-l-2 border-l-gray-300">
      <InputBox {...props} resize={true} />
    </div>
  );
};
