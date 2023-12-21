import { useMutation } from "@tanstack/react-query";
import { postFetcher } from "../api/postFetcher";
import { queryClient } from "@/components/QueryClient";
import { POST_QUERY_KEY } from "../constants";

export const useDeletePostMutation = (
  postId: string,
  { onSuccess, onError }: { onSuccess?: () => unknown; onError?: () => unknown } = {}
) => {
  return useMutation({
    mutationKey: [POST_QUERY_KEY.DEFAULT, postId],
    mutationFn: () => postFetcher.delete({ id: postId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["POSTS"] });
      if (onSuccess) onSuccess();
    },
    onError,
  });
};
