"use client";

import { generateClassName } from "@/utils/generateClassName";

interface IconLinkProps {
  defaultIcon: string;
  clickedIcon?: string;
  isClicked?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => unknown;
}

export const ButtonIcon = ({
  defaultIcon,
  clickedIcon = defaultIcon,
  isClicked = false,
  size = "2xl",
  onClick,
}: IconLinkProps) => {
  return (
    <button onClick={onClick}>
      <i className={generateClassName(isClicked ? clickedIcon : defaultIcon, `text-${size}`)} />
    </button>
  );
};
