import React from "react";
import hero from "../../../../assets/banner-img/ms-banner-why-the-philippines.jpg";
import heroRes from "../../../../assets/banner-img/ms-banner-why-the-philippines-m.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";

const whyThePhilippines = () => {
  const heroBanner = {
    title: "Why outsource to the Philippines?",
    desc: "To effectively lower costs and boost growth, businesses often turn to offshore teams in the Philippines.",
    img: hero,
    imgRes: heroRes,
  };
  return (
    <div>
      <div>
        <HeroBanner
          title={heroBanner.title}
          title2={heroBanner.title2}
          desc={heroBanner.desc}
          img={heroBanner.img}
          imgRes={heroBanner.imgRes}
        />
      </div>
      this is why the philippines page
    </div>
  );
};

export default whyThePhilippines;
