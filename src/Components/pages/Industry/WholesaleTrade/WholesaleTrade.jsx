import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import sectionImg from "./profile.png";

const WholesaleTrade = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1469919334.png?width=828&height=465&name=iStock-1469919334.png",
    title: "Wholesale trade outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "INDUSTRY",
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

      <div className="section-container">
        <h1>Outsourcing Wholesale Trade Services to the Philippines</h1>
        <p>
          Outsourcing wholesale trade services to the Philippines has numerous
          advantages for businesses looking to expand their operations.
          Outsourcing allows companies to access a vast pool of skilled
          professionals with expertise in the wholesale trade industry. These
          professionals are experienced in various aspects of the wholesale
          trade, including product sourcing, inventory management, logistics,
          and marketing, which can help businesses reduce operational costs and
          improve their overall performance.
        </p>

        <p>
          Outsourcing wholesale trade services to the Philippines can help
          businesses streamline their operations by reducing the burden of
          administrative tasks. This allows companies to focus on core business
          functions such as sales and customer service, which are crucial to
          their growth and success. Additionally, outsourcing can provide
          businesses with access to new technologies and digital tools that can
          help them stay ahead of the competition in a rapidly evolving market.
          By outsourcing wholesale trade services, businesses can enjoy numerous
          benefits while freeing up their resources to focus on core
          competencies and achieve their business objectives.
        </p>

        <h1>What are the Benefits of Wholesale Trade Outsourcing?</h1>
        <p>
          Outsourcing wholesale trade services can provide businesses with
          several benefits that can help them improve their operations, scale
          fast, and stay competitive in the market.
        </p>

        <h2>Lower Costs</h2>
        <p>
          By outsourcing to countries such as the Philippines, businesses can
          take advantage of the lower labor costs and reduce their operational
          expenses by up to 70%. This can help companies free up resources to
          invest in other critical areas such as marketing, research and
          development, and innovation.
        </p>

        <h2>Access to Global Talent</h2>
        <p>
          By outsourcing, businesses can tap into a vast pool of skilled
          professionals with expertise in various aspects of the wholesale trade
          industry. This can help companies improve the quality of their
          services, streamline their operations, and gain a competitive edge in
          the market.
        </p>

        <h2>Improve Efficiencies</h2>
        <p>
          By partnering with a trusted outsourcing provider, businesses can take
          advantage of their expertise in the industry and leverage their
          processes and systems to streamline operations and efficiencies. This
          can help businesses improve their supply chain, optimize their
          inventory management, and enhance their logistics processes.
        </p>

        <h2>Scale Fast</h2>
        <p>
          With the help of an outsourcing provider, businesses can quickly ramp
          up their operations to meet growing demand, expand into new markets,
          and take advantage of new opportunities. This can help businesses stay
          nimble and agile in a rapidly changing business environment.
        </p>

        <h2>Stay Competitive</h2>
        <p>
          By partnering with an outsourcing provider, businesses can gain access
          to new technologies, tools, and best practices that can help them stay
          ahead of the competition. This can help businesses improve their
          products and services, enhance their customer experience, and drive
          growth and profitability.
        </p>

        <h1>Frequently Offshored Wholesale Trade Roles</h1>
        <p>
          Outsourcing providers can find quality and qualified specialists to
          fill almost any wholesale trade position or team. More frequently
          outsourced roles include:
        </p>
        <ul className="grid gap-3 md:grid-cols-2 link-li">
          <li>3D Designer</li>
          <li>Accounting</li>
          <li>Accounts Receivable and Payable Officers</li>
          <li>Admin Assistant</li>
          <li>Animator</li>
          <li>Bookkeeper</li>
          <li>Content Moderator</li>
          <li>Copywriter</li>
          <li>Customer Service Representative</li>
          <li>Data Analyst</li>
          <li>Data Entry Specialist</li>
          <li>Debt Collection Specialist</li>
          <li>Digital Marketer</li>
          <li>Graphic Designer</li>
          <li>Live Chat Agent</li>
          <li>Marketing Specialist</li>
          <li>Payroll Processor</li>
          <li>Project Manager</li>
          <li>QA Specialist</li>
          <li>Quantity Surveyor</li>
          <li>Sales Support</li>
          <li>SEM Specialist</li>
          <li>SEO Specialist</li>
          <li>Social Media Marketer</li>
          <li>Software Developer</li>
          <li>Talent Acquisition Specialists</li>
          <li>Technical Support Engineer</li>
          <li>Technical Support Specialist</li>
          <li>Telemarketer</li>
          <li>Transcription Specialist</li>
          <li>Video Editor</li>
          <li>Virtual Assistant</li>
          <li>Web Developer</li>
        </ul>
      </div>

      <div className="flex flex-col gap-10 bg-[#f1f4f6] px-5 py-10 md:px-16 md:py-16">
        <h1 className="text-center font-outfit text-4xl font-bold md:text-5xl">
          Sample utilities employee profiles
        </h1>
        <p className="text-center">
          At MicroSourcing, we have more than 350 specialists servicing clients
          in the utilities industry in our candidate database, and access to
          more than an additional 800 across the Philippines. Here are a few
          examples of real candidate profiles:
        </p>
        <img src={sectionImg} alt="" />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default WholesaleTrade;
