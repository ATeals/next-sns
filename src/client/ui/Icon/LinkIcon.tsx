"use client";

import { generateClassName } from "@/utils";
import Link from "next/link";

interface IconLinkProps {
  defaultIcon: string;
  clickedIcon?: string;
  isClicked?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  href: string;
  className?: string;
}

export const LinkIcon = ({
  defaultIcon,
  clickedIcon = defaultIcon,
  isClicked = false,
  size = "2xl",
  href,
  className,
}: IconLinkProps) => {
  return (
    <>
      {href.includes("http") ? (
        <a href={href} className={className}>
          <i className={generateClassName(isClicked ? clickedIcon : defaultIcon, `text-${size}`)} />
        </a>
      ) : (
        <Link href={href} className={className}>
          <i className={generateClassName(isClicked ? clickedIcon : defaultIcon, `text-${size}`)} />
        </Link>
      )}
    </>
  );
};
