import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const PpcAndSemSpec = () => {
  const heroBanner = {
    title: "Outsource ppc&semspecialist to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/sem-specialist/M_Web_Role-page_PPC-and-SEM-specialists_Banner.png",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/M_Web_Role_Software-Developer_Banner_mobile-1.jpg"
  };
  const experience = {
    title: "How experienced are our PPC and SEM specialists?",
    description: "Our PPC and SEM specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of PPC and SEM experience",
        responsibilities: [
          "Assisting in keyword research and ad campaign setup under supervision",
          "Monitoring campaign performance metrics and providing basic analysis",
          "Assisting with ad copywriting and A/B testing"
        ]
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of PPC and SEM experience",
        responsibilities: [
          "Managing PPC/SEM campaigns independently, including keyword selection, bid management and ad copy optimization",
          "Conducting data analysis to identify trends, insights and areas for improvement in campaign performance",
          "Collaborating with the team to develop and implement strategic recommendations based on data-driven insights"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of PPC and SEM experience",
        responsibilities: [
          "Leading the development and execution of PPC/SEM strategies to achieve business objectives and maximize ROI",
          "Conducting advanced data analysis and performance forecasting to inform strategic decision-making",
          "Mentoring and guiding junior team members, as well as serving as a subject matter expert in PPC/SEM within the organization"
        ]
      }
    }
  };
  const logoLinks = [
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/sem-specialist/Google_Ads_logo.svg.png?width=1200&length=1200&name=Google_Ads_logo.svg.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/sem-specialist/MS-Advertising_logo_horiz_c-gray_rgb.png?width=1200&length=1200&name=MS-Advertising_logo_horiz_c-gray_rgb.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/sem-specialist/Mask%20Group%201.png?width=1200&length=1200&name=Mask%20Group%201.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/sem-specialist/1677761922847.png?width=1200&length=1200&name=1677761922847.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/sem-specialist/1703060669078.logo.png?width=1200&length=1200&name=1703060669078.logo.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/sem-specialist/328626289_918845089141073_2534565623313827179_n.png?width=1200&length=1200&name=328626289_918845089141073_2534565623313827179_n.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/sem-specialist/pinterest-ads-logo.png?width=1200&length=1200&name=pinterest-ads-logo.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/sem-specialist/-41b7df259e181179ec6cf7184d77bffe.png?width=1200&length=1200&name=-41b7df259e181179ec6cf7184d77bffe.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/sem-specialist/id4XvvhUCP.png?width=1200&length=1200&name=id4XvvhUCP.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hubfs/6222830/MicroSourcing/Build%20Your%20Team/sem-specialist/download.svg"
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
        Improve your pay-per-click (PPC) and search engine marketing (SEM) capabilities with dedicated Indian teams.
        </h1>
        <p>
        Need help effectively managing online advertising campaigns, optimizing ad spend and increasing website traffic? Experienced teams in India are skilled at managing the most crucial PPC and SEM tasks including providing keyword research, campaign setup, ad copywriting, bid management and landing page optimization.


        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"PPC and SEM specialists"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"PPC and SEM specialists"} logos={logoLinks} />
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

export default PpcAndSemSpec;