import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const CustomerService = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Mask%20Group%208-Mar-18-2024-06-26-58-9366-AM.png?width=828&height=494&name=Mask%20Group%208-Mar-18-2024-06-26-58-9366-AM.png",
    title: "Customer Service outsourcing to India",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  const features = {
    title: "Why Outsource Customer Service Teams?",
    li1: "Offshore teams often provide cost-effective labor, allowing companies to allocate resources more efficiently and invest in additional training and technology for better customer service.",
    li2: "Organizations can achieve round-the-clock customer support, addressing the challenge of meeting customer expectations for extended availability by leveraging offshore teams in different time zones.",
    li3: "Businesses can quickly scale their customer service operations up or down based on demand, helping maintain consistency during peak and off-peak periods.",
    li4: "Offshoring allows access to talent with diverse language skills, catering to a broader customer base and enhancing personalized service for various customer groups.",
  };

  const outsourcingServices = {
    title: "Customer Service",
    services: [
      "Customer service representative",
      "Chat support agents",
      "Email support agents",
      "Social media support agents",
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
            For customer service teams, finding the right balance between
            handling inquiries quickly and providing personalized, empathetic
            responses can be challenging.
          </p>
          <p>
            Dealing with irate or demanding customers while maintaining
            professionalism can be emotionally taxing.
          </p>
          <p>
            It can be difficult to ensure consistent service quality and
            information across various communication channels, such as phone,
            email, chat, and social media.
          </p>
          <p>
            Meeting ever-changing customer expectations, especially in the
            digital age where customers expect quick resolutions and 24/7
            availability, can be demanding.
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

export default CustomerService;
