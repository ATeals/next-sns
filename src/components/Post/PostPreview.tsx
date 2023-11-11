"use client";

import { Post, User } from "@/types";
import Link from "next/link";
import { PostHeader } from "./PostHeader";
import { PostBody } from "./PostBody";
import { PostFooter } from "./PostFooter";
import { LinkIcon } from "../Ui/Atom/Icon/LinkIcon";
import { ButtonIcon } from "../Ui/Atom/Icon/ButtonIcon";
import useSWRMutation from "swr/mutation";
import mutateFetch from "@/utils/mutateFetch";
import { useSWRConfig } from "swr";
import { unstable_serialize } from "swr/infinite";
import { getKey } from "@/app/PostInfinityList";

export default ({ post, user }: { post: Post; user: User }) => {
  const {
    user: { name: ownerName, avatar: ownerAvatar, id: ownerId },
    body,
    id,
    likes,
    updatedAt,
    depth,
  } = post;

  const { mutate } = useSWRConfig();

  const isLike = likes?.some((like) => like.userId === user.id);

  const { trigger: createTrigger, isMutating: isCreateMutating } = useSWRMutation(
    "/api/like",
    (url, { arg: { userId, postId } }: { arg: { userId: number; postId: number } }) =>
      mutateFetch(url, { body: { userId, postId } }),
    {
      onSuccess: () => {
        mutate(unstable_serialize(getKey));
        mutate(`/api/user/${ownerId}/post`);
      },
    }
  );

  const { trigger: deleteTrigger, isMutating: isDeleteMutating } = useSWRMutation(
    "/api/like",
    (url, { arg: { userId, postId } }: { arg: { userId: number; postId: number } }) =>
      mutateFetch(url, { body: { userId, postId }, method: "DELETE" }),
    {
      onSuccess: () => {
        mutate(unstable_serialize(getKey));
        mutate(`/api/user/${ownerId}/post`);
      },
    }
  );

  return (
    <div className="border-2 border-gray rounded-lg p-5">
      <Link href={`/user/${ownerId}`}>
        <PostHeader name={ownerName} avatar={ownerAvatar} timeLine={updatedAt?.toString()} />
      </Link>
      <Link href={`/user/${ownerId}/post/${id}`}>
        <PostBody children={body} className="h-[300px] overflow-hidden" />
      </Link>
      <div className="px-5 border-l-2 border-l-gray-300 mx-4 [&>*]:mx-2">
        {depth < 2 && (
          <LinkIcon defaultIcon={"bi bi-chat text-gray-500"} href={`/comment?parentPostId=${id}`} />
        )}
        {isLike ? (
          <ButtonIcon
            defaultIcon={"bi bi-suit-heart text-gray-500"}
            clickedIcon={"bi bi-suit-heart-fill text-red-500"}
            onClick={() => deleteTrigger({ userId: user.id, postId: id })}
            isClicked={isLike}
            disabled={isCreateMutating}
          />
        ) : (
          <ButtonIcon
            defaultIcon={"bi bi-suit-heart text-gray-500"}
            clickedIcon={"bi bi-suit-heart-fill text-red-500"}
            onClick={() => createTrigger({ userId: user.id, postId: id })}
            isClicked={isLike}
            disabled={isDeleteMutating}
          />
        )}
      </div>

      <PostFooter post={post} />
    </div>
  );
};
