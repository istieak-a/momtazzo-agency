import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import sectionImg from "./profile (2).png";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const LegalServices = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/industry-legal-services-banner.png?width=828&height=465&name=industry-legal-services-banner.png",
    title: "Legal services outsourcing to the Philippines",
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
      <div className="section-margin mx-5 my-3 border-b-2 border-t-2 text-center md:mx-16">
        <p>
          Looking into offshoring your legal services? With increasing pressure
          on firms to cut costs, improve services, and boost efficiency, you can
          expect to see more legal process outsourcing to the Philippines.
          Before you get started, here’s what you need to know…
        </p>
      </div>
      <div className="section-container">
        <h1>
          Legal Firms Are “Vulnerable” and Need to Change Their Operating Model
        </h1>
        <p>
          That’s one of the main findings from a joint report by Thomson Reuters
          and the Center on Ethics and the Legal Profession at Georgetown
          University Law.
        </p>
        <p>
          The report cites competition as a game changer, with alternative legal
          service providers (ALSP) proving to be formidable competitors in what
          Thomson Reuters says is now a buyer’s market.
        </p>
        <p>
          That means thinking differently about how your business is structured.
          “Firms wanting to be vital and solvent are overhauling how they do
          business. Smart firms have already retooled,” writes Legal Marketing &
          Business Development Consultant Heather Suttie.
        </p>
        <p>
          As you well know, there’s a lot of downward fee pressure that’s
          particularly challenging for smaller firms. Clients are looking to
          minimize costs wherever possible.
        </p>
        <p>
          Technology can certainly help. Artificial intelligence (AI), for
          instance, can be utilized to conduct document reviews that previously
          took junior lawyers many hours of work. But “new technology alone, no
          matter how transformative, is not enough to propel a business
          forward,” says Mark Johnson, chairman of Innosight, a strategic
          innovation consulting and investing company.
        </p>
        <p>
          Whether you’re operating in a law firm environment or as an
          alternative legal services provider, only those who provide truly
          client-centered services will survive into the next decade. “Legal
          buyers – not firms – are driving industry change,” says legal business
          consultant Mark A. Cohen.
        </p>
        <p>
          How are they doing that? By being strategic about how they spend their
          money – separating legal practice from legal services, using data, and
          taking a broader perspective when it comes to utilizing people with
          process, project management, technological, business, and other
          necessary skills.
        </p>
        <p>
          They also expect that kind of cost-effectiveness from their legal
          service providers. While clients don’t mind paying for high value
          legal advice, they don’t want to pay top dollar for the process work.
          “Low cost centers are a major factor in law firms wanting to win new
          clients and retain current ones,” Ms Suttie explains. “It has become a
          client expectation that a firm will have a low cost center – either
          on-shore or offshore – operating as a back office for commodity work.”
        </p>
        <p>
          And that’s exactly what many firms have done, disaggregating services,
          taking components such as finance, IT, compliance and process-based
          legal tasks to offshore locations. Offshoring legal services allows
          them to lower the cost of doing business, maintain profit margins in
          an increasingly competitive market, and deliver on clients’
          expectations.
        </p>

        <h1>Why is the Legal Services Industry Suited to Offshoring?</h1>
        <p>
          Fortunately for legal service providers, it’s an industry that’s
          particularly well suited to offshoring, because:
        </p>
        <ul>
          <li>
            Although the rapid pace of change has created a somewhat unique set
            of circumstances, legal process outsourcing (LPO) is not new as a
            concept. In fact the legal sector has been outsourcing tasks like
            document review and patent searches for over half a century. The
            practice is culturally accepted and supported by peak professional
            organizations.
          </li>
          <li>
            While technology isn’t the answer on its own, it can certainly
            facilitate implementation of a wide range of strategies, including
            offshoring. Most legal service providers are already utilizing legal
            sector software, document automation, and secure communication
            infrastructure that now make the physical location of certain teams
            largely irrelevant.
          </li>
          <li>
            Successful offshore providers necessarily prioritize cybersecurity
            and privacy measures as part of their business model, further
            minimizing your risk of data breach.
          </li>
          <li>
            A lot of the work can be done at any time – not just in business
            hours (although a good provider will give you access to people who
            can work your hours if you want).
          </li>
        </ul>
        <p>
          Legal process outsourcing to the Philippines just makes good business
          sense.
        </p>

        <h1>Frequently Offshored Legal Services Roles</h1>
        <p>
          Some of the more frequently offshored legal services roles include:
        </p>
        <ul className="link-li grid md:grid-cols-2">
          <li>Legal Transcriptionist</li>
          <li>Paralegal</li>
          <li>Legal Secretary</li>
          <li>Lawyer (Corporate, CPA, General Practitioner)</li>
          <li>Legal Assistant</li>
          <li>Liaison Officer</li>
        </ul>
      </div>
      <div className="section-container bg-[#f1f4f6]">
        <h1>Sample engineering and construction employee profiles</h1>
        <p>
          At MicroSourcing, we have more than 6,100 engineering and construction
          specialists in our candidate database, and access to more than an
          additional 4,500 across the Philippines. Here are a few examples of
          real candidate profiles:
        </p>
        <img src={sectionImg} alt="profile" />
      </div>
      <div className="section-margin flex flex-col items-center gap-10">
        <h1 className="font-outfit text-5xl">MicroSourcing clients by industry</h1>
        <p className=" text-center px-20">
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

export default LegalServices;
