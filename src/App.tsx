import React from 'react';
import { Counter } from './features/counter/Counter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Nopage from './Components/Nopage';
import Navbar from './Components/Navbar';
import MainText from './Components/MainText';
import CountriesCard from './Components/CountriesCard';


function App() {
  return (
    < >
      <BrowserRouter>
      <Navbar/>
      <MainText />
      <CountriesCard/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
