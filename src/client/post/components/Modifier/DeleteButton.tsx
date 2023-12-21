import { ButtonIcon } from "@/components/Ui/Atom/Icon/ButtonIcon";
import { useDeletePostMutation } from "../../hooks";
import { useContext } from "react";
import { postContext } from "../post/Main";

export const DeleteButton = () => {
  const post = useContext(postContext);

  const { mutate } = useDeletePostMutation(String(post?.id));

  const handleClick = () => {
    mutate();
  };

  return <ButtonIcon defaultIcon={"bi bi-trash text-gray-500"} onClick={handleClick} />;
};
