import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ title, ico, desc, btn, url }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-3 rounded-xl bg-[#f4fafc] px-10 py-8 duration-500 hover:bg-white hover:shadow-xl">
      <img src={ico} className="size-20 object-contain" alt="ico" />
      <h2 className="text-center font-outfit text-2xl font-semibold md:pt-5 md:text-3xl">
        {title}
      </h2>
      <p className="text-center text-sm">{desc}</p>
      {btn && (
        <Link
          className="flex items-center gap-2 pt-3 font-dmsans text-lg font-bold text-[#50aab2] underline"
          to={url}
        >
          {btn}
          <FaArrowRight />
        </Link>
      )}
    </div>
  );
};

export default Card;
