import { useInfiniteQuery } from "@tanstack/react-query";
import { postFetcher } from "../api/postFetcher";
import { POST_QUERY_KEY } from "../constants";

export const useInfinityPosts = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [POST_QUERY_KEY.DEFAULT],
    queryFn: ({ pageParam = 0 }) => postFetcher.getPostsPageNation({ cursor: pageParam, limit: 5 }),
    getNextPageParam: (lastpage) => lastpage.nextCursor,
    initialPageParam: 0,
  });

  const posts = data?.pages.flatMap((page) => page.posts);
  const pageCursor = data?.pageParams[data.pageParams.length - 1];

  return { posts, pageCursor, fetchNextPage, isFetchingNextPage };
};
