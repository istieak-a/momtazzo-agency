import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const TalentAcquisitionSpec = () => {
  const heroBanner = {
    title: "Outsource talentacquisitionspecialist to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/3d-designer-banner.jpg",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/3d-designer-banner-m.jpg"
  };
  const experience = {
    title: "How to hire offshore talent acquisition specialists?",
    description: "To decide which offshore talent acquisition support you need, start by figuring out what level of experience you require. Once identified, you can easily let outsourcing providers know exactly what kind of skills and knowledge you need in an offshore team.",
    levels: {
      junior: {
        yearsOfExperience: "Less than 1 year of recruitment experience",
        responsibilities: [
          "Sourcing and screening candidates",
          "Setting up interviews",
          "Providing general administrative support"
        ]
      },
      intermediate: {
        yearsOfExperience: "1 to 3 years of recruitment experience",
        responsibilities: [
          "Conducting interviews",
          "Supporting staff onboarding programs"
        ]
      },
      senior: {
        yearsOfExperience: "3+ years of recruitment experience",
        responsibilities: [
          "Facilitating recruitment offers and employment term negotiations",
          "Providing advice on talent acquisition policies and procedures"
        ]
      }
    }
  };
  
  return (
    <div>
      <HeroBanner4
        title={heroBanner.title}
        img={heroBanner.img}
        imgRes={heroBanner.imgRes}
      />

<div className="section-margin grid items-center gap-5 md:grid-cols-2 md:gap-20 md:py-20">
        <h1 className="font-outfit text-4xl font-semibold md:text-5xl ">
          Improve your Talent acqusition capabilities with dedicated Filipino teams.
        </h1>
        <p>
        Talent acquisition can be a challenging task for any organization. With the ever-changing job market and the increasing competition for top talent, companies are under increasing pressure to meet their talent acquisition needs while keeping costs down. That's where outsourced talent acquisition specialists come in. 


        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"Talent acquisition"} />
      </div>
      <div>
        <Experiences experience={experience} />
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

export default TalentAcquisitionSpec;