import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const Accounting = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Mask%20Group%208-1.png?width=828&height=494&name=Mask%20Group%208-1.png",
    title: "Accounting outsourcing to India",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  const features = {
    title: "Why Outsource Accounting Teams?",
    li1: "Outsourcing accounting tasks to specialized firms ensures compliance with up-to-date knowledge of regulations and standards.",
    li2: "Access to advanced data management systems and tools enhances data accuracy, integrity, and security.",
    li3: "Scalability and flexibility allow accounting teams to handle peak workloads efficiently.",
    li4: "Delegating routine tasks to external providers frees up time for the internal team to focus on strategic activities."
};
const outsourcingServices = {
  title: "accounting",
  services: [
      "Accountant",
      "Accounts Payable Officer",
      "Finance Specialist",
      "Bookkeeper",
      "Accounts Receivable Officer",
      "Auditor",
      "Payroll Specialist",
      "Tax Specialist",
      "Quality Assurance Specialist"
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
      <div className="section-margin flex flex-col items-center gap-5 md:flex-row max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <p>
            For accounting teams, staying up-to-date with ever-evolving tax
            laws, accounting principles, and industry regulations can be complex
            and time-consuming.
          </p>
          <p>
            Financial data integrity mismanagement can have significant
            financial implications and affect decision-making processes.
          </p>
          <p>
            Accounting teams often grapple with handling vast amounts of data
            from various sources, requiring efficient data management systems
            and tools.
          </p>
          <p>
            Tight deadlines, especially during reporting periods and audits,
            make it essential to balance workload and maintain accuracy while
            meeting time-sensitive deliverables.
          </p>
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

export default Accounting;
