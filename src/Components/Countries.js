import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  addRecentCountries,
  setDetailsModalStatus,
  setCountries,
} from "../redux/users/countriesSlice";
import { Country_Query } from "../Queries/gqlquery";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import RecentlyExplored from "./RecentlyExplored";
import Details from "./Details";

function Countries(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const countries = useSelector((state) => state.countries?.countriesList);

  // const countriesLists = useSelector((state) => state.countries.countriesList);
  // const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();
  // const isModal = useSelector((state) => state.countries.isDetailsModalOpen);
  // console.log(isModal);

  const {
    data: countiesData,
    loading: countriesDataLoading,
    error: countriesDataError,
  } = useQuery(Country_Query);
  useEffect(() => {
    let countryList = [];
    if (!countiesData) return;

    countiesData.countries.forEach((country) => {
      countryList.push({
        ...country,
        languages: country.languages
          .map((language) => {
            return language.name;
          })
          .join(", "),
      });
    });

    dispatch(setCountries(countryList));
  }, [countiesData, dispatch]);

  const [columnDefs] = useState([
    { headerName: "Code", field: "code", headerCheckboxSelection: true },
    { headerName: "Name", field: "name" },
    { headerName: "Continent", field: "continent.name" },
    { headerName: "Capital", field: "capital" },
    { headerName: "Currency", field: "currency", tooltipField: "name" },
    {
      headerName: "Languages",
      field: "languages",
    },
    {
      headerName: "Country Detail",
      field: "countryDetail",
      cellRenderer: (param) => {
        // console.log(param);

        return (
          <button
            onClick={
              () => {
                dispatch(setDetailsModalStatus(param.data?.code));
                dispatch(addRecentCountries(param.data));
                onOpen();
              }
              // console.log("view country detail of country ", param.data?.code);
            }
          >
            View Details
          </button>
        );
      },
    },
  ]);
  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
  };
  if (countriesDataLoading) return <h1>Loading Please wait</h1>;

  if (countriesDataError)
    return (
      <h2>
        <pre>{countriesDataError.message}</pre>
      </h2>
    );
  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: "100vh", width: "100vw" }}
      >
        <AgGridReact
          tooltipShowDelay={{ tooltipShowDelay: 2 }}
          rowData={countries}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        ></AgGridReact>
      </div>
    </>
  );
}

export default Countries;
