import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Nopage from "./Components/Nopage";
import Navbar from "./Components/Navbar";
import Countries from "./Components/Countries";

const users = [
  {
    code: 1,
    name: "name",
    Continent: "continent",
    Capital: "capital",
    Currency: "currency",
    Languages: "language",
  },
  {
    code: 1,
    name: "name",
    Continent: "continent",
    Capital: "capital",
    Currency: "currency",
    Languages: "language",
  },
  {
    code: 1,
    name: "name",
    Continent: "continent",
    Capital: "capital",
    Currency: "currency",
    Languages: "language",
  },
];
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="countries" element={<Countries users={users} />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
