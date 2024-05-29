import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import ReduceCost from "./Components/pages/whyOutsource/ReduceCost/ReduceCost";
import ScaleFast from "./Components/pages/whyOutsource/ScaleFast/ScaleFast";
import WhyMicrosourcing from "./Components/pages/whyOutsource/WhyMicrosourcing/WhyMicroSourcing";
import WhyThePhilippines from "./Components/pages/whyOutsource/WhyThePhilippines/WhyThePhilippines";
import IncreaseQuality from "./Components/pages/whyOutsource/IncreaseQuality/IncreaseQuality";
import WhyOutsource from "./Components/pages/whyOutsource/WhyOutsource"; // Import the new component

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="why-outsource/" element={<WhyOutsource />}> {/* Use the WhyOutsource component */}
          <Route path="reduce-cost" element={<ReduceCost />} />
          <Route path="why-microsourcing" element={<WhyMicrosourcing />} />  
          <Route path="why-philippines" element={<WhyThePhilippines />} />
          <Route path="scale-fast" element={<ScaleFast />} />
          <Route path="increase-quality-efficiency" element={<IncreaseQuality />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
