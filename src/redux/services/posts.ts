import { Post } from "../../types";
import { getRandomTimestamp } from "../../utils/date";
import { api } from "./api";

const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      transformResponse: (response: Omit<Post, "timestampMs">[]) =>
        response
          .slice(0, 10)
          .map((post) => ({ ...post, timestampMs: getRandomTimestamp() })),
    }),
  }),
  overrideExisting: true,
});

export const { useGetPostsQuery } = postsApi;
