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
  "WebDeveloper"
];

const generateComponent = (folder) => {
  const componentName = folder.replace(/&/g, 'And').replace(/Specialist/g, 'Spec').replace(/[^a-zA-Z]/g, ''); // Clean and format folder name for JavaScript variable naming conventions
  return `import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const ${componentName} = () => {
  const heroBanner = {
    title: "Outsource ${folder.toLowerCase()} to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/3d-designer-banner.jpg",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/3d-designer-banner-m.jpg"
  };
  return (
    <div>
      <HeroBanner4
        title={heroBanner.title}
        img={heroBanner.img}
        imgRes={heroBanner.imgRes}
      />
      <GetInTouch />
    </div>
  );
};

export default ${componentName};`;
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
