import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logoWhite from "../../assets/logo-inverse-retina.png";
import "./Footer.css";
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
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services Vertical",
      url: "/services",
      submenu: [
        {
          title: "Offshore Staffing",
          url: "/offshore-staffing",
        },
        {
          title: "B2B Lead Generation",
          url: "/b2b-lead-generation",
        },
        {
          title: "RPO",
          url: "/rpo",
        },
        {
          title: "Digital Marketing Service",
          url: "/digital-marketing-service",
        },
        {
          title: "Call Center",
          url: "/call-center",
        },
      ],
    },
    {
      title: "About Us",
      url: "/about",
    },
    {
      title: "Career",
      url: "/career",
    },
  ];
  return (
    <div>
      <div className="flex bg-[#ecf4f5]">
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
      </div>
      <div className="bg-[#07131d] py-20">
        <div>
          <img src={logoWhite} alt="" />
        </div>
        <div className="text-white">
          <h1 className="font-outfit text-[18px] font-[500]">Office</h1>
          <p className="font-dmsans text-[16px]">
            Germany — <br />
            785 15h Street, Office 478 <br />
            Berlin, De 81566
          </p>
          <a href="mailto:info@gmail.com" className="font-dmsans text-[16px]">
            info@gmail.com
          </a>
          <a href="#" className="font-dmsans text-[18px]">
            +18408412569
          </a>
        </div>
        <div>
          <h1>Links</h1>
          <a href=""></a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
