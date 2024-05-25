import React from "react";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

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
          desc: "When your offshore team cares about the outcomes of their work, they’ll work harder and commit to continuous improvement.",
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
          desc: "It’s your team. You have full visibility and control, without having to worry about facilities, operations and regulations.",
          thumb: "#",
        },
        {
          title: "The Keys to Success",
          desc: "As the largest managed operations offshoring provider in the Philippines, we’ve learned a lot. Here are some tips to ensure your success.",
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
    },
    {
      title: "Resources",
    },
  ];
  const [isDropDownActive, setIsDropDownActive] = React.useState(false);
  return (
    <nav className="flex justify-between px-5 md:px-20 py-4 shadow-xl sticky">
      <img className="w-[200px]" src={logo} alt="logo" />
      <div className="flex items-center gap-5">
        {navData.map((item, index) => {
          return (
            <h2
              key={index}
              className="font-outfit text-lg flex items-center gap-1 hover:text-orange-500 cursor-pointer"
              onMouseEnter={() => setIsDropDownActive(true)}
              onMouseLeave={() => setIsDropDownActive(false)}
            >
              {item.title}
              <IoIosArrowDown />{" "}
            </h2>
          );
          
        })}
      </div>
    </nav>
  );
};

export default Navbar;
