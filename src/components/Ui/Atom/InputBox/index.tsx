"use client";

import { generateClassName } from "@/utils/generateClassName";

interface InputBoxProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => unknown;
  cols?: number;
  rows?: number;
  resize?: boolean;
}

export const InputBox = ({ onChange, cols = 50, rows = 5, resize = false }: InputBoxProps) => {
  return (
    <textarea
      className={generateClassName("m-2 p-2", resize ? "" : "resize-none")}
      cols={cols}
      rows={rows}
      onChange={onChange}
    />
  );
};
