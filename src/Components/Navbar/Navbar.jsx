import React from "react";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { LiaIndustrySolid } from "react-icons/lia";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import manImg from '../../assets/man.webp'
import womenImg from '../../assets/women.webp'

const Navbar = () => {
  const navData = [
    {
      title: "Home", 
      link: "/",
    }, 
    {
      title: "About",
      link: "/about",
    }, 
    {
      title: "How it works",
      link: "/how-it-works",
    }, 
    {
      title: "Pricing",
      link: "/pricing",
    }, 
    {
      title: "Case Study",
      link: "/case-studies",
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
  const [navToggle, setNavToggle] = React.useState(false);
  console.log(navToggle);
  const [isDropDownActive, setIsDropDownActive] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState(0); // Default to the first category
  const dropdownTimeout = React.useRef(null);
  const [activeDropdownIndex, setActiveDropdownIndex] = React.useState(null);

  const handleMouseEnter = (index) => {
    setIsDropDownActive(true);
    setActiveDropdown(index);
    setActiveDropdownIndex(index); // Set the active dropdown index
    clearTimeout(dropdownTimeout.current);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropDownActive(false);
      setActiveDropdown(null);
      setActiveCategory(0);
      setActiveDropdownIndex(null); // Reset the active dropdown index
    }, 300);
  };

  const handleCategoryMouseEnter = (index) => {
    clearTimeout(dropdownTimeout.current);
    setActiveCategory(index);
  };

  const handleSubItemMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
  };

  const handleSubItemMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropDownActive(false);
      setActiveDropdown(null);
      setActiveCategory(0); // Reset to the first category when dropdown is closed
    }, 300);
  };

  const handleSubItemClick = () => {
    setIsDropDownActive(false);
    setActiveDropdown(null);
  };

  const handleCategorySubItemClick = () => {
    setIsDropDownActive(false);
    setActiveDropdown(null);
  };
  // Framer motion animation varriants
  const toggleVariants = {
    open: {
      rotate: 90,
    },
    closed: {
      rotate: 0,
    },
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
  return (
    <nav className="px-5 py-5 shadow-xl md:px-20 relative">
      <div className="mx-auto flex max-w-7xl items-center justify-between md:justify-around">
        <Link to={"/"}>
          <img className="w-[220px]" src={logo} alt="logo" />
        </Link>
        <div className="hidden items-center gap-5 md:flex ">
          {
            navData.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="link-under font-outfit text-[18px] font-[400]"
              >
                {item.title}
              </Link>
            ))
          }
          <Link to={'/contact'} className="btn py-[5px] ms-10">Book a strategy call</Link>
        </div>
        <motion.div
          variants={toggleVariants}
          animate={navToggle ? "open" : "closed"}
          className="z-50 md:hidden"
        >
          {navToggle ? (
            <IoCloseSharp
              className="cursor-pointer text-4xl text-black"
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
              className="absolute left-0 top-0 z-40 flex min-h-screen w-full origin-top flex-col gap-[40px] bg-white"
            >
              <div className="flex h-[90px] items-center px-8">
                <img className="w-[110px]" src={logo} alt="logo" />
              </div>
              <div className="flex flex-col gap-12 px-8">
                <motion.div
                  variants={itemVariants}
                  initial="initial"
                  animate="open"
                  exit="exit"
                  className="flex flex-col gap-7 "
                >
                  {navData.map((item, index) => (
                    <div key={index} className="overflow-hidden">
                      <NavItem
                        setNavToggle={setNavToggle}
                        title={item.title}
                        subitems={item.subitems}
                        categories={item.categories}
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
                      className="flex items-center gap-4 font-outfit text-[20px] font-[500] text-black"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
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

const NavItem = ({ title, subitems, categories, setNavToggle }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div onClick={toggleExpand} className="cursor-pointer">
      <motion.div
        variants={linkVariants}
        className="flex items-center justify-between font-outfit text-xl font-[500]"
      >
        {title}
        <IoIosArrowDown
          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </motion.div>
      {isExpanded && (
        <div className="ml-4 mt-4 flex flex-col items-start gap-2">
          {subitems &&
            subitems.map((subitem, subItemIndex) => (
              <Link
                key={subItemIndex}
                to={subitem.url}
                onClick={() => setNavToggle(false)}
                className="link font-dmsans text-[16px]"
              >
                {subitem.heading}
              </Link>
            ))}
          {categories &&
            categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="ml-2 flex flex-col items-start gap-2"
              >
                <span className="font-outfit text-sm font-semibold">
                  {category.title}
                </span>
                {category.subitems.map((subitem, subItemIndex) => (
                  <Link
                    key={subItemIndex}
                    to={subitem.url}
                    onClick={() => setNavToggle(false)}
                    className="link font-dmsans text-[16px]"
                  >
                    {subitem.title}
                  </Link>
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
