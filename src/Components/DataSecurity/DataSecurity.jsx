import React from "react";
import HeroBanner2 from "../Sections/HeroBanner2/HeroBanner2";
import Card from "../Card/Card";
import BuildTeam from "../Sections/BuildTeam/BuildTeam";

const DataSecurity = () => {
  const banner = {
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/About%20Us/Data%20Security%20and%20Compliance/img-header-Data%20and%20compliance.png",
    title: "Data security & Compliance",
    btn: "ASK AN EXPERT",
    cate: "Terms",
  };
  const protocolsData = [
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201308.svg",
      title: "Disablement of USB ports and optical drives.",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201256.svg",
      title:
        "Server options for VLANs, physically segregated network partitions and MPLS links.",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201261.svg",
      title: "Regular patch updates.",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201306.svg",
      title: "Symantec End Point Protection with a central management server.",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201257.svg",
      title: "Fully redundant network infrastructure with automatic fail-over.",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201259.svg",
      title:
        "Prohibition of unauthorized activities such as using personal ICT equipment.",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201263.svg",
      title: "Encryption of hard drives.",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201260.svg",
      title:
        "Installation of approved anti-virus software on all Windows-based systems.",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201262.svg",
      title: "Multi-factor authentication.",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201255.svg",
      title:
        "Unified threat management devices with fully adjustable data and content filtering.",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201258.svg",
      title:
        "Information security policies prohibiting unlawful activities and unauthorized commercial use of systems.",
    },
  ];
  const revoeryData = [
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201273.svg",
      title: "98% uptime guarantee (SLA)",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201274.svg",
      title: "Backup generators",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201275.svg",
      title: "Multiple internet connections from tier-1 providers",
    },
    {
      ico: "https://www.microsourcing.com/hubfs/MicroSourcing/Icons/Group%201276.svg",
      title:
        "24/7 IT support on-site with MCP, CCNA, Network+ and Server+ certifications.",
    },
  ];

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
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-16">
        <div className="flex flex-col items-center gap-8 rounded-lg bg-[#f4fafc] py-10 text-center shadow-lg">
          <h1 className="w-[80%] font-outfit text-4xl text-[#50aab2]">
            At Montazzo, we understand the critical importance of keeping your
            sensitive information secure when sending it overseas.
          </h1>
          <p className="w-1/2">
            Our robust data security and stringent compliance controls are
            ingrained into every aspect of our service delivery model.
          </p>
        </div>
      </div>

   

      <div className="mx-auto flex max-w-7xl flex-col gap-14 bg-[#f4fafc] px-5 py-10 md:px-16 md:py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="font-sans text-4xl font-semibold">
            IT data privacy protocols and standards
          </h1>
          <p className="w-1/2">
            As our employees work across in-center, hybrid and remote work
            setups, all of our workstations are fully customizable to client
            requirements with the following IT security features.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {protocolsData.map((data, index) => (
            <Card key={index} ico={data.ico} desc={data.title} />
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 py-10 md:px-16 md:py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="font-sans text-4xl font-semibold">
            Business continuity and disaster recovery
          </h1>
          <p className="w-1/2">
            Montazzo recognizes the importance of business continuity and
            disaster recovery management. Every Montazzo facility provides 100%
            infrastructure redundancy and world-class business continuity
            processes, including:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {revoeryData.map((data, index) => (
            <Card key={index} ico={data.ico} desc={data.title} />
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 bg-[#f4fafc] px-5 py-10 md:px-16">
        <h1 className="font-outfit text-4xl">Risk management</h1>
        <p className="w-[80%] text-center">
          Montazzo has implemented various risk management measures with all
          offices located in private compounds with access points monitored by
          security cameras. The office buildings in which we operate have their
          own security guards and strict protocols for the delivery of and
          extraction of assets, and entry of people.
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl  gap-14 px-5 py-10 md:px-16 md:py-16">
        <img
          src="https://www.microsourcing.com/hubfs/MicroSourcing/About%20Us/Data%20Security%20and%20Compliance/istockphoto-1669221932.png"
          alt="img"
        />
        <div className="flex flex-col gap-5">
          <h1 className="font-outfit text-4xl">
            Remote work and work from home functionality
          </h1>
          <p>
            Montazzo understands the need for remote or work-from-home solutions
            and has implemented robust measures to ensure data security in such
            scenarios. We take a client-centric approach, providing
            connectivity, staff deployment, office space and hardware, while
            clients equip their offshore staff with necessary tools and systems
            - keeping client data under their control.
          </p>
          <p>
            We work with our clients to implement industry best practices for
            remote setups, including access controls and compliance with
            regulations like HIPAA, PCI DSS and emergency protocols. Our
            customizable solutions enable secure remote operations while
            prioritizing client data protection.
          </p>
        </div>
      </div>

      <div>
        <BuildTeam />
      </div>
    </div>
  );
};

export default DataSecurity;
