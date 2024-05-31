import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import sectionImg from "./profile.png";

const RetailEcommerce = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-155429711.png?width=828&height=465&name=iStock-155429711.png",
    title: "Outsource eCommerce Services",
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
        <h1>What is eCommerce Outsourcing?</h1>
        <p>
          eCommerce outsourcing involves engaging a third-party organization to
          perform certain eCommerce tasks that would otherwise be done onshore.
          eCommerce roles you can outsource include anything from digital
          marketing and web development through to administration support and
          customer service.
        </p>
        <p>
          Rather than employing someone in-house, hiring an external service
          provider to tackle specific eCommerce functions is a cost-effective
          way to deliver business efficiencies and scale to meet demand.
        </p>
        <p>
          The global eCommerce market was valued at $9.09 trillion in 2019 and
          is predicted to grow at a compound annual growth rate (CAGR) of 14.7%
          from 2020 to 2027. So how can eCommerce businesses keep up with this
          growth to meet consumer demand all while delivering a top-quality
          customer experience? Investing in more resources and support is one
          way to stay competitive in today’s online landscape.
        </p>
        <p>
          But how do you do that when over-investing in local talent leaves no
          capital for other growth? Especially when the local talent pool may
          not supply the talent required to do so efficiently?
        </p>
        <p>
          The answer is simple: you need to go global. You need to be able to
          move beyond the time and resource constraints of your local employment
          market and tap into global employment markets. By leveraging offshore
          job markets, you’ll finally be able to increase your profits and
          achieve your business goals.
        </p>

        <h1>Why is the eCommerce Industry Suited to Offshoring?</h1>
        <p>
          The eCommerce industry is not immune to global talent shortages. An
          ongoing shortage of high-quality candidates with appropriate
          experience means it is becoming more expensive and difficult to
          recruit locally, particularly at the mid-management level. Outsourcing
          to the Philippines allows businesses to tap into a new market of
          highly specialized eCommerce teams that have earned a reputation for
          being hard workers, enthusiastic, and who speak excellent English.
        </p>
        <p>
          eCommerce is an industry that suits offshore models well because most
          of your local eCommerce staff are already set up to communicate and
          collaborate remotely due to the nature of their roles. For most, it’s
          the go-to communication strategy and preferred work arrangement. So
          employing a team offshore won’t impact your local team much at all.
          Another point is that much of the work completed in the eCommerce
          industry is performed using cloud-based software, which is available
          via any browser. This makes the physical location of your team
          irrelevant to quality outputs.
        </p>

        <h1>
          What are the Benefits of Outsourcing eCommerce Services to the
          Philippines?
        </h1>
        <p>Your organization could reap the following benefits:</p>
        <ul>
          <li>
            <strong>Cost savings:</strong> As the Philippines’ cost of living is
            lower than most Western countries, your business can outsource
            repetitive and time-consuming eCommerce tasks for a fraction of the
            price it would cost to hire specialists locally - up to 70% in some
            cases.
          </li>
          <li>
            <strong>Increase in output efficiency and quality levels:</strong>{" "}
            Sending certain eCommerce tasks to an offshore team in the
            Philippines means your onshore team will have more time, budget, and
            project scope to take on higher-value work.
          </li>
          <li>
            <strong>Business growth and scaling opportunities:</strong> When you
            send your time-consuming tasks to an offshore eCommerce team in the
            Philippines, your local team can focus on increasing profits and
            business growth opportunities. The additional capacity your onshore
            team gets from your offshore team’s support means you can grow your
            business sustainably.
          </li>
        </ul>
        <p>
          With the support of an offshore eCommerce team that is highly-skilled
          and boasts extensive experience, you can grow your company quickly and
          sustainably. The labor pool in the Philippines is known for its tech
          competency and attention to detail, operating in a fiscal and
          financial system almost identical to conditions in the West.
        </p>

        <h1>What eCommerce Roles and Tasks Can Be Outsourced?</h1>
        <p>
          There are a multitude of eCommerce tasks you can outsource and every
          organization has different requirements. The great thing about
          outsourcing is that you can tailor it to your business needs.
        </p>
        <p>
          The most commonly outsourced eCommerce services and roles include:
        </p>
        <ul className="grid md:grid-cols-2">
          <li>Accountant or Bookkeeper</li>
          <li>Accounts Payable and Accounts Receivable Specialists</li>
          <li>Content Moderator</li>
          <li>Copywriter</li>
          <li>Customer Service Representative</li>
          <li>Data Analyst</li>
          <li>Digital Marketing Specialist</li>
          <li>Graphic Designer</li>
          <li>Payroll Processor</li>
          <li>QA Specialist</li>
          <li>Sales Support</li>
          <li>SEM and SEO Specialist</li>
          <li>Social Media Marketer</li>
          <li>Software Developer</li>
          <li>Technical Support Specialist</li>
          <li>Telemarketer</li>
          <li>Virtual Assistant</li>
          <li>Web Developer (both frontend and backend)</li>
        </ul>
      </div>
      <div className="flex flex-col gap-10 bg-[#f1f4f6] px-5 py-10 md:px-16 md:py-16">
        <h1 className="text-center font-outfit text-4xl font-bold md:text-5xl">
          Sample eCommerce employee profiles
        </h1>
        <p className="text-center">
          At MicroSourcing, we have a multitude of eCommerce specialists in our
          candidate database with access to a huge talent pool across the
          Philippines. Here are a few examples of real candidate profiles:
        </p>
        <img src={sectionImg} alt="" />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default RetailEcommerce;
