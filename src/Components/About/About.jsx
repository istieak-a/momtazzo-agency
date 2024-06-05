import React, { useEffect } from "react";
import hero from "../../assets/banner-img/M_Web_Why-MicroSourcing_Banner_202307.jpg";
import heroRes from "../../assets/banner-img/M_Mobile_Why-MicroSourcing_Banner_202307.jpg";
import HeroBanner4 from "../Sections/HeroBanner4/HeroBanner4";
import { Link } from "react-router-dom";
import GuranteePricing from "../Sections/GuranteePricing/GuranteePricing";
const About = () => {
  const heroBanner = {
    title: "About Montazzo",
    desc: "We make it easy and affordable for businesses to build their own full-time, dedicated teams in the India.",
    img: "https://www.microsourcing.com/hubfs/Administrative%20Assistant_Desktop.jpg",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Admin%20Assistant/MS%20-%20Header%20Banner%20M-%20Admin%20Assistant.jpg",
  };
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
      <div className="section-container mx-auto max-w-7xl">
        <h1>Our Story</h1>
        <p>
          Montazzo LLC began its journey in 2021 with a focus on B2B lead
          generation. As we worked with various clients, we saw the challenges
          American businesses face due to high local hiring costs and overheads.
          This issue is particularly significant for startups, often causing
          financial strain and operational inefficiencies. To address this, we
          expanded our services in 2022 to help businesses save 70-80% on salary
          and overhead costs by building and managing offshore teams for almost
          any online role. Today, we assist businesses from the USA, UK,
          Australia, and Canada in scaling their operations efficiently by
          outsourcing tasks to India.
        </p>
        <h1>FBI-Grade Background Checks</h1>
        <p>
          We ensure the highest level of security and reliability by providing
          employees who have passed FBI-grade background checks. This rigorous
          vetting process guarantees that our clients can trust the integrity
          and competence of their offshore team members.
        </p>
        <h1>IT and Data Security</h1>
        <p>
          Data security is a top priority at Montazzo. Our 24/7 IT support team
          implements robust system monitoring, advanced encryption, and strict
          access controls to protect sensitive data. We conduct regular audits
          and maintain comprehensive disaster recovery plans to ensure
          compliance with industry security standards and to safeguard our
          clients' information.
        </p>
        <img
          src="https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/mic_MS_MicroSourcing-team.jpg"
          alt="img"
          className="mx-auto"
        />
        <h1>Our difference</h1>
        <p>
          Our solution to offshoring is quite unique – in fact, we were the
          first in the India to offer it. This means we help you build
          your full-time, dedicated team in the India, taking care of
          everything on the ground, while you retain full control of your team,
          including KPIs, quality, workflow and productivity. So not only do you
          enjoy significant cost savings (up to 70%), but you also get
          employees who work just for you, in your business, working towards
          your business-specific goals.
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
      </div>
      <div className="flex flex-col items-center gap-5 pt-10">
        <GuranteePricing />
        <Link to={`/contact`} className="btn px-10 py-4">
          Get a quote
        </Link>
      </div>
      <div className="section-container mx-auto max-w-7xl">
        <h1>Mission, Vision and Values</h1>

        <h2>Mission</h2>
        <p>
          Our mission is to help you grow your business with smart and flexible
          offshoring solutions in the India. While at the same time,
          making a positive impact in the India.
        </p>

        <h2>Vision</h2>
        <p>
          Our vision is to become the recognized leader for outsourcing and
          offshoring solutions in the India.
        </p>

        <h2>Values</h2>
        <p>
          Our values form the foundation for how we serve our clients. We value
          integrity, transparency, value creation, professionalism, social
          responsibility and family.
        </p>

        <p>
          We believe in fostering an open work environment, and invest heavily
          in employee engagement activities. This means we can attract and
          retain top talent for your business. And it means your team members
          feel comfortable and motivated.
        </p>

        <p>
          So while we’re all professionals here, we’ve got a fun and friendly
          vibe. We set up your team’s workstations so they can freely talk to
          one another and we don’t have strict dress codes (hoodies, t-shirts,
          jeans, dresses – whatever!).
        </p>
      </div>
    </div>
  );
};

export default About;
