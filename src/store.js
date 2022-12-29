import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/slice";

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
