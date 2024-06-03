import React, { useState } from "react";
import man from "../../assets/slider-2-slide-1-copyright.jpg";
import Button from "../Button/Button";
import "./Homepage.css";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroLady from "../../assets/herolady.png";
import increaseQuality from "../../assets/icons/increase-quality.png";
import reduceCost from "../../assets/icons/reduce-cost.png";
import scaleFast from "../../assets/icons/scale-fast.png";
import Card from "../Card/Card";
import Reviews from "../Reviews/Reviews";
import collaborate from "../../assets/collaborate.jpg";
import recruit from "../../assets/recruit.png";
import support from "../../assets/support.png";
import globe from '../../assets/icons/globe.png';
import card from '../../assets/icons/card.png';
import contact from '../../assets/icons/contact.png';
import manico from '../../assets/icons/manico.png';
import people from '../../assets/icons/people.png';
import verify from '../../assets/icons/verify.png';
import BuildTeam from "../Sections/BuildTeam/BuildTeam";

const Homepage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const partners = [
    {
      name: "partner1",
      img: "https://stratego.ancorathemes.com/wp-content/uploads/2023/12/partner-1-copyright.png",
    },
    {
      name: "partner2",
      img: "https://stratego.ancorathemes.com/wp-content/uploads/2023/12/partner-2-copyright.png",
    },
    {
      name: "partner3",
      img: "https://stratego.ancorathemes.com/wp-content/uploads/2023/12/partner-3-copyright.png",
    },
    {
      name: "partner4",
      img: "https://stratego.ancorathemes.com/wp-content/uploads/2023/12/partner-4-copyright.png",
    },
    {
      name: "partner5",
      img: "https://stratego.ancorathemes.com/wp-content/uploads/2023/12/partner-5-copyright.png",
    },
    {
      name: "partner6",
      img: "https://stratego.ancorathemes.com/wp-content/uploads/2023/12/partner-6-copyright.png",
    },
  ];
  const topServices = [
    {
      title: "Endless possibilities",
      desc: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      ico: <FaReact />,
    },
    {
      title: "Multiple options",
      desc: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      ico: <FaReact />,
    },
    {
      title: "Modern technologies",
      desc: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      ico: <FaReact />,
    },
  ];
  const cardData = [
    {
      title: "Reduce Costs",
      ico: reduceCost,
      desc: "Outsourcing allows your organization to be more competitive, sustainable and profitable with 70% labor cost savings.",
      btn: "Boost my profits",
      url: "/reduce-cost",
    },
    {
      title: "Increase quality & efficiency",
      ico: increaseQuality,
      desc: "Remote staffing solutions rectify skills shortages and improve internal processes by accessing global talent pools.",
      btn: "Build your team",
      url: "/increase-quality-efficiency",
    },
    {
      title: "Scale faster",
      ico: scaleFast,
      desc: "Tailor your offshore operations to help scale quickly, meet demand, combat rising labor costs and access specialty talent all without the overheads.",
      btn: "Scale my business",
      url: "/scale-fast",
    },
  ];
  const offhsoring = [
    {
      no: "STEP 1",
      title: "Collaborate",
      desc: "We discuss your remote staffing requirements.",
      img: collaborate,
    },
    {
      no: "STEP 2",
      title: "Recruit",
      desc: "We recruit and employ your outsourced team",
      img: recruit,
    },
    {
      no: "STEP 3",
      title: "Support",
      desc: "We support the operation of your outsourced team.",
      img: support,
    },
  ];
  const unique = [
    {
      title: "15 Years Of Experience",
      desc: "Rated the #1 virtual assistant company with 7500+ clients served and 800+ verified 5-star business reviews, we are the leader in virtual assistant services in both North America and the Philippines.",
      ico: verify,
    },
    {
      title: "Speed to Hire",
      desc: "Instantly scale your business with an employee who can quickly launch in your business and make an impact today.",
      ico: contact,
    },
    {
      title: "Diverse Talent",
      desc: "Our virtual assistants specialize in 8 different services for a variety of industries. From administrative and marketing tasks to inside sales and customer service – we hire only the most qualified individual for the role.",
      ico: people,
    },
    {
      title: "Extensive Screening & Vetting",
      desc: "All virtual assistants are vetted, FBI-grade background checked and undergo extensive personality profiling to ensure you receive the quality and qualified professional.",
      ico: contact,
    },
    {
      title: "All-Inclusive Pricing",
      desc: "Pay one flat rate per virtual assistant and let us handle the rest. We provide competitive medical benefits, insurance and paid time off in addition to handling the entire recruitment, interview and onboarding process.",
      ico: card,
    },
    {
      title: "Standardized Work Environment",
      desc: "Our virtual assistants have dedicated work computers, noise-isolated environments, backup power and internet connections, and time tracking software to ensure they’re present and focused.",
      ico: globe,
    },
  ];

  return (
    <div className="">
      <div className=" bg-gradient-to-br from-top-left to-bottom-right px-8 py-10 ">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-3 md:flex-row md:gap-20">
        <div className="pe-5 md:w-[60%] md:pe-0">
          <h1 className="font-dmsans text-4xl md:text-6xl">
            Hire full-time outsourced teams in the Philippines.{" "}
          </h1>
          <h2 className="font-outfit text-4xl font-bold md:text-6xl">
            Ready to work in as little as six weeks
          </h2>
          <p className="pt-5">
            Achieve unparalleled, sustainable growth while maintaining complete
            operational control.
          </p>
          <div className="mt-6 flex flex-col items-start gap-4 md:flex-row">
            <Link className="btn" to="/contact">
              Ask an expert
            </Link>
            <Link className="btn-outline" to="/contact">
              what roles to outsource
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <img src={heroLady} alt="" />
        </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-6 ">
        {partners.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center border px-5 py-6"
          >
            <img
              src={item.img}
              alt={item.name}
              className="opacity-40 transition-all duration-300 ease-in-out hover:opacity-100"
            />
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 gap-4 px-8 max-w-7xl mx-auto py-10 md:grid-cols-3 md:px-16">
        {cardData.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              desc={item.desc}
              url={item.url}
              ico={item.ico}
              btn={item.btn}
            />
          );
        })}
      </div>
      <div className="mx-5  bg-[#547087] px-8 py-10 md:mx-0">
        <div className="max-w-7xl mx-auto flex flex-col gap-10  md:flex-row-reverse md:p-16">
        <div className="chart md:w-[60%]">
          <div className="chart-container flex flex-col gap-7 border-b py-5">
            <div className="w-[55%]">
              <h2>AUSTRALIA</h2>
            </div>
            <div className="w-[70%]">
              <h2>USA</h2>
            </div>
            <div className="w-[100%]">
              <h2>UK</h2>
            </div>
            <div className="w-[20%]">
              <h2>PHILIPPNES</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-5 md:w-[40%]">
          <h2 className="font-outfit text-4xl text-white md:text-5xl ">
            Business who engage in business process outsourcing{" "}
            <span className="font-semibold">
              (BPO) save 70% on employment costs.
            </span>
          </h2>
          <Link className="btn">Learn how your business can save</Link>
        </div>
        </div>
      </div>
      <div className="flex max-w-7xl mx-auto flex-col gap-5 px-5 py-10 md:gap-10 md:px-16 md:py-20">
        <h1 className="font-outfit text-4xl font-normal md:text-5xl">
          How offshoring works
        </h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col gap-5 md:w-1/2">
            {offhsoring.map((item, index) => {
              return (
                <div
                  key={index}
                  className="offshoring cursor-pointer rounded-lg py-4 ps-8 duration-300 hover:shadow-xl"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h3 className="font-dmsans text-xs font-bold text-[#3e96dd]">
                    {item.no}
                  </h3>
                  <h1 className="font-outfit text-4xl font-[600]">
                    {item.title}
                  </h1>
                  <p className="w-[70%] pt-5 font-dmsans text-lg">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center">
            <img
              src={
                hoveredIndex !== null
                  ? offhsoring[hoveredIndex].img
                  : offhsoring[0].img
              }
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="px-5 md:px-16 max-w-7xl mx-auto flex flex-col gap-10 py-10">
        <h1 className="text-4xl font-outfit font-[500] text-center">What sets up apart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {
            unique.map((item, index) => {
              return (
                <Card key={index} title={item.title} desc={item.desc} ico={item.ico}  />
              )
            })
          }
        </div>
      </div>

      <div className="px-5 max-w-7xl mx-auto py-20">
        <h2 className="pb-10 text-center font-outfit text-4xl font-bold">
          What Our Clients Are Saying
        </h2>
        <Reviews />
      </div>
      <div>
        <BuildTeam />
      </div>

      {/* <div className="px-8 py-10 md:flex md:px-16">
        <div className="font-outfit font-[500]">
          <h2 className="text-[13px] md:text-[14px]">TOP SERVICES</h2>
          <h1 className="text-[30px] leading-none md:pt-3 md:text-[57px]">
            Our help makes your work productive
          </h1>
        </div>
        <div className="flex flex-col gap-5 pt-5 md:gap-12 ">
          {topServices.map((service, index) => {
            return (
              <div key={index} className="flex items-center gap-6">
                <div className="rounded-full bg-[#ecf4f5] p-6 text-4xl text-[#50aab2]">
                  {service.ico}
                </div>
                <div>
                  <h1 className="font-outfit text-[20.8px] font-[500] md:text-[26px]">
                    {service.title}
                  </h1>
                  <p className="pt-2 font-dmsans text-[17px] md:pt-4">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      {/* <div className="py-5">
        <marquee
          direction="left"
          className="font-outfit text-[100px] font-[100] text-[#dfebec] md:text-[200px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          corporis!
        </marquee>
      </div> */}
    </div>
  );
};

export default Homepage;
