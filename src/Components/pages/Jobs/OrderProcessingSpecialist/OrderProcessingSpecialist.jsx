import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const OrderProcessingSpec = () => {
  const heroBanner = {
    title: "Outsource Order Processing Specialist to India",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/Order%20Processing%20Specialists/MS_HeaderBanner_Order%20Processing%20Specialist.jpg",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/Order%20Processing%20Specialists/MS_HeaderBanner-M_Order-Processing-Specialist.jpg"
  };
  const experience = {
    title: "How experienced are our order processing specialists?",
    description: "Our order processing specialists offer different levels of expertise depending on the support you require.",
    levels: {
      junior: {
        yearsOfExperience: "1 - 2 years of order processing experience",
        responsibilities: [
          "Accurately input customer orders into the system while ensuring data integrity",
          "Verify and cross-check order details to identify and address basic discrepancies or errors",
          "Assist in responding to customer inquiries regarding order status and provide preliminary assistance"
        ]
      },
      intermediate: {
        yearsOfExperience: "2 - 4 years of order processing experience",
        responsibilities: [
          "Thoroughly review and meticulously process a wide range of customer orders, paying close attention to intricate details",
          "Collaborate closely with sales and inventory teams to ensure product availability and address potential shortages",
          "Take charge of handling escalated customer inquiries, employing problem-solving skills to provide timely resolution"
        ]
      },
      senior: {
        yearsOfExperience: "4+ years of order processing experience",
        responsibilities: [
          "Oversee and optimize the entire order processing workflow, streamlining processes for efficiency and accuracy",
          "Serve as mentors to junior team members, offering guidance and training to enhance their skills",
          "Analyze comprehensive order data to identify trends and areas for process improvement, implementing enhancements as needed"
        ]
      }
    }
  };
  const logoLinks = [
    "https://www.microsourcing.com/hubfs/MicroSourcing/roles/logos/SAP-Logo-2000.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/Logos/Oracle%20E-Business%20Suite.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/roles/logos/salesforce.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/Logos/Microsoft%20Dynamics.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/roles/logos/Intuit_QuickBooks_logo.png",
    "https://www.microsourcing.com/hubfs/netsuite.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/Logos/Shopify.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/roles/logos/Zendesk.png",
    "https://www.microsourcing.com/hubfs/MicroSourcing/Logos/Tableau%20.png",
    "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Admin%20Assistant/Google%20Workspace.png?width=192&height=25&name=Google%20Workspace.png"
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
        Improve your order processing capabilities with dedicated Indian teams.

        </h1>
        <p>
        Facing delays, errors and customer complaints due to order processing system and workflow efficiency issues? Experienced teams in India are skilled at managing the most crucial order processing tasks, including order entry and verification, order tracking and status updates and inventory management and stock control.
        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"Order processing specialist"} />
      </div>
      <div>
        <Experiences experience={experience} />
      </div>
      <div>
        <Tools title={"Order processing specialist"} logos={logoLinks} />
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

export default OrderProcessingSpec;