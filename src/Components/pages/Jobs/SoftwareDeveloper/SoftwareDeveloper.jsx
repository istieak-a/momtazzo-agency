import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const SoftwareDeveloper = () => {
  const heroBanner = {
    title: "Outsource Software Developer to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/3d-designer-banner.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/3d-designer-banner-m.jpg",
  };
  const experience = {
    title: "How experienced are our offshore software developers?",
    description:
      "Our software developers offer different levels of experience depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1-2 years of software development experience",
        responsibilities: [
          "Basic coding and programming tasks under the guidance of senior developers",
          "Assisting with software testing and debugging",
          "Creating basic user interfaces for software applications",
          "Participating in team meetings and brainstorming sessions",
        ],
      },
      intermediate: {
        yearsOfExperience: "2-4 years of software development experience",
        responsibilities: [
          "Developing more complex software applications with limited supervision",
          "Conducting software testing and debugging",
          "Collaborating with other team members to design and implement new features",
          "Participating in code reviews and providing feedback to other developers",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of software development experience",
        responsibilities: [
          "Leading the design and development of large-scale software projects",
          "Developing software architecture and setting technical standards for the team",
          "Mentoring and coaching junior developers",
          "Collaborating with other departments to identify and prioritize developmental needs",
        ],
      },
    },
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
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Brandwatch.png?width=1207&height=230&name=Brandwatch.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/visual-studio.png?width=193&height=97&name=visual-studio.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/netbeans.png?width=200&height=100&name=netbeans.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/atom.png?width=200&height=100&name=atom.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/sublime-text.png?width=200&height=100&name=sublime-text.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/git.png?width=200&height=100&name=git.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/SVN.png?width=200&height=100&name=SVN.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/mercurial.png?width=200&height=100&name=mercurial.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/jira.png?width=200&height=100&name=jira.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/selenium.png?width=200&height=100&name=selenium.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/mokito.png?width=200&height=100&name=mokito.png",
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
          Improve your software development capabilities with offshore teams in
          the Philippines
        </h1>
        <p>
          Is your business struggling to keep up with software development
          tasks? Experienced teams in the Philippines are skilled at managing
          the most crucial software development tasks, including web
          development, mobile app development, and software testing.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"software developer"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"software developer"} logos={logoLinks} />
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

export default SoftwareDeveloper;
