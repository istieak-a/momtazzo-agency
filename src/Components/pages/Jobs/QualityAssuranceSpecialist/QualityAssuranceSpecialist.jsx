import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const QualityAssuranceSpec = () => {
  const heroBanner = {
    title: "Outsource Quality Assurance Specialist to India",
    img: "https://www.microsourcing.com/hubfs/M_Web_Role_%EF%BB%BFQuality-Assurance-Specialist_Banner.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/QA%20Specialist/M_Web_Role__Quality-Assurance-Specialist_Mobile-Banner.jpg",
  };
  const experience = {
    title: "How experienced are our quality assurance specialists?",
    description:
      "Our quality assurance specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of QA experience",
        responsibilities: [
          "Assist in executing test plans and test cases for software or products",
          "Perform basic manual testing to identify defects and issues",
          "Document test results and collaborate with senior team members",
          "Assist in maintaining test environments and test data",
        ],
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of QA experience",
        responsibilities: [
          "Develop test plans, test cases and test scripts for complex projects",
          "Conduct both manual and automated testing to detect defects and ensure product quality",
          "Analyze and report on test results, identifying areas for improvement",
          "Collaborate with development teams to address defects and verify fixes",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of QA experience",
        responsibilities: [
          "Lead the design and implementation of comprehensive test strategies",
          "Oversee test automation efforts and implement test frameworks",
          "Evaluate and select testing tools and technologies",
          "Define and enforce quality standards and best practices",
        ],
      },
    },
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Selenium.png?width=63&height=66&name=Selenium.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Jira.png?width=191&height=63&name=Jira.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/testrail.png?width=190&height=48&name=testrail.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/appium.png?width=190&height=42&name=appium.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/POSTMAN.png?width=191&height=59&name=POSTMAN.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/LoadRunner.png?width=62&height=62&name=LoadRunner.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Jenkins.png?width=191&height=60&name=Jenkins.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/SoapUI.png?width=191&height=61&name=SoapUI.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/TestComplete.png?width=190&height=39&name=TestComplete.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Katalon.png?width=191&height=47&name=Katalon.png",
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
          Improve your quality assurance capabilities with dedicated Indian
          teams.
        </h1>
        <p>
          Looking to deliver top-notch products and services that consistently
          exceed customer expectations? Experienced teams in India are
          skilled at managing the most crucial quality assurance (QA) tasks,
          enhancing product reliability, customer satisfaction and brand
          reputation.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"quality assurance specialists"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"quality assurance specialists"} logos={logoLinks} />
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

export default QualityAssuranceSpec;
