import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const MedicalBillingSpec = () => {
  const heroBanner = {
    title: "Outsource Medical billing specialist to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/MS_HeaderBanner-Medical%20Billing%20and%20Coding%20Specialist.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/MS_HeaderBanner-M_Medical-Billing-and-Coding-Specialist.jpg",
  };
  const experience = {
    title: "How experienced are our medical billing and coding specialists?",
    description:
      "Our medical billing and coding specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience:
          "1 - 2 years of medical billing and coding experience",
        responsibilities: [
          "Assisting in the preparation and submission of medical claims to insurance companies",
          "Verifying patient insurance information and ensuring accurate billing details",
          "Handling basic billing inquiries from patients and insurance providers",
        ],
      },
      intermediate: {
        yearsOfExperience:
          "2 - 4 years of medical billing and coding experience",
        responsibilities: [
          "Reviewing medical records and assigning appropriate diagnostic and procedural codes",
          "Investigating and resolving billing discrepancies and denials",
          "Providing guidance and support to junior billing staff and assisting with training as needed",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of medical billing and coding experience",
        responsibilities: [
          "Overseeing the entire medical billing process, including claim submission, payment posting, and accounts receivable management",
          "Developing and implementing billing policies and procedures to improve efficiency and accuracy",
          "Serving as a subject matter expert on complex billing issues, providing mentorship and training to junior staff and liaising with management to address billing-related challenges",
        ],
      },
    },
  };
  const logoLinks = [
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/drchrono.png?width=1200&length=1200&name=drchrono.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/Epic.png?width=1200&length=1200&name=Epic.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/Cerner.png?width=1200&length=1200&name=Cerner.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/Meditech.png?width=1200&length=1200&name=Meditech.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/NextGen%20Healthcare.png?width=1200&length=1200&name=NextGen%20Healthcare.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/AdvancedMD.png?width=1200&length=1200&name=AdvancedMD.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/athenahealth.png?width=1200&length=1200&name=athenahealth.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/eClinicalWorks.png?width=1200&length=1200&name=eClinicalWorks.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/medical-billing-specialist/Practice%20Fusion.png?width=1200&length=1200&name=Practice%20Fusion.png",
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
          Improve your medical billing and coding capabilities with dedicated
          Filipino teams.
        </h1>
        <p>
          Need help ensuring medical claims are accurately and efficiently
          processed? Struggling to streamline revenue cycle management while
          maintaining compliance with healthcare regulations? Experienced teams
          in the Philippines are skilled at managing the most crucial medical
          billing and coding tasks such as assigning diagnostic and procedural
          codes, submitting medical insurance claims and maintaining billing
          records.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"Medical billing and coding capabilities"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools
          title={"Medical billing and coding capabilities"}
          logos={logoLinks}
        />
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

export default MedicalBillingSpec;
