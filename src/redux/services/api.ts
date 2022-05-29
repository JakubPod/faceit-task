import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: () => ({}),
});
