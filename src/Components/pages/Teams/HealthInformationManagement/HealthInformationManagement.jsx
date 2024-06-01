import React from "react";
import HeroBanner3 from "../../../Sections/HeroBanner3/HeroBanner3";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import sectionImg from "./profile.png";

const HealthInformationManagement = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/Mask%20Group%208-1.png?width=828&height=494&name=Mask%20Group%208-1.png",
    title: "Health Information Management outsourcing to the Philippines",
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

      <div className="section-margin mx-5 my-3 border-b-2 border-t-2 text-center md:mx-16">
        <p>
          Does your healthcare organization need a more efficient and
          cost-effective way of staying on top of the never-ending
          administration that comes with delivering quality care? Find out why
          working with a health information management BPO in the Philippines is
          the answer.
        </p>
      </div>
      <div className="section-container">
        <p>
          Health Information Management (HIM) is one of the world’s great
          ‘hidden’ professions. It is also one of the fastest growing and most
          crucial. While doctors and nurses are the public face of healthcare,
          behind the scenes are armies of administrators who capture, analyze,
          store, and retrieve patients’ medical data to help clinicians ensure
          appropriate treatment and researchers track health trends and evaluate
          different forms of treatment.
        </p>

        <p>
          The advent of Electronic Health Records and the rapid progression of
          data management technology means the HIM industry is growing fast.
          Roles are evolving quicker than many organizations can keep pace with,
          while education and training requirements are increasing at a time
          when many healthcare providers are struggling with funding.
        </p>

        <p>
          Health administrators have been warning of a global shortage of
          qualified workers for more than a decade, but fortunately, outsourcing
          providers are stepping up to fill the gap. Countries such as the
          Philippines have earned an enviable reputation for the quantity and
          quality of their healthcare professionals and are creating
          comprehensive offshore HIM teams to make data management more
          cost-effective without sacrificing efficiency.
        </p>

        <p>
          Outsourcing health information management to the Philippines is
          playing a vital role in helping organizations not only survive but
          thrive. Specialist offshore staff and teams are deftly handling tasks
          such as data entry, compliance, billing, and medical coding, allowing
          their in-country partners to focus on more high-value and life-saving
          work.
        </p>

        <h1>
          Why is Health Information Management Outsourcing to the Philippines a
          Good Idea?
        </h1>
        <p>
          Health information management is too important to be left to chance.
          It requires people with meticulous attention to detail, an
          understanding of medical language, and experience in computer systems
          and databases - and the Philippines is home to a large talent pool of
          professionals who fit the bill.
        </p>

        <ul>
          <li>
            <strong>Access to Skilled Professionals:</strong> Outsourcing
            provides access to hard-working and dedicated employees at a reduced
            cost. From medical coders, quality assurance supervisors, medical
            transcriptionists, and chart retrieval specialists, BPOs in the
            Philippines can fill any health information management role.
          </li>
          <li>
            <strong>Scalable Staffing Solutions:</strong> Staffing solutions can
            be created to match volumes of work. While a small medical practice
            may need a basic team of a few coders and one quality assurance
            analyst, a large healthcare provider with several hospitals can
            access hundreds of coders with appropriate senior management and
            quality assessment staff.
          </li>
          <li>
            <strong>Cost Efficiency:</strong> Reducing the cost of back-office
            tasks such as record retrieval, data requests, and even prescribing
            paperwork or appointment scheduling can free up resources in-country
            to concentrate on patient care.
          </li>
          <li>
            <strong>24-Hour Support:</strong> Many healthcare BPOs in the
            Philippines employ medical professionals such as registered nurses
            and pharmacists who can be available on 24-hour hotlines to support
            patients or practices.
          </li>
          <li>
            <strong>Rich Talent Pool:</strong> Boasting a well-educated
            population, the Philippines offers a rich talent pool for health
            insurance companies wanting to outsource roles such as insurance
            claims analysts or assessors, which require a keen eye for detail,
            strong skills in literacy and numeracy, and a detailed knowledge of
            insurance law, medical procedures, and company policies.
          </li>
          <li>
            <strong>24-Hour Availability:</strong> An outsourced health
            information team in the Philippines can be structured on a 24-hour
            roster so professionals in different countries can call on their
            support at any time.
          </li>
          <li>
            <strong>Advanced Data Security:</strong> With health information
            management now almost entirely electronic and cloud-based, it is
            well suited to outsourcing and the Philippines offers equipment and
            data security of the highest quality.
          </li>
        </ul>

        <p>
          In many ways, outsourcing health information management to the
          Philippines is just what the doctor ordered.
        </p>

        <h1>Common HIM Roles Outsourced to the Philippines</h1>
        <ul className="link-li grid gap-3 md:grid-cols-2">
          <li>Medical Coder</li>
          <li>Medical Coding Trainer</li>
          <li>Quality Assurance Supervisor</li>
          <li>Quality Assurance Manager</li>
          <li>Medical Transcriptionist</li>
          <li>Medical Claims Processor/ Analyst</li>
          <li>Medical Billing Specialist</li>
          <li>Quality Assurance Specialist</li>
          <li>Chart Retrieval Specialist</li>
        </ul>
      </div>

      <div className="bg-[#f1f4f6] px-5 md:px-16 py-10 md:py-16">
        <h1 className="text-center font-outfit font-bold text-4xl md:text-5xl pb-8">Sample medical coder profiles</h1>
        <img src={sectionImg} alt="" />
      </div>
      <div className="section-margin flex flex-col items-center gap-10">
        <h1 className="font-outfit text-5xl">
          MicroSourcing clients by industry
        </h1>
        <p className=" px-20 text-center">
          MicroSourcing has built a close affinity with the Ecommerce Industry.
          In fact, ECommerce is in our Top 5 Industry Sectors enjoying and
          mastering the benefits of offshoring. With over 320 Ecommerce
          professionals currently working for clients in Australia, the Americas
          and across Europe, we have significant experience in this Industry.
        </p>
        <img
          className="md:px-40"
          src="https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Learn/Resources/ms-engineering-construction-chart.png?width=1268&height=803&name=ms-engineering-construction-chart.png"
          alt="chart"
        />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default HealthInformationManagement;
