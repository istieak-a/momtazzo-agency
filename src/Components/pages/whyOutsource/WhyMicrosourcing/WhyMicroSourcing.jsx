import React from "react";
import hero from "../../../../assets/banner-img/M_Web_Why-MicroSourcing_Banner_202307.jpg";
import heroRes from "../../../../assets/banner-img/M_Mobile_Why-MicroSourcing_Banner_202307.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import { Link } from "react-router-dom";
import "./WhyMicroSourcing.css";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import checkIco from "../../../../assets/icons/pngegg.png";

const whyMicroSourcing = () => {
  const heroBanner = {
    title: "Reasons To Choose Montazzo",
    desc: "When you partner with the strongest provider, you get the best outcome, and no hidden costs or unforeseen risks.",
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
      <div className="flex flex-col items-center gap-5 pt-10">
        <GuranteePricing />
        <Link to={`#`} className="btn px-10 py-4">
          Get a quote
        </Link>
      </div>
      <div className="microsourcing-divs">
        <p>
          Offshoring parts of your business can lead to huge savings and free up
          your time to focus on what’s most important. But when it comes to the
          value you get from an offshore provider, there’s a lot more to
          consider than just the price.
        </p>
        <h1>Transparent fees, with everything you need</h1>
        <p>
          Business is about risk mitigation. Understanding the risks and making
          an informed decision.
        </p>
        <p>
          So when comparing the value of offshoring providers, you definitely
          need to consider more than just their quoted costs. Even if two
          providers charge exactly the same total monthly fees, the value each
          delivers will vary wildly depending on their location, office fit-out,
          IT infrastructure and operational capability. There may even be a vast
          difference in the experience and capabilities of the staff they
          recruit for you.
        </p>
        <p>
          So it pays to compare the details to ensure there are no unforeseen
          risks. Here are the factors to consider when choosing an offshoring
          provider:
        </p>
        <ul className="text-blue-800">
          <li className="flex items-center gap-3">
            <img className="size-4" src={checkIco} alt="" />
            Fees & inclusions
          </li>
          <li className="flex items-center gap-3">
            <img className="size-4" src={checkIco} alt="" />
            Infrastructure
          </li>
          <li className="flex items-center gap-3">
            <img className="size-4" src={checkIco} alt="" />
            Facilities
          </li>
          <li className="flex items-center gap-3">
            <img className="size-4" src={checkIco} alt="" />
            Location
          </li>
          <li className="flex items-center gap-3">
            <img className="size-4" src={checkIco} alt="" />
            Recruitment process
          </li>
          <li className="flex items-center gap-3">
            <img className="size-4" src={checkIco} alt="" />
            Recruitment & HR capability
          </li>
          <li className="flex items-center gap-3">
            <img className="size-4" src={checkIco} alt="" />
            Employee engagement
          </li>
          <li className="flex items-center gap-3">
            <img className="size-4" src={checkIco} alt="" />
            Control & scalability
          </li>
          <li className="flex items-center gap-3">
            <img className="size-4" src={checkIco} alt="" />
            Quality
          </li>
          <li className="flex items-center gap-3">
            <img className="size-4" src={checkIco} alt="" />
            Track record & financial stability
          </li>
        </ul>
        <p>
          Let’s take a look at each of these important features in more detail,
          so you can evaluate the Montazzo model, and judge for yourself why it
          pays to partner with the strongest offshoring provider in the india.
        </p>
      </div>
      <div className="microsourcing-divs">
        <h1>Fees & inclusions – Transparency is key</h1>

        <p>Your fixed monthly service fee covers:</p>
        <ul>
          <li>Salaries</li>
          <li>
            Fully furnished offices including a computer, monitor, mouse and
            keyboard for each workstation
          </li>
          <li>
            Support services, including HR, recruitment, finance, payroll,
            compensation and benefits
          </li>
          <li>
            High-speed internet (with redundant connections from multiple
            providers)
          </li>
          <li>24/7 on-site IT support</li>
          <li>Client management and team management</li>
        </ul>
        <p>
          With other service providers, you may find that not everything is
          included in the service fee. And in almost every case, what started
          out looking like a good deal actually ends up being a ‘from’ price
          with a shopping list of ‘optional extras’ that quickly add up to the
          true price.
        </p>
      </div>
      <div className="microsourcing-divs">
        <h1>Robust infrastructure, designed for maximum uptime</h1>
        <p>
          When you’re comparing offshoring services, ask about their
          infrastructure, technology and emergency systems. A cheap or
          unreliable provider may have skimped on infrastructure, which can make
          the difference between the success and failure of your offshore
          investment.
        </p>
        <p>
          It’s important to make sure you’re getting a reliable service with
          solid uptime guarantees.
        </p>
        <p>
          So why choose Montazzo? Every Montazzo facility provides 100%
          infrastructure redundancy and world-class business continuity
          processes. To keep things running smoothly, our office have:
        </p>
        <ul>
          <li>Backup generators</li>
          <li>
            Multiple, dedicated internet connections from tier-1 providers site
          </li>
          <li>24/7/365 dedicated IT support on site</li>
        </ul>
        <p>
          So no matter what the weather throws at the india, it’s business as
          usual for you, and your customers won’t notice the difference.
        </p>
      </div>
      <div className="microsourcing-divs">
        <h1>You’re involved in the recruitment process</h1>
        <p>
          No one knows your business like you do, which is why you’re involved
          in the recruitment process from start to finish. We do the heavy
          lifting to shortlist candidates with the right skills. Then you choose
          the strongest talent with the personality and work style that suit
          your business.
        </p>
        <p>
          So you get the control and choice you need, without the hassle of
          sifting through piles of applicants.
        </p>
        <ol className="list-inside list-decimal">
          <li>
            We get to know your company, your onshore business objectives and
            the objectives of the offshore role(s).
          </li>
          <li>
            You provide a detailed job description including qualifications,
            skills, prior experience, responsibilities, personality traits and
            work style.
          </li>
          <li>We analyze the job description and research the role. </li>
          <li>
            We run a sophisticated, multi-channel recruitment process to
            advertise and attract the strongest candidates from the pool. This
            process can include your own custom assessments if you required.
          </li>
          <li>
            We interview candidates and create a shortlist of the best talent.
          </li>
          <li>
            You interview your favorites to determine who will be the best fit
            for your business. You’re welcome to conduct multiple rounds of
            interviews with different stakeholders.
          </li>
          <li>
            Once you’ve selected your favorite candidate, we make a formal offer
            on your behalf and negotiate their start date.
          </li>
          <li>
            We complete the candidate’s induction to Montazzo, which includes
            assigning your new employee a workstation, and introducing them to
            the facilities and policies.
          </li>
          <li>
            Then it’s over to you for company-specific and role-specific
            training.
          </li>
        </ol>
        <p>
          This process typically takes about 2-4 weeks. Then you can settle in
          and get to know your new superstar, knowing that you’ve made the right
          choice for your business.
        </p>
      </div>

      {/* <div className="microsourcing-divs">
        <h1>Employee engagement</h1>
        <p>
          Montazzo is one of the india’ premier employers. We employ more than
          8,000 people, across 13 offices, and we invest heavily in employee
          engagement and development programs. This means we can attract and
          retain top talent for your business. In fact, our annual attrition
          rate is less than half the industry average.
        </p>
        <div>
          <h4>Employee engagement</h4>
          <p>
            The Indian people are very social by nature and generally love
            company parties and events. We have a dedicated employee engagement
            department that organizes a variety of events throughout the year,
            including Christmas, Valentines, Halloween, the MicrOlympics
            (sports), summer outings, and monthly get-togethers. We also have
            our MicroClubs where employees with similar interests, like
            photography, music and sports, can come together.
          </p>
        </div>
        <div>
          <h4>Training</h4>
          <p>
            Our dedicated training team operates the Montazzo University
            training platform, where employees can receive quality online and
            classroom training in a wide variety of hard and soft skills.
          </p>
        </div>
        <div>
          <h4>Recognition</h4>
          <p>
            We have a number of special awards and employee recognition events,
            where we recognize our employees for exceptional performance.
          </p>
        </div>
      </div> */}
      <div className="microsourcing-divs">
        <h1>Grow and evolve the team with your business</h1>
        <p>
          Once appointed, your staff are your own and you get to shape them into
          your ideal team. Just as with your local team, you have complete
          control over your offshore team’s workload, performance, KPIs and job
          satisfaction. (Although, naturally, we’ll guide you on these aspects
          wherever you need it.) You can train your team in your company’s
          systems, processes, culture and preferences, to bring out their best
          work.
        </p>
        <p>
          As your business grows, the offshore model helps you respond quickly
          to increasing demand and workload, because it enables you to expand
          your team headcount and infrastructure quickly, and without big
          up-front investments. We can also help you devise an appropriate
          management team structure and employee levels to help keep things
          organized.
        </p>
      </div>
      <div className="microsourcing-divs">
        <h1>Quality and continuous improvement</h1>
        <p>
          Over the time, we’ve developed our proprietary support platforms,
          systems for time and attendance tracking, HR processing, recruitment
          and referral programs, so we know exactly how to provide the best
          value support for our clients.
        </p>
      </div>

      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default whyMicroSourcing;
