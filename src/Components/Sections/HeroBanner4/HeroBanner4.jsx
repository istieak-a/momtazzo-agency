import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const HeroBanner4 = ({ title, title2, desc, img, imgRes }) => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const backgroundImage = isLargeScreen ? img : imgRes;

  return (
    <div
      className="flex h-[120vh] flex-col justify-start bg-cover px-5 py-24 text-white md:h-[70vh] md:justify-center md:px-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center md:w-[40%] md:items-start">
        <h1 className="text-center md:text-left font-semibold font-outfit text-5xl md:text-6xl ">
          {title}
        </h1>
        {title2 && (
          <h2 className="text-center md:text-left font-outfit text-5xl">{title2}</h2>
        )}
        <p className="pt-7 text-center text-lg md:text-left ">
          {desc}
        </p>
        <Link className="btn">How it works</Link>
      </div>
    </div>
  );
};

export default HeroBanner4;
