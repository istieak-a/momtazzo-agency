import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const AdministrationSupport = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Mask%20Group%208-Mar-18-2024-05-50-59-3971-AM.png?width=828&height=494&name=Mask%20Group%208-Mar-18-2024-05-50-59-3971-AM.png", 
    title: "AdministrationSupport outsourcing to India",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  const features = {
    title: "Why Outsource Administration Support Teams?",
    li1: "Offshore teams can handle routine administrative tasks, relieving local teams of some workload and enabling them to focus on high-priority tasks, improving overall efficiency.",
    li2: "Offshore professionals often possess expertise in specific software and tools, helping organizations adapt to and utilize technology more effectively.",
    li3: "Offshore teams can enhance communication by providing support in tasks like documentation, email management, and scheduling, ensuring timely and accurate exchange of information.",
    li4: "Offshore teams can assist in sorting and categorizing tasks, allowing local teams to prioritize effectively and allocate resources to critical functions, thus optimizing productivity and workflow.",
  };
  const outsourcingServices = {
    title: "Administration Support",
    services: [
      "Data entry specialists",
      "Virtual assistants",
      "Receptionist services",
      "Customer service representatives",
      "Administrative assistants",
      "Appointment schedulers",
      "Document controllers",
      "Email management specialists",
      "Billing and invoicing clerks",
      "Transcriptionists",
      "Travel coordinators",
      "Reservation booking agent",
      "Research assistants",
      "Calendar managers",
      "File clerks",
      "Event planners",
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
            For administration support teams, balancing multiple tasks and
            responsibilities while meeting deadlines can be overwhelming,
            leading to stress and decreased productivity.
          </p>
          <p>
            Keeping up with rapidly evolving software and tools, and ensuring
            they are used efficiently, can be a constant struggle.
          </p>
          <p>
            Effective communication across teams and departments can sometimes
            be hindered by miscommunication, delays, or issues in conveying
            important information.
          </p>
          <p>
            Determining which tasks to prioritize and allocate resources to can
            be challenging, especially in dynamic and fast-paced work
            environments.
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
        <FilipinoBefinits title={"financial services"} />
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

export default AdministrationSupport;
