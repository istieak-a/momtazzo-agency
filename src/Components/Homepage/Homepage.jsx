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
import ico1 from "./unique2/1.png";
import ico2 from "./unique2/2.png";
import ico3 from "./unique2/3.png";
import ico4 from "./unique2/4.png";
import ico5 from "./unique2/5.png";
import ico6 from "./unique2/6.png";

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
      url: "/why-outsource/reduce-cost",
    },
    {
      title: "Increase Quality & Efficiency",
      ico: increaseQuality,
      desc: "Remote staffing solutions rectify skills shortages and improve internal processes by accessing global talent pools.",
      btn: "Build your team",
      url: "/why-outsource/increase-quality-efficiency",
    },
    {
      title: "Scale Faster",
      ico: scaleFast,
      desc: "Tailor your offshore operations to help scale quickly, meet demand, combat rising labor costs and access specialty talent all without the overheads.",
      btn: "Scale my business",
      url: "/why-outsource/scale-fast",
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
      title: "5 Years Of Experience",
      desc: "With 5 years of BPM experience, we lead in providing top offshore employees. Serving clients in the USA, UK, Australia and Canada. We deliver outstanding support and efficiency for your business. ",
      ico: verify,
    },
    {
      title: "Speed to Hire",
      desc: "Instantly scale your business with an employee who can quickly launch in your business and make an impact today.",
      ico: contact,
    },
    {
      title: "Diverse Talent",
      desc: "Our offshore employees provide a range of services tailored to client needs, including admin support, marketing, sales and customer service. We hire top talent for seamless integration and business success. ",
      ico: people,
    },
    {
      title: "Extensive Screening & Vetting",
      desc: "All offshore are vetted, FBI-grade background checked and undergo extensive personality profiling to ensure you receive the quality and qualified professional.",
      ico: contact,
    },
    //
    {
      title: "All-Inclusive Pricing",
      desc: "Pay one flat rate per virtual assistant and let us handle the rest. We provide competitive medical benefits, insurance and paid time off in addition to handling the entire recruitment, interview and onboarding process.",
      ico: card,
    },
    {
      title: "Standardized Work Environment",
      desc: "Montazzo offers modern fully equipped offices with high-speed internet and advanced IT infrastucture ensuring productivity, security and seamless integration for exceptional performance. ",
      ico: globe,
    },
  ];

  const unique2 = [
    {
      title:
        "13 State-of-the-art locations and facilities strategically placed for recruitment",
      ico: ico1,
    },
    {
      title: "30,664 Square meters of office space",
      ico: ico2,
    },
    {
      title: "217,000+ Screened candidates ready for employment",
      ico: ico3,
    },
    {
      title: "70+ Experienced local recruiters",
      ico: ico4,
    },
    {
      title: "60+ IT workers for 24/7 support",
      ico: ico5,
    },
    {
      title: "185+ HR & operations staff to support you",
      ico: ico6,
    },
  ];

  return (
    <div>
      <div className=" bg-gradient-to-br from-top-left to-bottom-right px-8 py-10 md:px-16 ">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 md:flex-row md:gap-20">
          <div className="pe-5 md:w-[60%] md:pe-0">
            <h1 className="font-dmsans text-4xl md:text-5xl">
              Hire full-time outsourced teams in India.{" "}
            </h1>
            <h2 className="pt-2 font-dmsans text-5xl md:text-7xl font-[800]">
              Ready to work in as little as two weeks
            </h2>
            <p className="pt-5">
              Achieve unparalleled, sustainable growth while maintaining
              complete operational control.
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
          <div className="overflow-hidden rounded-lg shadow-2xl md:w-[60%]">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/973150201?badge=0&autopause=0&player_id=0&app_id=58479"
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

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-8 py-10 md:grid-cols-3 md:px-16">
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

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-10 md:py-32 md:px-16">
        <h1 className="text-center font-sans text-5xl font-[500]">
        Leverage big-business infrastructure
        </h1>
        <p className="text-center font-dmsans text-xl">No matter the size of your business, you gain access to our big-business outsourced infrastructure.</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {unique2.map((item, index) => {
            return (
              <Card
                key={index}
                desc={item.title}
                ico={item.ico}
              />
            );
          })}
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

      <div className="mx-5  bg-[#547087] px-8 py-10 md:mx-0">
        <div className="mx-auto flex max-w-7xl flex-col gap-10  md:flex-row-reverse md:p-16">
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
                <h2>INDIA</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-5 md:w-[40%]">
            <h2 className="font-outfit text-4xl text-white md:text-5xl ">
              Businesses who engage in business process outsourcing{" "}
              <span className="font-semibold">
                (BPO) save 70% on employment costs.
              </span>
            </h2>
            {/* <Link className="btn">Learn how your business can save</Link> */}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 md:gap-10 md:px-16 md:py-20">
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

      <div className="bg-[#f8f8f8] py-10">
        <div className=" mx-auto max-w-7xl p-4">
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-semibold">Us vs Them</h1>
            <p className="mt-3 text-zinc-600">
              Montazzo is miles ahead of the competition
            </p>
          </div>
          <div className="overflow-x-auto text-lg">
            <table className="min-w-full border border-zinc-300">
              <thead>
                <tr>
                  <th className="w-1/2"></th>
                  <th className="w-1/4 bg-blue-500 py-2 text-white">
                    Montazzo
                  </th>
                  <th className="w-1/4 bg-zinc-100 py-2 text-zinc-700">THEM</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  title="No Salary Markup"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow
                  title="Fast Recruitment process"
                  myOutDesk="✔"
                  them="✔"
                />
                <TableRow
                  title="Direct Hire Facilitation"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow
                  title="Compliance Facilitation"
                  myOutDesk="✔"
                  them="✔"
                />
                <TableRow
                  title="Cost Transparency"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow
                  title="Thorough Testing"
                  myOutDesk="✔"
                  them="✔"
                />
                <TableRow
                  title="Thorough Background Checks"
                  myOutDesk="✔"
                  them="✔"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>

     
      {/* <div className="mx-5  bg-[#547087] px-8 py-10 md:mx-0">
        <div className="mx-auto flex max-w-7xl flex-col gap-10  md:flex-row-reverse md:p-16">
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
                <h2>INDIA</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-5 md:w-[40%]">
            <h2 className="font-outfit text-4xl text-white md:text-5xl ">
              Businesses who engage in business process outsourcing{" "}
              <span className="font-semibold">
                (BPO) save 70% on employment costs.
              </span>
            </h2>
            <Link className="btn">Learn how your business can save</Link>
          </div>
        </div>
      </div> */}
      {/* <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 md:gap-10 md:px-16 md:py-20">
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
      </div> */}

      {/* <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 px-5 py-20 md:flex-row md:px-24 md:py-36">
          <p className="border-t-4 border-[#61b2ba] pt-5 font-outfit text-4xl md:me-10 md:w-1/2 md:text-5xl">
            Our model saves our clients{" "}
            <span className="text-[#61b2ba]">up to 70%</span> in traditional
            hiring costs.
          </p>
          <div className="md:w-1/2">
            <h1 className="font-dmsans text-xl font-semibold">
              We provide competitive compensation to our virtual assistants, as
              well as handle:
            </h1>
            <ul>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Human resource concerns
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Paid time-off
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Benefits
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Insurance
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Equipment
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-10 md:px-16">
        <h1 className="text-center font-outfit text-4xl font-[500]">
          What sets us apart
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {unique.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                desc={item.desc}
                ico={item.ico}
              />
            );
          })}
        </div>
      </div>

      {/* <div className="flex flex-col items-center gap-20 bg-zinc-50 py-20">
        <h2 className="font-outfit text-4xl font-bold text-zinc-800 md:text-6xl">
          How Offshoring Works
        </h2>
        <div className="mb-5 flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 rounded-full bg-gradient-to-b from-[#EDEEEF] to-[#F5F6F6] p-20">
              <div className="top-17 absolute left-16 flex h-7 w-7 items-center justify-center rounded-full bg-[#50aab2] text-white">
                1.
              </div>
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <img
                  src="https://mod-cdn.myoutdesk.com/wp-content/uploads/2023/07/button-cursor.png"
                  alt="Start Your Free Consultation"
                />
              </div>
            </div>
            <p className="pt-10 text-xl font-semibold text-zinc-800">
              Start Your Free Consultation
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 rounded-full bg-gradient-to-b from-[#EDEEEF] to-[#F5F6F6] p-20">
              <div className="top-17 absolute left-16 flex h-7 w-7 items-center justify-center rounded-full bg-[#50aab2] text-white">
                2.
              </div>
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <img
                  src="https://mod-cdn.myoutdesk.com/wp-content/uploads/2023/07/comment-text-multiple-outline.png"
                  alt="Meet With Our Team"
                />
              </div>
            </div>
            <p className="pt-10 text-xl font-semibold text-zinc-800">
              Meet With Our Team
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 rounded-full bg-gradient-to-b from-[#EDEEEF] to-[#F5F6F6] p-20">
              <div className="top-17 absolute left-16 flex h-7 w-7 items-center justify-center rounded-full bg-[#50aab2] text-white">
                3.
              </div>
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <img
                  src="https://mod-cdn.myoutdesk.com/wp-content/uploads/2023/07/account-check-outline.png"
                  alt="HAllYour Virtual Assistant"
                />
              </div>
            </div>
            <p className="pt-10 text-xl font-semibold text-zinc-800">
              Hire Your Offshore Professional
            </p>
          </div>
        </div>
        <Link to="/contact" className="btn">
          Book a strategy Call
        </Link>
      </div> */}

      <div className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="pb-10 text-center font-outfit text-4xl font-bold">
          What Our Clients Are Saying
        </h2>
        <Reviews />
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

const TableRow = ({ title, myOutDesk, them }) => {
  const tableCellClasses = "py-2 px-4 text-center";
  const greenTextClasses = "text-green-500";
  const redTextClasses = "text-red-500";
  const borderClasses = "border-t border-zinc-300";

  return (
    <tr className={borderClasses}>
      <td className={`${tableCellClasses}`}>{title}</td>
      <td className={`${tableCellClasses} ${greenTextClasses}`}>{myOutDesk}</td>
      <td className={`${tableCellClasses} ${redTextClasses}`}>{them}</td>
    </tr>
  );
};

export default Homepage;
