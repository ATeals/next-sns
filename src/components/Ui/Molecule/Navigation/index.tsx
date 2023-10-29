"use client";

import Link from "next/link";
import { Icon } from "../../Atom/Icon";
import { usePathname } from "next/navigation";

interface NavObject {
  href: string;
  defaultIcon: string;
  clickedIcon?: string;
}

export const NavList = [
  {
    href: "/",
    defaultIcon: "bi bi-house-door text-gray-500",
    clickedIcon: "bi bi-house-door-fill",
  },
  {
    href: "hello",
    defaultIcon: "bi bi-search text-gray-500",
    clickedIcon: "bi bi-search",
  },
  {
    href: "write",
    defaultIcon: "bi bi-pencil-square text-gray-500",
    clickedIcon: "bi bi-pencil-square",
  },
  {
    href: "heart",
    defaultIcon: "bi bi-heart text-gray-500",
    clickedIcon: "bi bi-heart-fill",
  },
  {
    href: "profile",
    defaultIcon: "bi bi-person text-gray-500",
    clickedIcon: "bi bi-person-fill",
  },
];

export const Navigation = ({ NavList }: { NavList: NavObject[] }) => {
  const pathList = usePathname()?.split("/").slice(1);
  return (
    <nav className="p-5">
      {NavList.map((nav) => {
        const isOn = nav.href === "/" ? "" : nav.href;
        return (
          <Link key={nav.href} href={nav.href} className="p-5 hover:bg-gray-100 rounded-lg ">
            <Icon
              defaultIcon={nav.defaultIcon}
              clickedIcon={nav.clickedIcon}
              isClicked={pathList?.includes(isOn)}
            />
          </Link>
        );
      })}
    </nav>
  );
};
