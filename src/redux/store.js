import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counterSlice";
import counterSlice from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    counterSlice,
  },
});
