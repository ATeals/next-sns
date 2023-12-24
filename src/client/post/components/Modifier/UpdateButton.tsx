import { useContext } from "react";
import { postContext } from "../post/Main";
import { LinkIcon } from "@/client/ui";

export const UpdateButton = () => {
  const post = useContext(postContext);

  return (
    post && (
      <LinkIcon
        defaultIcon="bi bi-pencil-square text-gray-500"
        href={`/update?postId=${post.id}`}
      />
    )
  );
};
