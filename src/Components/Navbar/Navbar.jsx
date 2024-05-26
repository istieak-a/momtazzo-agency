import React from "react";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { LiaIndustrySolid } from "react-icons/lia";
import "./Navbar.css";

const Navbar = () => {
  const navData = [
    {
      title: "Why Outsource",
      subitems: [
        {
          heading: "Reduce Cost",
          url: "/reduce-cost",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, perspiciatis!",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/large-enterprises-menu-img.jpg?width=624&height=345&name=large-enterprises-menu-img.jpg",
        },
        {
          heading: "Scale Fast",
          url: "/scale-fast",
          desc: "Reap the benefits of big-business infrastructure and proven best-practices without all the usual hassle and expenditure.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/small-businesses-menu-img.jpg?width=624&height=345&name=small-businesses-menu-img.jpg#",
        },
        {
          heading: "Why MicroSourcing?",
          url: "/why-microsourcing",
          desc: "When you partner with the strongest provider, you get the best outcome, and no hidden costs or unforeseen risks.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/Why_20MicroSourcing.jpg?width=624&height=345&name=Why_20MicroSourcing.jpg",
        },
        {
          heading: "Increase Quality & Efficiency",
          url: "/increase-quality-efficiency",
          desc: "When your offshore team cares about the outcomes of their work, they'll work harder and commit to continuous improvement.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/increase-quality-menu-img.jpg?width=624&height=345&name=increase-quality-menu-img.jpg",
        },
        {
          heading: "Why The Philippines?",
          url: "/why-philippines",
          desc: "Its low living costs and first-class education system are just the beginning. See why the Philippines is the best offshoring destination.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/why-the-philippines-menu-img.jpg?width=624&height=345&name=why-the-philippines-menu-img.jpg",
        },
      ],
    },
    {
      title: "How It Works",
      subitems: [
        {
          heading: "How Offshoring Works",
          url: "/how-offshoring-works",
          desc: "It's your team. You have full visibility and control, without having to worry about facilities, operations and regulations.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/how-offshoring-works-menu-img.jpg?width=624&height=345&name=how-offshoring-works-menu-img.jpg",
        },
        {
          heading: "The Keys to Success",
          url: "/keys-to-success",
          desc: "As the largest managed operations offshoring provider in the Philippines, we've learned a lot. Here are some tips to ensure your success.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/keys-to-success-menu-img.jpg",
        },
        {
          heading: "Is It For You?",
          url: "/is-it-for-you",
          desc: "Learn your offshoring options and explore the benefits of Managed Operations over less effective models.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/Outsourcing_20Models.jpg",
        },
        {
          heading: "Offshore Staffing",
          url: "/offshore-staffing",
          desc: "Offshore staffing has a bevy of benefits, not least the potential for up to 70% cost savings.Managed Operations over less effective models.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/offshore-staffing-menu-img.jpg?width=624&height=345&name=offshore-staffing-menu-img.jpg",
        },
      ],
    },
    {
      title: "Build Your Team",
      categories: [
        {
          title: "Teams",
          ico: <RiTeamFill />,
          heading: "Select Your Team",
          desc: "Outsourcing an entire department or division in your business can lead to major efficiency gains. For successful team structures, local market recruitment advice and suggested staff to leader ratios, select one of the common teams that can be easily outsourced to the Philippines below.",
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
        {
          title: "Industry",
          ico: <LiaIndustrySolid />,
          heading: "Select Your Industry",
          desc: "Outsourcing is a very versatile strategy suitable for businesses of all shapes and sizes. Below are common industries that have successfully implemented an offshore model. Get local insights relevant to your area of specialization, learn what others have done in your industry and leverage their experience.",
          subitems: [
            {
              title: "Education",
              url: "/industries/education",
            },
            {
              title: "Engineering & Construction",
              url: "/industries/engineering-construction",
            },
            {
              title: "Financial Services",
              url: "/industries/financial-services",
            },
            {
              title: "Healthcare",
              url: "/industries/healthcare",
            },
            {
              title: "Hospitality & Tourism",
              url: "/industries/hospitality-tourism",
            },
            {
              title: "Information Technology",
              url: "/industries/information-technology",
            },
            {
              title: "Legal Services",
              url: "/industries/legal-services",
            },
            {
              title: "Logistics",
              url: "/industries/logistics",
            },
            {
              title: "Media & Communications",
              url: "/industries/media-communications",
            },
            {
              title: "Professional Services",
              url: "/industries/professional-services",
            },
            {
              title: "Real Estate",
              url: "/industries/real-estate",
            },
            {
              title: "Retail & eCommerce",
              url: "/industries/retail-ecommerce",
            },
            {
              title: "Telecommunications",
              url: "/industries/telecommunications",
            },
            {
              title: "Utilities",
              url: "/industries/utilities",
            },
            {
              title: "Wholesale Trade",
              url: "/industries/wholesale-trade",
            },
          ],
        },
      ],
    },
  ];

  const [isDropDownActive, setIsDropDownActive] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState(0); // Default to the first category
  const dropdownTimeout = React.useRef(null);

  const handleMouseEnter = (index) => {
    setIsDropDownActive(true);
    setActiveDropdown(index);
    clearTimeout(dropdownTimeout.current);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropDownActive(false);
      setActiveDropdown(null);
      setActiveCategory(0); // Reset to the first category when dropdown is closed
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

  return (
    <nav className="relative flex justify-between px-5 py-4 shadow-xl md:px-20">
      <Link to={"/"}>
        <img className="w-[200px]" src={logo} alt="logo" />
      </Link>
      <div className="flex items-center gap-5">
        {navData.map((item, index) => (
          <div key={index}>
            <h2
              className="flex cursor-pointer items-center gap-1 font-outfit text-lg hover:text-orange-500"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.title}
              <IoIosArrowDown />
            </h2>
            {isDropDownActive && activeDropdown === index && (
              <div
                className="absolute left-0 z-50 mt-10 flex  bg-white px-5 py-5"
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
                          activeCategory === categoryIndex ? "bg-[#fafafa]" : ""
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
      </div>
    </nav>
  );
};

export default Navbar;
