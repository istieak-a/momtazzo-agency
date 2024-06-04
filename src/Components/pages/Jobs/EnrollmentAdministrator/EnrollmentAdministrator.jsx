import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const EnrollmentAdministrator = () => {
  const heroBanner = {
    title: "Outsource Enrollment Administrator to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Enrollment%20Administrator/M_Banner_Teaching%20Administrator.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Enrollment%20Administrator/M_Banner%20mobile_Teaching%20Administrator.jpg",
  };
  const experience = {
    title: "How experienced are our offshore enrollment administrators?",
    description:
      "Our enrollment administrators offer different levels of experience depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1-2 years of enrollment experience",
        responsibilities: [
          "Assisting with processing student applications and maintaining accurate records",
          "Responding to inquiries from students and faculty about enrollment procedures and policies",
          "Supporting the development of course schedules and ensuring that courses are staffed adequately",
        ],
      },
      intermediate: {
        yearsOfExperience: "2-4 years of enrollment experience",
        responsibilities: [
          "Developing and implementing enrollment policies and procedures",
          "Overseeing the enrollment process and ensuring compliance with institutional policies and regulations",
          "Collaborating with academic departments to develop course schedules that meet student needs and program requirements",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of enrollment experience",
        responsibilities: [
          "Managing a team of enrollment administrators and providing leadership and guidance",
          "Developing and implementing strategic enrollment management plans to achieve enrollment goals",
          "Developing and implementing marketing strategies to attract prospective students and increase enrollment",
        ],
      },
    },
  };
  const logoLinks = [
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/Enrollment%20Administrator/Canvas.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/Enrollment%20Administrator/blackboard.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/Enrollment%20Administrator/moodle.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/chub_backup/Microsoft%20Teams.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/chub_backup/Zoom.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/Enrollment%20Administrator/google%20drive.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/chub_backup/Dropbox.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/Enrollment%20Administrator/turnitin.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/Enrollment%20Administrator/gradescope.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Build%20Your%20Team/Enrollment%20Administrator/gradecam.png",
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
          Improve your enrollment capabilities with offshore teams in the
          India
        </h1>
        <p>
          Are you looking to improve your enrollment capabilities and streamline
          your enrollment processes? Look no further than our offshore team in
          India. Our team of experienced enrollment administrators are
          highly skilled and trained to manage all aspects of enrollment,
          ensuring that your educational institution runs smoothly and
          efficiently.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"Enrollment Administrator"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"Enrollment Administrator"} logos={logoLinks} />
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

export default EnrollmentAdministrator;
