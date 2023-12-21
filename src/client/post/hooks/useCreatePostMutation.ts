import { useMutation } from "@tanstack/react-query";
import { postFetcher } from "../api/postFetcher";
import { queryClient } from "@/components/QueryClient";
import { POST_QUERY_KEY } from "../constants";

export const useCreatePostMutation = ({
  onSuccess,
  onError,
}: { onSuccess?: () => unknown; onError?: () => unknown } = {}) => {
  const { mutate, isError, isSuccess, isPending, error } = useMutation({
    mutationKey: [POST_QUERY_KEY.DEFAULT],
    mutationFn: postFetcher.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["POSTS"] });
      if (onSuccess) onSuccess();
    },
    onError,
  });

  return { mutate, isError, isSuccess, isPending, error };
};
