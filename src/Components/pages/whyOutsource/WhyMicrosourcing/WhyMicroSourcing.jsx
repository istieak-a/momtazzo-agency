import React from "react";
import hero from "../../../../assets/banner-img/M_Web_Why-MicroSourcing_Banner_202307.jpg";
import heroRes from "../../../../assets/banner-img/M_Mobile_Why-MicroSourcing_Banner_202307.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";

const whyMicroSourcing = () => {
  const heroBanner = {
    title: "Reasons To Choose MicroSourcing",
    desc: "When you partner with the strongest provider, you get the best outcome, and no hidden costs or unforeseen risks.",
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
      this is microsourcing page
    </div>
  );
};

export default whyMicroSourcing;
