import React, { useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import avatar from "../../assets/avatar.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

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

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      review:
        "With Montazzo’s assistance, we’ve been able to 3X our content output with almost 100% audio and video accuracy. Montazzo ensures the content is up to standards, and we’ve been impressed with the ease of collaborating with the team.",
      img: "https://cdn.prod.website-files.com/5e6947ce3fd8148aa23649ce/6414c829d23ea2471137dfa9_Andrew%20Wilkinson.jpeg",
      name: "Head of Video Production",
      company: "Media",
    },
    {
      review:
        "Thanks to Montazzo, we’ve scaled our affiliate program to more than 40 global ambassadors. The team’s work also helped reduce customer support tickets by 50% per month and response times to less than an hour. Overall, they stand out for their proactive approach, flexibility, and professionalism.",
      img: "https://cdn.prod.website-files.com/5e6947ce3fd8148aa23649ce/5f68ef76163eed7f21dd1268_Patrick.jpg",
      name: "VP of Growth",
      company: "Gaming",
    },
    {
      review:
        "Montazzo has provided strategies and solutions to significantly reduce ticket response times. The team’s ability to cater to customers from diverse linguistic backgrounds makes the workflow seamless. Above all, we appreciate their flexibility, adaptability and punctuality in meetings.",
      img: "https://cdn.prod.website-files.com/5e6947ce3fd8148aa23649ce/5f68f127e72936dbd9fbf60f_kaitlyn.jpeg",
      name: "Customer Support Manager",
      company: "Food & Beverage",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
    autoplay: true,
    autoplaySpeed: 2000, // Change slides every 2 seconds
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
    <div className="reviews-carousel">
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
