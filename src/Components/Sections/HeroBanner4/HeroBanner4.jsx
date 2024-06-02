import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const HeroBanner4 = ({ title, title2, desc, img, imgRes }) => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const backgroundImage = isLargeScreen ? img : imgRes;

  return (
    <div
      className="hero-banner flex flex-col justify-start px-5 py-24 text-white md:justify-center md:px-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center md:w-[40%] md:items-start">
        <h1 className="text-center font-outfit text-5xl font-semibold md:text-left md:text-5xl">
          {title}
        </h1>
        {title2 && (
          <h2 className="text-center font-outfit text-5xl md:text-left">
            {title2}
          </h2>
        )}
        <p className="pt-7 text-center text-lg md:text-left">{desc}</p>
        <Link to="/how-it-works" className="btn">
          How it works
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner4;
