import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

const preloadedState = {
  contacts: {
    items: [],
    filter: "",
    isLoading: false,
  },
};

export const store = configureStore({
  reducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== "production",
});
