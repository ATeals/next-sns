import { Avatar } from "../../Atom/Avatar";
import { Description } from "../../Atom/Description";

export const PostFooter = () => {
  return (
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
  );
};
