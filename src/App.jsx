import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
};

export default App;
