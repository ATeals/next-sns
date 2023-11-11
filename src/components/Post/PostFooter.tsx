import { Like, Post } from "@/types";
import { Avatar } from "../Ui/Atom/Avatar";
import { Description } from "../Ui/Atom/Description";
import Link from "next/link";

export const PostFooter = ({ post }: { post: Post }) => {
  const { likes, user: owner, id } = post;
  return (
    <div className="flex items-center [&>*]:px-1">
      <div className="m-2 ml-0">
        <Avatar
          src="https://i.pinimg.com/474x/63/4c/53/634c53818319ec85a06a172442db9e16.jpg"
          rounded={true}
          size="sm"
        />
      </div>

      <Link href={`/user/${owner.id}/post/${id}`}>
        <Description className="hover:underline" size="sm">
          댓글 {post?.childPosts?.length || 0}개
        </Description>
      </Link>
      <Description size="sm">좋아요 {likes?.length || 0}개</Description>
    </div>
  );
};
