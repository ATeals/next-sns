"use client";

import { ButtonIcon } from "@/components/Ui/Atom/Icon/ButtonIcon";
import mutateFetch from "@/utils/mutateFetch";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";

export default ({ postId, userId }: { postId: number; userId: number }) => {
  const router = useRouter();

  const { trigger } = useSWRMutation(
    "/api/post",
    (url) => mutateFetch(url, { method: "DELETE", body: { id: postId, userId } }),
    {
      onSuccess: () => {
        router.back();
      },
      onError: (err) => {},
    }
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    trigger();
  };
  return <ButtonIcon defaultIcon={"bi bi-trash text-gray-500"} onClick={handleClick} />;
};
