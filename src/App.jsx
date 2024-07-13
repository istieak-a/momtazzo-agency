import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import BuildYourTeamWrapper from "./Components/BuildYourTeam/BuildYourTeamWrapper";
import BuildYourTeam from "./Components/BuildYourTeam/BuildYourTeam1";
// import BuildYourTeam from "./Components/BuildYourTeam/BuildYourTeam";
import ReduceCost from "./Components/pages/whyOutsource/ReduceCost/ReduceCost";
import ScaleFast from "./Components/pages/whyOutsource/ScaleFast/ScaleFast";
import WhyMicrosourcing from "./Components/pages/whyOutsource/WhyMicrosourcing/WhyMicroSourcing";
import WhyThePhilippines from "./Components/pages/whyOutsource/WhyThePhilippines/WhyThePhilippines";
import IncreaseQuality from "./Components/pages/whyOutsource/IncreaseQuality/IncreaseQuality";
import WhyOutsource from "./Components/pages/whyOutsource/WhyOutsource"; // Import the new component
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
import SalesSupport2 from "./Components/pages/Jobs/SalesSupport/SalesSupport";
import TechnicalSupport from "./Components/pages/Teams/TechnicalSupport/TechnicalSupport";
import Jobs from "./Components/pages/Jobs/Jobs";
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
import Pricing from "./Components/Pricing/Pricing";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import DataSecurity from "./Components/DataSecurity/DataSecurity";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing  />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/data-security" element={<DataSecurity />} />

        <Route path="why-outsource/" element={<WhyOutsource />}> {/* Use the WhyOutsource component */}
          <Route path="reduce-cost" element={<ReduceCost />} />
          <Route path="why-montazzo" element={<WhyMicrosourcing />} />  
          <Route path="why-india" element={<WhyThePhilippines />} />
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
        <Route path="job-roles" element={<Jobs />}>
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
          <Route path="sales-support" element={<SalesSupport2 />} />
          <Route path="social-media-specialist" element={<SocialMediaSpecialist />} />
          <Route path="software-developer" element={<SoftwareDeveloper />} />
          <Route path="talent-acquisition-specialist" element={<TalentAcquisitionSpecialist />} />
          <Route path="video-editor" element={<VideoEditor />} />
          <Route path="virtual-assistant" element={<VirtualAssistant />} />
          <Route path="web-developer" element={<WebDeveloper />} />
        </Route>
        <Route path="build-your-team" element={<BuildYourTeamWrapper />}>
        <Route index element={<BuildYourTeam />} />
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
