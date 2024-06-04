import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const SalesSupport = () => {
  const heroBanner = {
    title: "Outsource salessupport to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/3d-designer-banner.jpg",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/3d-designer-banner-m.jpg"
  };
  const experience = {
    title: "How experienced are our offshore sales support teams?",
    description: "Our outsourced sales support teams offer different levels of experience depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1-2 years of sales support experience",
        responsibilities: [
          "Responding to customer inquiries and providing basic product or service information",
          "Assisting with order processing, invoicing and other administrative tasks",
          "Recording customer interactions and providing data entry support"
        ]
      },
      intermediate: {
        yearsOfExperience: "2-4 years of sales support experience",
        responsibilities: [
          "Developing and maintaining customer relationships",
          "Providing technical support and resolving customer issues",
          "Assisting with lead generation and qualification"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of sales support experience",
        responsibilities: [
          "Developing and executing sales strategies",
          "Managing and mentoring junior sales support team members",
          "Collaborating with other departments to ensure customer satisfaction and resolve complex issues"
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
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/chub_backup/freshdesk.png?width=200&height=58&name=freshdesk.png"
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
        Improve your sales support capabilities with offshore teams in India
        </h1>
        <p>
          Outsourcing sales support to India can help your organization
          improve customer satisfaction, increase sales and reduce costs. Our
          dedicated sales support teams offer a range of experience levels to
          meet your specific requirements. Whether you need assistance with
          customer inquiries, order processing or lead generation, our offshore
          teams can help you achieve your sales goals.
        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"sales support"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"sales support"} logos={logoLinks} />
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

export default SalesSupport;