import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const HrSpec = () => {
  const heroBanner = {
    title: "Outsource HR Specialist to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/data-entry/Data%20Entry%20Specialist_Desktop.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Background/Mobile-banner-BG.jpg",
  };
  const experience = {
    title: "How experienced are our human resource specialists?",
    description:
      "Our human resource specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of HR experience",
        responsibilities: [
          "Assists in administering employee benefits programs, including enrolling new employees in benefits plans and assisting with benefit-related inquiries",
          "Supports employee onboarding processes by preparing new hire paperwork, coordinating orientation sessions and ensuring new employees have the necessary resources",
          "Maintains employee records and HR databases, updating information accurately and ensuring data confidentiality",
        ],
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of HR experience",
        responsibilities: [
          "Manages employee relations by addressing employee concerns, resolving conflicts and providing guidance on HR policies and procedures",
          "Assists with performance management processes, including tracking performance evaluations, providing feedback to managers and facilitating performance improvement plans",
          "Contributes to the development and implementation of HR policies and procedures to promote a positive work environment and ensure compliance with labor laws",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of HR experience",
        responsibilities: [
          "Provides strategic guidance and leadership on HR initiatives, including developing and implementing HR strategies aligned with organizational goals",
          "Acts as a subject matter expert on complex HR issues, providing advice and solutions to managers and executives",
          "Leads special projects and initiatives such as diversity and inclusion programs, employee engagement initiatives and organizational development efforts",
        ],
      },
    },
  };
  const logoLinks = [
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/hr-specialist/bamboohr.png?width=1200&length=1200&name=bamboohr.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/hr-specialist/Workday.png?width=1200&length=1200&name=Workday.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/hr-specialist/ADP%20Workforce%20Now.png?width=1200&length=1200&name=ADP%20Workforce%20Now.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/hr-specialist/SAP%20SuccessFactors.jpeg?width=1200&length=1200&name=SAP%20SuccessFactors.jpeg",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/hr-specialist/Oracle%20HCM%20Cloud.png?width=1200&length=1200&name=Oracle%20HCM%20Cloud.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/hr-specialist/namely-customer-logo.png?width=1200&length=1200&name=namely-customer-logo.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/hr-specialist/Paylocity.png?width=1200&length=1200&name=Paylocity.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/hr-specialist/Kronos_Incorporated_logo.png?width=1200&length=1200&name=Kronos_Incorporated_logo.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/hr-specialist/zenefits.png?width=1200&length=1200&name=zenefits.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/hr-specialist/UltiPro%20-%20Logo.png?width=1200&length=1200&name=UltiPro%20-%20Logo.png",
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
          Improve your human resource capabilities with dedicated Indian
          teams.
        </h1>
        <p>
          Want to elevate your employee experience while improving people
          management practices? Experienced teams in India are skilled
          at managing the most crucial HR tasks including employee relations,
          employee benefits and labor compliance.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"HR Specialist"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"HR Specialist"} logos={logoLinks} />
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

export default HrSpec;
