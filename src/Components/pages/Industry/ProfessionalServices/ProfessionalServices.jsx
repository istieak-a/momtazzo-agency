import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";
const ProfessionalServices = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1367572246.png?width=828&height=465&name=iStock-1367572246.png",
    title: "Professional services outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "INDUSTRY",
  };
  const features = {
    title: "Benefits of Outsourcing in the Professional Services Industry",
    li1: "Outsourcing can enable scalability by leveraging external expertise and resources while maintaining personalized client experiences.",
    li2: "By outsourcing non-core functions to specialized partners, organizations can streamline operations and focus on their core competencies.",
    li3: "Outsourcing communication and collaboration tasks can enhance efficiency, promote seamless information flow, and facilitate effective decision-making across the organization.",
    li4: "Embracing outsourcing allows organizations to access cutting-edge technologies and industry expertise without heavy upfront investments.",
  };
  const outsourcingServices = {
    title: "Professional Services and Roles Outsourced with MicroSourcing",
    services: [
      "Technical support",
      "Customer service",
      "Accounting",
      "HR services",
      "Marketing",
      "Legal services",
      "Data management",
      "Logistics",
    ],
  };

  return (
    <div>
      <div>
        <HeroBanner2
          img={banner.img}
          title={banner.title}
          btn={banner.btn}
          cate={banner.cate}
        />
      </div>
      <div className="section-margin flex flex-col items-center gap-5 md:flex-row">
        <div className="flex flex-col gap-5">
          <p>
            Professional services organizations struggle to balance scalability
            with personalized client experiences, risking a loss of agility.
          </p>
          <p>
            Optimizing operational efficiency while maintaining high service
            standards is a significant challenge.
          </p>
          <p>
            Complex internal communication and collaboration hinder effective
            decision-making and knowledge-sharing.
          </p>
          <p>
            Adapting to evolving technologies and industry trends requires a
            continuous investment in skill development and modernization.
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
        <FilipinoBefinits title={"professional services"} />
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

export default ProfessionalServices;
