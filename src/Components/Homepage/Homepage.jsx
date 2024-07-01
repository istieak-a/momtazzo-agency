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
import BlogCard from "../BlogCard/BlogCard";
import faqbg from "../../assets/faqbg.png";
import Faq from "react-faq-component";
import deserveBetter from "../../assets/images/deserve-better.png";
import "../HowItWorks/Howitworks.css";


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
      url: "/contact",
    },
    {
      desc: "SAAS",
      ico: "https://influx.com/images/icons/icon-rocket.svg",
      url: "/contact",
    },
    {
      desc: "Live chat",
      ico: "https://influx.com/images/icons/icon-live-chat.svg",
      url: "/contact",
    },
    {
      desc: "Enterprise call center",
      ico: "https://influx.com/images/icons/icon-call-centers.svg",
      url: "/contact",
    },
    {
      desc: "How it works",
      ico: "https://influx.com/images/icons/icon-lightbulb.svg",
      url: "/contact",
    },
    {
      desc: "Burst Coverage",
      ico: "https://influx.com/images/icons/icon-umbrella.svg",
      url: "/contact",
    },
    {
      desc: "After Hours",
      ico: "https://influx.com/images/icons/icon-night-to-day.svg",
      url: "/contact",
    },
    {
      desc: "Sales teams on demand",
      ico: "https://influx.com/images/icons/icon-plant.svg",
      url: "/contact",
    },
  ];
  const cardData4 = [
    {
      title: "Extend your team",
      desc: "Add support capacity to your business. Scale up and down as you need.",
      link: "/contact",
      ico: "https://www.datocms-assets.com/44723/1695023000-graph-icon.svg",
    },
    {
      title: "Launch a team",
      desc: "The top 1% of agents to fully manage your entire support experience.",
      link: "/contact",
      ico: "https://www.datocms-assets.com/44723/1695023040-star-icon.svg",
    },
    {
      title: "Seasonal coverage",
      desc: "Get ahead of holiday and seasonal spikes with no-commitment teams.",
      link: "/contact",
      ico: "https://www.datocms-assets.com/44723/1695022995-connect-data-icon.svg",
    },
    {
      title: "Go 24/7",
      desc: "After hours and weekends. Support your customers around the world.",
      link: "/contact",
      ico: "https://www.datocms-assets.com/44723/1695021645-24-7-cog-icon.svg",
    },
  ];
  const caseStudies = [
    {
      title:
        "Marketplace unlocks $1.6 million in new revenue with on demand sales agents",
      desc: "A leading US-based industrial firm hired Montazzo in July 2022 to help them grow their two-sided marketplace. They needed to sign up more vendors, and close more sales from customers.",
      img: "https://influx.com/blog/uploads/blog-thumbnail-images.png",
      link: "case-studies/case-study-1",
    },
    {
      title:
        "Ticketing app with 5 million users clears backlog and maintains 86% CSAT on 6,000+ tickets/month",
      desc: "See how a ticketing app partnered with Montazzo to clear the backlog and maintain inbox zero on over 6,000 ticket each month.",
      img: "https://influx.com/blog/uploads/case-studies-1-1.png",
      link: "case-studies/case-study-2",
    },
    {
      title: "Handling 2000 calls per week while achieving a 94% CSAT",
      desc: "A growing healthcare marketplace platform struggles to keep up with increased call volumes and unpredictable spikes.",
      img: "https://influx.com/blog/uploads/case-studies-2.png",
      link: "case-studies/case-study-3",
    },
  ];

  const data = {
    rows: [
      {
        title: "1. Deep dive into your goals and team structure.",
        content:
          "We take the time to understand your unique needs and goals. Our talent becomes an extension of your team, supporting your customer experience initiatives within your strategic direction, timelines and budgets.",
      },
      {
        title: "2. We design a customized solution for you.",
        content:
          "Within 1 week, we'll design a customized solution tailored to your unique needs. This includes selecting the right talent, customizing training and onboarding, and integrating with your existing processes - optimized for you.",
      },
      {
        title: "3. Review and assemble your dream team.",
        content:
          "Let us handle the screening and recruitment so you can build your dream team. We identify candidates who match your precise needs, coordinate interviews, collect your feedback, and refine the applicant pool until you land on just the right hires.",
      },
      {
        title: "4. We'll implement a dedicated training program.",
        content:
          "Our training, onboarding and assessments integrate with your processes while optimizing for scale and cultural nuance. We develop programs tailored to complement your approach.",
      },
      {
        title: "5. Go Live & schedule check-ins!",
        content:
          "Curtains Up - Your dedicated team is now fully operational. We will set up regular check-ins that work with your schedule, not ours. This ensures you have ongoing visibility into performance and can provide timely feedback based on your availability.",
      },
    ],
  };
  const styles = {
    bgColor: "transparent",
    titleTextColor: "#333",
    titleTextSize: "36px",
    rowTitleColor: "#444",
    rowTitleTextSize: "24px",
    rowContentColor: "#666",
    rowContentTextSize: "18px",
    rowContentPaddingTop: "15px",
    rowContentPaddingBottom: "15px",
    rowContentPaddingLeft: "20px",
    rowContentPaddingRight: "20px",
    arrowColor: "#333",
    transitionDuration: "0.5s",
    timingFunc: "ease",
  };

  const config = {
    animate: true,
    arrowIcon: "▼",
    expandIcon: "+",
    collapseIcon: "-",
  };

  return (
    <div>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-20 md:px-16 md:py-10">
        <h1 className="text-center font-outfit text-5xl font-semibold md:pt-8 md:text-[80px]">
          Customer Support, Done.
        </h1>
        <p className=" text-center text-xl md:w-1/2">
          Deliver exceptional CX while keeping things simple. Montazzo is the
          complete support ops solution for startups and scaleups, with month to
          month pricing.
        </p>
        <div class="mb-4 flex space-x-2 md:mt-5">
          {/* <input
            type="email"
            placeholder="Your work email"
            class="rounded-md border border-gray-300 px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 md:px-20"
          /> */}
          <Link class="btn flex items-center justify-center" to={"/contact"}>
            Contact US
          </Link>
        </div>
        {/* <p className="text-center">
          Need a simple, low-cost solution to get started? Try Support as a
          Service or part time agents.
        </p> */}
      </div>
      <div className="bg-[#f4fafc] py-10">
        <div class="mx-auto md:my-6 max-w-[864px] px-4 sm:px-6 lg:px-8">
          <div class="overflow-hidden rounded-lg shadow-2xl">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/973150201?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                title="Montazzo LLC"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-16 py-10 md:py-16 flex flex-col items-center gap-10 max-w-7xl mx-auto">
        <img
          src="https://hugoinc.com/wp-content/uploads/2023/10/success-title.svg"
          alt="title"
          className="md:w-[60%] w-[85%]"
        />
        <div className="flex gap-20 flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 items-center md:items-start md:w-[60%]">
            <h1 className="font-outfit text-3xl">You deserve better.</h1>
            <p className="w-[90%] md:w-full">
              You deserve better outcomes, insights, and conversations. You
              deserve to work with the top 1% of talent across global markets.
              You should be obsessed over, not struggling to scale or
              sacrificing quality for speed.
              <br />
              <br />
              Whether you’re a disruptive startup or an iconic brand, with Hugo
              you get more than outsourcing – you get what you deserve.
            </p>
            <Link className="btn" to="/contact">Contact Us</Link>
          </div>
          <div className="md:w-[40%]">
            <img src={deserveBetter} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-[#f4fafc]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-around gap-8 px-5 py-10 text-center md:flex-row md:px-16 md:py-12">
          <div>
            <h1 className="pb-3 text-5xl font-semibold text-[#50aab2]">
              99.8%
            </h1>
            <p>Uptime in 2024</p>
          </div>
          <div>
            <h1 className="pb-3 text-5xl font-semibold text-[#50aab2]">89%</h1>
            <p>First contact resolution</p>
          </div>
          <div>
            <h1 className="pb-3 text-5xl font-semibold text-[#50aab2]">98%</h1>
            <p>CSAT/eNPS in 2024</p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-10 md:px-16 md:py-20">
        <h1 className="font-outfit text-5xl">Get started today</h1>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
          {cardData2.map((item, index) => (
            <Card key={index} desc={item.desc} ico={item.ico} />
          ))}
        </div>
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

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 bg-[#f4fafc] px-5 py-10 md:px-16 md:py-20">
        <h1 className="font-outfit text-5xl">Montazzo in Action</h1>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-3 md:px-16">
          {caseStudies.map((caseStudy, index) => (
            <BlogCard
              key={index}
              title={caseStudy.title}
              desc={caseStudy.desc}
              img={caseStudy.img}
              link={caseStudy.link}
            />
          ))}
        </div>
      </div>

      <div className="bg-[#fff9e6]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-10 md:px-28 md:py-20">
          <h1 className="font-outfit text-5xl">How does it work?</h1>
          <p className="w-[70%] text-center text-lg md:w-1/2">
            We source, train, and assemble your new team in as little as 2
            weeks. Once you go live, we continuously work to ensure you hit
            KPIs.
          </p>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-5 py-10 md:flex-row md:px-28">
          <div className="faq-container md:w-[80%]">
            <Faq data={data} styles={styles} config={config} />
          </div>
          <div>
            <img src={faqbg} alt="" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-10 md:px-16 md:py-20">
        <h1 className="font-outfit text-5xl">Scalable solutions, on demand</h1>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
          {cardData4.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              desc={item.desc}
              ico={item.ico}
              url={item.url}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="pb-10 text-center font-outfit text-5xl">
          Validated by experts, valued by customers
        </h2>
        <Reviews />
      </div>

      {/* <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-10 md:px-16 md:py-20">
        <h1 className="font-outfit text-5xl">More solutions</h1>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
          {cardData3.map((item, index) => (
            <Card key={index} desc={item.desc} ico={item.ico} url={item.url} />
          ))}
        </div>
      </div> */}

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
