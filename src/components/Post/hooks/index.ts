import { Like, User } from "@/types";
import mutateFetch from "@/utils/mutateFetch";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";

export interface Post {
  id: number;
  body: string;
  coverImg?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  userId: number;
  parentPostId?: number | null;
  user: User;
  childPosts?: Post[];
  likes?: Like[];
  depth: number;
}

export interface PostsResponse {
  posts: Post[];
  nextCursor: number;
}

export const postFetcher = {
  create: (body: { body: string; parentPostId?: string }) => mutateFetch("/api/post", { body }),

  update: ({ body, id }: { body: string; id: string }) =>
    mutateFetch("/api/post", { body: { body, id }, method: "PATCH" }),

  delete: ({ id }: { id: string }) => mutateFetch("/api/post", { body: { id }, method: "DELETE" }),

  getPostsPageNation: async ({ cursor, limit }: { cursor: number; limit: number }) => {
    return await (await fetch(`/api/post?cursor=${cursor}&limit=${limit}`)).json();
  },

  getPostById: () => {},
};

export const useInfinityPosts = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["POSTS"],
    queryFn: ({ pageParam = 0 }) => postFetcher.getPostsPageNation({ cursor: pageParam, limit: 5 }),
    getNextPageParam: (lastpage) => lastpage.nextCursor,
    initialPageParam: 0,
  });
  const posts = data?.pages.flatMap((page) => page.posts);
  const pageCursor = data?.pageParams[data.pageParams.length - 1];

  return { posts, pageCursor, fetchNextPage, isFetchingNextPage };
};

export const usePostMutation = () => {
  const createMutation = () => {
    const { mutate, isError, isSuccess, isPending, error } = useMutation({
      mutationKey: ["POSTS"],
      mutationFn: postFetcher.create,
    });

    return { mutate, isError, isSuccess, isPending, error };
  };

  const updateMutation = (postId: string) => {
    const { mutate, isError, isSuccess, isPending, error } = useMutation({
      mutationKey: ["POSTS", postId],
      mutationFn: ({ body }: { body: string }) => postFetcher.update({ body, id: postId }),
    });

    return { mutate, isError, isSuccess, isPending, error };
  };

  const deleteMutation = (postId: string) => {
    const { mutate, isError, isSuccess, isPending, error } = useMutation({
      mutationKey: ["POSTS", postId],
      mutationFn: () => postFetcher.delete({ id: postId }),
    });

    return { mutate, isError, isSuccess, isPending, error };
  };

  return { create: createMutation, update: updateMutation, delete: deleteMutation };
};

// export const usePost = ({ userId, postId }: { userId: string; postId: string }) => {
//   const { data } = useSuspenseQuery({
//     queryKey: ["POST", postId],
//     queryFn: () => mutateFetch(``),
//   });
// };
