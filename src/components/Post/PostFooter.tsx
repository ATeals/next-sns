import { Like, Post } from "@/types";
import { Avatar } from "../Ui/Atom/Avatar";
import { Description } from "../Ui/Atom/Description";

export const PostFooter = ({
  postId,
  comments,
  likes,
}: {
  postId?: number;
  comments?: Post[];
  likes?: Like[];
}) => {
  return (
    <div className="flex items-center [&>*]:px-1">
      <div className="m-2 ml-0">
        <Avatar
          src="https://i.pinimg.com/474x/63/4c/53/634c53818319ec85a06a172442db9e16.jpg"
          rounded={true}
          size="sm"
        />
      </div>

      <Description size="sm">댓글 {comments?.length || 0}개</Description>
      <Description size="sm">좋아요 {likes?.length || 0}개</Description>
    </div>
  );
};
