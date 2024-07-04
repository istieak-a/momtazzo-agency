import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const VirtualAssistant = () => {
  const heroBanner = {
    title: "Outsource Virtual Assistant to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/M_Web_Role-page_Claims-Analyst_Banner.png",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/M_Web_Role-page_Virtual-Assistant_Mobile-Banner.jpg",
  };
  const experience = {
    title: "How experienced are our virtual assistants?",
    description:
      "Our virtual assistants offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of administration experience",
        responsibilities: [
          "Handling basic administrative tasks such as data entry, email management and scheduling appointments",
          "Providing general customer support and responding to inquiries via email or chat",
          "Assisting with research tasks and compiling information for reports or presentations",
        ],
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of administration experience",
        responsibilities: [
          "Managing calendars and scheduling meetings for multiple team members",
          "Handling more complex administrative tasks such as drafting documents, creating spreadsheets and coordinating travel arrangements",
          "Assisting with project management tasks, including tracking deadlines and organizing project files",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of administration experience",
        responsibilities: [
          "Providing advanced administrative support to executives or business owners, including managing their email inboxes and prioritizing tasks",
          "Handling sensitive information and confidential correspondence with discretion",
          "Acting as a point of contact for clients, vendors, and other stakeholders, representing the company professionally",
        ],
      },
    },
  };
  const logoLinks = [
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/logos/Microsoft_Office_2013-2019_logo_and_wordmark.svg.png?width=1200&length=1200&name=Microsoft_Office_2013-2019_logo_and_wordmark.svg.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/logos/320px-Google_Workspace_Logo.svg.png?width=1200&length=1200&name=320px-Google_Workspace_Logo.svg.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/logos/Zoom_Communications_Logo.svg.png?width=1200&length=1200&name=Zoom_Communications_Logo.svg.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/logos/Slack_Technologies_Logo.svg.png?width=1200&length=1200&name=Slack_Technologies_Logo.svg.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/logos/Trello_logo.svg.png?width=1200&length=1200&name=Trello_logo.svg.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/logos/Asana_logo.svg.png?width=1200&length=1200&name=Asana_logo.svg.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/logos/Todoist_logo.png?width=1200&length=1200&name=Todoist_logo.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/logos/Evernote-Logo-2018-present.png?width=1200&length=1200&name=Evernote-Logo-2018-present.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/logos/320px-Dropbox_logo_2017.svg.png?width=1200&length=1200&name=320px-Dropbox_logo_2017.svg.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/virtual-assistant/logos/320px-LastPass_logo.svg.png?width=1200&length=1200&name=320px-LastPass_logo.svg.png",
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
          Improve your administration capabilities with dedicated Indian
          teams.
        </h1>
        <p>
          Need flexible and online support for administrative tasks, allowing
          your business to focus on core activities to increase productivity?
          Experienced teams in India are skilled at managing the most
          crucial virtual tasks including social media management, email
          management, calendar scheduling and data entry.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"Virtual assistant"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"Virtual assistant"} logos={logoLinks} />
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

export default VirtualAssistant;
