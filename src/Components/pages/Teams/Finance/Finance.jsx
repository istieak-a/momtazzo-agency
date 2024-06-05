import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const Finance = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Mask%20Group%208-2.png?width=828&height=494&name=Mask%20Group%208-2.png",
    title: "Finance outsourcing to India",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  const features = {
    title: "Why Outsource Finance Teams?",
    li1: "Outsourcing enables access to advanced data management tools and expertise, easing the challenge of managing complex financial data.",
    li2: "Specialized outsourcing providers ensure regulatory compliance, keeping the finance team up-to-date with changing financial laws and standards.",
    li3: "By leveraging the expertise of financial forecasting professionals, outsourcing improves the accuracy of financial predictions.",
    li4: "Outsourcing finance functions offers access to cutting-edge technology, simplifying technology integration and upgrades for the finance team.",
  };
  const outsourcingServices = {
    title: "Finance Roles",
    services: [
      "Accountant",
      "Accounts Payable Officer",
      "Accounts Receivable Officer",
      "Auditor",
      "Bookkeeper",
      "Compliance Officer",
      "Credit Management Specialist",
      "External Auditor",
      "Finance Specialist",
      "Financial Planning Analyst",
      "Payroll Specialist",
      "Quality Assurance Specialist",
      "Regulatory Reporting Specialist",
      "Treasury Manager",
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
            Finance teams often grapple with large volumes of financial data,
            requiring meticulous organization and analysis to make informed
            decisions.
          </p>
          <p>
            Adhering to ever-changing financial regulations and reporting
            standards poses a constant challenge for finance teams to adhere to
            legal and ethical practices.
          </p>
          <p>
            Predicting financial outcomes with precision is a significant
            challenge as external factors such as market fluctuations can impact
            forecasts.
          </p>
          <p>
            Keeping up with the latest financial software and technology
            advancements can also be challenging, but crucial for streamlining
            processes and improving efficiency within finance teams.
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

export default Finance;
