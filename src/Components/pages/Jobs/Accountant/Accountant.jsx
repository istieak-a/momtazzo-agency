
import React from "react";
import HeroBanner4 from "../../../Sections/HeroBanner4/HeroBanner4";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const Accountant = () => {
  const heroBanner = {
    title: "Outsource accountants to the Philippines",
    img: 'https://www.microsourcing.com/hubfs/3D%20designer_desktop.jpg',
    imgRes: 'https://www.microsourcing.com/hubfs/3D%20designer_mobile.jpg',
  };
  return (
    <div>
    <div>
        <HeroBanner4
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

export default Accountant;
