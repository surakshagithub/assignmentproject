import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCountries,
  isDetailsModalOpen,
  countries,
} from "../redux/users/countriesSlice";

function GetCountries() {
  const countryName = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Country Name : {countryName}</h3>
      <button onClick={() => dispatch(addCountries())}>
        Fetch Country Name
      </button>
    </>
  );
}

export default GetCountries;
