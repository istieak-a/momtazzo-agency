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
    // {
    //   title: "Why Outsource",
    //   subitems: [
    //     {
    //       heading: "Reduce Cost",
    //       url: "/why-outsource/reduce-cost",
    //       desc: "Reduce costs and increase profits without compromise. All while accessing a deeper, wider talent pool.",
    //       thumb:
    //         "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/large-enterprises-menu-img.jpg?width=624&height=345&name=large-enterprises-menu-img.jpg",
    //     },
    //     {
    //       heading: "Scale Fast",
    //       url: "/why-outsource/scale-fast",
    //       desc: "Reap the benefits of big-business infrastructure and proven best-practices without all the usual hassle and expenditure.",
    //       thumb:
    //         "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/small-businesses-menu-img.jpg?width=624&height=345&name=small-businesses-menu-img.jpg#",
    //     },
    //     {
    //       heading: "Why Montazzo?",
    //       url: "/why-outsource/why-montazzo",
    //       desc: "When you partner with the strongest provider, you get the best outcome, and no hidden costs or unforeseen risks.",
    //       thumb:
    //         "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/Why_20MicroSourcing.jpg?width=624&height=345&name=Why_20MicroSourcing.jpg",
    //     },
    //     {
    //       heading: "Increase Quality & Efficiency",
    //       url: "/why-outsource/increase-quality-efficiency",
    //       desc: "When your offshore team cares about the outcomes of their work, they'll work harder and commit to continuous improvement.",
    //       thumb:
    //         "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/increase-quality-menu-img.jpg?width=624&height=345&name=increase-quality-menu-img.jpg",
    //     },
    //     {
    //       heading: "Why India?",
    //       url: "/why-outsource/why-india",
    //       desc: "Its low living costs and first-class education system are just the beginning. See why the India is the best offshoring destination.",
    //       thumb:
    //         "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/why-the-philippines-menu-img.jpg?width=624&height=345&name=why-the-philippines-menu-img.jpg",
    //     },
    //   ],
    // },
    // {
    //   title: "How It Works",
    //   subitems: [
    //     {
    //       heading: "How Offshoring Works",
    //       url: "/how-it-works/how-offshoring-works",
    //       desc: "It's your team. You have full visibility and control, without having to worry about facilities, operations and regulations.",
    //       thumb: 'https://i.ibb.co/mBmRkjf/man.webp'
    //     },
    //     // {
    //     //   heading: "The Keys to Success",
    //     //   url: "/how-it-works/the-keys-to-success",
    //     //   desc: "As the largest managed operations offshoring provider in the Philippines, we've learned a lot. Here are some tips to ensure your success.",
    //     //   thumb:
    //     //     "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/keys-to-success-menu-img.jpg",
    //     // },
    //     {
    //       heading: "Is It For You?",
    //       url: "/how-it-works/is-it-for-you",
    //       desc: "Learn your offshoring options and explore the benefits of Managed Operations over less effective models.",
    //       thumb:'https://i.ibb.co/WfnLd6j/women.webp'
    //     },
    //     // {
    //     //   heading: "Offshore Staffing",
    //     //   url: "/how-it-works/offshore-staffing",
    //     //   desc: "Offshore staffing has a bevy of benefits, not least the potential for up to 70% cost savings.Managed Operations over less effective models.",
    //     //   thumb:
    //     //     "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/offshore-staffing-menu-img.jpg?width=624&height=345&name=offshore-staffing-menu-img.jpg",
    //     // },
    //   ],
    // },
    {
      title: "Build Your Team",
      categories: [
        {
          title: "Jobs",
          ico: <GrContactInfo />,
          heading: "Select Your Job Role",
          desc: "Unlock the full potential of outsourcing with ease and discover the perfect fit for your organization. Our comprehensive range of offshore roles can help streamline your operations and make outsourcing simple.",
          subitems: [
            {
              title: "Accountant",
              url: "/job-roles/accountant",
            },
            {
              title: "Administrative assistant",
              url: "/job-roles/administrative-assistant",
            },
            {
              title: "Collection specialist",
              url: "/job-roles/collection-specialist",
            },
            {
              title: "Customer service rep",
              url: "/job-roles/customer-service-rep",
            },
            {
              title: "Data analyst",
              url: "/job-roles/data-analyst",
            },
            {
              title: "Data entry specialist",
              url: "/job-roles/data-entry-specialist",
            },
            {
              title: "Digital marketing specialist",
              url: "/job-roles/digital-marketing-specialist",
            },
            {
              title: "Enrollment Administrator",
              url: "/job-roles/enrollment-administrator",
            },
            {
              title: "Executive assistant",
              url: "/job-roles/executive-assistant",
            },
            {
              title: "Graphic designer",
              url: "/job-roles/graphic-designer",
            },
            {
              title: "HR specialist",
              url: "/job-roles/hr-specialist",
            },

            {
              title: "Logistics coordinator",
              url: "/job-roles/logistics-coordinator",
            },
            {
              title: "Marketing specialist",
              url: "/job-roles/marketing-specialist",
            },
            {
              title: "Medical billing specialist",
              url: "/job-roles/medical-billing-specialist",
            },
            {
              title: "Order processing specialist",
              url: "/job-roles/order-processing-specialist",
            },
            {
              title: "Payroll specialist",
              url: "/job-roles/payroll-specialist",
            },
            {
              title: "PPC & SEM Specialist",
              url: "/job-roles/ppc-sem-specialist",
            },
            {
              title: "Quality assurance specialist",
              url: "/job-roles/quality-assurance-specialist",
            },
            {
              title: "Real estate assistant",
              url: "/job-roles/real-estate-assistant",
            },
            {
              title: "Reservation booking agent",
              url: "/job-roles/reservation-booking-agent",
            },
            {
              title: "SEO Specialist",
              url: "/job-roles/seo-specialist",
            },
            {
              title: "Sales support",
              url: "/job-roles/sales-support",
            },
            {
              title: "Social media specialist",
              url: "/job-roles/social-media-specialist",
            },
            {
              title: "Software developer",
              url: "/job-roles/software-developer",
            },
            {
              title: "Talent acquisition specialist",
              url: "/job-roles/talent-acquisition-specialist",
            },
            {
              title: "Video editor",
              url: "/job-roles/video-editor",
            },
            {
              title: "Virtual Assistant",
              url: "/job-roles/virtual-assistant",
            },
            {
              title: "Web developer",
              url: "/job-roles/web-developer",
            },
          ],
        },
        {
          title: "Teams",
          ico: <RiTeamFill />,
          heading: "Select Your Team",
          desc: "Outsourcing an entire department or division in your business can lead to major efficiency gains. For successful team structures, local market recruitment advice and suggested staff to leader ratios, select one of the common teams that can be easily outsourced to the India below.",
          subitems: [
            {
              title: "Accounting",
              url: "/teams/accounting",
            },
            {
              title: "Administration Support",
              url: "/teams/administration-support",
            },
            {
              title: "Creative Services",
              url: "/teams/creative-services",
            },
            {
              title: "Customer Service",
              url: "/teams/customer-service",
            },
            {
              title: "Data Management",
              url: "/teams/data-management",
            },
            {
              title: "Finance",
              url: "/teams/finance",
            },
            {
              title: "Health Information Management",
              url: "/teams/health-information-management",
            },
            {
              title: "HR Services",
              url: "/teams/hr-services",
            },
            {
              title: "Insurance",
              url: "/teams/insurance",
            },
            {
              title: "Marketing",
              url: "/teams/marketing",
            },
            {
              title: "Operations",
              url: "/teams/operations",
            },
            {
              title: "Quality Assurance",
              url: "/teams/quality-assurance",
            },
            {
              title: "Sales Support",
              url: "/teams/sales-support",
            },
            {
              title: "Technical Support",
              url: "/teams/technical-support",
            },
          ],
        },
        // {
        //   title: "Industry",
        //   ico: <LiaIndustrySolid />,
        //   heading: "Select Your Industry",
        //   desc: "Outsourcing is a very versatile strategy suitable for businesses of all shapes and sizes. Below are common industries that have successfully implemented an offshore model. Get local insights relevant to your area of specialization, learn what others have done in your industry and leverage their experience.",
        //   subitems: [
        //     {
        //       title: "Education",
        //       url: "/industries/education",
        //     },
        //     {
        //       title: "Engineering & Construction",
        //       url: "/industries/engineering-construction",
        //     },
        //     {
        //       title: "Financial Services",
        //       url: "/industries/financial-services",
        //     },
        //     {
        //       title: "Healthcare",
        //       url: "/industries/healthcare",
        //     },
        //     {
        //       title: "Hospitality & Tourism",
        //       url: "/industries/hospitality-tourism",
        //     },
        //     {
        //       title: "Information Technology",
        //       url: "/industries/information-technology",
        //     },
        //     {
        //       title: "Legal Services",
        //       url: "/industries/legal-services",
        //     },
        //     {
        //       title: "Logistics",
        //       url: "/industries/logistics",
        //     },
        //     {
        //       title: "Media & Communications",
        //       url: "/industries/media-communications",
        //     },
        //     {
        //       title: "Professional Services",
        //       url: "/industries/professional-services",
        //     },
        //     {
        //       title: "Real Estate",
        //       url: "/industries/real-estate",
        //     },
        //     {
        //       title: "Retail & eCommerce",
        //       url: "/industries/retail-ecommerce",
        //     },
        //     {
        //       title: "Telecommunications",
        //       url: "/industries/telecommunications",
        //     },
        //     {
        //       title: "Utilities",
        //       url: "/industries/utilities",
        //     },
        //     {
        //       title: "Wholesale Trade",
        //       url: "/industries/wholesale-trade",
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   title: "Learn",
    //   subitems: [
    //     {
    //       heading: "About",
    //       url: "/about",
    //     },
    //     {
    //       heading: "Blog",
    //       url: "/blog",
    //     },
    //     {
    //       heading: "Case Studies",
    //       url: "/case-studies",
    //     },
    //     {
    //       heading: "FAQs",
    //       url: "/faqs",
    //     },
    //     {
    //       heading: "News",
    //       url: "/news",
    //     },
    //     {
    //       heading: "Videos",
    //       url: "/videos",
    //     },
    //   ],
    // },
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
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to={"/"}>
          <img className="w-[220px]" src={logo} alt="logo" />
        </Link>
        <div className="hidden items-center gap-5 md:flex ">
          {/* {navData.map((item, index) => (
            <div key={index}>
              <h2
                className="flex cursor-pointer items-center gap-1 font-outfit text-[15px] hover:text-orange-500"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.title}
                <IoIosArrowDown />
              </h2>
              {isDropDownActive && activeDropdown === index && (
                <div
                  className={`absolute top-[95px] z-50 flex bg-white px-20 py-5 ${
                    activeDropdownIndex !== 3 ? "left-0" : "" // Add the 'left-0' class if the active dropdown index is not 3 (Learn)
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.categories ? (
                    <div className="flex flex-col gap-2">
                      {item.categories.map((category, categoryIndex) => (
                        <div
                          key={categoryIndex}
                          onMouseEnter={() =>
                            handleCategoryMouseEnter(categoryIndex)
                          }
                          className={`flex cursor-pointer items-center gap-2 px-10 py-2 hover:bg-[#fafafa] hover:text-[#e9892b] ${
                            activeCategory === categoryIndex
                              ? "bg-[#fafafa]"
                              : ""
                          }`}
                        >
                          <span className="flex items-center gap-2 text-xl">
                            {category.ico}
                            {category.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-5">
                      {item.subitems &&
                        item.subitems.map((subitem, subItemIndex) => (
                          <Link
                            to={subitem.url}
                            key={subItemIndex}
                            className="navdropdown-item flex w-full gap-4 rounded-lg px-2 py-2 hover:bg-[#f4fafc]"
                            onMouseEnter={handleSubItemMouseEnter}
                            onMouseLeave={handleSubItemMouseLeave}
                            onClick={handleSubItemClick}
                          >
                            {subitem.thumb ? (
                              // Design when subitem.thumb exists
                              <>
                                <img
                                  src={subitem.thumb}
                                  alt={subitem.heading}
                                  className="size-20 rounded-xl object-cover"
                                />
                                <div>
                                  <h3 className="font-outfit text-lg font-semibold">
                                    {subitem.heading}
                                  </h3>
                                  <p className="font-dmsans text-sm">
                                    {subitem.desc}
                                  </p>
                                </div>
                              </>
                            ) : (
                              // Design when subitem.thumb does not exist
                              <div>
                                <h3 className="font-outfit text-lg font-semibold">
                                  {subitem.heading}
                                </h3>
                              </div>
                            )}
                          </Link>
                        ))}
                    </div>
                  )}
                  {activeCategory !== null && item.categories && (
                    <div className="flex flex-col bg-[#fafafa] p-3">
                      <h3 className="font-outfit text-xl font-semibold">
                        {item.categories[activeCategory].heading}
                      </h3>
                      <p className="font-dmsans text-sm">
                        {item.categories[activeCategory].desc}
                      </p>
                      <div className="mt-6 grid grid-cols-3">
                        {item.categories[activeCategory].subitems.map(
                          (subitem, subItemIndex) => (
                            <Link
                              to={subitem.url}
                              key={subItemIndex}
                              className="rounded-lg p-2 hover:text-[#e9892b]"
                              onClick={handleCategorySubItemClick}
                            >
                              {subitem.title}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))} */}
          <Link to={'/'} className="link-under font-outfit text-[17px] font-[400]">Home</Link>
          <Link to={'/about'} className="link-under font-outfit text-[17px] font-[400]">About us</Link>
          <Link to={'/how-it-works'} className="link-under font-outfit text-[17px] font-[400]">How it works</Link>
          <Link to={'/data-security'} className="link-under font-outfit text-[17px] font-[400]">Data & Compliance</Link>
          
           {navData.map((item, index) => (
            <div key={index}>
              <h2
                className="flex cursor-pointer items-center gap-1 link-under font-outfit text-[17px] font-[400]"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.title}
                <IoIosArrowDown />
              </h2>
              {isDropDownActive && activeDropdown === index && (
                <div
                  className={`absolute top-[95px] z-50 flex bg-white px-20 py-5 ${
                    activeDropdownIndex !== 3 ? "left-0" : "" // Add the 'left-0' class if the active dropdown index is not 3 (Learn)
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.categories ? (
                    <div className="flex flex-col gap-2">
                      {item.categories.map((category, categoryIndex) => (
                        <div
                          key={categoryIndex}
                          onMouseEnter={() =>
                            handleCategoryMouseEnter(categoryIndex)
                          }
                          className={`flex cursor-pointer items-center gap-2 px-10 py-2 hover:bg-[#fafafa] hover:text-[#e9892b] ${
                            activeCategory === categoryIndex
                              ? "bg-[#fafafa]"
                              : ""
                          }`}
                        >
                          <span className="flex items-center gap-2 text-xl">
                            {category.ico}
                            {category.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-5">
                      {item.subitems &&
                        item.subitems.map((subitem, subItemIndex) => (
                          <Link
                            to={subitem.url}
                            key={subItemIndex}
                            className="navdropdown-item flex w-full gap-4 rounded-lg px-2 py-2 hover:bg-[#f4fafc]"
                            onMouseEnter={handleSubItemMouseEnter}
                            onMouseLeave={handleSubItemMouseLeave}
                            onClick={handleSubItemClick}
                          >
                            {subitem.thumb ? (
                              // Design when subitem.thumb exists
                              <>
                                <img
                                  src={subitem.thumb}
                                  alt={subitem.heading}
                                  className="size-20 rounded-xl object-cover"
                                />
                                <div>
                                  <h3 className="font-outfit text-lg font-semibold">
                                    {subitem.heading}
                                  </h3>
                                  <p className="font-dmsans text-sm">
                                    {subitem.desc}
                                  </p>
                                </div>
                              </>
                            ) : (
                              // Design when subitem.thumb does not exist
                              <div>
                                <h3 className="font-outfit text-lg font-semibold">
                                  {subitem.heading}
                                </h3>
                              </div>
                            )}
                          </Link>
                        ))}
                    </div>
                  )}
                  {activeCategory !== null && item.categories && (
                    <div className="flex flex-col bg-[#fafafa] p-3">
                      <h3 className="font-outfit text-xl font-semibold">
                        {item.categories[activeCategory].heading}
                      </h3>
                      <p className="font-dmsans text-sm">
                        {item.categories[activeCategory].desc}
                      </p>
                      <div className="mt-6 grid grid-cols-3">
                        {item.categories[activeCategory].subitems.map(
                          (subitem, subItemIndex) => (
                            <Link
                              to={subitem.url}
                              key={subItemIndex}
                              className="rounded-lg p-2 hover:text-[#e9892b]"
                              onClick={handleCategorySubItemClick}
                            >
                              {subitem.title}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          {/* <Link to={'/build-your-team'} className="link-under font-outfit text-[17px] font-[400]">Build your team</Link> */}


          {/* <Link
            to={"/pricing"}
            className="font-outfit text-[15px] hover:text-orange-500"
          >
            Pricing
          </Link> */}
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
