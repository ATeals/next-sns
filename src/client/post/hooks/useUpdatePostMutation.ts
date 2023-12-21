import { useMutation } from "@tanstack/react-query";
import { postFetcher } from "../api/postFetcher";
import { queryClient } from "@/components/QueryClient";
import { POST_QUERY_KEY } from "../constants";

export const useUpdatePostMutation = (
  postId: string,
  { onSuccess, onError }: { onSuccess?: () => unknown; onError?: () => unknown } = {}
) => {
  const { mutate, isError, isSuccess, isPending, error } = useMutation({
    mutationKey: [POST_QUERY_KEY.DEFAULT, postId],
    mutationFn: ({ body }: { body: string }) => postFetcher.update({ body, id: postId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["POSTS"] });
      if (onSuccess) onSuccess();
    },
    onError,
  });

  return { mutate, isError, isSuccess, isPending, error };
};
