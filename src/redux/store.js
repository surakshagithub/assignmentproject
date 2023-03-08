import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import countriesReducer from "./users/countriesSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    countries: countriesReducer,
  },
});

export default store;
