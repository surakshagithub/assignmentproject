import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Countries(props) {
  const [columnDefs] = useState([
    { headerName: "Code", field: "code", headerCheckboxSelection: true },
    { headerName: "Name", field: "name" },
    { headerName: "Continent", field: "Continent" },
    { headerName: "Capital", field: "Capital" },
    { headerName: "Currency", field: "Currency" },
    { headerName: "Languages", field: "Languages" },
  ]);
  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
  };
  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: "100vh", width: "100vw" }}
      >
        <AgGridReact
          rowData={props.users}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        ></AgGridReact>
      </div>
    </>
  );
}

export default Countries;
