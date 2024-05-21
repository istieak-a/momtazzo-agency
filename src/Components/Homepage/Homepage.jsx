import React from "react";
import man from "../../assets/slider-2-slide-1-copyright.jpg";
import Button from "../Button/Button";

const Homepage = () => {
  return (
    <div>
      <div className="bg-gradient-to-br py-20 px-8 from-top-left to-bottom-right flex flex-col gap-3 items-start">
        <div className="font-outfit text-[43px] font-[500] pt-6 uppercase leading-none">
          <h1>your</h1>
          <h1 className="relative">
            website{" "}
            <img
              className="absolute  bottom-1 left-[190px] w-14 "
              src={man}
              alt="man"
            />
          </h1>
          <h1>sales are our</h1>
          <h1>priority</h1>
        </div>
        <Button>More Info</Button>
      </div>
      <div></div>
    </div>
  );
};

export default Homepage;
