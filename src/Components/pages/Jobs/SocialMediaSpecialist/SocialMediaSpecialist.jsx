import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const SocialMediaSpec = () => {
  const heroBanner = {
    title: "Outsource social media specialists to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/Social%20Media%20Marketer/M_Web_Role%20page_Social%20Media%20Specialist%20Banner.jpg",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/Social%20Media%20Marketer/M_Banner%20mobile_Social%20Media%20Specialist.jpg"
  };
  const experience = {
    title: "How experienced are our social media specialists?",
    description: "Our social media specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of social media experience",
        responsibilities: [
          "Assisting in content creation, including writing posts, creating graphics, and scheduling updates",
          "Engaging with the community by responding to comments and messages",
          "Monitoring social media channels for trends and relevant conversations"
        ]
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of social media experience",
        responsibilities: [
          "Developing and implementing social media strategies aligned with business goals",
          "Creating original content and campaigns to drive engagement and brand awareness",
          "Analyzing performance metrics and adjusting strategies accordingly for optimization"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of social media experience",
        responsibilities: [
          "Leading the development of comprehensive social media strategies",
          "Managing a team of social media specialists and coordinating their efforts",
          "Overseeing budget allocation for social media advertising and campaigns"
        ]
      }
    }
  };
  const logoLinks = [
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/chub_backup/HubSpot.png?width=200&height=55&name=HubSpot.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/chub_backup/Salesforce.com_logo.svg.png?width=200&height=140&name=Salesforce.com_logo.svg.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/chub_backup/mailchimp.png?width=200&height=43&name=mailchimp.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/chub_backup/ActiveCampaign.png?width=200&height=21&name=ActiveCampaign.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/convertkit-wordmark-1.svg",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/leadsquared-sales-mobile-crm.png?width=364&height=66&name=leadsquared-sales-mobile-crm.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/leadpages-logo-62B30896B7-seeklogo.com.png?width=300&height=50&name=leadpages-logo-62B30896B7-seeklogo.com.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/pardot.png?width=200&height=78&name=pardot.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/chub_backup/zendesk.png?width=200&height=48&name=zendesk.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/chub_backup/freshdesk.png?width=200&height=58&name=freshdesk.png",
    "https://www.microsourcing.com/hs-fs/hubfs/Hootsuite.png?width=655&height=152&name=Hootsuite.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/buffer.png?width=839&height=230&name=buffer.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/sprout-social.png?width=600&height=120&name=sprout-social.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Later.png?width=681&height=230&name=Later.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/canva.png?width=722&height=230&name=canva.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Adobe%20Spark.png?width=239&height=230&name=Adobe%20Spark.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Google%20analytics.png?width=677&height=230&name=Google%20analytics.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/BuzzSumo.png?width=1130&height=230&name=BuzzSumo.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Socialbakers.png?width=835&height=230&name=Socialbakers.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Brandwatch.png?width=1207&height=230&name=Brandwatch.png"
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
        Improve your social media capabilities with dedicated Filipino teams.
        </h1>
        <p>
        Need help managing online community interactions and building digital brand loyalty? Experienced teams in the Philippines are skilled at managing the most crucial social media tasks including content creation, content moderation, community management, social analytics reporting and trend monitoring.
        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"social media specialists"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"social media specialists"} logos={logoLinks} />
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

export default SocialMediaSpec;