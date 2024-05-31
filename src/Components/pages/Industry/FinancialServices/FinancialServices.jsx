import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import sectionImg from "./whyMicrosourcing.png";
import increaseQuality from "../../../../assets/icons/increase-quality.png";
import reduceCost from "../../../../assets/icons/reduce-cost.png";
import scaleFast from "../../../../assets/icons/scale-fast.png";
import Card from "../../../Card/Card";

import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";

const FinancialServices = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/img-header-industry-financial-services.png?width=828&height=465&name=img-header-industry-financial-services.png",
    title: "Financial services outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "Industries",
  };
  const cardData = [
    {
      title: "Reduce Costs",
      ico: reduceCost,
      desc: "Save up to 70% on employment costs. Get top-notch skills at a fraction of the price.",
    },
    {
      title: "Increase efficiency",
      ico: increaseQuality,
      desc: "27% of companies outsource to maximize efficiencies.",
    },
    {
      title: "Faster Growth",
      ico: scaleFast,
      desc: "Navigate demand and scale sustainably with the right people dedicated to your business.",
    },
  ];
  
  const features = {
    title: "Why is the financial services industry well suited to outsourcing?",
    li1: "Outsourcing can effectively address complex regulatory requirements and compliance standards by leveraging external expertise and specialized resources.",
    li2: "It fosters seamless communication and collaboration by partnering with skilled service providers, enhancing operational efficiency across departments.",
    li3: "Additionally, outsourcing provides scalable solutions, allowing organizations to balance growth effectively while minimizing risks.",
    li4: "Moreover, trusted outsourcing partners often possess robust cybersecurity measures, ensuring the protection of sensitive financial data and mitigating cyber threats."
  };
  const outsourcingServices = {
    title: "Financial Services",
    services: [
      "Accounting",
      "Auditing",
      "Compliance and risk management",
      "Customer service",
      "Data management",
      "Investment management",
      "Mortgage processing",
      "Payroll processing",
      "Taxation services",
      "Technical support"
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
      <div className="section-margin flex flex-col md:flex-row items-center gap-5">
        <div className="flex flex-col gap-5">
        <p>
          In the financial services industry, managing regulation and compliance
          requires substantial resources and expertise, which can stretch an
          organization’s capabilities.
        </p>
        <p>
          Many of these organizations face stiff competition from both
          traditional institutions and disruptive FinTech startups, requiring
          constant innovation to stay relevant in a rapidly evolving landscape.
        </p>
        <p>
          As the scale of operations increases, ensuring seamless communication
          and collaboration across different departments and teams becomes a
          daunting task.
        </p>
        <p>
          Balancing growth and risk mitigation also presents a delicate dilemma,
          as expanding too rapidly may lead to potential vulnerabilities. The
          ever-present threat of cybersecurity breaches poses a significant
          concern, demanding robust security measures and continuous monitoring
          to safeguard sensitive financial data.
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

export default FinancialServices;
