"use client";

import { Post, User } from "@/types";
import Link from "next/link";
import { PostHeader } from "./PostHeader";
import { PostBody } from "./PostBody";
import { PostFooter } from "./PostFooter";
import { LinkIcon } from "../Ui/Atom/Icon/LinkIcon";
import { ButtonIcon } from "../Ui/Atom/Icon/ButtonIcon";

export default ({ post, user }: { post: Post; user: User }) => {
  const {
    user: { name: ownerName, avatar: ownerAvatar, id: ownerId },
    body,
    id,
    childPosts,
    likes,
    updatedAt,
  } = post;

  return (
    <div className="border-2 border-gray rounded-lg p-5">
      <Link href={`/user/${ownerId}`}>
        <PostHeader name={ownerName} avatar={ownerAvatar} timeLine={updatedAt?.toString()} />
      </Link>
      <Link href={`/user/${ownerId}/post/${id}`}>
        <PostBody children={body} className="h-[300px] overflow-hidden" />
      </Link>
      <div className="px-5 border-l-2 border-l-gray-300 mx-4 [&>*]:mx-2">
        <LinkIcon defaultIcon={"bi bi-chat text-gray-500"} href={`/comment?parentPostId=${id}`} />
        <ButtonIcon
          defaultIcon={"bi bi-suit-heart text-gray-500"}
          onClick={(e) => console.log("like")}
          clickedIcon={"bi bi-suit-heart-fill text-red-500"}
          isClicked={likes?.some((like) => like.userId === user.id)}
        />
      </div>

      <PostFooter postId={id} comments={childPosts} likes={likes} />
    </div>
  );
};
