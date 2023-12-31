"use client";

import { generateClassName } from "@/client/common/utils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ModalProps extends React.HTMLProps<HTMLDivElement> {}

export const Modal = ({ ...props }: ModalProps) => {
  const router = useRouter();

  useEffect(() => {
    const y = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${y}px`;

    return () => {
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, window.scrollY);
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
