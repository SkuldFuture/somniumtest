import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhoto } from "types";

const COUNT = 15

export const UnsplashApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_LOCATION,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Client-ID ${process.env.REACT_APP_API_ACCESS_KEY}`
      );
      headers.set("Accept-Version", `${process.env.REACT_APP_API_VERSION}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getRandomPhotos: builder.query<IPhoto[], number | void>({
      query: (count) => `photos/random?count=${count || COUNT}`,
    }),
  }),
});

export const { useGetRandomPhotosQuery } = UnsplashApi;
