import React from "react";
import hero from "../../../../assets/banner-img/ms-banner-scale-fast.jpg";
import heroRes from "../../../../assets/banner-img/ms-banner-scale-fast-m.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";
import CaseStudy from "../../../Sections/CaseStudy/CaseStudy";
import TheBenifits from "../../../Sections/TheBenefits/TheBenifits";
import BuildTeam from "../../../Sections/BuildTeam/BuildTeam";

const ScaleFast = () => {
  const heroBanner = {
    title: "Why outsource?To scale fast",
    desc: "Find the right people to tackle growing demand without all the usual hassle and expenditure",
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
      <div className="flex flex-col gap-5 px-5 py-16 md:px-16 max-w-7xl mx-auto">
        <h1 className="pb-4 text-left font-sans text-3xl font-[500] md:text-5xl">
          How outsourcing facilitates scalability
        </h1>
        <p>
          Growing one’s workforce is a delicate balancing act. On one hand, more
          employees are needed to tackle increasing demand, realize new
          opportunities or reduce workload pressures on existing staff. On the
          flipside, the costs involved in boosting numbers can be daunting, from
          infrastructure, furniture and office space to recruitment, training
          and software licenses. Then there are the financial and logistical
          issues that arise when staff become surplus to requirements and it is
          time to downsize again.
        </p>
        <p className="flex items-center py-5 gap-5">
          <img src="https://www.microsourcing.com/hubfs/MicroSourcing/Why%20Offshore/Scale%20Fast/ms-benefit-scalability-img1.png" alt="ico" />
          Quality outsourcing providers allow businesses to access individual
          staff or establish entire teams in as little as six to eight weeks and
          at a fraction of the cost of doing so in-house. Be it navigating
          seasonal or unexpected demand or supporting sustainable growth, these
          specialists not only find the right talent but look after many of the
          factors that make hiring a headache including interviews, security
          checks, training and onboarding. They then turn their focus to
          managing ongoing performance and ensuring the offshore recruits
          deliver the results expected of them – all for a low monthly fee
          rather than a significant upfront investment.
        </p>
        <p>
          Just as crucially, outsourcing means organizations can swiftly and
          seamlessly scale down operations when circumstances change. There are
          no leases to break, benefits to be paid out or expensive office
          furniture and IT equipment to store or offload. For many businesses,
          the potential to scale down with minimum fuss is as appealing as the
          ability to scale up.
        </p>
        <p>
          It is little surprise that a survey of 500 US organizations found the
          capacity to support scalability and business growth is one of the top
          reasons for outsourcing1.
        </p>
      </div>
      {/* <div>
        <CaseStudy />
      </div> */}
      <div>
        <TheBenifits />
      </div>
      <div>
        <BuildTeam />
      </div>
    </div>
  );
};

export default ScaleFast;
