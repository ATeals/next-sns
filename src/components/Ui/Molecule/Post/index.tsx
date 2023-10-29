import Link from "next/link";
import { Avatar } from "../../Atom/Avatar";
import { Description } from "../../Atom/Description";
import { PostBody } from "../../Atom/PostBody";
import { Title } from "../../Atom/Title";
import { Icon } from "../../Atom/Icon";
import { usePathname } from "next/navigation";
import { NavList } from "../Navigation";

const PostInteractionControls = [
  {
    href: "like",
    defaultIcon: "bi bi-heart ",
    clickedIcon: "bi bi-heart-fill text-red-500",
  },
  {
    href: "/",
    defaultIcon: "bi bi-chat",
  },
  {
    href: "/",
    defaultIcon: "bi bi-box-arrow-up-right",
  },
];
export const Post = () => {
  const pathList = usePathname()?.split("/").slice(1);

  return (
    <section className="m-5 p-2">
      <div className="flex items-center justify-between">
        <div className="flex">
          <Avatar
            src="https://i.pinimg.com/474x/63/4c/53/634c53818319ec85a06a172442db9e16.jpg"
            rounded={true}
            size="md"
          />
          <Title className="ml-5">고먐미</Title>
        </div>

        <div className="flex">
          <Description>5분전</Description>
        </div>
      </div>

      <div className="m-4 p-2 mb-0 pb-0 pl-10 border-l-2 border-l-gray-300">
        <PostBody
          children={`# hello \n\n asdasd \n\n - hola \n\n ## asdasd`}
          className="max-h-[250px] overflow-hidden"
        />
        <div className="flex mt-5">
          <Link href={"/chat"}>
            <Icon defaultIcon="bi bi-chat" size="lg" />
          </Link>
        </div>
      </div>

      <div className="flex items-center [&>*]:px-1">
        <div className="m-2 ml-0">
          <Avatar
            src="https://i.pinimg.com/474x/63/4c/53/634c53818319ec85a06a172442db9e16.jpg"
            rounded={true}
            size="sm"
          />
        </div>

        <Description size="sm">댓글 1개</Description>
        <Description size="sm">좋아요 1개</Description>
      </div>
    </section>
  );
};
