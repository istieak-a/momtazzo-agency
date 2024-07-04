import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const ExecutiveAssistant = () => {
  const heroBanner = {
    title: "Outsource Executive Assistant to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Executive%20Assistants/M_Web_Role-page_Executive-Assistant_Banner.png",
    imgRes: "https://www.microsourcing.com/hubfs/Administrative%20Assistant_Mobile.jpg"
  };
  const experience = {
    title: "How experienced are our executive assistants?",
    description: "Our executive assistants offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of executive assistance experience",
        responsibilities: [
          "Assists with basic administrative tasks such as filing, data entry and organizing documents",
          "Manages incoming calls and emails, routing them to the appropriate staff members",
          "Provides support in scheduling meetings, booking travel arrangements and preparing meeting materials"
        ]
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of executive assistance experience",
        responsibilities: [
          "Takes on more complex administrative tasks, including drafting correspondence and reports",
          "Coordinates logistics for high-level meetings and events, ensuring all arrangements run smoothly",
          "Acts as a liaison between executives and internal/external stakeholders, handling inquiries and requests professionally"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of executive assistance experience",
        responsibilities: [
          "Manages the executive's calendar, prioritizing appointments and ensuring efficient use of time",
          "Provides strategic support by conducting research, preparing presentations and contributing to decision-making processes",
          "Acts as a gatekeeper, screening communications and managing sensitive information with discretion"
        ]
      }
    }
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Microsoft%20Office.png?width=190&height=60&name=Microsoft%20Office.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Google%20Calendar.png?width=193&height=109&name=Google%20Calendar.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/MS-Excel.png?width=548&height=230&name=MS-Excel.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Dropbox.png?width=193&height=39&name=Dropbox.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/Slack.png?width=860&height=230&name=Slack.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/trello.png?width=200&height=100&name=trello.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Zoom.png?width=193&height=60&name=Zoom.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/roles/logos/Evernote.png?width=260&height=80&name=Evernote.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Admin%20Assistant/Monday.com.png?width=193&height=36&name=Monday.com.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Project%20Manager/asana.png?width=935&height=230&name=asana.png"
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
        Improve your executive capabilities with dedicated Indian teams.
        </h1>
        <p>
        Need help managing administrative tasks so that your executives can focus on strategic decision-making and core responsibilities? Experienced teams in India are skilled at managing the most crucial executive assistant tasks including scheduling, correspondence management and coordination, allowing your leaders to maximize productivity and efficiency.
        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"Executive Assistant"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"Executive Assistant"} logos={logoLinks} />
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

export default ExecutiveAssistant;