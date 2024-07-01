import React from "react";
import { Link } from "react-router-dom";

const BuildTeam = () => {
  return (
    <div className="bg-[#1c2336] px-8  py-20 text-white md:px-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-40 md:flex-row">
        <div className="flex flex-col items-center gap-7">
          <h1 className="font-outfit text-5xl font-semibold">Hire full-service teams on demand</h1>
          <p className="font-dmsans text-lg md:text-xl w-1/2 text-center">
            Make your support ops fast, flexible and ready for anything with
            experienced 24/7 support teams working month to month.
          </p>
          <Link to="/contact" className="btn">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuildTeam;
