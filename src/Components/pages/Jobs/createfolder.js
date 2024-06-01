import fs from "fs";
import path from "path";

const folders = [
  "Accountant",
  "AdministrativeAssistant",
  "CollectionSpecialist",
  "CustomerServiceRep",
  "DataAnalyst",
  "DataEntrySpecialist",
  "DigitalMarketingSpecialist",
  "EnrollmentAdministrator",
  "ExecutiveAssistant",
  "GraphicDesigner",
  "HrSpecialist",
  "LogisticsCoordinator",
  "MarketingSpecialist",
  "MedicalBillingSpecialist",
  "OrderProcessingSpecialist",
  "PayrollSpecialist",
  "Ppc&SemSpecialist",
  "QualityAssuranceSpecialist",
  "RealEstateAssistant",
  "ReservationBookingAgent",
  "SeoSpecialist",
  "SalesSupport",
  "SocialMediaSpecialist",
  "SoftwareDeveloper",
  "TalentAcquisitionSpecialist",
  "VideoEditor",
  "VirtualAssistant",
  "WebDeveloper",
];

const generateComponent = (folder) => {
  return `
import React from "react";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const ${folder} = () => {
  const heroBanner = {
    title: "How Does Offshoring Work?",
    desc: "It’s your team. With offshore staffing, you have full visibility and control, without having to worry about facilities, operations and regulations.",
    img: 'https://www.microsourcing.com/hubfs/3D%20designer_desktop.jpg',
    imgRes: 'https://www.microsourcing.com/hubfs/3D%20designer_mobile.jpg',
  };
  return (
    <div>
    <div>
        <HeroBanner
          title={heroBanner.title}
          desc={heroBanner.desc}
          img={heroBanner.img}
          imgRes={heroBanner.imgRes}
        />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default ${folder};
`;
};

folders.forEach((folder) => {
  const folderPath = path.join(process.cwd(), folder); // Creates the full path for the folder

  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }

    const filePath = path.join(folderPath, `${folder}.jsx`);
    const componentCode = generateComponent(folder);
    fs.writeFile(filePath, componentCode, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log(`Folder and file created for ${folder}`);
    });
  });
});
