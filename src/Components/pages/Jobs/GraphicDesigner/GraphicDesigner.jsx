import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const GraphicDesigner = () => {
  const heroBanner = {
    title: "Outsource Graphic Designer to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/Graphic%20Designer/M_Web_Role-page_Graphic-Designer_Banner.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/Graphic%20Designer/M_Web_Role-page_Graphic-Designer_Mobile_Banner.jpg",
  };
  const experience = {
    title: "How experienced are our graphic designers?",
    description:
      "Our graphic designers offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of graphic design experience",
        responsibilities: [
          "Assists in the creation of basic design elements such as logos, icons, and layouts",
          "Executes design concepts under the guidance of senior team members",
          "Collaborates with other departments to gather project requirements and deliver designs that meet client needs",
        ],
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of graphic design experience",
        responsibilities: [
          "Develops more complex design concepts across various mediums including print and digital",
          "Takes ownership of individual projects from concept to completion, ensuring adherence to brand guidelines and project specifications",
          "Provides mentorship and guidance to junior designers, helping them develop their skills and grow professionally",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of graphic design experience",
        responsibilities: [
          "Leads the design process from ideation to execution, demonstrating a strong understanding of design principles and industry trends",
          "Acts as a key point of contact for clients, interpreting their needs and providing creative solutions that exceed expectations",
          "Provides strategic input on branding initiatives, collaborating with marketing teams to develop comprehensive visual identities and campaigns",
        ],
      },
    },
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/adobe-ps-logo.jpg?width=261&height=80&name=adobe-ps-logo.jpg",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/adobe-ai-logo.jpg?width=235&height=80&name=adobe-ai-logo.jpg",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/MicroSourcing_May2020/Images/adobe-indesign.png?width=219&height=74&name=adobe-indesign.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/sketch.png?width=200&height=100&name=sketch.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/figma.png?width=200&height=100&name=figma.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/affinity-designer.png?width=200&height=100&name=affinity-designer.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/procreate.png?width=200&height=100&name=procreate.png",
    "https://www.microsourcing.com/hs-fs/hubfs/canva.png?width=235&height=75&name=canva.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/corel-draw.png?width=200&height=100&name=corel-draw.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/The_GIMP_icon_-_gnome.svg.png?width=102&height=102&name=The_GIMP_icon_-_gnome.svg.png",
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
          Improve your graphic design capabilities with dedicated Filipino
          teams.
        </h1>
        <p>
          Struggling to maintain a consistent and visually appealing brand
          identity across your marketing materials? Need help streamlining and
          elevating your visual communication strategy? Experienced teams in the
          Philippines are skilled at managing the most crucial graphic design
          tasks including visual concept creation, logo design and branding,
          print design, UI and UX design, social media graphics and email
          marketing templates.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"Graphic Designer"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"Graphic Designer"} logos={logoLinks} />
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

export default GraphicDesigner;
