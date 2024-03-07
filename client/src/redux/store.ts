import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { api } from "./api";
import { answerSlice } from "./reducers/answerSlice";
import { stepSlice } from "./reducers/stepSlice";

export const reducer = combineReducers({
  [api.reducerPath]: api.reducer,

  [answerSlice.name]: answerSlice.reducer,
  [stepSlice.name]: stepSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
