import React from "react";
import BlogCard from "../BlogCard/BlogCard";

function CaseStudy() {
  const caseStudies = [
    {
      title:
        "Ticketing app with 5 million users clears backlog and maintains 86% CSAT on 6,000+ tickets/month",
      desc: "See how a ticketing app partnered with Influx to clear the backlog and maintain inbox zero on over 6,000 ticket each month.",
      img: "https://influx.com/blog/uploads/case-studies-1-1.png",
      link: "case-study-2",
    },
    {
      title: "Handling 2000 calls per week while achieving a 94% CSAT",
      desc: "A growing healthcare marketplace platform struggles to keep up with increased call volumes and unpredictable spikes.",
      img: "https://influx.com/blog/uploads/case-studies-2.png",
      link: "case-study-3",
    },
    {
      title:
        "Mobile app with 30 million global users improves CSAT from 90% to 94%",
      desc: "An audiobook app company with 30 million users and a small customer service team needing to scale with an increased volume of ~7,000 tickets/month.",
      img: "https://influx.com/blog/uploads/meshki-case-study-1.png",
      link: "case-study-4",
    },
    {
      title: "Transforming Customer Service in the Home Furnishings Industry",
      desc: "A renowned home furnishings company celebrated for its stylish yet affordable furniture range faced customer support challenges during a highly publicized, online-only product launch. The company’s legacy customer service systems could not withstand the surge of demand",
      img: "https://influx.com/blog/uploads/winkl.jpg",
      link: "case-study-5",
    },
    {
      title: "A Narrative of Global Growth and Enhanced CX in Fashion Retail",
      desc: "In the dynamic world of fashion retail, a prominent company renowned for its personalized styling services and subscription boxes has been distinguishing itself. Famous for its unique approach to combining technology and hyper-personalization in fashion",
      img: "https://influx.com/blog/uploads/ettitude3.jpeg",
      link: "case-study-6",
    },
    {
      title: "Rewarding Shoppers: Hugo’s Strategic Cashback Alliance",
      desc: "A premier cashback platform, founded on the principle that every click holds the potential for reward, aimed to enhance every shopping experience with added value. Despite its innovative mission, the platform encountered challenges tracking transactions and meeting consumer expectations. ",
      img: "https://influx.com/blog/uploads/threadless-cover.jpeg",
      link: "case-study-7",
    },
    {
      title: "How Hugo Helped A Leading Innovator Confront Inclusion Gaps",
      desc: "Our client stands at the forefront of technological innovation. For over two decades, they have pushed boundaries in search, AI, and software – bettering lives through empowering information and data-driven solutions.",
      img: "https://influx.com/blog/uploads/koala-team.jpg",
      link: "case-study-8",
    },
    {
      title: "Hugo Revolutionizes KYC Process for Crypto Company",
      desc: "A leading crypto company faced challenges optimizing its Know Your Customer (KYC) review process. Despite investing in advanced KYC software, the company’s verification workflows remained inefficient, leading to prolonged case resolution times.",
      img: "https://influx.com/blog/uploads/blenders-eyeware.jpg",
      link: "case-study-9",
    },
    {
      title: "Revitalizing Brand Loyalty: How a Fashion Brand Regained Trust",
      desc: "A pioneer in the fashion industry, the client carved a niche with their bold, nature-inspired clothing line. Their swimwear, blending high fashion’s eccentricity with sleek, modern silhouettes, appealed to confident, adventurous women and rapidly built a devoted following. However, with the brand’s rapid growth came significant challenges.",
      img: "https://influx.com/blog/uploads/screen-shot-2022-08-02-at-5-26-44-pm.png",
      link: "case-study-10",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center bg-[#f4fafc] px-5 py-10 md:px-16">
        <div className="max-w-screen-lg p-5">
          <h1 className="font-outfit text-5xl font-semibold text-gray-800">
            Case Studies
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-3 md:px-16">
        {caseStudies.map((caseStudy, index) => (
          <BlogCard
            key={index}
            title={caseStudy.title}
            desc={caseStudy.desc}
            img={caseStudy.img}
            link={caseStudy.link}
          />
        ))}
      </div>
    </div>
  );
}

export default CaseStudy;
