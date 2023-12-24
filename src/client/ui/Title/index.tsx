"use client";

import { generateClassName } from "@/utils/generateClassName";
import { HtmlHTMLAttributes, ReactElement, ReactNode } from "react";

interface TitleProps extends Omit<React.HTMLProps<HTMLHeadingElement>, "size"> {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const SizeMap = {
  sm: "text-md",
  md: "text-2xl",
  lg: "text-4xl",
};

export const Title = ({ className, size = "md", children, color, ...props }: TitleProps) => {
  return (
    <h1
      className={generateClassName("font-bold", SizeMap[size] || "text-2xl", className)} // 기본값 설정
      style={{ color }}
      {...props}
    >
      {children}
    </h1>
  );
};
