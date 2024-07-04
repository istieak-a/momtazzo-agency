import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import sectionImg from './profile.png';

const Utilities = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1405880267.png?width=828&height=465&name=iStock-1405880267.png",
    title: "Utilities outsourcing to the Philippines",
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
      <div className="section-margin mx-5 my-3 border-b-2 border-t-2 text-center md:mx-16">
        <p>
        Curious About Outsourced Utilities and What Approach is Best for Your
          Organization? Here’s What You Need to Know.
        </p>
      </div>
      <div className="section-container">
        <p>
          Few industries elicit as much emotion from the public, politicians,
          and media as the provision of utilities. It’s rarely out of the press,
          whether it’s economic hardship, environmental protest, market
          regulation, or government involvement – and the news is rarely good.
        </p>
        <p>
          Deloitte says this is a period of “transformation and profound change”
          for the utilities industry, and industry publication, Utility Dive,
          predicts that disruptions are expected to range “from a continuing
          shift to a cheaper, cleaner generation mix to a focus on grid
          modernization and distributed resource integration.”
        </p>
        <p>
          Climate change in particular is having a significant and profound
          influence on industry across the board, and it’s changing everything
          about power systems and regulatory models. Traditional providers are
          being challenged by competition from alternative energy providers and
          consumer demands for more control over consumption and source of
          power.
        </p>
        <p>
          Failure to recognize and act on that challenge is costing big money.
          GE lost US$193 billion in three years because it misjudged the impact
          of the world transition to cleaner energy and increasing energy
          efficiency, according to a report by the Institute for Energy
          Economics and Financial Analysis (IEEFA). In what the institute called
          “an epic failure of corporate governance”, GE lost almost
          three-quarters of its market capitalization.
        </p>
        <p>
          But for those with their eyes open, there are huge opportunities in
          areas like renewable energy and energy distribution. According to the
          latest Wood Mackenzie U.S. Energy Storage Monitor, the US energy
          storage market has seen a 232% increase from Q1 2018, and a 6% jump
          from Q4 2018. And the global energy supply services segment as a
          service market is expected to grow at a rate of 10.8% from 2019 to
          2024 (CAGR) to USD$86.9 billion.
        </p>
        <p>
          Without doubt, highly specialized knowledge is required to
          successfully navigate these complex challenges and arrive at a point
          where you’re able to take advantage of the opportunities. And you’ll
          need to be extremely lean and efficient to offer emerging delivery
          models demanded by consumers (such as subscription services), as well
          as cleaner, cheaper, and more reliable energy.
        </p>
        <p>
          Some of that can be achieved by offshoring certain aspects of your
          business, such as finance, IT, and data management. But outsourcing
          utilities roles or working with a utilities BPO isn’t just about the
          obvious cost benefit. It can actually enhance your capacity to provide
          omnichannel customer experiences such as live chat, 24/7 phone
          answering, sales and service, and it can also expand your online
          knowledge base.
        </p>
        <p>
          That’s strategically important as consumers – both commercial and
          household – take advantage of increased market competition and
          technological capacity to demand more control over their consumption
          and expenditure.
        </p>

        <h1>Why is the Utilities Industry Suited to Offshoring?</h1>
        <p>
          Fortunately for utilities businesses, it’s an industry that’s
          particularly well suited to offshoring, because:
        </p>
        <ul>
          <li>
            The expertise and infrastructure required to perform your business
            processes and specialized roles in customer service, IT, etc.
            already exists offshore, meaning that set-up costs are minimal, the
            quality of the work is high, and there’s widespread cultural
            acceptance of the practice among consumers generally.
          </li>
          <li>
            Much of the work in the utilities industry is performed using
            cloud-based software, which is available via any browser, so the
            team’s physical location is irrelevant.
          </li>
          <li>
            A lot of the work can be done at any time – not just in business
            hours. In fact, having access to staff outside of traditional office
            hours is a must for certain teams. And a good provider will give you
            access to people who can work any hours you choose.
          </li>
        </ul>

        <h1>Frequently Offshored Utilities Roles</h1>
        <p>Some of the more frequently offshored utilities roles include:</p>
        <ul className="link-li grid md:grid-cols-2">
          <li>Customer Service Representative</li>
          <li>Sales Representative</li>
          <li>Account Executive</li>
          <li>Business Development Consultant</li>
          <li>Engineer (Electric, Mechanical, Civil, Computer)</li>
          <li>Technical Support Specialist</li>
          <li>Billing Specialist</li>
          <li>Collections Specialist</li>
          <li>Project Manager</li>
        </ul>
      </div>
      <div className="flex flex-col gap-10 bg-[#f1f4f6] px-5 py-10 md:px-16 md:py-16">
        <h1 className="text-center font-outfit text-4xl font-bold md:text-5xl">
        Sample utilities employee profiles
        </h1>
        <p className="text-center">
        At MicroSourcing, we have more than 350 specialists servicing clients in the utilities industry in our candidate database, and access to more than an additional 800 across the Philippines. Here are a few examples of real candidate profiles:
        </p>
        <img src={sectionImg} alt="" />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default Utilities;
