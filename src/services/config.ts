import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://hn.algolia.com/api/v1/",
  prepareHeaders: (headers) => {
    return headers;
  },
});
