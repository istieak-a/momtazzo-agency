import React, { useState } from "react";
import logo from "../../assets/logo-retina.png";
import logoWhite from "../../assets/logo-inverse-retina.png";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [navToggle, setNavToggle] = React.useState(false);
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
  const socialData = [
    {
      title: "Facebook",
      icon: <FaFacebookF />,
      link: "#",
    },
    {
      title: "Twitter",
      icon: <FaXTwitter />,
      link: "#",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      link: "#",
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (index, hasSubmenu) => {
    if (hasSubmenu) {
      setActiveDropdown(index);
      setShowDropdown(true);
      clearTimeout(timeoutId);
    }
  };

  const handleMouseLeave = (index, hasSubmenu) => {
    if (hasSubmenu) {
      const id = setTimeout(() => {
        setActiveDropdown(null);
        setShowDropdown(false);
      }, 500);
      setTimeoutId(id);
    }
  };

  const menuAnimate = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 1, 0.2, 1],
      },
    },
    exit: {
      scaleY: 0,

      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const itemVariants = {
    initial: {
      transition: {
        staggerChildren: 0.9,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };
  const toggleVariants = {
    open: {
      rotate: 90,
    },
    closed: {
      rotate: 0,
    },
  };

  return (
    <div className="flex justify-between px-5 lg:px-[70px] py-5 lg:py-8 bg-none absolute w-full">
      <Link to="/">
      <img className="w-[75px] lg:w-[85px]" src={logo} alt="logo" />
      </Link>
      <motion.div
        variants={toggleVariants}
        animate={navToggle ? "open" : "closed"}
        className="z-50 md:hidden"
      >
        {navToggle ? (
          <IoCloseSharp
            className="cursor-pointer text-4xl text-white"
            onClick={() => setNavToggle(!navToggle)}
          />
        ) : (
          <IoMenu
            className="cursor-pointer text-4xl"
            onClick={() => setNavToggle(!navToggle)}
          />
        )}
      </motion.div>
      <AnimatePresence>
        {navToggle && (
          <motion.div
            variants={menuAnimate}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute left-0 top-0 z-40 min-h-screen w-full flex flex-col gap-[70px] origin-top bg-[#16202a]"
          >
            <div className="flex h-[90px] items-center px-8">
              <img className="w-[75px]" src={logoWhite} alt="logo" />
            </div>
            <div className="flex flex-col gap-12 px-5">
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="open"
                exit="exit"
                className="flex flex-col gap-7 border-b pb-10 border-[#626161]"
              >
                {navItems.map((item, index) => (
                  <div key={index} className="overflow-hidden">
                    <NavItem
                      setNavToggle={setNavToggle}
                      title={item.title}
                      link={item.url}
                      submenu={item.submenu}
                    />
                  </div>
                ))}
              </motion.div>
              <div className="flex gap-5">
                {socialData.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-4 text-white text-[20px] font-outfit font-[500]"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="lg:flex gap-[70px] hidden">
        <ul className="flex gap-8 items-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index, !!item.submenu)}
              onMouseLeave={() => handleMouseLeave(index, !!item.submenu)}
              className="relative"
            >
              <Link to={item.url} className="item">
                {item.title}
              </Link>
              {(activeDropdown === index || showDropdown) && item.submenu && (
                <ul
                  className="absolute top-12 bg-[#0d1a24] w-[200px] border text-white px-4 py-4 flex ease-in-out duration-300 flex-col gap-4 font-dmsans"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => handleMouseLeave(index, true)}
                >
                  {item.submenu.map((subitem, subIndex) => (
                    <li key={subIndex} className="">
                      <Link className="subitem" to={subitem.url}>
                        {subitem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

const linkVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.55, 0, 0.45, 1],
    },
  },
};
const NavItem = ({ title, link, setNavToggle, submenu }) => {
  const [showSubitems, setShowSubitems] = useState(false);

  const toggleSubitems = () => {
    setShowSubitems(!showSubitems);
  };

  const subitemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <motion.div
        variants={linkVariants}
        onClick={submenu ? toggleSubitems : () => setNavToggle(false)}
      >
        <Link
          className="flex items-center gap-4 text-white text-[24px] font-outfit font-[500]"
          to={link}
        >
          {title} {submenu && <HiArrowLongRight />}
        </Link>
      </motion.div>
      <motion.div
        variants={subitemVariants}
        initial="closed"
        animate={showSubitems ? "open" : "closed"}
      >
        {showSubitems && submenu && (
          <div className="ml-6">
            {submenu.map((subitem, subIndex) => (
              <Link
                key={subIndex}
                className="block text-white text-[17px] font-dmsans font-[400] my-3"
                to={subitem.url}
                onClick={() => setNavToggle(false)}
              >
                {subitem.title}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

