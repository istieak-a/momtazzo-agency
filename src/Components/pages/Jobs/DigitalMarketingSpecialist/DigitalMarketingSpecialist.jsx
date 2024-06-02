import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const DigitalMarketingSpec = () => {
  const heroBanner = {
    title: "Outsource Digital Marketing Specialist to the Philippines",
    img: "https://www.microsourcing.com/hubfs/M_Web_Role-page_Digital-Marketing-Specialist_Banner.png",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing/Learn/Resources/M_Web_Role-page_Digital-Marketing-Specialist_Mobile-Banner.jpg"
  };
  const experience = {
    title: "How experienced are our digital marketing specialists?",
    description: "Our digital marketing specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of digital marketing experience",
        responsibilities: [
          "Assisting with social media management, including content scheduling and engagement",
          "Supporting SEO efforts by conducting keyword research and optimizing website content",
          "Assisting in the creation of digital marketing campaigns and tracking performance metrics"
        ]
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of digital marketing experience",
        responsibilities: [
          "Managing social media channels and creating engaging content to drive audience engagement",
          "Leading SEO initiatives, including on-page optimization, link building and keyword analysis",
          "Developing and executing digital marketing campaigns across various channels, such as email, PPC and display advertising"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of digital marketing experience",
        responsibilities: [
          "Developing comprehensive digital marketing strategies aligned with business goals and target audience",
          "Overseeing the implementation of SEO strategies and ensuring website visibility and ranking improvements",
          "Analyzing data and metrics to optimize digital marketing campaigns for maximum ROI and effectiveness",
          "Mentoring junior team members and guiding best practices and industry trends"
        ]
      }
    }
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Google%20analytics.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Semrush.png",
    "https://www.microsourcing.com/hs-fs/hubfs/Hootsuite.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/buffer.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Customer%20Service%20Representatives/Mailchimp.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/ahrefs.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/MOZ.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/HubSpot.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/canva.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/sprout-social.png"
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
        Improve your digital marketing capabilities with dedicated Filipino teams.
        </h1>
        <p>
        Need help strategically implementing online campaigns to maximize brand visibility, lead generation and drive customer engagement? Experienced teams in the Philippines are skilled at managing the most crucial digital marketing tasks including social media management, content creation and marketing, email marketing, influencer marketing and digital advertising campaign management.


        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"digital marketing specialists"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"digital marketing specialists"} logos={logoLinks} />
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

export default DigitalMarketingSpec;