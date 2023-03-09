import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./users/countriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
