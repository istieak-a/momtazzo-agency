import React, { useState } from "react";
import logo from "../../assets/logo-retina.png";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Services",
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
        }
      ]
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Contact Us",
      url: "/contact",
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="flex justify-between px-5 lg:px-[70px] py-5 lg:py-8 bg-none absolute w-full">
      <img className="w-[75px] lg:w-[85px]" src={logo} alt="logo" />
      <div className="text-[28px] flex lg:hidden items-center justify-center gap-4 pe-3">
        <button>
          <CiSearch />
        </button>
        <button>
          <RxHamburgerMenu />
        </button>
      </div>
      <div className="lg:flex gap-[70px] hidden">
        <ul className="flex gap-8 items-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative"
            >
              <Link
                to={item.url}
                className="text-[17px] font-outfit font-[500] hover:underline"
              >
                {item.title}
              </Link>
              {activeDropdown === index && item.submenu && (
                <ul className="absolute top-10 bg-[#0d1a24] text-white px-10 py-2 flex flex-col gap-2 font-dmsans">
                  {item.submenu.map((subitem, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-[17px] font-outfit font-[500] hover:underline"
                    >
                      <Link to={subitem.url}>{subitem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="text-[28px] flex items-center justify-center gap-8">
          <button>
            <CiSearch />
          </button>
          <button>
            <TbGridDots />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
