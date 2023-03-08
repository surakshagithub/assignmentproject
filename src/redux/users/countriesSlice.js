import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  recentCountries: [],
  isDetailsModalOpen: false,
};

export const countriesSlice = createSlice({
  name: "countriesList",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    addREcentCountries: (state, action) => {},
    setDetailsModalStatus: (state, action) => {
      state.isDetailsModalOpen = action.payload;
    },
  },
});
export const { setCountries, addREcentCountries, countries } =
  countriesSlice.actions;

export default countriesSlice.reducer;
