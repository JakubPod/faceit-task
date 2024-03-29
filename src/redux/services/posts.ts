import { Post } from "../../types";
import { timestamps } from "../mocks/timestamps";
import { api } from "./api";

const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      transformResponse: (response: Omit<Post, "timestampMs">[]) =>
        response.map((post, index) => ({
          ...post,
          timestampMs: timestamps[index % timestamps.length],
        })),
    }),
  }),
  overrideExisting: true,
});

export const { useGetPostsQuery } = postsApi;

export const useGetPostById = (id: number) => {
  return useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id === id),
    }),
  });
};
