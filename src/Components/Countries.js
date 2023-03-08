import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Country_Query = gql`
  {
    countries {
      code
      name
      continent {
        name
      }
      capital
      currency
      languages {
        name
      }
    }
  }
`;

function Countries(props) {
  const [countries, setCountries] = useState([]);
  const { data, loading, error } = useQuery(Country_Query);

  useEffect(() => {
    let countryList = [];
    if (data) {
      if (data.countries) {
        data.countries.forEach((country) => {
          countryList.push({
            ...country,
            languages: country.languages
              .map((language) => {
                return language.name;
              })
              .join(", "),
          });
        });
      }
    }
    setCountries(countryList);
  }, [data]);

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
  ]);
  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
  };
  if (loading) return <h1>Loading Please wait</h1>;

  if (error)
    return (
      <h2>
        <pre>{error.message}</pre>
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
