import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import boardSlice from "./boardSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    board: boardSlice,
  },
});
