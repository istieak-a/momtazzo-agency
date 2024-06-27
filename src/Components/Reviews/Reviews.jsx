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
        "We’ve always wanted to hire offshore but have struggled to find great teams and companies. That all changed when we started working with Montazzo.",
      img: "https://cdn.prod.website-files.com/5e6947ce3fd8148aa23649ce/6414c829d23ea2471137dfa9_Andrew%20Wilkinson.jpeg",
      name: "Andrew Wilkinson",
      desc: "Managing Partner",
      company: "Tiny",
    },
    {
      review:
        "Montazzo helped us quickly select top talent for our Customer Service team. It was easy, painless, and fast. We're very happy and will definitely be using them for other departments.",
      img: "https://cdn.prod.website-files.com/5e6947ce3fd8148aa23649ce/5f68ef76163eed7f21dd1268_Patrick.jpg",
      name: "Patrick Coddou",
      desc: "CEO",
      company: "Supply",
    },
    // {
    //   review:
    //     "I really enjoyed working with Montazzo to find a new developer for my team! I've been extremely happy with the entire experience",
    //   img: "https://cdn.prod.website-files.com/5e6947ce3fd8148aa23649ce/6414c8872e8c94b8d33bf98d_Nick%20Sharma.png",
    //   name: "Nik Sharma",
    //   desc: "CEO & Founder",
    //   company: "Sharma Brands",
    // },
    // {
    //   review:
    //     'The Montazzo team helped me hire a new EA recently and it’s already been such a great addition to my team. Can highly recommend!',
    //   img: "https://cdn.prod.website-files.com/5e6947ce3fd8148aa23649ce/5f7e143895838a5c6393ab5a_Adii.jpg",
    //   name: "Adii Pienaar",
    //   desc: "Creator ",
    //   company: "WooCommerce",
    // },
    // {
    //   review:
    //     "Montazzo did an excellent job helping us find new engineering talent for our team. They've been competent and responsive throughout the entire process",
    //   img: "https://cdn.prod.website-files.com/5e6947ce3fd8148aa23649ce/5ff65534c5c32e3a50b8a2ec_Tobias_Vanschneider-p-500.jpeg",
    //   name: "Tobias van Schneider",
    //   desc: "Founder ",
    //   company: "Semplice & Designer of Spotify",
    // },
    {
      review:
        "We’re constantly trying to bring the best the market has to offer to support our global business operations by identifying suppliers with the exact solution we need to solve our problem. In this case, we found an incredible partner in Montazzo.",
      img: "https://cdn.prod.website-files.com/5e6947ce3fd8148aa23649ce/5f68f127e72936dbd9fbf60f_kaitlyn.jpeg",
      name: "Kaitlyn Witman",
      desc: "Co-Founder",
      company: "Rainfactory",
    }
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
