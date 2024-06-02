import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const WebDeveloper = () => {
  const heroBanner = {
    title: "Outsource webdeveloper to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/M_Web_Role_Web-Developer_Banner.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/M_Web_Role_Web-Developer_Banner_mobile-1.jpg",
  };
  const experience = {
    title: "How experienced are our offshore web developers?",
    description:
      "Our outsourced web developers in the Philippines offer different levels of experience depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1-2 years of web development experience",
        responsibilities: [
          "Builds simple and basic websites using HTML, CSS, and JavaScript",
          "Assists in the creation of website designs and layouts",
          "Works on small features and bug-fixing tasks as assigned by the senior developers",
        ],
      },
      intermediate: {
        yearsOfExperience: "2-4 years of web development experience",
        responsibilities: [
          "Develops and implements complex web applications using HTML, CSS, JavaScript and a back-end programming language",
          "Participates in the creation of website designs and prototypes, and offers recommendations for improvements",
          "Takes ownership of small to medium-sized projects and collaborates with the team to deliver high-quality solutions",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of web development experience",
        responsibilities: [
          "Designs and develops scalable and complex web applications, using advanced programming languages and frameworks",
          "Mentors and leads junior and intermediate developers, providing guidance and technical expertise",
          "Works closely with clients, stakeholders and the development team to understand their requirements",
        ],
      },
    },
  };
  const logoLinks = [
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/visual-studio.png?width=200&height=100&name=visual-studio.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/chrome-devtools.png?width=200&height=100&name=chrome-devtools.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/github.png?width=200&height=100&name=github.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/react.png?width=200&height=100&name=react.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/node-js.png?width=200&height=100&name=node-js.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/angular.png?width=200&height=100&name=angular.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/sass.png?width=200&height=100&name=sass.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/bootstrap.png?width=200&height=100&name=bootstrap.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/adobe-cc.png?width=200&height=100&name=adobe-cc.png",
    "https://6222830.fs1.hubspotusercontent-na1.net/hub/6222830/hubfs/MicroSourcing/Logos/trello.png?width=200&height=100&name=trello.png",
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
          Accelerate your digital growth with our reliable and cost-effective
          outsource web development services
        </h1>
        <p>
          MicroSourcing offers a wide range of web development services to help
          you build a strong online presence. Our team of skilled web developers
          can create custom websites, web applications, and e-commerce platforms
          that are tailored to your unique business needs. Whether you need a
          simple landing page or a complex web application, we have the
          expertise to deliver high-quality solutions that drive results.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"Web developer"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"Web developer"} logos={logoLinks} />
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

export default WebDeveloper;
