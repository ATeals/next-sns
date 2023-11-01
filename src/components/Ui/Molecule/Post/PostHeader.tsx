import { DEFAULT_AVATAR } from "@/constants";
import { Avatar } from "../../Atom/Avatar";
import { Description } from "../../Atom/Description";
import { Title } from "../../Atom/Title";

interface PostHeaderProps {
  avatar?: string;
  name: string;
  timeLine?: string;
}

export const PostHeader = ({ avatar, name, timeLine }: PostHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <Avatar src={avatar || DEFAULT_AVATAR} rounded={true} size="md" />
        <Title className="ml-5">{name}</Title>
      </div>

      <div className="flex">{timeLine && <Description>{timeLine}</Description>} </div>
    </div>
  );
};
