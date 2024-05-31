import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import sectionImg from './profiles.png'
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const Healthcare = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1326241306.png?width=828&height=465&name=iStock-1326241306.png",
    title: "Healthcare outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "INDUSTRY",
  };
  return (
    <div>
      <div>
        <HeroBanner2
          img={banner.img}
          title={banner.title}
          btn={banner.btn}
          cate={banner.cate}
        />
      </div>
      <div className="section-container">
        <h1>
          Wonder if healthcare outsourcing to the Philippines is right for you,
          or which healthcare BPO your organization should work with? Here’s
          what you need to know…
        </h1>
        <p>
          The healthcare sector is facing a new set of challenges. As life
          expectancy climbs, demand for treatment of diseases like cancer,
          diabetes and heart disease continues to rise, as does the expectation
          for delivery of patient-centered care and personalized medicine.
        </p>

        <p>
          According to Deloitte, global healthcare spending is projected to
          reach $10.059 trillion in 2022.
        </p>

        <p>
          The sector is also diversifying its operations, partnering with
          retail, banking and tech companies to work on data and digital
          platform projects, and non-traditional players are entering the
          market, increasing competition for the healthcare dollar.
        </p>

        <p>
          Consumers are changing too. Greater access to information and choice
          brings higher expectations around service delivery and cost. And
          governments, often the largest stakeholders in healthcare, are looking
          to provide accessible, high-quality, patient-centered care that is
          also affordable.
        </p>

        <p>
          Meanwhile, financial and regulatory environments are in constant flux.
          Healthcare providers are facing greater competition, increased
          compliance obligations, and the challenge of averting cybersecurity
          breaches, while operating in an environment of increasing global
          financial instability.
        </p>

        <p>
          The sector is facing very real challenges. There’s greater expenditure
          on healthcare, but provision is also more expensive and requires
          greater investment in areas that weren’t a factor in previous decades.
          Labor costs are increasing, healthcare professionals are more
          difficult to recruit, and digital innovation requires healthcare
          providers to possess an entirely different skill set.
        </p>

        <p>
          So, how do you achieve the kind of efficiency that will mitigate
          against decreasing margins? By outsourcing healthcare services to the
          Philippines.
        </p>

        <p>
          When you find the right healthcare BPO in the Philippines, you can
          continue to provide high-quality care, invest in the latest
          technologies and processes, and recruit people with the required
          skills at a cost that keeps your business viable.
        </p>

        <h1>Why is healthcare outsourcing to the Philippines a good idea?</h1>
        <p>
          Offshoring works well for the healthcare sector because many of the
          roles that need to be filled have long been performed by offshore
          teams. There’s already a talent pool available to provide you with the
          expertise you’re looking for in cybersecurity, digital innovation and
          design, customer service, compliance, data management, payroll,
          bookings, and administration. You can find a specialist healthcare BPO
          in the Philippines who can set up your offshore team quickly with
          minimal fuss.
        </p>

        <p>Furthermore:</p>
        <ul>
          <li>Most non-clinical roles don’t have to be performed onsite.</li>
          <li>
            Consumers want the capacity to book appointments and make certain
            inquiries outside office hours. Offshoring customer service gives
            you the capacity to provide longer hours of service within existing
            budgets.
          </li>
          <li>
            Compliance and regulation are labor-intensive tasks that involve
            extensive training and a specialized skill set. Offshore teams are
            structured to handle exactly this kind of challenge, drawing from a
            well-educated talent pool at a labor cost saving of up to 70%.
          </li>
        </ul>
        <p>
          Healthcare outsourcing to the Philippines just makes good business
          sense.
        </p>
      </div>
      <div className="bg-[#f1f4f6] px-5 md:px-16 py-10 md:py-16">
        <h1 className="text-center font-outfit font-bold text-4xl md:text-5xl pb-8">Sample medical coder profiles</h1>
        <img src={sectionImg} alt="" />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default Healthcare;
