import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const LogisticsCoordinator = () => {
  const heroBanner = {
    title: "Outsource Logistics Coordinator to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/logistics-coordinator/MS_HeaderBanner_Logistics%20Coordinator.jpg",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/logistics-coordinator/MS_HeaderBanner-M_Logistics-Coordinator.jpg"
  };
  const experience = {
    title: "How experienced are our logistics coordinators?",
    description: "Our logistics coordinators offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of logistics experience",
        responsibilities: [
          "Executing basic logistical tasks, such as order processing, data entry and tracking shipments",
          "Handling shipping and receiving documentation, ensuring accuracy and organizing records",
          "Engaging in internal communication, relaying information between different departments within the organization and external partners, such as carriers and suppliers"
        ]
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of logistics experience",
        responsibilities: [
          "End-to-end coordination of logistics processes overseeing order fulfilment, transportation, inventory and warehouse operations",
          "Troubleshooting logistical issues, addressing exceptions and finding solutions to optimize supply chain operations",
          "Interacting directly with vendors, suppliers and customers to negotiate terms, manage relationships and address inquiries or concerns"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of logistics experience",
        responsibilities: [
          "Developing and implementing logistics strategies to improve overall supply chain efficiency and reduce costs",
          "Leading and mentoring junior and intermediate logistics staff, providing guidance and expertise"
        ]
      }
    }
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/SAP-1.png?width=267&height=150&name=SAP-1.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Oracle%20Transportation%20Management.png?width=300&height=67&name=Oracle%20Transportation%20Management.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Excel.png?width=300&height=132&name=Excel.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/JDA.png?width=233&height=150&name=JDA.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Intuit_QuickBooks_logo.png?width=300&height=58&name=Intuit_QuickBooks_logo.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/FreightPOP.png?width=300&height=57&name=FreightPOP.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/MercuryGate.png?width=300&height=42&name=MercuryGate.png"
  ];
  
  return (
    <div>
      <HeroBanner4
        title={heroBanner.title}
        img={heroBanner.img}
        imgRes={heroBanner.imgRes}
      />

<div className="section-margin grid items-center gap-5 md:grid-cols-2 md:gap-20 md:py-20">
        <h1 className="font-outfit text-4xl font-semibold md:text-5xl ">
        Improve your logistics capabilities with dedicated Indian teams.
        </h1>
        <p>
        Need help effectively managing and optimizing supply chain and distribution processes, including inventory control, transportation and order fulfilment? Experienced teams in India are skilled at managing the most crucial logistic coordination tasks, including inventory management, supplier relationships and cost optimization.
        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"Logistics Coordinator"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"Logistics Coordinator"} logos={logoLinks} />
      </div>
      <div className="pb-10">
      <GuranteePricing />
      </div>
      <div>
        <HowMicrosourcingWork />
      </div>
      <GetInTouch />
    </div>
  );
};

export default LogisticsCoordinator;