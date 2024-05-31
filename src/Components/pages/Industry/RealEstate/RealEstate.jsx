import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import increaseQuality from "../../../../assets/icons/increase-quality.png";
import reduceCost from "../../../../assets/icons/reduce-cost.png";
import scaleFast from "../../../../assets/icons/scale-fast.png";
import Card from "../../../Card/Card";
import sectionImg from './profile.png'
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const RealEstate = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1449713294.png?width=828&height=465&name=iStock-1449713294.png",
    title: "Real estate outsourcing to the Philippines",
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
        <h1>Growth in the Global Real Estate Market</h1>
        <p>
          The global real estate market was valued at $3.69 trillion in 2021 and
          is expected to grow, between 2022 and 2030, at a compound annual
          growth rate (CAGR) of 5.2%. This growth is largely driven by the
          rebound of the real estate industry post-pandemic. This rebound is
          attributed to an increase in the residential market for home and
          personal spaces that cater for remote work and the commercial market's
          need to introduce hybrid and return-to-work office schemes.
        </p>

        <p>
          These market changes have real estate organizations restructuring
          their operations to support a forecasted growth in demand while
          balancing interest rate rises. The most popular way to support
          anticipation of business growth is to hire additional employees. But
          that means increasing employment costs - so how can real estate
          organizations keep these costs minimal but maintain high levels?
        </p>

        <p>
          Outsourcing. By hiring offshore employees, you not only can minimize
          employment costs but also offer the necessary flexibility and support
          to your onshore employees to focus on nurturing client relationships
          and creating growth strategies to capitalize on this expanding market.
        </p>

        <h1>What are the Benefits of Real Estate Outsourcing?</h1>
        <p>
          Offshoring can provide several benefits to real estate organizations
          looking to outsource a variety of business processes or functions.
          While they can be specific to what the organization wants to achieve
          by outsourcing, the most common benefits include:
        </p>
        <ul>
          <li>
            Cost savings: Reduce employment costs by hiring offshore employees.
          </li>
          <li>
            Flexibility: Offer necessary support to onshore employees to focus
            on core tasks.
          </li>
          <li>Scalability: Quickly scale operations to meet market demands.</li>
          <li>
            Access to talent: Tap into a global talent pool with diverse skill
            sets.
          </li>
          <li>
            Efficiency: Streamline processes and improve operational efficiency.
          </li>
        </ul>
      </div>
      <div className="section-container">
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
          What are the Most Frequently Outsourced Real Estate Roles and
          Functions?
        </h1>
        <p>
          Real estate is a large industry, meaning that there isn’t just a
          handful of roles that are suited to outsourcing. Your outsourced team
          is an extension of your business, so organizations often hire roles
          they could source onshore but for a fraction of the price.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2>Finance, Accounting and Payroll</h2>
            <ul>
              <li>Accountants</li>
              <li>Accounts Receivable & Payable Specialists</li>
              <li>Administrative Assistants</li>
              <li>Bookkeepers</li>
              <li>Financial Analysts</li>
              <li>Payroll Processors</li>
              <li>Tax Advisors</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2>Human Resources, Recruitment and Training</h2>
            <ul>
              <li>HR Managers</li>
              <li>HR or Recruitment Officers</li>
              <li>Talent Acquisition Specialists</li>
              <li>Training Coordinators</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2>Marketing and Creative Services</h2>
            <ul>
              <li>Content Marketing Managers</li>
              <li>Content Moderators</li>
              <li>Copywriters</li>
              <li>Digital Marketers</li>
              <li>Email Marketers</li>
              <li>Graphic Designers</li>
              <li>Search Engine Marketing (PPC/SEM) Specialists</li>
              <li>Social Media Marketers</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2>Data Management</h2>
            <ul>
              <li>Data Analysts</li>
              <li>Data Cleansing Analysts</li>
              <li>Data Entry Specialists</li>
              <li>Data Visualization Specialists</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2>Administrative and Technical Support</h2>
            <ul>
              <li>Customer Service Representatives</li>
              <li>Executive Assistants</li>
              <li>Live Chat Agents</li>
              <li>Personal Assistants</li>
              <li>Sales Support Specialists</li>
              <li>Technical Support Specialists</li>
              <li>Virtual Assistants</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2>Operations</h2>
            <ul>
              <li>Lease Consultants</li>
              <li>Listing Coordinators</li>
              <li>Project Managers</li>
              <li>Property Consultants</li>
              <li>Strata Management Assistants</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f4f6] px-5 md:px-16 py-10 md:py-16 flex flex-col gap-10">
        <h1 className="text-center font-outfit font-bold text-4xl md:text-5xl">Sample real estate employee profiles</h1>
        <p className="text-center">At MicroSourcing, we have more than 400 real estate specialists in our candidate database, and access to more than an additional 3,000 real estate outsourcing specialists across the Philippines. Here are a few examples of real candidate profiles:</p>
        <img src={sectionImg} alt="" />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default RealEstate;
