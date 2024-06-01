import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const SalesSupport = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/sales-support-banner.png?width=828&height=494&name=sales-support-banner.png",
    title: "Sales Support outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  const features = {
    title: "Why Outsource Sales Support Services Teams?",
    li1: "Handling data accuracy tasks ensures customer information and sales data remain up-to-date and accurate.",
    li2: "Offshore experts efficiently manage and update sales collateral ensuring that sales representatives have access to the latest materials.",
    li3: "Supporting customer relationship management efforts by conducting follow-up calls, surveys, and email campaigns can nurture relationships and gather valuable feedback.",
    li4: "Providing administrative support, such as appointment scheduling and documentation, allows sales representatives to focus on selling and relationship-building.",
  };
  const outsourcingServices = {
    title: "Sales Support",
    services: [
      "Account coordinators",
      "Order processing specialists",
      "Sales analysts",
      "Sales support administrators",
      "Telecommunications specialists",
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
            Finding and generating high-quality leads can be challenging,
            leading to inconsistencies in the sales pipeline and potential
            missed opportunities.
          </p>

          <p>
            Maintaining accurate and up-to-date customer information and sales
            data can be difficult, impacting the ability to make informed
            decisions and provide personalized service.
          </p>

          <p>
            Organizing and updating sales collateral, such as presentations and
            product materials, can be time-consuming, affecting the efficiency
            of sales interactions.
          </p>

          <p>
            Managing and nurturing customer relationships can be complex,
            especially as the customer base grows, requiring effective
            communication and follow-up strategies.
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
        <FilipinoBefinits title={"sales support"} />
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

export default SalesSupport;
