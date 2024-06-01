
import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const Insurance = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Mask%20Group%208-4.png?width=828&height=494&name=Mask%20Group%208-4.png",
    title: "Insurance outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  const features = {
    title: "Why Outsource Insurance Teams?",
    li1: "Outsourcing provides access to specialized skills and knowledge, helping insurance teams navigate complex regulatory landscapes.",
    li2: "It offers access to advanced fraud detection and prevention tools and expertise, enhancing the team's ability to combat fraudulent activities effectively.",
    li3: "By outsourcing certain tasks, insurance teams can leverage technology and innovations without the burden of developing and maintaining in-house systems.",
    li4: "Outsourcing non-core tasks, such as customer service, allows insurance teams to concentrate on core functions and improve overall operational efficiency."
};
const outsourcingServices = {
  title: "Insurance",
  services: [
      "Customer Service Representative",
      "Claims Processor",
      "Data Analyst",
      "Marketing Specialist",
      "Policy Administrator",
      "Technical Support Specialist",
      "Training and Development Specialist",
      "Underwriting Support Specialist"
  ]
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

      <div className="section-margin flex flex-col md:flex-row items-center gap-5">
        <div className="flex flex-col gap-5">
        <p>Insurance teams face the challenge of keeping up with ever-changing regulations and compliance requirements, which demand constant updates to policies and procedures.</p>
<p>Detecting and preventing insurance fraud poses a significant challenge to teams, as fraudsters continually adapt their methods, necessitating advanced analytics and fraud detection tools.</p>
<p>Embracing digital innovations and integrating new technologies, all while ensuring data security, can be daunting for insurance teams, as they strive to remain competitive in the fast-paced industry.</p>
<p>Meeting the increasing demands of customers for personalized, convenient, and efficient services requires insurance teams to implement customer-centric solutions while maintaining operational efficiency.</p>
        </div>
        <div>
        <PhilippinesMap />
        </div>
      </div>
      <div>
        <FeaturesSection title={features.title} li1={features.li1} li2={features.li2} li3={features.li3} li4={features.li4} />
      </div>
      <div className="py-10">
        <FilipinoBefinits title={'financial services'} />
      </div>
      <div>
        <MicroSourcing title={outsourcingServices.title} services={outsourcingServices.services} />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default Insurance;
