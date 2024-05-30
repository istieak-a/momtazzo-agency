import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import sectionImg from "./whyMicrosourcing.png";
import increaseQuality from "../../../../assets/icons/increase-quality.png";
import reduceCost from "../../../../assets/icons/reduce-cost.png";
import scaleFast from "../../../../assets/icons/scale-fast.png";
import Card from "../../../Card/Card";
import icon1 from "../../../../assets/icons/How does offshoring work-01_dark.png";
import icon2 from "../../../../assets/icons/How does offshoring work-02_dark.png";
import icon3 from "../../../../assets/icons/How does offshoring work-03_dark.png";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";


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
  const cardData2 = [
    {
      title: "COLLABORATE",
      ico: icon1,
      desc: "We discuss your offshore resourcing requirements",
    },
    {
      title: "RECRUIT",
      ico: icon2,
      desc: "We recruit and employ your offshore team",
    },
    {
      title: "SUPPORT",
      ico: icon3,
      desc: "We support the operations of your offshore team",
    },
  ];
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
      <div className="section-container">
        <h1>Challenges in the Financial Services Industry</h1>
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
      <div className="section-container bg-[#f4fafc]">
        <img src={sectionImg} alt="section" />
      </div>
      <div className="section-container">
        <h1>
          Why is the financial services industry well suited to outsourcing?
        </h1>
        <p>
          Outsourcing can effectively address complex regulatory requirements
          and compliance standards by leveraging external expertise and
          specialized resources.
        </p>
        <p>
          It fosters seamless communication and collaboration by partnering with
          skilled service providers, enhancing operational efficiency across
          departments.
        </p>
        <p>
          Additionally, outsourcing provides scalable solutions, allowing
          organizations to balance growth effectively while minimizing risks.
        </p>
        <p>
          Moreover, trusted outsourcing partners often possess robust
          cybersecurity measures, ensuring the protection of sensitive financial
          data and mitigating cyber threats.
        </p>
      </div>
      <div className="section-container">
        <h1>
          What are the benefits of Filipino financial services outsourcing?
        </h1>
        <p>
          Offshore staffing provides several benefits to organizations looking
          to outsource a variety of business processes or functions.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cardData.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                desc={item.desc}
                url={item.url}
                ico={item.ico}
                btn={item.btn}
              />
            );
          })}
        </div>
      </div>
      <div className="section-container">
        <h1>
          What financial services and roles can you outsource with
          MicroSourcing?
        </h1>
        <p>
          MicroSourcing is the leading outsourcing provider in the Philippines,
          building full-time, dedicated teams for its clients while taking care
          of everything on the ground.
        </p>
        <ul className="grid md:grid-cols-3">
          <li>Accounting</li>
          <li>Auditing</li>
          <li>Compliance and risk management</li>
          <li>Customer service</li>
          <li>Data management</li>
          <li>Investment management</li>
          <li>Mortgage processing</li>
          <li>Payroll processing</li>
          <li>Taxation services</li>
          <li>Technical support</li>
        </ul>
      </div>
      <div className="section-container">
        <h1>How does offshoring with MicroSourcing work?</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cardData2.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              ico={data.ico}
              desc={data.desc}
            />
          ))}
        </div>
      </div>
      <div>
        <GetInTouch />
      </div>
      
    </div>
  );
};

export default FinancialServices;
