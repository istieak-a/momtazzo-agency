import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const DataManagement = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/data-management-banner.png?width=828&height=494&name=data-management-banner.png",
    title: "Data Management outsourcing to India",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  const features = {
    title: "Why Outsource Data Management Teams?",
    li1: "Offshore teams can assist in data quality management by conducting thorough cleansing and validation processes, ensuring more accurate and reliable data.",
    li2: "Leveraging offshore teams with cybersecurity expertise can enhance data security measures, safeguarding sensitive information against breaches and unauthorized access.",
    li3: "Offshore teams can specialize in data integration and ETL (Extract, Transform, Load) processes, efficiently harmonizing data from various sources.",
    li4: "Collaborating with offshore teams provides scalability, allowing organizations to adapt to changing data needs and effectively manage growing datasets.",
  };
  const outsourcingServices = {
    title: "Data Management",
    services: [
      "Data architects",
      "Data analysts",
      "Data compliance officers",
      "Data engineers",
      "Data entry specialists",
      "Data governance analysts",
      "Data management specialists",
      "Data quality analysts",
      "Data security specialists",
      "Database administrators",
      "ETL (Extract, Transform, Load) developers",
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

      <div className="section-margin flex flex-col items-center gap-5 md:flex-row max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <p>
            For data management teams, ensuring the accuracy, completeness, and
            consistency of data can be challenging, as errors and
            inconsistencies can lead to incorrect insights and decisions.
          </p>
          <p>
            Protecting sensitive data from breaches and unauthorized access is a
            constant concern, especially in the face of evolving cybersecurity
            threats.
          </p>
          <p>
            Combining data from various sources, often in different formats, can
            be complex and time-consuming, hindering the ability to derive
            meaningful insights.
          </p>
          <p>
            Establishing and maintaining clear data governance policies and
            procedures can be a struggle, leading to issues like data ownership
            disputes and compliance challenges.
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
        <FilipinoBefinits title={"Data Management"} />
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

export default DataManagement;
