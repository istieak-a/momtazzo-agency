import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const Accountant = () => {
  const heroBanner = {
    title: "Outsource accountant to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/M_Web_Role-page_Accountant_Banner.png",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/M_Banner%20mobile_Accounting.jpg",
  };
  const experience = {
    title: "How experienced are our accountants?",
    description: "Our accountants offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1-2 years of accounting experience",
        responsibilities: [
          "Basic bookkeeping tasks such as invoice preparation, payment processing, and reconciling accounts",
          "Basic financial analysis such as preparing budget reports and financial statements",
          "Assist in preparing tax returns"
        ]
      },
      intermediate: {
        yearsOfExperience: "2-4 years of accounting experience",
        responsibilities: [
          "Advanced bookkeeping tasks such as cash flow management and preparing financial forecasts",
          "Complex financial analysis such as preparing financial models and analyzing financial statements",
          "Manage accounts payable and receivable and inventory",
          "Prepare and submit tax returns",
          "Perform audits of financial statements"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of accounting experience",
        responsibilities: [
          "Manage the entire accounting function and supervise junior accountants",
          "Prepare and analyze financial statements",
          "Develop and implement accounting policies and procedures",
          "Assist in the budgeting and forecasting process",
          "Prepare financial reports for management review and decision-making"
        ]
      }
    }
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/quickbooks.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Xero.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/freshbooks.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/turbo%20tax.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/H%26R%20Block.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Gusto.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/ADP.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/tableau.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Power%20BI.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/SAP.png"
  ];
  
  

  return (
    <div>
      <HeroBanner4
        title={heroBanner.title}
        img={heroBanner.img}
        imgRes={heroBanner.imgRes}
      />
      <div className="section-margin grid items-center gap-5 md:grid-cols-2 md:gap-20 md:py-20 max-w-7xl mx-auto">
        <h1 className="font-outfit text-4xl font-semibold md:text-5xl ">
          Improve your accounting capabilities with dedicated Indian teams.
        </h1>
        <p>
          Is your business struggling to keep up with accounting tasks and
          financial management? Experienced teams in the India are skilled
          at managing the most crucial accounting tasks, including bookkeeping,
          tax preparation and budgeting or forecasting.
        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"accountant"} />
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

export default Accountant;
