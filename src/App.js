import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Nopage from "./Components/Nopage";
import Navbar from "./Components/Navbar";
import Countries from "./Components/Countries";
import { useDispatch, useSelector } from "react-redux";
import CountryDetailModal from "./Components/CountryDetailModal";
import { setDetailsModalStatus } from "./redux/users/countriesSlice";
import Toggle from "./Components/Toggle";

function App() {
  const dispatch = useDispatch();
  const isModal = useSelector((state) => state.countries.isDetailsModalOpen);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toggle />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="countries" element={<Countries />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>

      {/* modal component */}
      {Boolean(isModal.length) && (
        <CountryDetailModal
          isOpen={isModal}
          onClose={() => {
            dispatch(setDetailsModalStatus(""));
          }}
        />
      )}
    </>
  );
}

export default App;
