import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import FilipinoBenifits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import Experiences from "../../../Sections/Experiences/Experiences";
import Tools from "../../../Sections/Tools/Tools";
import GuranteePricing from '../../../Sections/GuranteePricing/GuranteePricing';
import HowMicrosourcingWork from "../../../Sections/HowMicrosourcingWork/HowMicrosourcingWork";

const ReservationBookingAgent = () => {
  const heroBanner = {
    title: "Outsource reservationbookingagent to the Philippines",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/3d-designer-banner.jpg",
    imgRes: "https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/3d-designer-banner-m.jpg"
  };
  const experience = {
    title: "How to hire offshore reservation and booking agents?",
    description: "To decide which offshore reservation and booking support you need, start by identifying what level of experience you require.",
    levels: {
      junior: {
        yearsOfExperience: "Up to 1 - 2 years of reservation and booking experience",
        responsibilities: [
          "Processing payments and ensuring booking information is efficiently organized",
          "Communicating booking details in a timely manner to customers",
          "Assisting with customer inquiries related to reservations and bookings",
          "Maintaining accurate records of reservations and transactions"
        ]
      },
      intermediate: {
        yearsOfExperience: "2 - 3 years of reservation and booking experience",
        responsibilities: [
          "Managing reservations and bookings, ensuring accuracy and timeliness",
          "Handling customer inquiries and resolving booking issues",
          "Coordinating with other departments to ensure seamless booking processes",
          "Assisting in training junior agents and providing support as needed"
        ]
      },
      senior: {
        yearsOfExperience: "3+ years of reservation and booking experience",
        responsibilities: [
          "Training junior reservation and booking agents",
          "Providing month-end KPI reports or updates to senior management teams",
          "Identifying improvements to reservation processes",
          "Handling complex booking issues and providing resolutions"
        ]
      }
    }
  };
  
  return (
    <div>
      <HeroBanner4
        title={heroBanner.title}
        img={heroBanner.img}
        imgRes={heroBanner.imgRes}
      />

<div className="section-margin grid items-center gap-5 md:grid-cols-2 md:gap-20 md:py-20">
        <h1 className="font-outfit text-4xl font-semibold md:text-5xl ">
          Improve your Reservation booking capabilities with dedicated Filipino teams.
        </h1>
        <p>
        The online hospitality and tourism booking services market was valued at $519.1 billion in 2021 and is expected to grow, from 2022 to 2030, at a compound annual growth rate (CAGR) of 9.0% during this time period1. This is largely driven by a shift in consumer behavior and disposable income spending due to the surge in overseas travel post-pandemic.


        </p>
      </div>
      
      <div>
        <FilipinoBenifits title={"Reservation booking agent"} />
      </div>
      <div>
        <Experiences experience={experience} />
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

export default ReservationBookingAgent;