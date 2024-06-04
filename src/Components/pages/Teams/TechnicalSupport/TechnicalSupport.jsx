import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const TechnicalSupport = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Mask%20Group%208-Feb-20-2024-08-13-01-5323-AM.png?width=828&height=494&name=Mask%20Group%208-Feb-20-2024-08-13-01-5323-AM.png",
    title: "TechnicalSupport outsourcing to India",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  const features = {
    title: "Why Outsource Technical Support Teams?",
    li1: "Outsourcing allows access to specialized technical expertise, easing the burden of handling diverse and evolving technical issues.",
    li2: "Organizations leverage the flexibility of a global workforce to optimize time management and meet support demands across different time zones.",
    li3: "Multilingual outsourced teams ensure effective communication with customers from various language backgrounds.",
    li4: "Dedicated outsourcing partners can handle customer interactions, alleviating emotional stress on in-house technical support teams.",
  };
  const outsourcingServices = {
    title: "Technical Support Roles Outsourced with Montazzo",
    services: [
      "Application Support Analyst",
      "Customer Support Representative",
      "Help Desk Analyst",
      "IT Support Specialist",
      "Network Support Engineer",
      "Software Developer",
      "Software Support Specialist",
      "Technical Support Specialist",
      "Web Developer",
    ],
  };

  return (
    <div>
      <div>
        <HeroBanner3
          img={banner.img}
          title={banner.title}
          btn={banner.btn}
          cate={banner.cate}
        />
      </div>

      <div className="section-margin flex flex-col items-center gap-5 md:flex-row">
        <div className="flex flex-col gap-5">
          <p>
            Technical support teams deal with a wide range of evolving technical
            issues requiring them to stay updated on the latest technologies and
            trends.
          </p>

          <p>
            Time management is a significant challenge for technical support
            teams as they strive to meet tight deadlines while providing prompt
            and efficient solutions to customers' problems.
          </p>

          <p>
            Communication barriers, such as language differences or technical
            jargon, can create difficulties in effectively conveying solutions
            and instructions to customers.
          </p>

          <p>
            Handling frustrated or irate customers can be emotionally taxing for
            technical support teams, requiring them to remain patient and
            empathetic while working towards a resolution.
          </p>
        </div>
        <div>
          <PhilippinesMap />
        </div>
      </div>
      <div>
        <FeaturesSection
          title={features.title}
          li1={features.li1}
          li2={features.li2}
          li3={features.li3}
          li4={features.li4}
        />
      </div>
      <div className="py-10">
        <FilipinoBefinits title={"technical support"} />
      </div>
      <div>
        <MicroSourcing
          title={outsourcingServices.title}
          services={outsourcingServices.services}
        />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default TechnicalSupport;
