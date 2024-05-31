import fs from 'fs';
import path from 'path';

const folders = [
    "Accounting",
    "AdministrationSupport",
    "CreativeServices",
    "CustomerService",
    "DataManagement",
    "Finance",
    "HealthInformationManagement",
    "HRServices",
    "Insurance",
    "Marketing",
    "Operations",
    "QualityAssurance",
    "SalesSupport",
    "TechnicalSupport"
];

const generateComponent = (folder) => {
    return `
import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const ${folder} = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Mask%20Group%208-1.png?width=828&height=494&name=Mask%20Group%208-1.png",
    title: "${folder} outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  return (
    <div>
      <div>
        <HeroBanner3
          img={banner.img}
          title={banner.title}
          btn={banner.btn}
          cate={banner.cate}
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

folders.forEach(folder => {
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