import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Pricing from "./Components/Pricing/Pricing";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import CaseStudies from "./Components/CaseStudy/CaseStudies";
import CaseStudy from "./Components/CaseStudy/CaseStudy";
import CaseStudy1 from "./Components/CaseStudy/CaseStudies/CaseStudy1"
import CaseStudy2 from "./Components/CaseStudy/CaseStudies/CaseStudy2"
import CaseStudy3 from "./Components/CaseStudy/CaseStudies/CaseStudy3"
import CaseStudy4 from "./Components/CaseStudy/CaseStudies/CaseStudy4"
import CaseStudy5 from "./Components/CaseStudy/CaseStudies/CaseStudy5"
import CaseStudy6 from "./Components/CaseStudy/CaseStudies/CaseStudy6"
import CaseStudy7 from "./Components/CaseStudy/CaseStudies/CaseStudy7"
import CaseStudy8 from "./Components/CaseStudy/CaseStudies/CaseStudy8"
import CaseStudy9 from "./Components/CaseStudy/CaseStudies/CaseStudy9"
import CaseStudy10 from "./Components/CaseStudy/CaseStudies/CaseStudy10"
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing  />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />

        <Route path="case-studies" element={<CaseStudy />}>
          <Route path="case-study-1" element={<CaseStudy1 />} />
          <Route path="case-study-2" element={<CaseStudy2 />} />
          <Route path="case-study-3" element={<CaseStudy3 />} />
          <Route path="case-study-4" element={<CaseStudy4 />} />
          <Route path="case-study-5" element={<CaseStudy5 />} />
          <Route path="case-study-6" element={<CaseStudy6 />} />
          <Route path="case-study-7" element={<CaseStudy7 />} />
          <Route path="case-study-8" element={<CaseStudy8 />} />
          <Route path="case-study-9" element={<CaseStudy9 />} />
          <Route path="case-study-10" element={<CaseStudy10 />} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
