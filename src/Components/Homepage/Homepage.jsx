import React from "react";
import man from "../../assets/slider-2-slide-1-copyright.jpg";
import Button from "../Button/Button";
import "./Homepage.css";
import { FaReact } from "react-icons/fa";

const Homepage = () => {
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
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br py-20 px-8 md:px-16 md:h-screen from-top-left to-bottom-right flex flex-col md:flex-row gap-3 md:gap-20 items-start">
        <div className="font-outfit text-[43px] md:text-[86px] font-[500] pt-6 md:pt-20 uppercase leading-none">
          <h1>your</h1>
          <h1 className="relative z-30">
            website{" "}
            <img
              className="absolute bottom-1 md:bottom-3 left-[190px] md:left-[380px] w-14 md:w-24"
              src={man}
              alt="man"
            />
          </h1>
          <h1>sales are our</h1>
          <h1>priority</h1>
        </div>
        <div className="md:absolute right-[8%] bottom-[95px]">
          <p className="font-dmsans text-[15px] w-[300px] hidden md:block pb-5">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt
            explicabo.
          </p>
          <Button>More Info</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 ">
        {partners.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center py-6 px-5 border"
          >
            <img
              src={item.img}
              alt={item.name}
              className="opacity-40 hover:opacity-100 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
      <div className="px-8 py-10 md:flex md:px-16">
        <div className="font-outfit font-[500]">
          <h2 className="text-[13px] md:text-[14px]">TOP SERVICES</h2>
          <h1 className="text-[30px] leading-none md:text-[57px] md:pt-3">
            Our help makes your work productive
          </h1>
        </div>
        <div className="pt-5 flex flex-col gap-5 md:gap-12 ">
          {topServices.map((service, index) => {
            return (
              <div key={index} className="flex items-center gap-6">
                <div className="bg-[#ecf4f5] p-6 rounded-full text-4xl text-[#50aab2]">
                  {service.ico}
                </div>
                <div>
                  <h1 className="font-outfit text-[20.8px] md:text-[26px] font-[500]">
                    {service.title}
                  </h1>
                  <p className="font-dmsans text-[17px] pt-2 md:pt-4">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-5">
        <marquee direction="left" className="font-outfit font-[100] text-[100px] md:text-[200px] text-[#dfebec]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          corporis!
        </marquee>
      </div>
    </div>
  );
};

export default Homepage;
