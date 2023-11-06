import { DEFAULT_AVATAR } from "@/constants";
import { Avatar } from "../Ui/Atom/Avatar";
import { Title } from "../Ui/Atom/Title";
import { Description } from "../Ui/Atom/Description";
import { elapsedTime } from "@/utils";

interface PostHeaderProps {
  avatar?: string | null;
  name: string;
  timeLine?: string;
}

export const PostHeader = ({ avatar, name, timeLine }: PostHeaderProps) => {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex">
        <Avatar src={avatar || DEFAULT_AVATAR} rounded={true} size="md" />
        <Title className="ml-5 group-hover:underline">{name}</Title>
      </div>

      <div className="flex">{timeLine && <Description>{elapsedTime(timeLine)}</Description>} </div>
    </div>
  );
};
