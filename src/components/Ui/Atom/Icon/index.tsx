"use client";

import { generateClassName } from "@/utils";

interface IconLinkProps {
  defaultIcon: string;
  clickedIcon?: string;
  isClicked?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "6xl" | "8xl" | string;
}

export const Icon = ({
  defaultIcon,
  clickedIcon = defaultIcon,
  isClicked = false,
  size = "2xl",
}: IconLinkProps) => {
  return <i className={generateClassName(isClicked ? clickedIcon : defaultIcon, `text-${size}`)} />;
};
