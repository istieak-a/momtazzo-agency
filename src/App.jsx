import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Pricing from "./Components/Pricing/Pricing";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import CaseStudies from "./Components/CaseStudy/CaseStudies";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
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
import BuildYourTeam from "./Components/BuildYourTeam/BuildYourTeam";
import Accountant from "./Components/pages/Jobs/Accountant/Accountant";
import AdministrativeAssistant from "./Components/pages/Jobs/AdministrativeAssistant/AdministrativeAssistant";
import CollectionSpecialist from "./Components/pages/Jobs/CollectionSpecialist/CollectionSpecialist";
import CustomerServiceRep from "./Components/pages/Jobs/CustomerServiceRep/CustomerServiceRep";
import DataAnalyst from "./Components/pages/Jobs/DataAnalyst/DataAnalyst";
import DataEntrySpecialist from "./Components/pages/Jobs/DataEntrySpecialist/DataEntrySpecialist";
import DigitalMarketingSpecialist from "./Components/pages/Jobs/DigitalMarketingSpecialist/DigitalMarketingSpecialist";
import EnrollmentAdministrator from "./Components/pages/Jobs/EnrollmentAdministrator/EnrollmentAdministrator";
import ExecutiveAssistant from "./Components/pages/Jobs/ExecutiveAssistant/ExecutiveAssistant";
import GraphicDesigner from "./Components/pages/Jobs/GraphicDesigner/GraphicDesigner";
import HrSpecialist from "./Components/pages/Jobs/HrSpecialist/HrSpecialist";
import LogisticsCoordinator from "./Components/pages/Jobs/LogisticsCoordinator/LogisticsCoordinator";
import MarketingSpecialist from "./Components/pages/Jobs/MarketingSpecialist/MarketingSpecialist";
import MedicalBillingSpecialist from "./Components/pages/Jobs/MedicalBillingSpecialist/MedicalBillingSpecialist";
import OrderProcessingSpecialist from "./Components/pages/Jobs/OrderProcessingSpecialist/OrderProcessingSpecialist";
import PayrollSpecialist from "./Components/pages/Jobs/PayrollSpecialist/PayrollSpecialist";
import PpcSemSpecialist from "./Components/pages/Jobs/Ppc&SemSpecialist/Ppc&SemSpecialist";
import QualityAssuranceSpecialist from "./Components/pages/Jobs/QualityAssuranceSpecialist/QualityAssuranceSpecialist";
import RealEstateAssistant from "./Components/pages/Jobs/RealEstateAssistant/RealEstateAssistant";
import ReservationBookingAgent from "./Components/pages/Jobs/ReservationBookingAgent/ReservationBookingAgent";
import SeoSpecialist from "./Components/pages/Jobs/SeoSpecialist/SeoSpecialist";
import SocialMediaSpecialist from "./Components/pages/Jobs/SocialMediaSpecialist/SocialMediaSpecialist";
import SoftwareDeveloper from "./Components/pages/Jobs/SoftwareDeveloper/SoftwareDeveloper";
import TalentAcquisitionSpecialist from "./Components/pages/Jobs/TalentAcquisitionSpecialist/TalentAcquisitionSpecialist";
import VideoEditor from "./Components/pages/Jobs/VideoEditor/VideoEditor";
import VirtualAssistant from "./Components/pages/Jobs/VirtualAssistant/VirtualAssistant";
import WebDeveloper from "./Components/pages/Jobs/WebDeveloper/WebDeveloper";
import SalesSupport from "./Components/pages/Jobs/SalesSupport/SalesSupport";
import BuildYourTeamWrapper from "./Components/BuildYourTeam/BuildYourTeamWrapper";
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
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/build-your-team" element={<BuildYourTeam />} />
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
        <Route path="build-your-team" element={<BuildYourTeamWrapper />}>
          <Route path="accountant" element={<Accountant />} />
          <Route path="administrative-assistant" element={<AdministrativeAssistant />} />
          <Route path="collection-specialist" element={<CollectionSpecialist />} />
          <Route path="customer-service-rep" element={<CustomerServiceRep />} />
          <Route path="data-analyst" element={<DataAnalyst />} />
          <Route path="data-entry-specialist" element={<DataEntrySpecialist />} />
          <Route path="digital-marketing-specialist" element={<DigitalMarketingSpecialist />} />
          <Route path="enrollment-administrator" element={<EnrollmentAdministrator />} />
          <Route path="executive-assistant" element={<ExecutiveAssistant />} />
          <Route path="graphic-designer" element={<GraphicDesigner />} />
          <Route path="hr-specialist" element={<HrSpecialist />} />
          <Route path="logistics-coordinator" element={<LogisticsCoordinator />} />
          <Route path="marketing-specialist" element={<MarketingSpecialist />} />
          <Route path="medical-billing-specialist" element={<MedicalBillingSpecialist />} />
          <Route path="order-processing-specialist" element={<OrderProcessingSpecialist />} />
          <Route path="payroll-specialist" element={<PayrollSpecialist />} />
          <Route path="ppc-sem-specialist" element={<PpcSemSpecialist />} />
          <Route path="quality-assurance-specialist" element={<QualityAssuranceSpecialist />} />
          <Route path="real-estate-assistant" element={<RealEstateAssistant />} />
          <Route path="reservation-booking-agent" element={<ReservationBookingAgent />} />
          <Route path="seo-specialist" element={<SeoSpecialist />} />
          <Route path="sales-support" element={<SalesSupport />} />
          <Route path="social-media-specialist" element={<SocialMediaSpecialist />} />
          <Route path="software-developer" element={<SoftwareDeveloper />} />
          <Route path="talent-acquisition-specialist" element={<TalentAcquisitionSpecialist />} />
          <Route path="video-editor" element={<VideoEditor />} />
          <Route path="virtual-assistant" element={<VirtualAssistant />} />
          <Route path="web-developer" element={<WebDeveloper />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
