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
        "I have 2 VA's with MyOutDesk. Our VA's are amazing! They help us with BPO tasks, Craigslist, postlets, Facebook greetings, Zillow, IVR, metric spreadsheets, RealPro tasks, listing tasks, price reduction plans, finding comps, etc. I'm grateful for our VA's daily!",
      img: avatar,
      name: "Toril Schoepfer",
      desc: "Broker/Owner",
      company: "Toril Sells Houses Team, Sumner WA",
    },
    {
      review:
        "Working with MyOutDesk has really been a dream. It has allowed me to cost effectively outsource the prospecting part of my business. The investment is nothing compared to the return I am getting from listings, opportunities, and brand exposure they provide me.",
      img: avatar,
      name: "Adam Kruse",
      desc: "Broker/Owner",
      company: "Hermann London REALTORS®, St. Louis MO",
    },
    {
      review:
        "We hired our first VA about 4 years ago, and they've become an essential part of the business. They do administrative work, ensure quality in our client info & leads, update the CRM, create reports, etc. If they're gone, we start crying - they're really that crucial.",
      img: avatar,
      name: "Shane Stanfield",
      desc: "CEO & Founder",
      company: "Raven & Stanfield Real Estate Group",
    },
    {
      review:
        'A virtual assistant allows your team members more time to focus on their "one thing" without sacrificing client satisfaction. In our business, they do lead followup & transaction coordination. Our VA\'s keep our followup time down and help our executives effectively focus.',
      img: avatar,
      name: "Aaron Armstrong",
      desc: "REALTOR®",
      company: "KW Tennessee / KW Family Reunion",
    },
    {
      review:
        "MyOutDesk is where you'll find real estate trained Virtual Assistants that can do everything that an assistant can do for you, except physically picking up a lockbox or paperwork, because they're located remotely in the Philippines. They work the hours you want, in the timezone",
      img: avatar,
      name: "Tom Ferry",
      desc: "Coach & Trainer",
      company: "Tom Ferry Real Estate Coaching",
    },
    {
      review:
        "Our Virtual Assistants are punctual, detailed, consistent, give us superlative work and are an important part of our team. This lets us increase business, frees up agents to go out on appointments and sell homes. We could not be more pleased with the level of",
      img: avatar,
      name: "Beverly Manley",
      desc: "VP Finance",
      company: "J. Michael Manley Team, Greenville SC",
    },
    {
      review:
        "MyOutDesk has allowed me to start building my real estate team, starting with what I needed help with the most - lead generation. I'd highly recommend MyOutDesk to any agent like who is looking to get to the next level and ultimately build a real estate team.",
      img: avatar,
      name: "Charlie Hutchinson",
      desc: "REALTOR®",
      company: "Keller Williams, Whitefish Bay WI",
    },
    {
      review:
        "MyOutDesk has really revolutionized our business. We'd generate rental leads, hand them off to our agents, and have those agents reach out. We needed a better way to use the time these agents were spending to get these leads ready to go out on tour. I can't tell you how",
      img: avatar,
      name: "Boots Levinson",
      desc: "Principal",
      company: "RentPhilly",
    },
    {
      review:
        "I'm not going to be able to make $250,000 a year if I'm spending half my time doing $10 an hour work. That's why we're such big fans of virtual assistants and automation - because we need to delegate those tasks off to technology, virtual assistants, and team members so",
      img: avatar,
      name: "Dale Warner",
      desc: "COO",
      company: "Realvolve",
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
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
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
