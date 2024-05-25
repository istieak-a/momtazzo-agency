import React from "react";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const sampleIcon = "https://via.placeholder.com/20"; // Sample icon URL

const Navbar = () => {
  const navData = [
    {
      title: "Why Outsource",
      subitems: [
        {
          heading: "Reduce Cost",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, perspiciatis!",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/large-enterprises-menu-img.jpg?width=624&height=345&name=large-enterprises-menu-img.jpg",
        },
        {
          heading: "Scale Fast",
          desc: "Reap the benefits of big-business infrastructure and proven best-practices without all the usual hassle and expenditure.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/small-businesses-menu-img.jpg?width=624&height=345&name=small-businesses-menu-img.jpg#",
        },
        {
          heading: "Why MicroSourcing?",
          desc: "When you partner with the strongest provider, you get the best outcome, and no hidden costs or unforeseen risks.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/Why_20MicroSourcing.jpg?width=624&height=345&name=Why_20MicroSourcing.jpg",
        },
        {
          heading: "Increase Quality & Efficiency",
          desc: "When your offshore team cares about the outcomes of their work, they'll work harder and commit to continuous improvement.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/increase-quality-menu-img.jpg?width=624&height=345&name=increase-quality-menu-img.jpg",
        },
        {
          heading: "Why The Philippines?",
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
          title: "How Offshoring Works",
          desc: "It's your team. You have full visibility and control, without having to worry about facilities, operations and regulations.",
          thumb: "#",
        },
        {
          title: "The Keys to Success",
          desc: "As the largest managed operations offshoring provider in the Philippines, we've learned a lot. Here are some tips to ensure your success.",
          thumb: "#",
        },
        {
          title: "Is It For You?",
          desc: "Learn your offshoring options and explore the benefits of Managed Operations over less effective models.",
          thumb: "#",
        },
        {
          title: "Offshore Staffing",
          desc: "Offshore staffing has a bevy of benefits, not least the potential for up to 70% cost savings.Managed Operations over less effective models.",
          thumb: "#",
        },
      ],
    },
    {
      title: "Build Your Team",
      categories: [
        {
          title: "Teams",
          heading: "Select Your Team",
          desc: "Outsourcing an entire department or division in your business can lead to major efficiency gains. For successful team structures, local market recruitment advice and suggested staff to leader ratios, select one of the common teams that can be easily outsourced to the Philippines below.",
          subitems: [
            {
              title: "Accounting",
              url: "#",
            },
            {
              title: "Administration Support",
              url: "#",
            },
            {
              title: "Creative Services",
              url: "#",
            },
            {
              title: "Customer Service",
              url: "#",
            },
            {
              title: "Data Management",
              url: "#",
            },
            {
              title: "Finance",
              url: "#",
            },
            {
              title: "Health Information Management",
              url: "#",
            },
            {
              title: "HR Services",
              url: "#",
            },
            {
              title: "Insurance",
              url: "#",
            },
            {
              title: "Marketing",
              url: "#",
            },
            {
              title: "Operations",
              url: "#",
            },
            {
              title: "Quality Assurance",
              url: "#",
            },
            {
              title: "Sales Support",
              url: "#",
            },
            {
              title: "Technical Support",
              url: "#",
            },
          ],
        },
        {
          title: "Industry",
          heading: "Select Your Industry",
          desc: "Outsourcing is a very versatile strategy suitable for businesses of all shapes and sizes. Below are common industries that have successfully implemented an offshore model. Get local insights relevant to your area of specialization, learn what others have done in your industry and leverage their experience.",
          subitems: [
            {
              title: "Education",
              url: "#",
            },
            {
              title: "Engineering & Construction",
              url: "#",
            },
            {
              title: "Financial Services",
              url: "#",
            },
            {
              title: "Healthcare",
              url: "#",
            },
            {
              title: "Hospitality & Tourism",
              url: "#",
            },
            {
              title: "Information Technology",
              url: "#",
            },
            {
              title: "Legal Services",
              url: "#",
            },
            {
              title: "Logistics",
              url: "#",
            },
            {
              title: "Media & Communications",
              url: "#",
            },
            {
              title: "Professional Services",
              url: "#",
            },
            {
              title: "Real Estate",
              url: "#",
            },
            {
              title: "Retail & eCommerce",
              url: "#",
            },
            {
              title: "Telecommunications",
              url: "#",
            },
            {
              title: "Utilities",
              url: "#",
            },
            {
              title: "Wholesale Trade",
              url: "#",
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
                className="absolute left-0 z-50 mt-10 grid w-full grid-cols-2 gap-4 bg-white px-5 py-5"
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
                        className="flex cursor-pointer items-center gap-2 p-2 hover:bg-[#f4fafc]"
                      >
                        <img src={sampleIcon} alt="icon" className="h-5 w-5" />
                        <span>{category.title}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col">
                    {item.subitems.map((subitem, subitemIndex) => (
                      <div key={subitemIndex} className="flex flex-col mb-4">
                        <h3 className="font-outfit text-xl font-semibold">
                          {subitem.heading || subitem.title}
                        </h3>
                        <p className="text-md font-dmsans">
                          {subitem.desc}
                        </p>
                        {subitem.thumb && (
                          <img
                            src={subitem.thumb}
                            alt="thumbnail"
                            className="mt-2 w-full h-auto rounded"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {activeCategory !== null && item.categories && (
                  <div className="flex flex-col">
                    <h3 className="font-outfit text-xl font-semibold">
                      {item.categories[activeCategory].heading}
                    </h3>
                    <p className="text-md font-dmsans">
                      {item.categories[activeCategory].desc}
                    </p>
                    <div className="mt-2 flex flex-col gap-2">
                      {item.categories[activeCategory].subitems.map(
                        (subitem, subItemIndex) => (
                          <Link
                            to={subitem.url}
                            key={subItemIndex}
                            className="rounded-lg p-2 hover:bg-[#f4fafc]"
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
