"use client";

import { generateClassName } from "@/utils/generateClassName";

interface InputBoxProps extends React.HTMLProps<HTMLTextAreaElement> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => unknown;
  resize?: boolean;
}

export const InputBox = ({ onChange, resize = false, ...props }: InputBoxProps) => {
  return (
    <textarea
      className={generateClassName(
        "p-2",
        resize ? "" : "resize-none",
        "w-full",
        "outline-gray-300"
      )}
      onChange={onChange}
      {...props}
    />
  );
};
