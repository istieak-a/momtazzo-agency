import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const SeoSpec = () => {
  const heroBanner = {
    title: "Outsource SEO specialists to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/M_Banner_SEO%20Specialist.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/M_Banner%20mobile_SEO%20Specialist.jpg",
  };
  const experience = {
    title: "How experienced are our offshore SEO specialists?",
    description:
      "Our SEO specialists offer different levels of experience depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1-2 years of SEO experience",
        responsibilities: [
          "Conduct basic keyword research and analysis",
          "Optimize basic on-page elements such as title tags, meta descriptions, and header tags",
          "Create basic content optimized for SEO",
          "Assist in monitoring and analyzing website performance using tools such as Google Analytics and Google Search Console",
        ],
      },
      intermediate: {
        yearsOfExperience: "2-4 years of SEO experience",
        responsibilities: [
          "Conduct comprehensive keyword research and analysis",
          "Optimize advanced on-page elements such as schema markup and internal linking",
          "Create comprehensive content optimized for SEO",
          "Conduct link building and outreach efforts",
          "Develop and implement local SEO strategies",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of SEO experience",
        responsibilities: [
          "Conduct in-depth technical SEO audits and implement improvements",
          "Develop and implement advanced link building and outreach strategies",
          "Create and implement comprehensive content marketing strategies",
          "Manage and optimize paid search and social media advertising campaigns",
          "Monitor and analyze website performance using advanced analytics tools and platforms",
          "Develop and implement SEO strategies for e-commerce websites",
        ],
      },
    },
  };
  const logoLinks = [
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/ahrefs.png?width=190&height=46&name=ahrefs.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/Semrush.png?width=190&height=27&name=Semrush.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/Google%20Keyword%20Planner.png?width=193&height=47&name=Google%20Keyword%20Planner.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing_May2020/Images/moz-logo.jpg?width=192&name=moz-logo.jpg",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/All%20in%20One%20SEO%20Pack.png?width=193&height=43&name=All%20in%20One%20SEO%20Pack.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/SEO%20Press.png?width=193&height=35&name=SEO%20Press.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/screaming-frog-logo-1.jpg?width=190&height=69&name=screaming-frog-logo-1.jpg",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/Google%20search%20console.png?width=193&height=84&name=Google%20search%20console.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/Google%20analytics.png?width=190&height=65&name=Google%20analytics.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/Hermingway.png?width=193&height=45&name=Hermingway.png",
  ];

  return (
    <div>
      <HeroBanner4
        title={heroBanner.title}
        img={heroBanner.img}
        imgRes={heroBanner.imgRes}
      />

      <div className="section-margin grid items-center gap-5 md:grid-cols-2 md:gap-20 md:py-20">
        <h1 className="font-outfit text-4xl font-semibold md:text-5xl ">
          Improve your SEO capabilities with offshore teams in the Philippines
        </h1>
        <p>
          Are you looking to improve your website's search engine rankings and
          increase organic traffic? SEO specialists in the Philippines are
          skilled in optimizing websites for search engines, conducting keyword
          research, and implementing SEO strategies to help your business grow.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"SEO specialists"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"SEO specialists"} logos={logoLinks} />
      </div>
      <div className="pb-10">
        <GuranteePricing />
      </div>
      <div>
        <HowMicrosourcingWork />
      </div>
      <GetInTouch />
    </div>
  );
};

export default SeoSpec;
