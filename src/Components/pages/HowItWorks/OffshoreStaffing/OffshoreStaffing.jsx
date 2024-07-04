import React from "react";
import hero from "../../../../assets/banner-img/ms-banner-offshore-staffing.jpg";
import heroRes from "../../../../assets/banner-img/ms-banner-offshore-staffing-m.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";
import { Link } from "react-router-dom";
import sectionImg from './offshore-sec.png';
import increaseQuality from "../../../../assets/icons/increase-quality.png";
import reduceCost from "../../../../assets/icons/reduce-cost.png";
import scaleFast from "../../../../assets/icons/scale-fast.png";
import Card from "../../../Card/Card";
import BuildTeam from "../../../Sections/BuildTeam/BuildTeam";

const OffshoreStaffing = () => {
    const cardData = [
        {
          title: "Reduce Costs",
          ico: reduceCost,
          desc: "Outsourcing allows your organization to be more competitive, sustainable and profitable with 70% labor cost savings.",
          btn: "Boost my profits",
          url: "/reduce-cost",
        },
        {
          title: "Increase quality & efficiency",
          ico: increaseQuality,
          desc: "Remote staffing solutions rectify skills shortages and improve internal processes by accessing global talent pools.",
          btn: "Build your team",
          url: "/increase-quality-efficiency",
        },
        {
          title: "Scale faster",
          ico: scaleFast,
          desc: "Tailor your offshore operations to help scale quickly, meet demand, combat rising labor costs and access specialty talent all without the overheads.",
          btn: "Scale my business",
          url: "/scale-fast",
        },
      ];
  const heroBanner = {
    title: "How does offshore staffing in the Philippines work?",
    desc: "Offshoring with MicroSourcing can bring many benefits to your organization, including the potential to save up to 70% on costs.",
    img: hero,
    imgRes: heroRes,
  };
  return (
    <div>
      <div>
        <HeroBanner
          title={heroBanner.title}
          title2={heroBanner.title2}
          desc={heroBanner.desc}
          img={heroBanner.img}
          imgRes={heroBanner.imgRes}
        />
      </div>
      <div className="section-container">
        <p>
          Our offshore staffing services offer more than just cost savings,
          although that is a major advantage. By working with us, you gain
          access to a diverse pool of talent that can help your business thrive
          in a highly competitive market. Our track record speaks for itself,
          having helped over 500 companies worldwide operate smoothly and
          efficiently in the Philippines.
        </p>

        <h1>What is offshore staffing in the Philippines?</h1>
        <p>
          Our offshoring services provide you with the freedom to manage your
          own pre-screened team in the Philippines, who work exclusively for you
          and report directly to you. You can communicate with your team through
          various channels, and we'll assign a dedicated account manager for
          you.
        </p>
        <p>
          We use our expertise in offshoring to help you establish a strong
          foundation, without imposing our own methods or technology. We'll help
          you define your staffing requirements and create job profiles. Our
          recruitment team will provide a shortlist of the screened candidates
          for you to decide who to hire and our IT team will establish the
          necessary infrastructure. We'll also provide guidance on operations
          and management, identify key performance indicators and deliver
          comprehensive support services.
        </p>
        <div className="flex flex-col gap-5 rounded-lg bg-[#f4fafc] px-6 py-10 lg:mx-[25%]">
          <p className="text-center font-outfit text-2xl">
            Get detailed information on our 3-step offshoring process.
          </p>
          <Link className="btn text-center">DISCOVER HOW OFFSHORING WORKS</Link>
        </div>
      </div>
      <div className="section-container">
        <h1>How much can you save with offshore staffing?</h1>
        <p>
          MicroSourcing’s offshore staffing pricing model is transparent. It
          takes the guesswork out of budgeting for your offshore staff.
        </p>

        <img src={sectionImg} alt="chart" />

        <p>This model offers several benefits:</p>
        <ul>
          <li>
            No upfront fees: you receive your first invoice after your offshore
            team begins work, which covers their salaries and our service fee.
          </li>
          <li>
            Direct budgeting: you have control over your offshore staff's
            compensation, giving you direct oversight of labor costs.
          </li>
          <li>
            No conflict of interest: unlike traditional BPO models, our
            transparent pricing eliminates conflicts of interest, ensuring you
            get the best-qualified staff without sacrificing benefits.
          </li>
        </ul>
        <div className="flex flex-col gap-5 rounded-lg bg-[#f4fafc] px-6 py-10 lg:mx-[25%]">
          <p className="text-center font-outfit text-2xl">
            How much can your business save by outsourcing?
          </p>
          <Link className="btn text-center">SEE THE BREAKDOWN HERE</Link>
        </div>
      </div>
      <div className="section-container">
        <h1>What are the benefits of offshore staffing for your business?</h1>
        <p>Offshore staffing provides several benefits to organizations looking to outsource a variety of business processes or functions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
        <h1>Could offshore staffing in the Philippines work for your business?</h1>
        <p>Contact us to discuss whether offshore staffing in the Philippines is suitable for your business. We're happy to answer any questions and recommend cost-saving solutions if offshoring is a good fit for your business.</p>
        <div className="flex flex-col gap-5 rounded-lg bg-[#f4fafc] px-6 py-10 lg:mx-[25%]">
          <p className="text-center font-outfit text-2xl">
            FREE offshoring certification course
          </p>
          <Link className="btn text-center">LEARN OUTSOURCING IN 12 DAYS</Link>
        </div>
      </div>
      <div>
        <BuildTeam />
      </div>
    </div>
  );
};

export default OffshoreStaffing;
