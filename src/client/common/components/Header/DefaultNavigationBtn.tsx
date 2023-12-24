import { LinkIcon } from "@/client/ui";
import { HEAD_NAVIGATIONS } from "./constants";

export default ({ pathList }: { pathList: string[] }) => {
  return (
    <>
      {HEAD_NAVIGATIONS.map((nav) => {
        const isOn = nav.href === "/" ? "" : nav.href.replace("/", "");
        return (
          <LinkIcon
            key={nav.href}
            href={nav.href}
            className="p-7 hover:bg-gray-100 rounded-lg "
            defaultIcon={nav.defaultIcon}
            clickedIcon={nav.clickedIcon}
            isClicked={pathList?.includes(isOn)}
          />
        );
      })}
    </>
  );
};
