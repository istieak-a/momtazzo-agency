import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const VideoEditor = () => {
  const heroBanner = {
    title: "Outsource Video Editor to India",
    img: "https://www.microsourcing.com/hubfs/M_Web_Role-page_Digital-Marketing-Specialist_Banner.png",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing/Learn/Resources/M_Web_Role-page_Digital-Marketing-Specialist_Mobile-Banner.jpg"
  };
  const experience = {
    title: "How experienced are our video editors?",
    description:
      "Our video editors offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of video editing experience",
        responsibilities: [
          "Assisting with basic video editing tasks such as cutting, trimming and organizing footage",
          "Learning to use video editing software and familiarizing themselves with editing techniques",
          "Collaborating with senior editors and producers to understand project requirements and objectives",
        ],
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of video editing experience",
        responsibilities: [
          "Editing raw video footage into polished, cohesive sequences with appropriate transitions and effects",
          "Incorporating audio elements, such as music, sound effects and voiceovers, to enhance the video's impact",
          "Collaborating with producers and clients to understand their vision and provide creative input during the editing process",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of video editing experience",
        responsibilities: [
          "Leading the editing process from start to finish, including reviewing raw footage, creating storyboards and executing the final edit",
          "Mentoring junior editors and guiding editing techniques, software usage and project management",
          "Collaborating closely with producers, directors, and clients to ensure that the final video aligns with the project's objectives and meets quality standards",
        ],
      },
    },
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/adobe-premiere.png?width=200&height=100&name=adobe-premiere.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Final%20Cut%20Pro.png?width=84&height=84&name=Final%20Cut%20Pro.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/DaVinci_Resolve_17_logo.svg.png?width=84&height=84&name=DaVinci_Resolve_17_logo.svg.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Pure%20Purple%20AVID%20Logo-solid.png?width=146&height=44&name=Pure%20Purple%20AVID%20Logo-solid.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Adobe_After_Effects_CC_icon.svg.png?width=84&height=82&name=Adobe_After_Effects_CC_icon.svg.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/VegasPro19_logo.png?width=84&height=84&name=VegasPro19_logo.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/hitfilm-pro-2018-08-23_17-02-09.png?width=89&height=89&name=hitfilm-pro-2018-08-23_17-02-09.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/133px-Wondershare_filmora_logo.svg.png?width=84&height=84&name=133px-Wondershare_filmora_logo.svg.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/Lightworks_Logo.svg.png?width=240&height=30&name=Lightworks_Logo.svg.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/mini-hero-imovie.png?width=84&height=84&name=mini-hero-imovie.png",
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
          Improve your video editing capabilities with dedicated Indian teams.
        </h1>
        <p>
          Need help creating professional and aesthetically pleasing videos that
          effectively communicate brand messages? Experienced teams in the
          Philippines are skilled at managing the most crucial video editing
          tasks including footage selection, transition effects, color
          correction and audio synchronization.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"Video editor"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"Video editor"} logos={logoLinks} />
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

export default VideoEditor;
