"use client";

import { generateClassName } from "@/utils/generateClassName";
import Link from "next/link";

interface IconLinkProps {
  defaultIcon: string;
  clickedIcon?: string;
  isClicked?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  href: string;
}

export const ButtonIcon = ({
  defaultIcon,
  clickedIcon = defaultIcon,
  isClicked = false,
  size = "2xl",
  href,
}: IconLinkProps) => {
  return (
    <>
      {href.includes("http") ? (
        <Link href={href}>
          <i className={generateClassName(isClicked ? clickedIcon : defaultIcon, `text-${size}`)} />
          ;
        </Link>
      ) : (
        <a href={href}>
          <i className={generateClassName(isClicked ? clickedIcon : defaultIcon, `text-${size}`)} />
          ;
        </a>
      )}
    </>
  );
};
