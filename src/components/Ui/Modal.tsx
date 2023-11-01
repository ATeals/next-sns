"use client";

import { generateClassName } from "@/utils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ModalProps extends React.HTMLProps<HTMLDivElement> {}

export const Modal = ({ ...props }: ModalProps) => {
  const router = useRouter();
  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      router.back();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={generateClassName(
        "shadow-xl fixed z-[99] top-0 left-0 w-screen h-screen bg-black bg-opacity-30 flex justify-center items-center",
        props.className
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};
