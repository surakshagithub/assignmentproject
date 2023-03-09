import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Nopage from "./Components/Nopage";
import Navbar from "./Components/Navbar";
import Countries from "./Components/Countries";
import Details from "./Components/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Details />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="countries" element={<Countries />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
