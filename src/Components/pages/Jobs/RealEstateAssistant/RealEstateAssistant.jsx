import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const RealEstateAssistant = () => {
  const heroBanner = {
    title: "Outsource Real Estate Assistant to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/Real%20Estate%20Assistant/MS_HeaderBanner_Real%20Estate%20Assistant.jpg",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/Real%20Estate%20Assistant/MS_HeaderBanner-M_Real-Estate-Assistant.jpg"
  };
  const experience = {
    title: "How experienced are our real estate assistants?",
    description: "Our real estate assistants offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of real estate experience",
        responsibilities: [
          "Assist in organizing and maintaining property listings",
          "Handle basic administrative tasks like data entry and filing",
          "Coordinate property showings and appointments",
          "Respond to basic inquiries from clients and prospects"
        ]
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of real estate experience",
        responsibilities: [
          "Manage property listings and updates across multiple platforms",
          "Handle paperwork and documentation for real estate transactions",
          "Coordinate property inspections and appraisals",
          "Communicate with clients to provide updates on listings and transactions"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of real estate experience",
        responsibilities: [
          "Manage property listings and updates across multiple platforms",
          "Handle paperwork and documentation for real estate transactions",
          "Coordinate property inspections and appraisals",
          "Communicate with clients to provide updates on listings and transactions"
        ]
      }
    }
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/salesforce.png?width=335&height=230&name=salesforce.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/Logos/HubSpot.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Zillow%20Premier%20Agent.png?width=300&height=89&name=Zillow%20Premier%20Agent.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Zillow%20Rental%20Manager.png?width=300&height=29&name=Zillow%20Rental%20Manager.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/DocuSign.png?width=300&height=63&name=DocuSign.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Matterport.png?width=249&height=150&name=Matterport.png",
    "https://www.microsourcing.com/hs-fs/hubfs/buffer.png?width=300&height=82&name=buffer.png",
    "https://www.microsourcing.com/hs-fs/hubfs/Hootsuite.png?width=300&height=70&name=Hootsuite.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Calendly.png?width=300&height=73&name=Calendly.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Admin%20Assistant/Microsoft%20Office.png?width=190&height=60&name=Microsoft%20Office.png"
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
        Improve your real estate capabilities with dedicated Indian teams.
        </h1>
        <p>
        Is your real estate team overwhelmed with administrative tasks, leaving less time for client interactions and property management? Experienced teams in India are skilled at managing the most crucial real estate administration tasks, such as data entry, scheduling, and other essential behind-the-scenes tasks.
        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"real estate assistants"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"real estate assistants"} logos={logoLinks} />
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

export default RealEstateAssistant;