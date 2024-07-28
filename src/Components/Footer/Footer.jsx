import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import logo from "../../assets/logo2.png";
import { GrContactInfo } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";

import { LiaIndustrySolid } from "react-icons/lia";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const socialData = [
    {
      title: "Facebook",
      icon: <FaFacebookF />,
      link: "#",
    },
    {
      title: "Twitter",
      icon: <FaTwitter />,
      link: "#",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      link: "#",
    },
    {
      title: "Linkedin",
      icon: <FaLinkedinIn />,
      link: "#",
    },
  ];
  const navData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    // {
    //   title: "Case studies",
    //   link: "/case-studies",
    // },
    // {
    //   title: "Pricing",
    //   link: "/pricing",
    // },
  ];
  return (
    <div className="bg-[#07131d]">
      {/* <div className="flex bg-[#ecf4f5]">
        {socialData.map((social, index) => {
          return (
            <a
              key={index}
              href={social.link}
              target="_blank"
              className="link-border flex w-[25%] items-center justify-center gap-2 py-3 font-outfit text-[14px] font-[500] md:py-8"
            >
              {social.icon}
              {social.title}
            </a>
          );
        })}
      </div> */}
      <div className="mx-auto flex max-w-7xl flex-col justify-around gap-5 px-5 py-10 md:flex-row">
        <div className="flex flex-col items-start gap-3">
          <img className="h-20" src={logo} alt="" />

          {/* <a
            href="#"
            className="link-white mt-3 font-dmsans md:ms-4  text-[18px] text-white"
          >
            +18408412569
          </a> */}
        </div>

        <div className="text-white">
          <h1 className="font-outfit text-[18px] font-[500]">Services</h1>
          <div className="mt-4 flex flex-col items-start gap-1">
            <Link to={'/contact'} className="link-white font-dmsans text-[16px] font-[400]">
              Customer Service
            </Link>
            <Link to={'/build-your-team'} className="link-white font-dmsans text-[16px] font-[400]">
              Build your team
            </Link>
            <Link to={'/how-it-works'} className="link-white font-dmsans text-[16px] font-[400]">
              How it works
            </Link>
            <Link to={'/data-security'} className="link-white font-dmsans text-[16px] font-[400]">
              Data & Compliance
            </Link>
          </div>
        </div>

        <div className="text-white">
          <h1 className="font-outfit text-[18px] font-[500]">Quick links</h1>
          <div className="mt-4 flex flex-col items-start gap-1">
            {navData.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="link-white font-dmsans text-[16px] font-[400]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-white">
          <h1 className="font-outfit text-[18px] font-[500]">Get in touch</h1>
          <div className="mt-4 flex flex-col items-start gap-1">
            <div className="flex items-center gap-3">
              <CiLocationOn />
              <p className=" font-dmsans text-[16px] text-[#c0d1d9]">
                USA - 178 Columbus Ave <br /> New York, NY 10023 <br />
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CiLocationOn />
              <p className="font-dmsans text-[16px] text-[#c0d1d9] ">
                India - 5th floor, High street <br /> Jagatpura,
                Jaipur, India 302017
              </p>
            </div>
            <a
              href="mailto:info@gmail.com"
              className="mt-3 block font-dmsans text-[16px] text-white"
            >
              info@montazzo.com
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center bg-[#07131d] py-5">
          <p className="font-dmsans text-[16px] text-white">
            © 2024 Montazzo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
