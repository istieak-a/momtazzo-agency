
import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const QualityAssurance = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/quality-assurance-banner-v1.png?width=828&height=494&name=quality-assurance-banner-v1.png",
    title: "Quality Assurance outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  const features = {
    title: "Why Outsource Quality Assurance Teams?",
    li1: "Expertise in international regulations can help quality assurance teams stay updated and compliant with evolving standards.",
    li2: "Offshore teams can handle routine testing tasks, allowing in-house teams to focus on complex testing procedures and resource allocation.",
    li3: "Offshore support in documentation and reporting tasks ensures clear communication with stakeholders and cross-functional teams.",
    li4: "Outsourced services provide scalability, allowing quality assurance teams to adapt quickly to changing testing needs without the burden of hiring and training additional staff."
};
const outsourcingServices = {
  title: "Quality Assurance",
  services: [
      "Quality assurance analysts",
      "Quality control inspectors",
      "Test automation engineers",
      "Test coordinators",
      "Test managers"
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
        <p>Keeping up with changing industry standards and regulations can be challenging, requiring constant updates and adaptation of quality processes.</p>

<p>Balancing the allocation of time, personnel and budget to meet quality goals while staying cost-effective is an ongoing challenge.</p>

<p>Managing the complexity of testing procedures, especially in software development, can be demanding as systems become more intricate.</p>

<p>Ensuring effective communication among cross-functional teams and stakeholders to align on quality objectives and expectations can be a persistent challenge.</p>

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

export default QualityAssurance;
