import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const CollectionSpec = () => {
  const heroBanner = {
    title: "Outsource collection specialist to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/M_Web_Role-page_Collection-Specialists_Banner.png",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing/roles/collection-specialists/img-header-collection%20specialist-m@2x.png"
  };
  const experience = {
    title: "How experienced are our collection specialists?",
    description: "Our collection specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of collections experience",
        responsibilities: [
          "Assists in financial data collection, analysis and reporting",
          "Supports senior team members in financial research and modeling",
          "Learns and applies financial principles and industry regulations under supervision"
        ]
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of collections experience",
        responsibilities: [
          "Manages a larger portfolio of overdue accounts, requiring more efficient time management and organization skills",
          "Negotiates and arranges complex payment plans with customers, taking into consideration individual financial situations and account histories",
          "Develops strategies to address challenging cases, such as highly delinquent accounts or disputes, using problem-solving skills and experience in the field"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of collections experience",
        responsibilities: [
          "Provides guidance and mentorship to junior and intermediate collections team members, assisting them in resolving difficult cases and developing their skills",
          "Handles escalated customer inquiries and complaints, utilizing extensive experience and interpersonal skills to diffuse tensions and find mutually acceptable solutions",
          "Collaborates with management to optimize collections processes, suggesting improvements and implementing best practices to enhance overall debt recovery efficiency"
        ]
      }
    }
  };
  
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/salesforce.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/roles/logos/Aspect%20Dialer.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/roles/logos/PayPal.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/FICO_logo_blue_2019.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/DocuWare.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/mailchimp%20logo.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/TLOxp.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/ComplyARM-Dashboard-Logo-1.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/callrail.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/roles/logos/Tableau_Logo.png"
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
        Improve your collections capabilities with dedicated Filipino teams.
        </h1>
        <p>
        Need help managing and collecting overdue payments and debts? Are your outstanding accounts overdue with customers who have missed payments? Experienced teams in the Philippines are skilled at managing the most crucial debt collection tasks.
        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"collection specialists"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"accountant"} logos={logoLinks} />
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

export default CollectionSpec;