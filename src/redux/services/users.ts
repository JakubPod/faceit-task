import { User } from "../../types";
import { avatars } from "../mocks/avatars";
import { api } from "./api";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
      transformResponse: (response: Omit<User, "avatarUrl">[]) =>
        response
          .slice(0, 10)
          .map((user, index) => ({ ...user, avatarUrl: avatars[index] })),
    }),
  }),
  overrideExisting: true,
});

export const { useGetUsersQuery } = usersApi;
