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

const Telecommunications = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-155429711.png?width=828&height=465&name=iStock-155429711.png",
    title: "Telecommunications Outsourcing Services",
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
        <h1>Challenges in the Telecommunications Industry</h1>
        <p>
          Telecommunications organizations often grapple with keeping up with
          rapid technological changes, such as the shift to 5G and emerging
          network infrastructure, which requires significant investments and
          expertise.
        </p>
        <p>
          Navigating complex and ever-changing telecommunications regulations,
          especially in different countries, can be a compliance and legal
          challenge.
        </p>
        <p>
          Meeting rising customer expectations for faster, more reliable, and
          affordable services while managing competitive pricing is a constant
          struggle.
        </p>
        <p>
          Ensuring the security of vast communication networks against cyber
          threats and maintaining data privacy is an ongoing concern in the
          digital age.
        </p>
      </div>
      <WhyMicrosourcing />
      <div className="section-container">
        <h1>
          Why is the Telecommunications Industry Well Suited to Outsourcing?
        </h1>
        <p>
          Offshoring certain technical and administrative functions can help
          reduce operational costs, allowing organizations to allocate resources
          to keep pace with technological advancements.
        </p>
        <p>
          Offshore legal and compliance teams can specialize in navigating
          complex regulations, ensuring that the organization remains compliant
          in various markets.
        </p>
        <p>
          Offshoring customer support can provide 24/7 assistance, meeting
          customer expectations for prompt service and issue resolution.
        </p>
        <p>
          Offshore IT and cybersecurity teams can enhance network security,
          implementing measures to protect against cyber threats and data
          breaches.
        </p>
      </div>
      <div className="section-container">
        <h1>
        What are the benefits of Filipino telecommunications outsourcing?
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
          What Telecommunications Services and Roles Can You Outsource with
          MicroSourcing?
        </h1>
        <p>
          MicroSourcing is the leading outsourcing provider in the Philippines,
          building full-time, dedicated teams for its clients while taking care
          of everything on the ground.
        </p>
        <ul className="grid gap-3 md:grid-cols-2">
          <li>Customer support</li>
          <li>Network monitoring</li>
          <li>Technical support</li>
          <li>Billing and invoicing</li>
          <li>Data entry</li>
          <li>Network security</li>
          <li>IT infrastructure management</li>
          <li>Network design and engineering</li>
          <li>Provisioning and configuration</li>
          <li>Quality assurance testing</li>
          <li>Sales and marketing</li>
          <li>Content moderation</li>
          <li>Network maintenance</li>
          <li>Troubleshooting and repairs</li>
          <li>Network optimization</li>
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

export default Telecommunications;
