import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useQuery } from "@apollo/client";
import { Country_Query } from "../../Queries/gqlquery";

const initialState = {
  countries: {
    loading: false,
    countryDetails: [],
    error: "",
  },
  recentCountries: [],
  isDetailsModalOpen: false,
};

export const fetchCountries = createAsyncThunk(
  "countriesList/fetchCountries",
  async () => {
    const { data, loading, error } = useQuery(Country_Query);
  }
);

const countriesSlice = createSlice({
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
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.countries.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries.loading = false;
      state.countries.countryDetails = action.payload;
      state.countries.error = "";
    });

    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.countries.loading = false;
      state.countries.countryDetails = [];
      state.countries.error = action.error.message;
    });
  },
});
export const { setCountries, addREcentCountries, countries } =
  countriesSlice.actions;

export default countriesSlice.reducer;
