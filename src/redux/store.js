import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./todoApi";
import { usersApi } from "./usersApi";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware, usersApi.middleware),
});
