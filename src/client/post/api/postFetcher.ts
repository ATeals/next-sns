import mutateFetch from "@/utils/mutateFetch";
import { Post } from "../type";

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
