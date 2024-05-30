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
import HowItWorks from "./Components/pages/HowItWorks/HowItWorks";
import HowOffshoringWorks from "./Components/pages/HowItWorks/HowOffshoringWorks/HowOffshoringWorks";
import IsItForYou from "./Components/pages/HowItWorks/IsItForYou/IsItForYou";
import TheKeysToSuccess from "./Components/pages/HowItWorks/TheKeysToSuccess/TheKeysToSuccess";
import OffshoreStaffing from "./Components/pages/HowItWorks/OffshoreStaffing/OffshoreStaffing";

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
        <Route path="how-it-works" element={<HowItWorks />}>
          <Route path="how-offshoring-works" element={<HowOffshoringWorks />} />
          <Route path="is-it-for-you" element={<IsItForYou />} />
          <Route path="the-keys-to-success" element={<TheKeysToSuccess />} />
          <Route path="offshore-staffing" element={<OffshoreStaffing />} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
