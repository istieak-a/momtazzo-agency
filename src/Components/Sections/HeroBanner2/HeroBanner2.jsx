import React from "react";
import backgroundImage from "../../../assets/banner-img/build-your-team-banner-bg.png";
import { Link } from "react-router-dom";

const HeroBanner2 = ({ img, title, btn, cate }) => {
  return (
    <div>
      <div
        className="flex flex-col gap-10 px-5 py-10 md:flex-row md:px-16 md:py-16"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col items-center justify-center md:items-start">
          <h5 className="font-bold text-[#00baf1]">{cate}</h5>
          <h1 className="text-center font-outfit text-4xl font-bold md:text-left md:text-5xl">
            {title}
          </h1>
          <Link className="btn mt-5">{btn}</Link>
        </div>
        <img src={img} alt="banner-img" />
      </div>
    </div>
  );
};

export default HeroBanner2;
