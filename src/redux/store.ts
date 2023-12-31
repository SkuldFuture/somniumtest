import { configureStore } from "@reduxjs/toolkit";
import { UnsplashApi } from "./UnsplashApi";

export const store = configureStore({
  reducer: {
    [UnsplashApi.reducerPath]: UnsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UnsplashApi.middleware),
});

// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
