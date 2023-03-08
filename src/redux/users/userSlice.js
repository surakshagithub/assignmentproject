import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    recentCountries: (state, action) => {},
    isDetailsModalOpen: (state, action) => {},
    countries: (state, action) => {},
  },
});
export const { recentCountries, isDetailsModalOpen, countries } =
  userSlice.actions;

export default userSlice.reducer;
