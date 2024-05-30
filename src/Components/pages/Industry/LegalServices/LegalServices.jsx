import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import sectionImg from "../FinancialServices/whyMicrosourcing.png";
import increaseQuality from "../../../../assets/icons/increase-quality.png";
import reduceCost from "../../../../assets/icons/reduce-cost.png";
import scaleFast from "../../../../assets/icons/scale-fast.png";
import Card from "../../../Card/Card";
import icon1 from "../../../../assets/icons/How does offshoring work-01_dark.png";
import icon2 from "../../../../assets/icons/How does offshoring work-02_dark.png";
import icon3 from "../../../../assets/icons/How does offshoring work-03_dark.png";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const LegalServices = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/industry-legal-services-banner.png?width=828&height=465&name=industry-legal-services-banner.png",
    title: "Legal services outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "INDUSTRY",
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
        <h1>Challenges in the Legal Services Industry</h1>
        <p>
          Legal services often grapple with navigating the complex and
          ever-evolving landscape of legal regulations - requiring continuous
          research and compliance efforts.
        </p>
        <p>
          Meeting clients' heightened expectations for cost-effective, timely,
          and specialized legal services within a competitive market is a
          significant challenge.
        </p>
        <p>
          Attracting and retaining top legal talent, including experienced
          attorneys and paralegals, poses an ongoing struggle.
        </p>
        <p>
          Adapting to new legal technologies, addressing data security
          requirements, and embracing digital workflows are vital but often
          daunting tasks.
        </p>
      </div>
      <div className="section-container bg-[#f4fafc]">
        <img src={sectionImg} alt="section" />
      </div>
      <div className="section-container">
        <h1>Why is the legal services industry well suited to outsourcing?</h1>
        <p>
          Outsourcing non-core functions can result in cost savings, allowing
          firms to allocate resources more effectively and offer competitive
          pricing to clients.
        </p>
        <p>
          Legal outsourcing providers often have specialized expertise in areas
          such as e-discovery, patent research, or contract review.
        </p>
        <p>
          Outsourcing allows organizations to quickly scale up or down to meet
          fluctuating workloads and client demands.
        </p>
        <p>
          Access to a global talent pool allows firms to find skilled legal
          professionals, including paralegals and legal researchers, while also
          catering to multilingual client needs and expanding international
          capabilities.
        </p>
      </div>
      <div className="section-container">
        <h1>What are the benefits of Filipino legal services outsourcing?</h1>
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
          What legal services and roles can you outsource with MicroSourcing?
        </h1>
        <p>
          MicroSourcing is the leading outsourcing provider in the Philippines,
          building full-time, dedicated teams for its clients while taking care
          of everything on the ground.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3">
          <li>Document review</li>
          <li>Legal and patent research</li>
          <li>Contract drafting and review</li>
          <li>E-discovery services</li>
          <li>Paralegal support</li>
          <li>Intellectual property services</li>
          <li>Compliance and regulatory support</li>
          <li>Administrative and secretarial tasks</li>
          <li>Virtual legal assistants</li>
          <li>Legal transcription</li>
          <li>Litigation support services</li>
          <li>Legal billing and accounting</li>
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

export default LegalServices;
