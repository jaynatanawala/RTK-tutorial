import { combineReducers } from "@reduxjs/toolkit";
import tutorial from "./tutorial";
import user from "./user";

export const rootReducer = combineReducers({
  tutorial: tutorial,
  user: user,
});
