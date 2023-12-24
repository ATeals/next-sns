"use client";

import { generateClassName } from "@/client/common/utils";

interface IconLinkProps {
  defaultIcon: string;
  clickedIcon?: string;
  isClicked?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => unknown;
}

export const ButtonIcon = ({
  defaultIcon,
  clickedIcon = defaultIcon,
  isClicked = false,
  size = "2xl",
  onClick,
  disabled = false,
}: IconLinkProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      <i className={generateClassName(isClicked ? clickedIcon : defaultIcon, `text-${size}`)} />
    </button>
  );
};
