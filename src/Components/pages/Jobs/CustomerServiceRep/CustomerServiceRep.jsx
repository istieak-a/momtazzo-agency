import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const CustomerServiceRep = () => {
  const heroBanner = {
    title: "Outsource customer service to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/M_Web_Role-page_Collection-Specialists_Banner.png",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing/roles/collection-specialists/img-header-collection%20specialist-m@2x.png"
  };
  const experience = {
    title: "How experienced are our customer service representatives?",
    description: "Our customer service representatives offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1-2 years of customer service experience",
        responsibilities: [
          "Customer complaint resolution",
          "Customer request processing",
          "Social media chat support",
          "Phone support",
          "Email support"
        ]
      },
      intermediate: {
        yearsOfExperience: "2-4 years of customer service experience",
        responsibilities: [
          "Expert product knowledge",
          "CRM database management",
          "Customer order and application support",
          "Phone support",
          "Technical support"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of customer service experience",
        responsibilities: [
          "Training junior customer service representatives",
          "KPI management",
          "Monthly reporting to senior management",
          "Expert troubleshooting",
          "Streamlining processes"
        ]
      }
    }
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/Zendesk.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/sprout-social.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/hootsuite.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/Mailchimp.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/Apple%20Business%20Chat.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/facebook.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/surveymonkey.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/Slack.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/recurly.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/NICE%20inContact%20CXone.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/EZ%20Office%20Inventory.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/Boss%20Solutions%20Suite.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/jira.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/LiveAgent.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/freshdesk.png",

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
        Improve your customer service capabilities with dedicated Filipino teams.

        </h1>
        <p>
        Looking to significantly improve customer satisfaction? Want to provide high-quality customer service to your target audience? Experienced teams in the Philippines are skilled at managing the most crucial customer service tasks, including customer complaint resolution and online channel support.


        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"customer service representatives"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"accountant"} logos={logoLinks} />
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

export default CustomerServiceRep;