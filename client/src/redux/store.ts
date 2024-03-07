import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { api } from "./api";

export const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;