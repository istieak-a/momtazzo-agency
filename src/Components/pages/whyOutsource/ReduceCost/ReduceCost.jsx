import React from "react";
import hero from "../../../../assets/banner-img/ms-banner-reduce-cost.jpg";
import heroRes from "../../../../assets/banner-img/ms-banner-reduce-cost-m.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import { Link } from "react-router-dom";
import CaseStudy from "../../../Sections/CaseStudy/CaseStudy";
import TheBenifits from "../../../Sections/TheBenefits/TheBenifits";
import BuildTeam from "../../../Sections/BuildTeam/BuildTeam";

const ReduceCost = () => {
  const heroBanner = {
    title: "Why outsource?",
    title2: "To reduce costs",
    desc: "Improve business efficiencies and service quality whilesaving up to 70% on labor and operating costs",
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
      <div className="px-5 md:px-16 py-16 flex flex-col gap-5">
        <h1 className="text-center text-3xl md:text-6xl font-outfit font-[500] pb-4">How outsourcing saves money</h1>
        <p>
          Labor is one of the biggest operating expenses for most businesses,
          with the likes of recruitment, training, wages and annual leave
          accounting for as much as 70% of total costs in some organizations.
          Hiring more people also typically requires additional infrastructure
          such as office space, furniture and IT equipment and, in turn, many
          organizations find themselves struggling to balance the cost of
          staffing with the potential sales or revenue they may generate.
        </p>
        <p>
          Outsourcing allows businesses to ease such financial pressures, with
          studies finding cost reduction is the number one reason1 businesses
          choose to outsource.
        </p>
        <p>
          With the cost of living in the Philippines much lower than in Western
          countries, partnering with a quality outsourcing provider can save
          businesses up to 70% on employment costs for the same level of talent
          and output quality. In the battle to maintain pace with competitors,
          outsourcing is a simple but highly effective way to make savings in
          one area and reinvest them where profits can be maximized such as
          product research, marketing or increased production.
        </p>
        <p>
          Outsourcing also allows executives and managers to avoid many of the
          administrative burdens associated with staffing, with providers taking
          responsibility for the likes of recruitment, training, performance
          management and overall supervision. Such benefits are a major reason
          why the global outsourcing market is set to rise to almost $436
          billion by 20282.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <GuranteePricing />
        <Link to={`#`} className="btn px-10 py-4">Get a quote</Link>
      </div>
      <div>
        <CaseStudy />
      </div>
      <div>
        <TheBenifits />
      </div>
      <div>
        <BuildTeam />
      </div>
    </div>
  );
};

export default ReduceCost;
