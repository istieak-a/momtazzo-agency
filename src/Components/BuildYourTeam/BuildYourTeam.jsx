import React from "react";
import HeroBanner4 from "../Sections/HeroBanner4/HeroBanner4";
import JobCard from "../JobCard/JobCard";

const BuildYourTeam = () => {
  const heroBanner = {
    title: "About Montazzo",
    desc: "We make it easy and affordable for businesses to build their own full-time, dedicated teams in the India.",
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
        <div className="bg-[#425968] w-full text-center text-white py-9X">
            <h1 className="font-outfit text-5xl ">Jobs</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 text-center">
            {jobData.map((job, index) => (
                <JobCard key={index} title={job.title} link={job.url} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BuildYourTeam;
