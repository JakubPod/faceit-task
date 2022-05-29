import { User } from "../../types";
import { avatars } from "../mocks/avatars";
import { timestamps } from "../mocks/timestamps";
import { api } from "./api";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
      transformResponse: (
        response: Omit<User, "avatar" | "joinedOnTimestampMs">[]
      ) =>
        response.map((user, index) => ({
          ...user,
          avatar: avatars[index],
          joinedOnTimestampMs: timestamps[index + 10],
        })),
    }),
  }),
  overrideExisting: true,
});

export const { useGetUsersQuery } = usersApi;

export const getUserById = (users: User[], id: number | undefined) =>
  users.find((user) => user.id === id);

export const useGetUserById = (id: number | undefined) => {
  return useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      user: data && getUserById(data, id),
    }),
  });
};
