import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../components/carslice.js"

export const store = configureStore({
  reducer: {
    car: carSlice.reducer,
  },
});