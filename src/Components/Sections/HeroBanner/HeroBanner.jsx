import React from "react";
import { useMediaQuery } from "react-responsive";

const HeroBanner = ({ title, title2, desc, img, imgRes }) => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const backgroundImage = isLargeScreen ? img : imgRes;

  return (
    <div
      className="py-20 md:py-30 text-white px-5 md:px-16 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" max-w-7xl mx-auto">
        <h1 className="text-center md:text-left font-outfit text-5xl ">
          {title}
        </h1>
        {title2 && (
          <h2 className="text-center md:text-left font-outfit text-5xl">{title2}</h2>
        )}
        <p className="pt-7 text-center text-lg md:text-left  w-1/2">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
