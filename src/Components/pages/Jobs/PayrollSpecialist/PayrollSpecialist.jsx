import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const PayrollSpec = () => {
  const heroBanner = {
    title: "Outsource Payroll Specialist to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/M_Web_Role-page_Payroll-Specialists_Banner.png",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/M_Web_Role_Medical-coder_Banner_mobile-1.jpg"
  };
  const experience = {
    title: "How experienced are our payroll specialists?",
    description: "Our payroll specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of payroll processing experience",
        responsibilities: [
          "Performs basic payroll data entry tasks, including employee information, hours worked, and deductions, ensuring accuracy and compliance with company policies and regulations",
          "Assists in maintaining payroll records and files, updating employee information and addressing basic payroll inquiries from employees",
          "Undergoes training and mentorship to develop a solid understanding of payroll processes, software and applicable laws to handle more complex tasks in the future"
        ]
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of payroll processing experience",
        responsibilities: [
          "Manages end-to-end payroll processing, including calculating wages, bonuses, commissions and deductions accurately and in a timely manner",
          "Ensures compliance with federal, state, and local payroll regulations, prepares payroll tax reports and handles year-end reporting tasks",
          "Addresses complex payroll inquiries and discrepancies, resolves payroll-related issues with employees and stakeholders and provides guidance to junior staff"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of payroll processing experience",
        responsibilities: [
          "Oversees the implementation and optimization of payroll software systems, ensuring efficiency and accuracy in payroll processing",
          "Conducts regular audits of payroll data to identify discrepancies, potential risks and areas for improvement and provides analytical reports to management",
          "Provides guidance and mentorship to junior and intermediate payroll staff, conducts training sessions and stays updated with changing regulations and industry best practices"
        ]
      }
    }
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/ADP%20Workforce%20Now.png?width=300&height=138&name=ADP%20Workforce%20Now.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Gusto.png?width=300&height=115&name=Gusto.png",
    "https://www.microsourcing.com/hs-fs/hubfs/Quickbooks%20Payroll.png?width=611&height=230&name=Quickbooks%20Payroll.png",
    "https://www.microsourcing.com/hs-fs/hubfs/Paychex%20Flex.png?width=1615&height=230&name=Paychex%20Flex.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/Human%20Resource%20Specialists/zenefits.png?width=301&height=72&name=zenefits.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/Human%20Resource%20Specialists/bamboohr.png?width=300&height=46&name=bamboohr.png",
    "https://www.microsourcing.com/hs-fs/hubfs/Wagepoint.png?width=755&height=230&name=Wagepoint.png",
    "https://www.microsourcing.com/hs-fs/hubfs/Xero%20Payroll.png?width=637&height=230&name=Xero%20Payroll.png",
    "https://www.microsourcing.com/hs-fs/hubfs/SurePayroll.png?width=1549&height=230&name=SurePayroll.png",
    "https://www.microsourcing.com/hs-fs/hubfs/Patriot%20Payroll.png?width=692&height=230&name=Patriot%20Payroll.png"
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
        Improve your payroll capabilities with dedicated Indian teams.
        </h1>
        <p>
        Need help managing and processing employee payments? Experienced teams in India are skilled at managing the most crucial payroll processing handling tasks including employee data management, timekeeping, attendance tracking and handling benefits and deductions.
        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"Payroll specialist"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"Payroll specialist"} logos={logoLinks} />
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

export default PayrollSpec;