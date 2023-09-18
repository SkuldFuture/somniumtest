import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UnsplashApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_LOCATION }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (term) => `search/photos?query=${term}`,
    }),
  }),
});

export const { useGetPhotosQuery } = UnsplashApi;
