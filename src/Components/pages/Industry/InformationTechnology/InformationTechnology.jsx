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

const InformationTechnology = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1354692516.png?width=828&height=465&name=iStock-1354692516.png",
    title: "Technology outsourcing to the Philippines",
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
        <h1>Challenges in the Information Technology (IT) Industry</h1>
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
      <div className="section-container bg-[#f4fafc]">
        <img src={sectionImg} alt="section" />
      </div>
      <div className="section-container">
        <h1>
          Why is the information technology industry well suited to outsourcing?
        </h1>
        <p>
          Outsourcing to specialized providers grants IT organizations access to
          agile expertise, enabling swift adaptation to market demands without
          internal bureaucracy.
        </p>
        <p>
          Outsourcing offers access to a diverse, global talent pool, easing the
          burden of talent acquisition and providing access to skilled
          professionals necessary to propel their businesses forward.
        </p>
        <p>
          Organizations can leverage the expertise of outsourcing providers to
          modernize systems and eliminate reliance on outdated technologies.
        </p>
        <p>
          These providers foster seamless communication through dedicated teams
          and clear SLAs, bridging communication gaps and ensuring efficient
          collaboration.
        </p>
      </div>
      <div className="section-container">
        <h1>
          What are the benefits of Filipino information technology outsourcing?
        </h1>
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
          What information technology services and roles can you outsource with
          MicroSourcing?
        </h1>
        <p>
          MicroSourcing is the leading outsourcing provider in the Philippines,
          building full-time, dedicated teams for its clients while taking care
          of everything on the ground.
        </p>
        <ul>
          <li>Cloud services</li>
          <li>Cyber security</li>
          <li>Data management</li>
          <li>Database management</li>
          <li>IT consulting</li>
          <li>Mobile app development</li>
          <li>Network management</li>
          <li>Quality assurance and testing</li>
          <li>Software development</li>
          <li>Technical support</li>
          <li>Virtualization services</li>
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

export default InformationTechnology;
