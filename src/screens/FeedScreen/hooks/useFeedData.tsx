import {
  getUserById,
  useGetPostsQuery,
  useGetUsersQuery,
} from "../../../redux/services";
import { FeedDataItem } from "../../../types";

interface FeedData {
  data: FeedDataItem[];
  isFetching: boolean;
  refetch: VoidFunction;
}

export const useFeedData = (numberOfPosts = 10): FeedData => {
  const postsQuery = useGetPostsQuery();
  const usersQuery = useGetUsersQuery();

  const posts = postsQuery.data || [];
  const users = usersQuery.data || [];

  const data = posts
    .map((post) => ({ ...post, author: getUserById(users, post.userId) }))
    .filter((item): item is FeedDataItem => !!item.author)
    .sort((a, b) => b.timestampMs - a.timestampMs)
    .slice(0, numberOfPosts);

  const refetch = () => {
    postsQuery.refetch();
    usersQuery.refetch();
  };

  return {
    data,
    refetch,
    isFetching: postsQuery.isFetching || usersQuery.isFetching,
  };
};
