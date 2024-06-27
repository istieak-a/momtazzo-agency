import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import logo from "../../assets/logo2.png";
import { GrContactInfo } from "react-icons/gr";

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
      title: "Why Outsource",
      subitems: [
        {
          heading: "Reduce Cost",
          url: "/why-outsource/reduce-cost",
          desc: "Reduce costs and increase profits without compromise. All while accessing a deeper, wider talent pool.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/large-enterprises-menu-img.jpg?width=624&height=345&name=large-enterprises-menu-img.jpg",
        },
        {
          heading: "Scale Fast",
          url: "/why-outsource/scale-fast",
          desc: "Reap the benefits of big-business infrastructure and proven best-practices without all the usual hassle and expenditure.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/small-businesses-menu-img.jpg?width=624&height=345&name=small-businesses-menu-img.jpg#",
        },
        {
          heading: "Why Montazzo?",
          url: "/why-outsource/why-montazzo",
          desc: "When you partner with the strongest provider, you get the best outcome, and no hidden costs or unforeseen risks.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/Why_20MicroSourcing.jpg?width=624&height=345&name=Why_20MicroSourcing.jpg",
        },
        {
          heading: "Increase Quality & Efficiency",
          url: "/why-outsource/increase-quality-efficiency",
          desc: "When your offshore team cares about the outcomes of their work, they'll work harder and commit to continuous improvement.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/increase-quality-menu-img.jpg?width=624&height=345&name=increase-quality-menu-img.jpg",
        },
        {
          heading: "Why India?",
          url: "/why-outsource/why-india",
          desc: "Its low living costs and first-class education system are just the beginning. See why the India is the best offshoring destination.",
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
          url: "/how-it-works/how-offshoring-works",
          desc: "It's your team. You have full visibility and control, without having to worry about facilities, operations and regulations.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/how-offshoring-works-menu-img.jpg?width=624&height=345&name=how-offshoring-works-menu-img.jpg",
        },
        // {
        //   heading: "The Keys to Success",
        //   url: "/how-it-works/the-keys-to-success",
        //   desc: "As the largest managed operations offshoring provider in the Philippines, we've learned a lot. Here are some tips to ensure your success.",
        //   thumb:
        //     "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/keys-to-success-menu-img.jpg",
        // },
        {
          heading: "Is It For You?",
          url: "/how-it-works/is-it-for-you",
          desc: "Learn your offshoring options and explore the benefits of Managed Operations over less effective models.",
          thumb:
            "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/Outsourcing_20Models.jpg",
        },
        // {
        //   heading: "Offshore Staffing",
        //   url: "/how-it-works/offshore-staffing",
        //   desc: "Offshore staffing has a bevy of benefits, not least the potential for up to 70% cost savings.Managed Operations over less effective models.",
        //   thumb:
        //     "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/menu/offshore-staffing-menu-img.jpg?width=624&height=345&name=offshore-staffing-menu-img.jpg",
        // },
      ],
    },
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
    {
      title: "Learn",
      subitems: [
        {
          heading: "About",
          url: "/about",
        },
        {
          heading: "Blog",
          url: "/blog",
        },
        {
          heading: "Case Studies",
          url: "/case-studies",
        },
        {
          heading: "FAQs",
          url: "/faqs",
        },
        {
          heading: "News",
          url: "/news",
        },
        {
          heading: "Videos",
          url: "/videos",
        },
      ],
    },
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
      <div className="mx-auto  px-5 py-10 flex flex-col md:flex-row gap-5 justify-around">
        <div>
          <img className="h-20" src={logo} alt="" />
          <p className="mt-5 md:ms-4 font-dmsans text-[16px] text-[#c0d1d9]">
            USA — <br />
            178 Columbus Ave, New York <br />
            NY 10023 <br /> <br />
            India - <br />
            5th floor, High street <br />
            Jagatpura, Jaipur, India 302017
          </p>
        </div>
        <div className="text-white">
          <h1 className="font-outfit text-[18px] font-[500]">About</h1>
          <div className="mt-4 flex flex-col items-start gap-1">
            <Link
              className="link-white font-dmsans text-[16px] text-[#c0d1d9]"
              to={"/about"}
            >
              About Us
            </Link>
            <Link
              className="link-white font-dmsans text-[16px] text-[#c0d1d9]"
              to={"/pricing"}
            >
              Pricing
            </Link>
            <Link
              className="link-white font-dmsans text-[16px] text-[#c0d1d9]"
              to={"/contact"}
            >
              Contact
            </Link>
          </div>

          {/* <a
            href="mailto:info@gmail.com"
            className="mt-3 block font-dmsans text-[16px] text-white"
          >
            info@montazzo.com
          </a> */}
          {/* <a
            href="#"
            className="link-white mt-3 font-dmsans  text-[18px] text-white"
          >
            +18408412569
          </a> */}
        </div>
        <div className="text-white">
          <h1 className="font-outfit text-[18px] font-[500]">Why Outsource?</h1>
          <div className="mt-4 flex flex-col items-start gap-1">
            {navData[0].subitems.map((item, index) => {
              return (
                <Link
                  to={item.url}
                  key={index}
                  className="link-white font-dmsans text-[16px] text-[#c0d1d9]"
                >
                  {item.heading}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-outfit text-[18px] font-[500]">How it works?</h1>
          <div className="mt-4 flex flex-col items-start gap-1">
            {navData[1].subitems.map((item, index) => {
              return (
                <Link
                  to={item.url}
                  key={index}
                  className="link-white font-dmsans text-[16px] text-[#c0d1d9]"
                >
                  {item.heading}
                </Link>
              );
            })}
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
