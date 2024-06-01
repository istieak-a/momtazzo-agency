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
import Industry from "./Components/pages/Industry/Industry";
import Education from "./Components/pages/Industry/Education/Education";
import EngineeringConstruction from "./Components/pages/Industry/EngineeringConstruction/EngineeringConstruction";
import FinancialServices from "./Components/pages/Industry/FinancialServices/FinancialServices";
import Healthcare from "./Components/pages/Industry/Healthcare/Healthcare";
import HospitalityTourism from "./Components/pages/Industry/HospitalityTourism/HospitalityTourism";
import InformationTechnology from "./Components/pages/Industry/InformationTechnology/InformationTechnology";
import LegalServices from "./Components/pages/Industry/LegalServices/LegalServices";
import Logistics from "./Components/pages/Industry/Logistics/Logistics";
import MediaCommunications from "./Components/pages/Industry/MediaCommunications/MediaCommunications";
import ProfessionalServices from "./Components/pages/Industry/ProfessionalServices/ProfessionalServices";
import RealEstate from "./Components/pages/Industry/RealEstate/RealEstate";
import RetailEcommerce from "./Components/pages/Industry/RetailEcommerce/RetailEcommerce";
import Telecommunications from "./Components/pages/Industry/Telecommunications/Telecommunications";
import Utilities from "./Components/pages/Industry/Utilities/Utilities";
import WholesaleTrade from "./Components/pages/Industry/WholesaleTrade/WholesaleTrade";
import Teams from "./Components/pages/Teams/Teams";
import Accounting from "./Components/pages/Teams/Accounting/Accounting";
import AdministrationSupport from "./Components/pages/Teams/AdministrationSupport/AdministrationSupport";
import CreativeServices from "./Components/pages/Teams/CreativeServices/CreativeServices";
import CustomerService from "./Components/pages/Teams/CustomerService/CustomerService";
import DataManagement from "./Components/pages/Teams/DataManagement/DataManagement";
import Finance from "./Components/pages/Teams/Finance/Finance";
import HealthInformationManagement from "./Components/pages/Teams/HealthInformationManagement/HealthInformationManagement";
import HRServices from "./Components/pages/Teams/HRServices/HRServices";
import Insurance from "./Components/pages/Teams/Insurance/Insurance";
import Marketing from "./Components/pages/Teams/Marketing/Marketing";
import Operations from "./Components/pages/Teams/Operations/Operations";
import QualityAssurance from "./Components/pages/Teams/QualityAssurance/QualityAssurance";
import SalesSupport from "./Components/pages/Teams/SalesSupport/SalesSupport";
import TechnicalSupport from "./Components/pages/Teams/TechnicalSupport/TechnicalSupport";
import Accountant from './Components/pages/Jobs/Accountant/Accountant'

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
        <Route path="industries" element={<Industry />}>
          <Route path="education" element={<Education />} />
          <Route path="engineering-construction" element={<EngineeringConstruction />} />
          <Route path="financial-services" element={<FinancialServices />} />
          <Route path="healthcare" element={<Healthcare />} />
          <Route path="hospitality-tourism" element={<HospitalityTourism />} />
          <Route path="information-technology" element={<InformationTechnology />} />
          <Route path="legal-services" element={<LegalServices />} />
          <Route path="logistics" element={<Logistics />} />
          <Route path="media-communications" element={<MediaCommunications />} />
          <Route path="professional-services" element={<ProfessionalServices />} />
          <Route path="real-estate" element={<RealEstate />} />
          <Route path="retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="telecommunications" element={<Telecommunications />} />
          <Route path="utilities" element={<Utilities />} />
          <Route path="wholesale-trade" element={<WholesaleTrade />} />
        </Route>
        <Route path="teams" element={<Teams />}>
          <Route path="accounting" element={<Accounting />} />
          <Route path="administration-support" element={<AdministrationSupport />} />
          <Route path="creative-services" element={<CreativeServices />} />
          <Route path="customer-service" element={<CustomerService />} />
          <Route path="data-management" element={<DataManagement />} />
          <Route path="finance" element={<Finance />} />
          <Route path="health-information-management" element={<HealthInformationManagement />} />
          <Route path="hr-services" element={<HRServices />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="operations" element={<Operations />} />
          <Route path="quality-assurance" element={<QualityAssurance />} />
          <Route path="sales-support" element={<SalesSupport />} />
          <Route path="technical-support" element={<TechnicalSupport />} />
        </Route>
        <Route path="/job-roles/accountant" element={<Accountant />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
