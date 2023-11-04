"use client";

import { Navigation } from "@/Ui/Molecule/Navigation";
import { LinkIcon } from "@/Ui/Atom/Icon/LinkIcon";

import { HEAD_NAVIGATIONS } from "@/constants";
import LogoutBtn from "./LogoutBtn";

export const Header = () => {
  return (
    <header className="z-[50] p-3 px-5 flex items-center justify-between fixed w-screen bg-white">
      <LinkIcon defaultIcon="bi bi-cup-hot-fill" size="4xl" href="/" />
      <Navigation NavList={HEAD_NAVIGATIONS} />
      <LogoutBtn />
    </header>
  );
};
