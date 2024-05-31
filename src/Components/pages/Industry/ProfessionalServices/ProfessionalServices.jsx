import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import WhyMicrosourcing from "../../../Sections/WhyMicrosourcing/WhyMicrosourcing";
import increaseQuality from "../../../../assets/icons/increase-quality.png";
import reduceCost from "../../../../assets/icons/reduce-cost.png";
import scaleFast from "../../../../assets/icons/scale-fast.png";
import Card from "../../../Card/Card";
import icon1 from "../../../../assets/icons/How does offshoring work-01_dark.png";
import icon2 from "../../../../assets/icons/How does offshoring work-02_dark.png";
import icon3 from "../../../../assets/icons/How does offshoring work-03_dark.png";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const ProfessionalServices = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1367572246.png?width=828&height=465&name=iStock-1367572246.png",
    title: "Professional services outsourcing to the Philippines",
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
        <h1>Challenges in the Professional Services Industry</h1>
        <p>
          Professional services organizations struggle to balance scalability
          with personalized client experiences, risking a loss of agility.
        </p>
        <p>
          Optimizing operational efficiency while maintaining high service
          standards is a significant challenge.
        </p>
        <p>
          Complex internal communication and collaboration hinder effective
          decision-making and knowledge-sharing.
        </p>
        <p>
          Adapting to evolving technologies and industry trends requires a
          continuous investment in skill development and modernization.
        </p>
      </div>
      <WhyMicrosourcing />
      <div className="section-container">
        <h1>
          Why is the Professional Services Industry Well Suited to Outsourcing?
        </h1>
        <p>
          Outsourcing can enable scalability by leveraging external expertise
          and resources while maintaining personalized client experiences.
        </p>
        <p>
          By outsourcing non-core functions to specialized partners,
          organizations can streamline operations and focus on their core
          competencies.
        </p>
        <p>
          Outsourcing communication and collaboration tasks can enhance
          efficiency, promote seamless information flow, and facilitate
          effective decision-making across the organization.
        </p>
        <p>
          Embracing outsourcing allows organizations to access cutting-edge
          technologies and industry expertise without heavy upfront investments.
        </p>
        <p>
          Professional services organizations can tap into a global talent pool,
          benefiting from diverse skill sets and fresh perspectives.
        </p>
      </div>
      <div className="section-container">
        <h1>
          What are the benefits of Filipino professional services outsourcing?
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
          What Professional Services and Roles Can You Outsource with
          MicroSourcing?
        </h1>
        <p>
          MicroSourcing is the leading outsourcing provider in the Philippines,
          building full-time, dedicated teams for its clients while taking care
          of everything on the ground.
        </p>
        <ul>
          <li>Technical support</li>
          <li>Customer service</li>
          <li>Accounting</li>
          <li>HR services</li>
          <li>Marketing</li>
          <li>Legal services</li>
          <li>Data management</li>
          <li>Logistics</li>
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

export default ProfessionalServices;
