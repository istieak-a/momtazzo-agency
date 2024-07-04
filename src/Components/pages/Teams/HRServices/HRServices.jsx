import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import chart1 from "./chart1.png";
import chart2 from "./chart2.png";
const HRServices = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Mask%20Group%208-1.png?width=828&height=494&name=Mask%20Group%208-1.png",
    title: "HRServices outsourcing to India",
    btn: "HOW IT WORKS",
    cate: "TEAM PROFILE",
  };
  return (
    <div>
      <div>
        <HeroBanner3
          img={banner.img}
          title={banner.title}
          btn={banner.btn}
          cate={banner.cate}
        />
      </div>
      <div className="section-container">
        <h1>What is Recruitment and HR Outsourcing?</h1>
        <p>
          Recruitment and HR outsourcing involves engaging a third-party
          organization to perform certain HR and recruitment tasks that would
          otherwise be done onshore. Recruitment roles include sourcing talent,
          screening, interviewing, post-offer management, and onboarding, while
          HR tasks can cover payroll processing, staff training, managing
          employee benefits, and performance management.
        </p>

        <p>
          The number of industries partnering with HR and recruitment
          outsourcing providers in India is growing, with sectors as
          diverse as Finance & Accounting, Healthcare, Engineering &
          Construction, Hospitality & Tourism, and IT embracing its associated
          benefits.
        </p>

        <p>
          With almost 70% of U.S. employers claiming they are having difficulty
          filling jobs, outsourcing recruitment and HR to offshore experts can
          allow your onshore team to focus on higher-value activities while
          significantly reducing costs.
        </p>

        <p>
          Watch this video to find out more about outsourcing for recruitment or
          recruitment process outsourcing (RPO).
        </p>

        <iframe
          className="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9jHL4umWP5Y?si=C4_sBe6sD_Gim75Z"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="section-container">
        <h1>
          Why is the HR and Recruitment Industry Well-Suited to Outsourcing?
        </h1>
        <p>
          Evolving technology has played a crucial role in creating an
          environment for companies to outsource HR and recruitment tasks. Where
          such duties once required extensive face-to-face interactions, recent
          advancements in online networking and video conferencing platforms
          mean offshore teams can identify, source, and engage with potential
          recruits remotely. The same applies for online training and education,
          while the shift to cloud-based platforms is allowing HR managers and
          teams to manage workloads from different geographic locations.
        </p>

        <p>
          The HR and recruitment sector is not immune from the general global
          talent shortage. An ongoing shortage of high-quality candidates with
          appropriate experience means it is becoming more expensive and
          difficult to recruit locally, particularly at mid-management level.
          Outsourcing to India allows businesses to tap into an entire
          market of highly specialized HR and recruitment teams that have earned
          a reputation for being hard workers, enthusiastic, and speaking
          excellent English.
        </p>

        <h2>Benefits of Outsourcing HR to India</h2>
        <ul>
          <li>
            <strong>Cost Savings:</strong> As India’ cost of living is
            lower than most Western countries, your business can outsource
            repetitive and time-consuming HR and recruitment tasks for a
            fraction of the price it would cost to hire specialists locally - up
            to 70% in some cases.
          </li>
          <li>
            <strong>Increase in Output Efficiency and Quality Levels:</strong>{" "}
            Sending certain HR and recruitment tasks to an offshore team in the
            Philippines means your onshore team will have more time, budget, and
            project scope to take on higher-value work.
          </li>
          <li>
            <strong>Business Growth and Scaling Opportunities:</strong> When you
            send your time-consuming tasks to an offshore HR and recruitment
            team in India, your local team can focus on increasing
            profits and business growth opportunities. The additional capacity
            your onshore team gets from your offshore team’s support means you
            can grow your business sustainably.
          </li>
        </ul>
        <p>
          With the support of an offshore HR and recruitment team that is highly
          skilled and boasts extensive experience, you can grow your company
          quickly and sustainably. The labor pool in India is known
          for its tech competency and attention to detail, operating in a fiscal
          and financial system almost identical to conditions in the West. In
          fact, India is one of the most dynamic economies in the East
          Asia region, with sound economic fundamentals and a globally
          recognized competitive workforce.
        </p>

        <h1>
          What Roles and Tasks Can Be Outsourced in the HR and Recruitment
          Industry?
        </h1>
        <p>Some popular tasks outsourced in HR and recruitment include:</p>
        <ul>
          <li>Recruitment consultation and strategy</li>
          <li>Recruitment process optimization</li>
          <li>Talent pipeline development</li>
          <li>Screening and interviewing</li>
          <li>Post-offer management</li>
          <li>Onboarding and post-hire</li>
          <li>Payroll and compensation management</li>
          <li>Staff training and evaluation</li>
          <li>Employee benefits and service</li>
          <li>Recruitment and onboarding</li>
          <li>Performance management</li>
        </ul>

        <h2>Sample HR and Recruitment Team Structures</h2>
        <p>
          The size of your business and volume of work required will determine
          the size and structure of your HR and recruitment team. A HR team in
          medium to large organizations is typically formed in the following
          way, from base level:
        </p>
        <img className="mx-auto object-cover" src={chart1} alt="chart" />
        <p>
          A HR and recruitment team in a small business is normally formed in
          the following way:
        </p>
        <img className="mx-auto object-cover" src={chart2} alt="chart" />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default HRServices;
