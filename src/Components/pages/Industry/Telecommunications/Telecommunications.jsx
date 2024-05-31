import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import PhilippinesMap from "../../../Sections/PhilippinesMap/PhilippinesMap";
import FeaturesSection from "../../../Sections/FeaturesSection/FeaturesSection";
import FilipinoBefinits from "../../../Sections/FilipinoBenifits/FilipinoBefinits";
import MicroSourcing from "../../../Sections/Microsourcing/Microsourcing";


const Telecommunications = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-155429711.png?width=828&height=465&name=iStock-155429711.png",
    title: "Telecommunications Outsourcing Services",
    btn: "HOW IT WORKS",
    cate: "INDUSTRY",
  };
  const features = {
    title: "Why is the telecommunications industry well suited to outsourcing?",
    li1: "Offshoring certain technical and administrative functions can help reduce operational costs, allowing organizations to allocate resources to keep pace with technological advancements.",
    li2: "Offshore legal and compliance teams can specialize in navigating complex regulations, ensuring that the organization remains compliant in various markets.",
    li3: "Offshoring customer support can provide 24/7 assistance, meeting customer expectations for prompt service and issue resolution.",
    li4: "Offshore IT and cybersecurity teams can enhance network security, implementing measures to protect against cyber threats and data breaches."
  };
  const outsourcingServices = {
    title: "Telecommunications Services and Roles Outsourced with MicroSourcing",
    services: [
        "Customer support",
        "Network monitoring",
        "Technical support",
        "Billing and invoicing",
        "Data entry",
        "Network security",
        "IT infrastructure management",
        "Network design and engineering",
        "Provisioning and configuration",
        "Quality assurance testing",
        "Sales and marketing",
        "Content moderation",
        "Network maintenance",
        "Troubleshooting and repairs",
        "Network optimization"
    ]
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
      <div className="section-margin flex flex-col md:flex-row items-center gap-5">
        <div className="flex flex-col gap-5">
        <p>
          Telecommunications organizations often grapple with keeping up with
          rapid technological changes, such as the shift to 5G and emerging
          network infrastructure, which requires significant investments and
          expertise.
        </p>
        <p>
          Navigating complex and ever-changing telecommunications regulations,
          especially in different countries, can be a compliance and legal
          challenge.
        </p>
        <p>
          Meeting rising customer expectations for faster, more reliable, and
          affordable services while managing competitive pricing is a constant
          struggle.
        </p>
        <p>
          Ensuring the security of vast communication networks against cyber
          threats and maintaining data privacy is an ongoing concern in the
          digital age.
        </p>
        </div>
        <div>
        <PhilippinesMap />
        </div>
      </div>

      <div>
        <FeaturesSection title={features.title} li1={features.li1} li2={features.li2} li3={features.li3} li4={features.li4} />
      </div>
      <div className="py-10">
        <FilipinoBefinits title={'telecommunications'} />
      </div>
      <div>
        <MicroSourcing title={outsourcingServices.title} services={outsourcingServices.services} />
      </div>

      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default Telecommunications;
