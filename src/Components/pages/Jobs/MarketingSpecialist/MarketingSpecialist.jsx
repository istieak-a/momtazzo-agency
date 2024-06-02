import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const MarketingSpec = () => {
  const heroBanner = {
    title: "Outsource Marketing Specialist to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Marketing%20specialist/Variant%20B/MS_HeaderBanner_Marketing%20Specialist.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Marketing%20specialist/Variant%20B/MS_HeaderBanner-M_Marketing-Specialist.jpg",
  };
  const experience = {
    title: "How experienced are our marketing specialists?",
    description:
      "Our marketing specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of marketing experience",
        responsibilities: [
          "Execute marketing campaigns, create content, schedule social media posts and implement email marketing campaigns",
          "Gather campaign performance data and analyze trends and insights",
          "Support senior team members with administrative tasks, market research and idea contributions",
        ],
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of marketing experience",
        responsibilities: [
          "Develop marketing strategies, plan campaigns, identify target audiences and set goals",
          "Create marketing content, oversee junior team members and manage content production",
          "Analyze campaign performance, make data-driven recommendations and manage campaign budgets",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of marketing experience",
        responsibilities: [
          "Lead marketing strategy, set the overall direction, define long-term strategies and align efforts with business goals",
          "Manage marketing teams, provide guidance, assign tasks and ensure effective project execution",
          "Optimize ROI, allocate resources, select marketing channels and engage in data analysis and reporting for performance tracking",
        ],
      },
    },
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/Google%20analytics.png?width=300&height=102&name=Google%20analytics.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Adobe%20Photoshop.png?width=118&height=115&name=Adobe%20Photoshop.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/HubSpot.png?width=300&height=83&name=HubSpot.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/mailchimp%20logo.png?width=300&height=210&name=mailchimp%20logo.png",
    "https://www.microsourcing.com/hs-fs/hubfs/Hootsuite.png?width=300&height=70&name=Hootsuite.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Semrush.png?width=300&height=43&name=Semrush.png",
    "https://www.microsourcing.com/hs-fs/hubfs/canva.png?width=300&height=96&name=canva.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/MOZ.png?width=300&height=87&name=MOZ.png",
    "https://www.microsourcing.com/hs-fs/hubfs/buffer.png?width=300&height=82&name=buffer.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/download.png?width=452&height=111&name=download.png",
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
          Improve your marketing capabilities with dedicated Filipino teams.
        </h1>
        <p>
          Need help reaching and engaging your target audience, crafting
          compelling marketing strategies and achieving your desired marketing
          goals? Experienced teams in the Philippines are skilled at managing
          the most crucial marketing tasks, including digital marketing, content
          marketing and social media optimization.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"Marketing Specialist"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"Marketing Specialist"} logos={logoLinks} />
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

export default MarketingSpec;
