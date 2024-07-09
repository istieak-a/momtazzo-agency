import React, { useEffect } from "react";
import hero from "../../assets/banner-img/M_Web_Why-MicroSourcing_Banner_202307.jpg";
import heroRes from "../../assets/banner-img/M_Mobile_Why-MicroSourcing_Banner_202307.jpg";
import HeroBanner4 from "../Sections/HeroBanner4/HeroBanner4";
import { Link } from "react-router-dom";
import GuranteePricing from "../Sections/GuranteePricing/GuranteePricing";
import Reviews from "../Reviews/Reviews";
import storyImg from "../../assets/images/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import fbiImg from "../../assets/images/towfiqu-barbhuiya-em5w9_xj3uU-unsplash.jpg";
import dataSec from "../../assets/images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg";
import missionImg from "../../assets/icons/mission.png";
import visionImg from "../../assets/icons/vision.png";
import valuesImg from "../../assets/icons/values.png";
import Card from "../Card/Card";
import Teams from "../Teams/Teams";

const About = () => {
  const heroBanner = {
    title: "About Montazzo",
    desc: "Your Partner in Comprehensive CX and offshore staffing solutions.",
    img: "https://www.microsourcing.com/hubfs/Administrative%20Assistant_Desktop.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Admin%20Assistant/MS%20-%20Header%20Banner%20M-%20Admin%20Assistant.jpg",
  };
  const cardData = [
    {
      title: "Mission",
      desc: "Our mission is to help you grow your business with smart and flexible offshoring solutions in the India. While at the same time, making a positive impact in the India.",
      ico: missionImg,
    },
    {
      title: "Vision",
      desc: "Our vision is to become the recognized leader for outsourcing and offshoring solutions in the India.",
      ico: visionImg,
    },
    {
      title: "Values",
      desc: "Our values form the foundation for how we serve our clients. We value integrity, transparency, value creation, professionalism, social responsibility and family.",
      ico: valuesImg,
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
      <div className="section-margin mx-auto my-3 max-w-7xl border-b-2 border-t-2 text-center">
        <p>
          Most of our clients are Australian, American and European companies,
          but we help businesses from all around the world. The one thing they
          all have in common is their desire to cut labor costs, scale faster,
          find specialist skills and improve operational efficiencies. And we
          help them do just that.
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 bg-[#f4fafc] px-5 py-10 md:flex-row md:items-center md:px-28">
        <div className="md:w-1/2">
          <img className="rounded-lg" src={storyImg} alt="img" />
        </div>
        <div className="md:w-1/2">
          <h1 className="pb-5 font-outfit text-4xl font-normal">
            Legacy Continues with <br /> 20+ Years of Experience
          </h1>
          <p>
            Founded in 2019, Montazzo has an accumulated experience of more than
            20+ years. The management is well aware about the industry and the
            problems it is facing and works day in and day out for solutions.
          </p>
          <p className="pt-5">
            We are a client-centric team that take pride in the collaborative
            business relationships that we have developed with our clients and
            the consistent results that we have delivered in all our projects in
            the field of CX, Recruitment Process Outsourcing and Offshore
            Staffing.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-10 md:flex-row-reverse md:items-center md:px-28">
        <div className="md:w-1/2">
          <img className="rounded-lg" src="https://plus.unsplash.com/premium_photo-1661503228105-e404823831dd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
        </div>
        <div className="md:w-1/2">
          <h1 className="pb-5 font-outfit text-4xl font-normal">
            OUR Difference
          </h1>
          <p className="text-md">
            Our pricing model sets us apart from other BPOs. By separating
            salaries from service costs, we make it very easy for you to see
            that you’re getting the best possible talent for your money. You
            have complete control over salaries and incentives, with the salary
            component of your monthly fee going directly to your staff without
            any mark-up.
          </p>
          <p className="pt-5 pb-5">
            Most outsourcing service providers don’t do this. Instead, they
            charge a ‘fixed hourly rate’ that bundles the service fee and the
            employee’s salary. This pricing model incentivizes the provider to
            find the cheapest possible labor to maximize their margins. As a
            result, candidate quality suffers and staff quickly leave as soon as
            they’re offered market rate elsewhere.
          </p>
          <p>
            We pay market rates for the skills you need, attracting the best
            candidates and ensuring they feel valued and rewarded for their
            work. Although this model yields lower profits for us, it allows us
            to offer competitive salaries to our local employees, resulting in
            higher job satisfaction and lower attrition rates. In fact,
            Montazzo's employee attrition rate is less than half the industry
            average.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col  gap-10 px-5 bg-[#f4fafc] py-10 md:flex-row md:items-center md:px-28">
        <div className="md:w-1/2">
          <img className="rounded-lg" src={fbiImg} alt="img" />
        </div>
        <div className="md:w-1/2">
          <h1 className="pb-5 font-outfit text-4xl font-normal">
            FBI-Grade Background Checks
          </h1>
          <p className="text-md">
            We ensure the highest level of security and reliability by hiring
            employees who have passed FBI-grade background checks. This rigorous
            vetting process guarantees that our clients can trust the integrity
            and competence of their offshore team members.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10  px-5 py-10 md:flex-row-reverse md:items-center md:px-28">
        <div className="md:w-1/2">
          <img className="rounded-lg" src={dataSec} alt="img" />
        </div>
        <div className="md:w-1/2">
          <h1 className="pb-5 font-outfit text-4xl font-normal">
            IT and Data Security
          </h1>
          <p className="text-md">
            Data security is a top priority at Montazzo. Our 24/7 IT support
            team implements robust system monitoring, advanced encryption, and
            strict access controls to protect sensitive data. We conduct regular
            audits and maintain comprehensive disaster recovery plans to ensure
            compliance with industry security standards and to safeguard our
            clients' information.
          </p>
        </div>
      </div>

      {/* <div className="section-container mx-auto max-w-7xl">
        <img
          src="https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/mic_MS_MicroSourcing-team.jpg"
          alt="img"
          className="mx-auto"
        />
        <h1>Our difference</h1>
        <p>
          Our solution to offshoring is quite unique – in fact, we were the
          first in the India to offer it. This means we help you build your
          full-time, dedicated team in the India, taking care of everything on
          the ground, while you retain full control of your team, including
          KPIs, quality, workflow and productivity. So not only do you enjoy
          significant cost savings (up to 70%), but you also get employees who
          work just for you, in your business, working towards your
          business-specific goals.
        </p>
        <p>
          As the biggest and most experienced provider of unique offshoring
          solutions in the India, we enable you to leverage big-business
          infrastructure, like:
        </p>
        <ul>
          <li>
            24 hour/365 days dedicated IT support and robust infrastructure for
            maximum uptime
          </li>
          <li>
            Local dedicated talent acquisition to build and scale your team
          </li>
          <li>
            Fully maintained facilities so you never have to worry about
            furniture, tech equipment, or maintenance
          </li>
          <li>Professional employee engagement activities</li>
          <li>
            Risk management and disaster recovery plans to keep your team safe
            and your business running
          </li>
          <li>Professional performance management and discipline framework</li>
          <li>
            Montazzo University with dozens of training development programs
          </li>
        </ul>
      </div> */}

      <div className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="pb-10 text-center font-outfit text-4xl font-bold">
          Meet Our Team
        </h2>
        <Teams />
      </div>

      <div className="flex flex-col items-center gap-5 pt-10">
        <GuranteePricing />
        <Link to={`/contact`} className="btn px-10 py-4">
          Get a quote
        </Link>
      </div>
      <div className="section-container mx-auto max-w-7xl">
        {/* <h1>Mission, Vision and Values</h1> */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cardData.map((data) => (
            <Card title={data.title} desc={data.desc} ico={data.ico} />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="pb-10 text-center font-outfit text-4xl font-bold">
          What Our Clients Are Saying
        </h2>
        <Reviews />
      </div>
    </div>
  );
};

export default About;
