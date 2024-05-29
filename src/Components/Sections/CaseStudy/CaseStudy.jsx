import React from "react";
import reduceCost from "../../../assets/reduce-cost-img2.png";

const CaseStudy = () => {
  return (
    <div className="bg-[#ebf3f5] flex flex-col items-center py-10 md:py-16 mt-5 gap-10 md:gap-16 px-5 md:px-16">
      <h1 className="uppercase font-outfit text-4xl md:text-5xl font-bold">Real life, real results</h1>
      <div className="flex flex-col md:flex-row gap-3">
        <img src={reduceCost} className="object-cover" alt="reduce-cost" />
        <div className="flex flex-col items-center gap-7">
          <h2 className="uppercase font-outfit text-3xl text-center font-bold md:text-left">Reduce costs while increasing productivity</h2>
          <p>
            Organizations are constantly searching for ways to realize their
            potential and that was the case for a leading Australian firm that
            adopted an offshoring strategy in a bid to grow profits, improve
            quality and increase efficiency.
          </p>
          <p>
            Having invested heavily in onshore talent for key business areas,
            the company partnered with MicroSourcing in mid-2014 and initially
            recruited three accountants and one data analyst. The offshore team
            has now grown to 18 Philippines-based staff who are playing a vital
            role in helping their onshore colleagues achieve success.
          </p>
          <p>
            This includes helping deliver productivity increases of 34%,
            reductions in associated administrative costs of 50% and
            consistently high customer satisfaction ratings on the back of fast,
            accurate and efficient service.
          </p>
          <a className="btn w-full text-center py-5" href="#">DOWNLOAD THE FULL CASE STUDY HERE</a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
