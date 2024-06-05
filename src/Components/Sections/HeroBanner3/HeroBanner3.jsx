import React from "react";
import backgroundImage from "../../../assets/banner-img/build-your-team-banner-bg.png";
import { Link } from "react-router-dom";

const HeroBanner3 = ({ img, title, btn, cate }) => {
  return (

      <div
        className="px-5 py-10 md:py-20   md:px-16 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col items-start max-w-7xl mx-auto">
          <h5 className="font-bold text-[#00baf1]">{cate}</h5>
          <h1 className="text-center font-outfit text-4xl font-bold md:text-left md:text-5xl">
            {title}
          </h1>
          <Link to={'/contact'} className="btn mt-5">{btn}</Link>
        </div>
      </div>
  );
};

export default HeroBanner3;
