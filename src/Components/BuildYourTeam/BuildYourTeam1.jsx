import React from "react";
import HeroBanner4 from "../Sections/HeroBanner4/HeroBanner4";
import JobCard from "../JobCard/JobCard";
import BlogCard from "../BlogCard/BlogCard";
import Reviews from "../Reviews/Reviews";

const BuildYourTeam = () => {
  const heroBanner = {
    title: " ",
    desc: "Unlock the full potential of outsourcing with ease and discover the perfect fit for your organization. Our comprehensive range of offshore roles can help streamline your operations and make outsourcing simple.",
    img: "https://www.microsourcing.com/hubfs/Administrative%20Assistant_Desktop.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Admin%20Assistant/MS%20-%20Header%20Banner%20M-%20Admin%20Assistant.jpg",
  };
  const jobData = [
    {
      title: "Accountant",
      url: "/build-your-team/accountant",
    },
    {
      title: "Administrative assistant",
      url: "/build-your-team/administrative-assistant",
    },
    {
      title: "Collection specialist",
      url: "/build-your-team/collection-specialist",
    },
    {
      title: "Customer service representative",
      url: "/build-your-team/customer-service-rep",
    },
    {
      title: "Data analyst",
      url: "/build-your-team/data-analyst",
    },
    {
      title: "Data entry specialist",
      url: "/build-your-team/data-entry-specialist",
    },
    {
      title: "Digital marketing specialist",
      url: "/build-your-team/digital-marketing-specialist",
    },
    {
      title: "Enrollment Administrator",
      url: "/build-your-team/enrollment-administrator",
    },
    {
      title: "Executive assistant",
      url: "/build-your-team/executive-assistant",
    },
    {
      title: "Graphic designer",
      url: "/build-your-team/graphic-designer",
    },
    {
      title: "HR specialist",
      url: "/build-your-team/hr-specialist",
    },
    {
      title: "Logistics coordinator",
      url: "/build-your-team/logistics-coordinator",
    },
    {
      title: "Marketing specialist",
      url: "/build-your-team/marketing-specialist",
    },
    {
      title: "Medical billing specialist",
      url: "/build-your-team/medical-billing-specialist",
    },
    {
      title: "Order processing specialist",
      url: "/build-your-team/order-processing-specialist",
    },
    {
      title: "Payroll specialist",
      url: "/build-your-team/payroll-specialist",
    },
    {
      title: "PPC & SEM Specialist",
      url: "/build-your-team/ppc-sem-specialist",
    },
    {
      title: "Quality assurance specialist",
      url: "/build-your-team/quality-assurance-specialist",
    },
    {
      title: "Real estate assistant",
      url: "/build-your-team/real-estate-assistant",
    },
    {
      title: "Reservation booking agent",
      url: "/build-your-team/reservation-booking-agent",
    },
    {
      title: "SEO Specialist",
      url: "/build-your-team/seo-specialist",
    },
    {
      title: "Sales support",
      url: "/build-your-team/sales-support",
    },
    {
      title: "Social media specialist",
      url: "/build-your-team/social-media-specialist",
    },
    {
      title: "Software developer",
      url: "/build-your-team/software-developer",
    },
    {
      title: "Talent acquisition specialist",
      url: "/build-your-team/talent-acquisition-specialist",
    },
    {
      title: "Video editor",
      url: "/build-your-team/video-editor",
    },
    {
      title: "Virtual Assistant",
      url: "/build-your-team/virtual-assistant",
    },
    {
      title: "Web developer",
      url: "/build-your-team/web-developer",
    },
  ];
  const caseStudies = [
    {
      title:
        "Marketplace unlocks $1.6 million in new revenue with on demand sales agents",
      desc: "A leading US-based industrial firm hired Montazzo in July 2022 to help them grow their two-sided marketplace. They needed to sign up more vendors, and close more sales from customers.",
      img: "https://influx.com/blog/uploads/blog-thumbnail-images.png",
      link: "/case-studies/case-study-1",
    },
    {
      title:
        "Ticketing app with 5 million users clears backlog and maintains 86% CSAT on 6,000+ tickets/month",
      desc: "See how a ticketing app partnered with Montazzo to clear the backlog and maintain inbox zero on over 6,000 ticket each month.",
      img: "https://influx.com/blog/uploads/case-studies-1-1.png",
      link: "/case-studies/case-study-2",
    },
    {
      title: "Handling 2000 calls per week while achieving a 94% CSAT",
      desc: "A growing healthcare marketplace platform struggles to keep up with increased call volumes and unpredictable spikes.",
      img: "https://influx.com/blog/uploads/case-studies-2.png",
      link: "/case-studies/case-study-3",
    },
  ];
  
  
  return (
    <div>
      <div>
        <HeroBanner4
          title={heroBanner.title}
          img={heroBanner.img}
          imgRes={heroBanner.imgRes}
          desc={heroBanner.desc}
        />
      </div>
      <div className="flex flex-col items-center justify-center py-10 gap-10 px-5 md:px-16 max-w-7xl mx-auto">
        <div className="bg-[#425968] w-full text-center text-white py-7 rounded-lg">
            <h1 className="font-outfit text-4xl ">Select Your Job Profile</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 text-center">
            {jobData.map((job, index) => (
                <JobCard key={index} title={job.title} link={job.url} />
            ))}
        </div>
      </div>
      {/* <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 bg-[#f4fafc] px-5 py-10 md:px-16 md:py-20">
        <h1 className="font-outfit text-5xl">Montazzo in Action</h1>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-3 md:px-16">
          {caseStudies.map((caseStudy, index) => (
            <BlogCard
              key={index}
              title={caseStudy.title}
              desc={caseStudy.desc}
              img={caseStudy.img}
              link={caseStudy.link}
            />
          ))}
        </div>
      </div> */}
      <div className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="pb-10 text-center font-outfit text-5xl">
          Validated by experts, valued by customers
        </h2>
        <Reviews />
      </div>
    </div>
  );
};

export default BuildYourTeam;
