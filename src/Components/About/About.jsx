import React from "react";
import hero from "../../assets/banner-img/M_Web_Why-MicroSourcing_Banner_202307.jpg";
import heroRes from "../../assets/banner-img/M_Mobile_Why-MicroSourcing_Banner_202307.jpg";
import HeroBanner from "../Sections/HeroBanner/HeroBanner";
import { Link } from "react-router-dom";
import GuranteePricing from "../Sections/GuranteePricing/GuranteePricing";
const About = () => {
  const heroBanner = {
    title: "About Montazzo",
    desc: "We make it easy and affordable for businesses to build their own full-time, dedicated teams in the Philippines.",
    img: hero,
    imgRes: heroRes,
  };
  return (
    <div>
      <div>
        <HeroBanner
          title={heroBanner.title}
          title2={heroBanner.title2}
          desc={heroBanner.desc}
          img={heroBanner.img}
          imgRes={heroBanner.imgRes}
        />
      </div>
      <div className="section-margin mx-5 my-3 border-b-2 border-t-2 text-center md:mx-16">
        <p>
          Most of our clients are Australian, American and European companies,
          but we help businesses from all around the world. The one thing they
          all have in common is their desire to cut labor costs, scale faster,
          find specialist skills and improve operational efficiencies. And we
          help them do just that.
        </p>
      </div>
      <div className="section-container">
        <p>
          Founded in 2006, we pioneered a new way of offshoring. This model
          involves setting up an overseas division of your company and getting a
          local specialist to handle facilities, IT, labor laws, recruitment and
          HR, while you retain control over quality and productivity. Today,
          we’re still one of the largest and most experienced offshoring
          providers in the Philippines, with 700+ active clients and 9,000+
          employees. We operate within purpose-built, class-A facilities that
          are strategically located for access to Manila’s most talented people.
          We’re backed by our Australian parent company, Probe and we’re ISO
          certified.
        </p>
        <img
          src="https://www.microsourcing.com/hubfs/MicroSourcing_May2020/Images/mic_MS_MicroSourcing-team.jpg"
          alt="img"
        />
        <h1>Our difference</h1>
        <p>
          Our solution to offshoring is quite unique – in fact, we were the
          first in the Philippines to offer it. This means we help you build
          your full-time, dedicated team in the Philippines, taking care of
          everything on the ground, while you retain full control of your team,
          including KPIs, quality, workflow and productivity. So not only do you
          enjoy significant cost savings (up to 70%), but you still get
          employees who work just for you, in your business, working towards
          your business-specific goals.
        </p>
        <p>
          As the biggest and most experienced provider of unique offshoring
          solutions in the Philippines, we enable you to leverage big-business
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
            MicroSourcing University with dozens of training development
            programs
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-5 pt-10">
        <GuranteePricing />
        <Link to={`#`} className="btn px-10 py-4">
          Get a quote
        </Link>
      </div>
      <div className="section-container">
        <h1>Mission, Vision and Values</h1>

        <h2>Mission</h2>
        <p>
          Our mission is to help you grow your business with smart and flexible
          offshoring solutions in the Philippines. While at the same time,
          making a positive impact in the Philippines.
        </p>

        <h2>Vision</h2>
        <p>
          Our vision is to become the recognized leader for outsourcing and
          offshoring solutions in the Philippines.
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
