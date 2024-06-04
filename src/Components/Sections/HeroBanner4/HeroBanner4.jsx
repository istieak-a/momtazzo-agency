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
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 md:w-[100%] md:items-start">
        <h1 className="text-center font-outfit text-5xl font-semibold md:text-left md:w-1/2 md:text-5xl">
          {title}
        </h1>
        {title2 && (
          <h2 className="text-center font-outfit text-5xl md:text-left">
            {title2}
          </h2>
        )}
        <p className="w-1/2 text-center text-lg md:text-left">{desc}</p>
        <Link to="/contact" className="btn">
          {title === "Montazzo's Pricing Plans" || title.includes("Montazzo")
            ? "Book a Strategy Call"
            : "How it works"}
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner4;
