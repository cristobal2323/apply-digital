import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./config";

//types
import { INews } from "../interfaces";

type Data = INews;
type ParametersGetNews = { page: number; query: string };

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: baseQuery,
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getNews: builder.query<Data, ParametersGetNews>({
      query: ({ page, query }) => ({
        url: `search_by_date`,
        params: { page, query },
      }),

      providesTags: () => ["News"],
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetNewsQuery } = newsApi;
