import { useContext } from "react";
import { postContext } from "./Main";
import { Title } from "@/components/Ui/Atom/Title";
import { Avatar } from "@/components/Ui/Atom/Avatar";
import { Description } from "@/components/Ui/Atom/Description";
import { elapsedTime } from "@/utils";
import { DEFAULT_AVATAR } from "@/constants";

export const Header = () => {
  const post = useContext(postContext);

  const owner = post?.user;

  return (
    <div className="flex items-center justify-between group">
      <div className="flex">
        <Avatar src={post?.user.avatar || DEFAULT_AVATAR} rounded={true} size="md" />
        <Title className="ml-5 group-hover:underline">{String(owner?.name)}</Title>
      </div>

      <div className="flex">
        {post?.createdAt && <Description>{elapsedTime(post.createdAt.toString())}</Description>}{" "}
      </div>
    </div>
  );
};
