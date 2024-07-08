import React, { useState } from "react";
import TeamCard from "../TeamCard/TeamCard";
import avatar from "../../assets/avatar.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import team1 from "./assets/team1.jpeg";
import team2 from "./assets/team2.jpeg";


const NextArrow = ({ onClick }) => (
  <div
    className="next-arrow cursor-pointer rounded-full bg-gray-200"
    onClick={onClick}
    style={{ right: "40px", position: "absolute", top: "50%" }}
  >
    <GrFormNext className="text-4xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="prev-arrow cursor-pointer rounded-full bg-gray-200"
    onClick={onClick}
    style={{ left: "40px", position: "absolute", top: "50%" }}
  >
    <GrFormPrevious className="text-4xl" />
  </div>
);

const Teams = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      title: "Tanveer Singh",
      img: team1,
      designation: "Founder & CEO",
      desc: "An adept professional with 10+ years of experience in operations, he is the Founder, Director and CEO at Montazzo LLC. In his current role, he works closely with the team to ensure consistent delivery of quality services and forge good relationships with clients for mutual benefit.",
      linkedin: "https://www.linkedin.com/in/tanveersingh11/",
    },
    {
      title: "Amanda Philip",
      img: team2,
      designation: "Business Strategist",
      desc: "Amanda brings over 15 years of operations experience and currently serves as a Business Strategist. As a key decision-maker, she plays a critical role in driving business growth and strategic direction. Amanda's extensive expertise in operations and strategic planning has been instrumental in guiding companies toward sustained success and innovation.",
      linkedin: "https://www.linkedin.com/in/amanda-philip-423653177/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
    autoplay: true,
    autoplaySpeed: 10000, // Change slides every 2 seconds
    responsive: [
      {
        breakpoint: 1024, // breakpoint from window width no media query
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-2">

        {reviews.map((review) => (
          <TeamCard key={review.id} {...review} />
        ))}

    </div>
  );
};

export default Teams;
