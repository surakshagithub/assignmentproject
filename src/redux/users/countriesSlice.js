import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countriesList: [],
  recentCountries: [],
  isDetailsModalOpen: "",
};

const countriesSlice = createSlice({
  name: "countriesList",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countriesList = action.payload;
    },
    addRecentCountries: (state, action) => {
      state.recentCountries.unshift(action.payload);
    },
    setDetailsModalStatus: (state, action) => {
      state.isDetailsModalOpen = action.payload;
    },
  },
});
export const { setCountries, addRecentCountries, setDetailsModalStatus } =
  countriesSlice.actions;

export default countriesSlice.reducer;
