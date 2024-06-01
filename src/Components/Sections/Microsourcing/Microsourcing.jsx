import React from "react";
import './Microsourcing.css'
import { Link } from "react-router-dom";
import icon1 from "../../../assets/icons/How does offshoring work-01_dark.png";
import icon2 from "../../../assets/icons/How does offshoring work-02_dark.png";
import icon3 from "../../../assets/icons/How does offshoring work-03_dark.png";
import Card from "../../Card/Card";


const MicroSourcing = ({ title, services }) => {
    const cardData2 = [
        {
          title: "COLLABORATE",
          ico: icon1,
          desc: "We discuss your offshore resourcing requirements",
        },
        {
          title: "RECRUIT",
          ico: icon2,
          desc: "We recruit and employ your offshore team",
        },
        {
          title: "SUPPORT",
          ico: icon3,
          desc: "We support the operations of your offshore team",
        },
      ];
  return (
    <div className="px-5 md:px-28 flex flex-col gap-10">
    <div className="flex flex-col items-center gap-8 py-10">
      <h1 className="font-outfit text-5xl text-center font-semibold">What {title} roles can you outsource with Microsourcing</h1>
      <p className="text-center md:px-20">MicroSourcing is the leading outsourcing provider in the Philippines, building full-time, dedicated teams for its clients while taking care of everything on the ground.</p>
      <ul className="grid grid-cols-3 mlist gap-4">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col gap-20 items-center py-10">
        <h1 className="font-outfit text-5xl font-semibold">Microsourcing client results</h1>
        <div className="flex gap-5">
            <div className="flex items-center gap-5 bg-[#f4fafc] px-8 py-5 rounded-lg">
                <img src="https://www.microsourcing.com/hubfs/icon-productivity%20increased%20(1).svg" alt="ico" />
                <p className="text-xl font-semibold">Productivity increased by 34%</p>
            </div>
            <div className="flex items-center gap-5 bg-[#f4fafc] px-8 py-5 rounded-lg">
                <img src="https://www.microsourcing.com/hubfs/Group%20961.svg" alt="ico" />
                <p className="text-xl font-semibold">Administrative costs reduced by 50%</p>
            </div>
        </div>
    </div>
    <div className="flex flex-col gap-10 items-center py-10">
        <h1 className="font-outfit font-bold text-4xl">How does offshoring work with Microsourcing work?</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cardData2.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              ico={data.ico}
              desc={data.desc}
            />
          ))}
        </div>
        <button className="btn">Learn more</button>
    </div>
    </div>
  );
};

export default MicroSourcing;
