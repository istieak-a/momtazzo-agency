import React from "react";
import { Link } from "react-router-dom";

const BuildTeam = () => {
  return (
    <div className="bg-[#1c2336] px-8  py-20 text-white md:px-16 md:py-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-40 md:flex-row">
        <div className="md:border-e">
          <h1 className="cursor-pointer font-outfit text-4xl font-bold duration-300 hover:text-[#63b3bb] hover:underline md:text-5xl">
            Build a dedicated team in India
          </h1>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="font-dmsans text-lg md:text-xl">
            Get in contact today and have your offshore team up and running in
            as little as two weeks.
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
