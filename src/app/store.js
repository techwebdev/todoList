import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import TodoReducer from "../features/Todo/reduder";
export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
