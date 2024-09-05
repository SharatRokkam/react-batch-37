// method to create the store
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
