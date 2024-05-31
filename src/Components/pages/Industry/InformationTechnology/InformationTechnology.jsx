import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const InformationTechnology = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1354692516.png?width=828&height=465&name=iStock-1354692516.png",
    title: "Technology outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "INDUSTRY",
  };
  const features = {
    title: "Why is the information technology industry well suited to outsourcing?",
    li1: "Outsourcing to specialized providers grants IT organizations access to agile expertise, enabling swift adaptation to market demands without internal bureaucracy.",
    li2: "Outsourcing offers access to a diverse, global talent pool, easing the burden of talent acquisition and providing access to skilled professionals necessary to propel their businesses forward.",
    li3: "Organizations can leverage the expertise of outsourcing providers to modernize systems and eliminate reliance on outdated technologies.",
    li4: "These providers foster seamless communication through dedicated teams and clear SLAs, bridging communication gaps and ensuring efficient collaboration."
};
const outsourcingServices = {
  title: "IT Outsourcing Services",
  services: [
      "Cloud services",
      "Cyber security",
      "Data management",
      "Database management",
      "IT consulting",
      "Mobile app development",
      "Network management",
      "Quality assurance and testing",
      "Software development",
      "Technical support",
      "Virtualization services"
  ]
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
          Information technology (IT) organizations often grapple with
          maintaining agility and innovation while navigating complex
          hierarchies and bureaucratic processes.
        </p>
        <p>
          As these companies expand, communication gaps may widen, hindering the
          seamless flow of information and collaboration across departments.
        </p>
        <p>
          Legacy systems and outdated technologies can act as roadblocks to
          progress, making it difficult for them to stay ahead of the
          competition and embrace the latest advancements.
        </p>
        <p>
          Attracting and retaining top talent becomes a daunting task as the
          demand for skilled IT professionals intensifies, leading to potential
          skill shortages and talent gaps.
        </p>
        </div>
        <div>
          <PhilippinesMap />
        </div>
      </div>
      <div className="pt-16">
        <FeaturesSection title={features.title} li1={features.li1} li2={features.li2} li3={features.li3} li4={features.li4} />
      </div>
      <div className="py-10">
        <FilipinoBefinits title={'information & technology'} />
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

export default InformationTechnology;
