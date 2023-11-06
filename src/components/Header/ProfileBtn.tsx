import { LinkIcon } from "../Ui/Atom/Icon/LinkIcon";

export default ({ userId, pathList }: { userId: string; pathList: string[] }) => {
  return (
    <LinkIcon
      href={`/user/${userId}`}
      className="p-7 hover:bg-gray-100 rounded-lg "
      defaultIcon={"bi bi-person text-gray-500"}
      clickedIcon={"bi bi-person-fill"}
      isClicked={pathList?.includes(String(userId))}
    />
  );
};
