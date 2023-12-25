"use client";

import { generateClassName } from "@/client/common/utils/generateClassName";
import { HtmlHTMLAttributes, ReactNode } from "react";

type TitleProps = Omit<HtmlHTMLAttributes<HTMLParagraphElement>, "className" | "children"> & {
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const SizeMap = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-xl",
};

export const Description = ({ className, children, size = "md", ...props }: TitleProps) => {
  return (
    <p className={generateClassName("text-gray-500", SizeMap[size], className)} {...props}>
      {children}
    </p>
  );
};
