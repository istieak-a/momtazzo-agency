import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";

import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const HospitalityTourism = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1469919334.png?width=828&height=465&name=iStock-1469919334.png",
    title: "Outsourcing in Hospitality Industry to the Philippines",
    btn: "HOW IT WORKS",
    cate: "INDUSTRY",
  };
  const features = {
    title:
      "Why is the hospitality and tourism industry well suited to outsourcing?",
    li1: "Offshoring back-office functions like reservations, data entry and customer support can lead to cost savings, allowing businesses to allocate resources more efficiently.",
    li2: "Offshore contact centres can provide 24/7 customer support, accommodating different time zones and ensuring quick responses to inquiries.",
    li3: "Offshore teams can offer multilingual support and cultural insights, enhancing the guest experience for international travelers.",
    li4: "Offshore analysts can conduct market research, helping organizations stay informed about industry trends and customer preferences, enabling data-driven decision-making.",
  };
  const outsourcingServices = {
    title:
      "What hospitality and tourism services and roles can you outsource with MicroSourcing?",
    services: [
      "Customer support and reservations",
      "Online travel agency (OTA) management",
      "Data entry and back office operations",
      "Multilingual concierge services",
      "Revenue management",
      "Digital marketing and search engine optimization (SEO)",
      "Accounting and financial services",
      "Market research and data analysis",
      "IT support and software development",
      "Travel booking platform management",
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
            Hospitality and tourism organizations often deal with fluctuating
            demand due to seasonal trends, requiring effective resource
            management and marketing strategies.
          </p>
          <p>
            Meeting ever-evolving customer expectations for personalized
            experiences and quick service delivery can be demanding in a
            competitive industry.
          </p>
          <p>
            Recruiting and retaining skilled staff, especially during peak
            seasons, can be a persistent struggle, impacting service quality.
          </p>
          <p>
            Navigating complex and changing regulations related to tourism,
            safety, and health can pose legal and operational challenges for
            businesses.
          </p>
        </div>
        <div>
          <PhilippinesMap />
        </div>
      </div>
      <div className="pt-16">
        <FeaturesSection
          title={features.title}
          li1={features.li1}
          li2={features.li2}
          li3={features.li3}
          li4={features.li4}
        />
      </div>
      <div className="py-10">
        <FilipinoBefinits title={"hospitality & tourism"} />
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

export default HospitalityTourism;
