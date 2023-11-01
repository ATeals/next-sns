"use client";

import Link from "next/link";
import { Icon } from "../../Atom/Icon";
import { usePathname } from "next/navigation";

interface NavObject {
  href: string;
  defaultIcon: string;
  clickedIcon?: string;
}

export const Navigation = ({ NavList }: { NavList: NavObject[] }) => {
  const pathList = usePathname()?.split("/").slice(1);
  return (
    <nav className="p-5">
      {NavList.map((nav) => {
        const isOn = nav.href === "/" ? "" : nav.href;
        return (
          <Link key={nav.href} href={nav.href} className="p-7 hover:bg-gray-100 rounded-lg ">
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
