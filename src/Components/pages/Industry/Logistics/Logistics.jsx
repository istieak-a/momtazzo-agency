import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import sectionImg from './profile.png'
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const Logistics = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1149078028.png?width=828&height=465&name=iStock-1149078028.png",
    title: "Logistics outsourcing to the Philippines",
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
        <h1>Outsourcing Transport and Logistics Jobs</h1>
        <p>
          Outsourcing transport and logistics jobs is becoming increasingly
          common. Before you start outsourcing your warehouse operations to the
          Philippines, here’s what you need to know…
        </p>
        <p>
          The transport, postal and warehousing industry is a significant
          contributor to the global economy. In Australia, for instance, the
          gross value added (GVA) was AUD$20.5 billion for 2017-18.
        </p>
        <p>
          At the same time, the industry is very sensitive to global factors
          outside individual operators’ control. Fuel prices, disruptions to
          international trade, distribution channels and supply chains, climate
          change, wages, labor and safety regulations, data protection
          requirements, and trade instability all present challenges that must
          be met head-on by the sector and carry a significant up-front cost.
        </p>
        <p>
          And, as with many other industries, one of the biggest disruptors has
          been technology. It’s affected all aspects of the business, in every
          imaginable way. Communications, vehicle design, big data and
          forecasting, connectivity, automation, satellite tracking – you name
          it, it’s made a tangible difference in day-to-day operations.
        </p>
        <p>
          Consumer behavior and expectations have changed dramatically in the
          digital era, and the industry has responded accordingly. The advent of
          online shopping, for instance, has been a boon in many ways as
          millions of purchases are shuttled daily between vendors and buyers.
        </p>
        <p>
          But again – those who fail to keep up won’t be able to meet customer
          standards with everything from online tracking to last mile delivery.
        </p>
        <p>
          Meanwhile, the on-the-ground industry workforce is aging, and you need
          resources to invest in attracting new workers, training them, and
          retaining them. Furthermore, the modern world requires industry
          employees to possess skills their predecessors didn’t. Not only do you
          need the money to access the latest systems, but also the people to
          run and maintain them.
        </p>
        <p>
          So, while the work is there, it requires agility to pivot according to
          the latest opportunities and obstacles, an openness to innovation, and
          a lean, efficient operation in order to invest in future-proofing,
          manage your outgoings and still turn a profit.
        </p>
        <p>
          Outsourcing warehouse operations or even just a few of your positions
          can allow you to acquire the talent you need around technology and
          greater cost-effectiveness. You can outsource transport and logistics
          from customer service representatives, purchasing and supply logistics
          clerks to distribution and procurement managers, sales, and a range of
          other positions that can be carried out remotely.
        </p>
        <p>
          That will give you the capacity to grow and take advantage of
          increased opportunities, while freeing up capital to invest in
          innovation and technology, and maintain profit margins.
        </p>

        <h1>
          Why is the transport, postal and warehousing industry suited to
          offshoring?
        </h1>
        <p>
          Fortunately for the transport, postal and warehousing businesses, it’s
          an industry that’s particularly well suited to offshoring, because:
        </p>
        <ul>
          <li>
            Your business structure already allows for communication between
            staff on the ground and back office support. The location of that
            support team is irrelevant.
          </li>
          <li>
            The industry is now performing many functions around, for example,
            supply chain management and logistics, finance, customer relations,
            and many other components of the business using cloud-based
            software, which is available via any browser. Again, that means the
            team undertaking those tasks can be anywhere in the world.
          </li>
          <li>
            The industry doesn’t keep regular business hours. In fact, it
            operates 24/7. That makes timezones immaterial. You need people
            round the clock (and when you outsource warehouse operations to the
            Philippines, you can afford it).
          </li>
        </ul>
        <p>
          Outsourcing transport and logistics just makes good business sense.
        </p>

        <h1>Frequently Outsourced Transport, Postal and Warehousing Roles</h1>
        <p>
          Some of the more frequently offshored transport, postal and
          warehousing roles include:
        </p>
        <ul className="grid md:grid-cols-2">
          <li>Asset Management Specialist</li>
          <li>Logistics and Transport Coordinator</li>
          <li>Logistics and Warehouse Coordinator</li>
          <li>Purchasing and Supply Logistics Clerks/ Assistants</li>
          <li>Procurement Specialist</li>
          <li>Supply and Distribution Coordinator</li>
          <li>General Customer Service Representatives</li>
          <li>Administrative Assistant</li>
          <li>Data Analyst/ Encoders</li>
        </ul>
      </div>
      <div className="bg-[#f1f4f6] px-5 md:px-16 py-10 md:py-16 flex flex-col gap-10">
        <h1 className="text-center font-outfit font-bold text-4xl md:text-5xl">Sample transport, postal and warehousing employee profiles</h1>
        <p className="text-center">At MicroSourcing, we have more than 900 transport, postal and warehousing specialists in our candidate database, and access to more than an additional 3,800 individuals across the Philippines who can help with outsourcing your warehouse operations. Here are a few examples of real candidate profiles:</p>
        <img src={sectionImg} alt="" />
      </div>
      <div className="section-container ">
        <h1>MicroSourcing clients by industry</h1>
        <p>MicroSourcing has built a close affinity with the Ecommerce Industry. In fact, ECommerce is in our Top 5 Industry Sectors enjoying and mastering the benefits of offshoring. With over 320 Ecommerce professionals currently working for clients in Australia, the Americas and across Europe, we have significant experience in this Industry.</p>
        <img className="md:px-40" src="https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Learn/Resources/ms-engineering-construction-chart.png?width=1268&height=803&name=ms-engineering-construction-chart.png" alt="chart" />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default Logistics;
