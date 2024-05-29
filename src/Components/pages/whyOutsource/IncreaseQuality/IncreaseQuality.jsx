import React from "react";
import hero from "../../../../assets/banner-img/ms-banner-increase-quality-efficiency.jpg";
import heroRes from "../../../../assets/banner-img/ms-banner-increase-quality-efficiency-m.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";
import './IncreaseQuality.css';
import TheBenifits from "../../../Sections/TheBenefits/TheBenifits";
import BuildTeam from "../../../Sections/BuildTeam/BuildTeam";

const IncreaseQuality = () => {
  const heroBanner = {
    title: "Why outsource? To increase quality and efficiency",
    desc: "Tap into an offshore talent pool that is committed to boosting productivity and minimizing errors",
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
      <div className="increase-divs">
        <h1>How outsourcing increases quality and efficiency</h1>
        <p>We understand that maintaining high quality and efficiency standards can be a challenge for growing businesses. That's why outsourcing to business process outsourcing companies can help. One of the main benefits of outsourcing is the ability to complement in-house employees with offshore teams and individuals who are hard-working and highly productive, making them excellent BPO partners.</p>
        <p>Many organizations choose to outsource time-consuming and repetitive tasks to outsourcing BPO companies, allowing local teams to focus their efforts on more productive and rewarding work. By working with BPOs, businesses can improve efficiency, productivity and job satisfaction across an organization, avoiding the fate of poor labor quality and preventing failure.</p>
        <p>The ability to spread tasks across in-house and offshore teams also results in fewer errors being made and a lift in standards. Additionally, customer satisfaction levels often rise due to the improved quality of interactions and the ability to provide increased access to services, making it clear why business process outsourcing companies are becoming more and more popular.</p>
        <p>Lower labor costs offshore and working across different time zones also allow many businesses to set up 24/7 customer support lines. With BPO providers expertly handling customer service queries while local teams focus on nurturing relationships, businesses can ensure that their customers receive excellent support.</p>
        <p>BPO providers can also help take the workload and subsequent pressures off the shoulders of managers by handling the likes of recruitment, training, HR, payroll, IT and labor law compliance. This ensures business leaders are better placed to concentrate on providing the support their teams need to produce excellent results in a timely and cost-effective manner.</p>
      </div>
      <div>
        <TheBenifits />
      </div>
      <div>
        <BuildTeam />
      </div>
    </div>
  );
};

export default IncreaseQuality;
