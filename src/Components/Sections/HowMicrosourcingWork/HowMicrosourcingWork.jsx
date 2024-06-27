import React from 'react';
import icon1 from "../../../assets/icons/How does offshoring work-01_dark.png";
import icon2 from "../../../assets/icons/How does offshoring work-02_dark.png";
import icon3 from "../../../assets/icons/How does offshoring work-03_dark.png";
import Card from "../../Card/Card";
import { Link } from 'react-router-dom';
const HowMicrosourcingWork = () => {
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
        <div className="flex flex-col gap-10 items-center py-10 px-5 md:px-28">
        <h1 className="font-outfit font-bold text-4xl">How does offshoring work with Montazzo?</h1>
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
        <Link to={'/contact'} className="btn">Learn more</Link>
    </div>
    );
};

export default HowMicrosourcingWork;