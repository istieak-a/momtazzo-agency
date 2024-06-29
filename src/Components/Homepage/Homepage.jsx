import React, { useState } from "react";
import man from "../../assets/slider-2-slide-1-copyright.jpg";
import Button from "../Button/Button";
import "./Homepage.css";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroLady from "../../assets/herolady2.jpg";
import increaseQuality from "../../assets/icons/increase-quality.png";
import reduceCost from "../../assets/icons/reduce-cost.png";
import scaleFast from "../../assets/icons/scale-fast.png";
import Card from "../Card/Card";
import Reviews from "../Reviews/Reviews";
import collaborate from "../../assets/collaborate.jpg";
import recruit from "../../assets/recruit.png";
import support from "../../assets/support.png";
import globe from "../../assets/icons/globe.png";
import card from "../../assets/icons/card.png";
import contact from "../../assets/icons/contact.png";
import manico from "../../assets/icons/manico.png";
import people from "../../assets/icons/people.png";
import verify from "../../assets/icons/verify.png";
import BuildTeam from "../Sections/BuildTeam/BuildTeam";
import Accordion from "../Accordian/Accordian";
import checkIco from "../../assets/icons/pngegg.png";

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
  const cardData1 = [
    {
      title: "IQ + EQ",
      desc: "Incredible customer support is as much about emotions as solving problems. It’s why we hire for intelligence and compassion.",
      ico: "https://hugoinc.com/wp-content/uploads/2023/10/Asset-163.svg",
    },
    {
      title: "Culture",
      desc: "Empathy, proactivity, accountability, and openness - these are our values. We integrate your style and tone to create customer experiences that feel in-house.",
      ico: "https://hugoinc.com/wp-content/uploads/2023/10/Asset-164.svg",
    },
    {
      title: "Technology Driven",
      desc: "Our innovative approach unites cutting-edge generative AI with exceptionally talented multilingual support teams, guaranteeing seamless global coverage.",
      ico: "https://hugoinc.com/wp-content/uploads/2023/10/Asset-165.svg",
    },
    {
      title: "Seamless Integration",
      desc: "From apps on your phone to Zendesk, we've mastered your tool stack. We’re ready to work from day one to deliver exceptional CX.",
      ico: "https://hugoinc.com/wp-content/uploads/2023/10/Asset-166.svg",
    },
  ];
  const cardData2 = [
    {
      desc: "I NEED ONE REALLY GOOD SUPPORT AGENT",
      ico: "https://www.datocms-assets.com/44723/1695021439-light-bulb-icon.svg",
    },
    {
      desc: "I'M LOOKING FOR A TEAM OF SUPPORT AGENTS",
      ico: "https://www.datocms-assets.com/44723/1695022995-connect-data-icon.svg",
    },
    {
      desc: "I WANT PART TIME AGENTS",
      ico: "https://www.datocms-assets.com/44723/1695021547-after-hours-icon.svg",
    },
    {
      desc: "I WANT TECH SUPPORT AGENTS",
      ico: "https://www.datocms-assets.com/44723/1695022991-computer-notification-icon.svg",
    },
    {
      desc: "I NEED SALES REPS OR SDRS",
      ico: "https://www.datocms-assets.com/44723/1695023003-headset-icon.svg",
    },
    {
      desc: "I WANT A CALL CENTER TO CALL LEADS",
      ico: "https://www.datocms-assets.com/44723/1695021386-call-center-icon.svg",
    },
    {
      desc: "I WANT AI SERVICES AND PROCESS IMPROVEMENTS",
      ico: "https://www.datocms-assets.com/44723/1695022467-cogs-icon.svg",
    },
    {
      desc: "I'M LOOKING FOR A LARGE SCALE OPERATION (20+ AGENTS)",
      ico: "https://www.datocms-assets.com/44723/1695023000-graph-icon.svg",
    },
  ];
  const cardData3 = [
    {
      desc: "eCommerce and Retail",
      ico: "https://influx.com/images/icons/icon-shopping-bags.svg",
      link: "/contact"
    },
    {
      desc: "SAAS",
      ico: "https://influx.com/images/icons/icon-rocket.svg",
      link: "/contact"
    },
    {
      desc: "Live chat",
      ico: "https://influx.com/images/icons/icon-live-chat.svg",
      link: "/contact"
    },
    {
      desc: "Enterprise call center",
      ico: "https://influx.com/images/icons/icon-call-centers.svg",
      link: "/contact"
    },
    {
      desc: "How it works",
      ico: "https://influx.com/images/icons/icon-lightbulb.svg",
      link: "/contact"
    },
    {
      desc: "Burst Coverage",
      ico: "https://influx.com/images/icons/icon-umbrella.svg",
      link: "/contact"
    },
    {
      desc: "After Hours",
      ico: "https://influx.com/images/icons/icon-night-to-day.svg",
      link: "/contact"
    },
    {
      desc: "Sales teams on demand",
      ico: "https://influx.com/images/icons/icon-plant.svg",
      link: "/contact"
    }
  ];
  

  return (
    <div>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-20 md:px-16 md:py-28">
        <h1 className="text-center font-outfit text-5xl font-semibold md:text-[80px]">
          Customer Support, Done.
        </h1>
        <p className=" text-center text-xl md:w-1/2">
          Deliver exceptional CX while keeping things simple. Influx is the
          complete support ops solution for startups and scaleups, with{" "}
          <Link className="text-[#50aab2] hover:underline" to={"/pricing"}>
            month to month pricing
          </Link>
          .
        </p>
        <div class="mb-4 flex space-x-2 md:mt-5">
          <input
            type="email"
            placeholder="Your work email"
            class="rounded-md border border-gray-300 px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 md:px-20"
          />
          <Link class="btn flex items-center justify-center" to={"/contact"}>
            Get a quote →
          </Link>
        </div>
        <p className="text-center">
          Need a simple, low-cost solution to get started? Try Support as a
          Service or part time agents.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="pb-10 text-center font-outfit text-4xl font-bold">
          What Our Clients Are Saying
        </h2>
        <Reviews />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-10 md:px-16">
        <h1 className="text-2xl">Our Approach</h1>
        <h2 className="text-center text-4xl font-semibold md:text-5xl">
          Empathy & Customer-Centric
        </h2>
        <p className="w-1/2 text-center text-xs md:text-sm">
          Feelings create connections. Dispute resolution, average handling
          times, CSAT scores; the mechanics will always matter, and
          categorically we're the best. But deep and uncommon empathy is our
          ikigai.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
          {cardData1.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              desc={item.desc}
              ico={item.ico}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-10 md:py-20 md:px-16">
        <h1 className="font-outfit text-5xl">Get started today</h1>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
          {cardData2.map((item, index) => (
            <Card key={index} desc={item.desc} ico={item.ico} />
          ))}
        </div>
      </div>
      <div className="bg-[#f4fafc]">
        <div className="max-w-7xl mx-auto px-5 md:px-16 py-10 md:py-12 flex flex-col gap-8 md:flex-row items-center justify-around text-center">
        <div>
          <h1 className="text-5xl pb-3 font-semibold text-[#50aab2]">99.8%</h1>
          <p>Uptime in 2024</p>
        </div>
        <div>
          <h1 className="text-5xl pb-3 font-semibold text-[#50aab2]">89%</h1>
          <p>First contact resolution</p>
        </div>
        <div>
          <h1 className="text-5xl pb-3 font-semibold text-[#50aab2]">98%</h1>
          <p>CSAT/eNPS in 2024</p>
        </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-10 md:py-20 md:px-16">
        <h1 className="font-outfit text-5xl">More solutions</h1>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
          {cardData3.map((item, index) => (
            <Card key={index} desc={item.desc} ico={item.ico} link={item.link} />
          ))}
        </div>
      </div>
    

      {/* <Accordion /> */}
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
