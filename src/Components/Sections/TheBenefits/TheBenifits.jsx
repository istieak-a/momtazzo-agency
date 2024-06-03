import React from "react";
import increaseQuality from "../../../assets/icons/increase-quality.png";
import scaleFast from "../../../assets/icons/scale-fast.png";
import Card from "../../Card/Card";

const TheBenifits = () => {
  const cards = [
    {
      title: "Increase quality and efficiency",
      desc: "Tap into a talent pool that works hard because they care about their work.",
      ico: increaseQuality,
    },
    {
      title: "Scale fast",
      desc: "Seamlessly grow your team - or scale back down - as demand warrants.",
      ico: scaleFast,
    },
  ];
  return (
    <div className="flex flex-col gap-5 px-5 py-10 md:gap-10 md:px-20 md:py-20 max-w-7xl mx-auto">
      <div className="flex flex-col gap-3">
        <h1 className="text-center font-outfit text-3xl font-bold md:text-5xl">
          The benefits of outsourcing do not end with reduced costs.
        </h1>
        <p className="text-center">
          Whatever your industry, no matter how large or small your business,
          outsourcing can allow you to access other great benefits including:
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 md:px-20">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            desc={card.desc}
            ico={card.ico}
          />
        ))}
      </div>
    </div>
  );
};

export default TheBenifits;
