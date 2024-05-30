import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import sectionImg from "./constructionsection.png"
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const EngineeringConstruction = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1326241306.png?width=828&height=465&name=iStock-1326241306.png",
    title: "Outsource Construction and Engineering Services to the Philippines",
    btn: "HOW IT WORKS",
    cate: "Industries",
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
          Curious about construction outsourcing or whether engineering services
          outsourcing could work for your company?
        </h1>
        <p>
          Before you sign up with a BPO or hire offshore staff, here’s what you
          need to know… The construction and engineering sector is particularly
          sensitive to global economic and political fluctuations. But while
          these are complex times, particularly in relation to trade agreements,
          tariffs and disruption to global supply chains, the future of the
          industry looks bright, according to Deloitte’s 2019 Engineering and
          Construction Industry Outlook.
        </p>

        <p>
          This is great news for construction and engineering firms. However,
          keeping up with demand for high-quality services, delivered on
          schedule, is proving to be a challenge. Companies are finding it more
          difficult than ever to recruit and retain qualified staff in great
          enough quantities.
        </p>

        <p>
          In fact, Deloitte goes as far as to say that “labor shortages are
          reaching crisis proportions” and cites resourcing as one of the main
          stumbling blocks to the industry’s growth, resulting in failure to
          respond to market needs, losing project bids, and an inability to
          innovate.
        </p>

        <p>
          The capacity for innovation is essential for engineering and
          construction firms, particularly if they hope to profit from larger
          projects. Without it, productivity is lower, and opportunities to be
          more competitive in an industry that can be slow to take up new
          technology will be missed. As sustainability becomes more important in
          every facet of the industry, there is an even greater emphasis on the
          technology required to meet those challenges.
        </p>

        <p>
          Meanwhile, the cost of raw materials continues to rise, making it
          increasingly difficult to maintain acceptable profit margins.
        </p>

        <p>
          So, how do you increase capacity by recruiting and retaining good
          staff, while simultaneously keeping costs manageable? The answer (for
          most construction and engineering companies) is outsourcing.
        </p>

        <p>
          But how does it work? Watch this video to find out more about
          outsourcing in construction and engineering.
        </p>

        <h1>Why outsource construction and engineering services?</h1>
        <p>
          Construction and engineering projects are generally made up of many
          components that are subcontracted to smaller entities. Project
          management is at the core of the work, and determines the success, or
          otherwise, of the outcome. It’s precisely this multifaceted aspect of
          day-to-day operations that makes offshoring so attractive.
        </p>

        <p>
          Indeed, the construction industry has been offshoring engineering
          services for many years, in both the EPC sector (engineering,
          procurement, and construction) and the AEC sector (architectural,
          engineering, and construction).
        </p>

        <p>
          For many firms, outsourcing construction roles is what puts them in a
          position to bid for larger jobs. Efficiencies can be created in
          certain areas, allowing for a more strategic focus of resources and
          the capacity for expansion.
        </p>

        <p>
          Those areas include everything from back office functions, accounting
          and IT, through to 3D modeling and drafting services.
        </p>

        <p>
          Of course, at all times, work standards are of paramount importance,
          as are national and corporate security (depending on the project). So
          it’s imperative to ensure you work with trusted professionals who are
          familiar with the requirements of the industry and can perform to the
          level that you require.
        </p>

        <h1>
          Frequently outsourced engineering services and construction roles
        </h1>
        <p>
          Some of the more frequently offshored engineering and construction
          roles include:
        </p>
        <ul>
          <li>Quantity Surveyor</li>
          <li>Site Estimator</li>
          <li>Electrical Engineer</li>
          <li>Civil Engineer</li>
          <li>Mechanical Engineer</li>
          <li>Structural Engineer</li>
          <li>Project Manager</li>
          <li>Architect</li>
          <li>Draftsman</li>
          <li>AutoCAD/ CAD Operators</li>
        </ul>
      </div>
      <div className="section-container bg-[#f1f4f6]">
        <h1>Sample engineering and construction employee profiles</h1>
        <p>At MicroSourcing, we have more than 6,100 engineering and construction specialists in our candidate database, and access to more than an additional 4,500 across the Philippines. Here are a few examples of real candidate profiles:</p>
        <img src={sectionImg} alt="profile" />
      </div>
      <div className="section-container ">
        <h1>MicroSourcing clients by industry</h1>
        <p>MicroSourcing has built a close affinity with the Ecommerce Industry. In fact, ECommerce is in our Top 5 Industry Sectors enjoying and mastering the benefits of offshoring. With over 320 Ecommerce professionals currently working for clients in Australia, the Americas and across Europe, we have significant experience in this Industry.</p>
        <img className="" src="https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Learn/Resources/ms-engineering-construction-chart.png?width=1268&height=803&name=ms-engineering-construction-chart.png" alt="chart" />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default EngineeringConstruction;
