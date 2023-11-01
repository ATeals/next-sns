"use client";

import { Navigation } from "@/Ui/Molecule/Navigation";
import { LinkIcon } from "@/Ui/Atom/Icon/LinkIcon";
import { ButtonIcon } from "../../Atom/Icon/ButtonIcon";
import useMutation from "@/hooks/useMutation";
import { HEAD_NAVIGATIONS } from "@/constants";

export const Header = () => {
  const { mutate, state } = useMutation({ onSussess: () => window.location.reload() });
  const logout = () => {
    mutate("/api/auth", "DELETE");
  };

  return (
    <header className="z-[50] p-3 px-5 flex items-center justify-between fixed w-screen bg-white">
      <LinkIcon defaultIcon="bi bi-cup-hot-fill" size="4xl" href="/" />
      <Navigation NavList={HEAD_NAVIGATIONS} />
      <ButtonIcon defaultIcon="bi bi-door-closed" onClick={logout} />
    </header>
  );
};
