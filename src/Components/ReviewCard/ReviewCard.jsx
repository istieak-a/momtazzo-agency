import React from "react";

const ReviewCard = ({ review, img, name, desc, company }) => {
  return (
    <div className="flex  flex-col items-center  gap-10 bg-[#f4fafc] m-5 p-5 rounded-lg">
      <p className="text-center text-lg font-dmsans">{review}</p>
      <div className="flex flex-col items-center">
        {/* <img className="size-14 rounded-full" src={img} alt="client-picture" /> */}
        <h1 className="text-xl font-medium">{name}</h1>
        <h4 className="text-xs">{desc}</h4>
        <h4 className="text-xs">{company}</h4>
      </div>
    </div>
  );
};

export default ReviewCard;
