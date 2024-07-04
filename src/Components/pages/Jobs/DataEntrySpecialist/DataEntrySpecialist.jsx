import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const DataEntrySpec = () => {
  const heroBanner = {
    title: "Outsource Data Entry Specialist to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/data-entry/Data%20Entry%20Specialist_Desktop.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Background/Mobile-banner-BG.jpg",
  };
  const experience = {
    title: "How experienced are our data entry specialists?",
    description:
      "Our data entry specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of data entry experience",
        responsibilities: [
          "Focus on data input tasks, accurately entering data from various sources into databases or digital records",
          "Verify data for accuracy and completeness, helping to identify and correct errors or discrepancies",
          "Maintain and organize data records, ensuring they are properly labeled and filed for easy retrieval",
        ],
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of data entry experience",
        responsibilities: [
          "Clean and validate data, identifying and resolving data quality issues",
          "Manage databases, adding, updating and deleting records to maintain data integrity and organization",
          "Conduct thorough quality checks on data to ensure it meets established standards and compliance requirements",
        ],
      },
      senior: {
        yearsOfExperience: "4+ years of data entry experience",
        responsibilities: [
          "Analyze data for trends, anomalies or insights, providing valuable information for decision-making",
          "Explore opportunities to automate data entry tasks, streamline processes and improve overall efficiency",
          "Mentor junior team members, providing guidance, training and oversight to ensure data entry processes are optimized",
        ],
      },
    },
  };
  const logoLinks = [
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Adobe%20Acrobat%20reader%20DC.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Abbyy%20FineReader.png",
    "https://www.microsourcing.com/hs-fs/hubfs/OmniPage.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Readiris.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Docufree.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Prizmo.png",
    "https://www.microsourcing.com/hs-fs/hubfs/chub_backup/Soda%20PDF%20Premium-1.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Logos/foxit-maestro.jpg",
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
        Improve your data entry capabilities in the India.
        </h1>
        <p>
        Need assistance with accurate data entry, maintaining organized databases and streamlining data management? Experienced teams in the India are skilled at managing the most crucial data entry tasks including data input, data verification, database management, data formatting and cleansing.
        </p>
      </div>

      <div>
        <FilipinoBenifits title={"data entry specialist"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"data entry specialist"} logos={logoLinks} />
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

export default DataEntrySpec;
