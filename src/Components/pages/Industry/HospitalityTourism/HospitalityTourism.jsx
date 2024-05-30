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

const HospitalityTourism = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1469919334.png?width=828&height=465&name=iStock-1469919334.png",
    title: "Outsourcing in Hospitality Industry to the Philippines",
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
        <p>
          Hospitality and tourism organizations often deal with fluctuating
          demand due to seasonal trends, requiring effective resource management
          and marketing strategies.
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
      <div className="section-container bg-[#f4fafc]">
        <img src={sectionImg} alt="section" />
      </div>
      <div className="section-container">
        <h1>
          Why is the hospitality and tourism industry well suited to
          outsourcing?
        </h1>
        <p>
          Offshoring back-office functions like reservations, data entry, and
          customer support can lead to cost savings, allowing businesses to
          allocate resources more efficiently.
        </p>
        <p>
          Offshore contact centers can provide 24/7 customer support,
          accommodating different time zones and ensuring quick responses to
          inquiries.
        </p>
        <p>
          Offshore teams can offer multilingual support and cultural insights,
          enhancing the guest experience for international travelers.
        </p>
        <p>
          Offshore analysts can conduct market research, helping organizations
          stay informed about industry trends and customer preferences, enabling
          data-driven decision-making.
        </p>
      </div>
      <div className="section-container">
        <h1>
          What are the benefits of Filipino hospitality and tourism outsourcing?
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
          What hospitality and tourism services and roles can you outsource with
          MicroSourcing?
        </h1>
        <p>
          MicroSourcing is the leading outsourcing provider in the Philippines,
          building full-time, dedicated teams for its clients while taking care
          of everything on the ground.
        </p>
        <ul>
          <li>Customer support and reservations</li>
          <li>Online travel agency (OTA) management</li>
          <li>Data entry and back office operations</li>
          <li>Multilingual concierge services</li>
          <li>Revenue management</li>
          <li>Digital marketing and search engine optimization (SEO)</li>
          <li>Accounting and financial services</li>
          <li>Market research and data analysis</li>
          <li>IT support and software development</li>
          <li>Travel booking platform management</li>
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

export default HospitalityTourism;
