import React from "react";
import { useMediaQuery } from "react-responsive";

const HeroBanner = ({ title, title2, desc, img, imgRes }) => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const backgroundImage = isLargeScreen ? img : imgRes;

  return (
    <div
      className="flex h-[130vh] flex-col justify-end bg-cover px-5 py-20 text-white md:h-[70vh] md:justify-center md:px-16 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center md:w-[40%] md:items-start">
        <h1 className="text-center md:text-left font-outfit text-5xl ">
          {title}
        </h1>
        {title2 && (
          <h2 className="text-center md:text-left font-outfit text-5xl">{title2}</h2>
        )}
        <p className="pt-7 text-center text-lg md:text-left ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
