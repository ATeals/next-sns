"use client";

import { LinkIcon } from "@/Ui/Atom/Icon/LinkIcon";

import LogoutBtn from "./LogoutBtn";
import { usePathname } from "next/navigation";
import DefaultNavigationBtn from "./DefaultNavigationBtn";
import ProfileBtn from "./ProfileBtn";

export const Header = ({ userId }: { userId: string }) => {
  const pathList = usePathname()?.split("/").slice(1);

  return (
    <header className="z-[50] p-3 px-5 flex items-center justify-between fixed w-screen bg-white">
      <LinkIcon defaultIcon="bi bi-cup-hot-fill" size="4xl" href="/" />

      <nav className="p-5">
        <DefaultNavigationBtn pathList={pathList} />
        <ProfileBtn userId={userId} pathList={pathList} />
      </nav>
      <LogoutBtn />
    </header>
  );
};
