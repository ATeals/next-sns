"use client";

import { useContext } from "react";
import { postContext } from "./Main";
import { Avatar, Title } from "@/client/ui";
import { Description } from "@/client/ui";
import { elapsedTime } from "@/utils";
import { DEFAULT_AVATAR } from "@/constants";
import { User } from "@/types";

export const Header = ({ user }: { user?: User }) => {
  const post = useContext(postContext);

  const owner = post?.user;

  return (
    <div className="flex items-center justify-between group">
      <div className="flex">
        <Avatar
          src={post?.user.avatar || user?.avatar || DEFAULT_AVATAR}
          rounded={true}
          size="md"
        />
        <Title className="ml-5 group-hover:underline">{owner?.name || user?.name}</Title>
      </div>

      <div className="flex">
        {post?.createdAt && <Description>{elapsedTime(post.createdAt.toString())}</Description>}
      </div>
    </div>
  );
};
