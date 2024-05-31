import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import sectionImg from "./profile.png";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const MediaCommunications = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1490181731.png?width=828&height=465&name=iStock-1490181731.png",
    title: "Media & communications outsourcing to the Philippines",
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
          Looking to Embrace Outsourcing to the Philippines for Your Media &
          Communications Services?
        </h1>
        <p>
          Before you choose your offshore provider, here's what you need to
          know...
        </p>

        <h1>What is Media and Communications Outsourcing?</h1>
        <p>
          Media and communications outsourcing involves engaging a third-party
          organization to perform certain media and communications tasks that
          would otherwise be done onshore. These tasks could be anything from
          digital marketing, graphic design, web development, and multimedia
          design, to name a few.
        </p>
        <p>
          To understand how you can take advantage of outsourcing solutions,
          it’s important to know what is happening in these markets to ensure
          you invest in the right business solution for you.
        </p>
        <p>
          The global media and communications market is expected to grow from
          $1.7 billion in 2020 to $2.67 billion in 2025, with a compound annual
          growth rate (CAGR) of 9.3%. Then, from 2025 to 2030, the market is set
          to reach $4.4 billion with a CAGR of 10.6%. This is largely attributed
          to the change in media consumption patterns due to the increase in
          streaming services, the introduction of new genres, and more diverse
          content.
        </p>
        <p>
          Outsourcing media and communications roles can free up time for your
          onshore team to perform more value-adding activities and identify
          media and communications strategies that will allow you to capitalize
          on the anticipated market growth.
        </p>

        <h1>
          Why is the Media and Communications Industry Well-Suited to
          Outsourcing?
        </h1>
        <p>
          The media and communications industry is heavily dependent on
          information streams and media development to reach target audiences
          and grab the desired consumer attention. To do so, businesses invest a
          lot of money into their marketing, research, and development teams to
          attract the right customers and get back the money they invested
          initially in campaigns and events, often at the desired profit.
        </p>
        <p>
          An ideal investment would be 5% - 10% of revenue to go into media and
          communications services for your business. This can be quite a
          significant amount for businesses to invest with no guaranteed ROI.
          Considering this figure doesn’t include employment costs or software
          maintenance, outsourcing is a solution many businesses undertake to
          reduce overheads to maintain the level of investment required to
          achieve growth.
        </p>
        <p>
          Your business could save up to 70% on employment spending alone with
          outsourcing to the Philippines due to the lower living costs.
        </p>
        <p>
          On top of this, media and communications employees require certain
          qualifications and communication skills to create quality content
          effectively. There are over 33 colleges and universities offering
          marketing qualifications, degrees, and courses in media and
          communication within the Philippines.
        </p>
        <p>
          A majority of tasks associated with the media and communications
          industry can be digitally completed. These tasks require software and
          computer programs to create the content, organize data, and engage
          with consumers. These services can be cloud-based, meaning that
          businesses can easily liaise and communicate with their offshore team,
          from delegating tasks to managing productivity. The combination of
          cloud remote work and offshoring can make it feel like your team is
          right there with you, not thousands of kilometers away.
        </p>

        <h1>What Media and Communication Roles and Tasks Can Be Outsourced?</h1>
        <p>
          Some popular roles outsourced in the media and communications industry
          include:
        </p>
        <ul className="grid md:grid-cols-3">
          <li>Advertising Executive</li>
          <li>SEM Specialist</li>
          <li>PR Executive</li>
          <li>Copywriter</li>
          <li>Marketing Executive</li>
          <li>Administrative or Virtual Assistant</li>
          <li>Multimedia Designer</li>
          <li>Web Developer</li>
          <li>Content Writer</li>
          <li>Social Media Specialist</li>
          <li>Technical Writer</li>
          <li>Content Moderator</li>
          <li>Digital Marketing Specialist</li>
          <li>SEO Specialist</li>
          <li>UI/UX Designer</li>
          <li>Graphic Designer</li>
        </ul>
      </div>
      <div className="flex flex-col gap-10 bg-[#f1f4f6] px-5 py-10 md:px-16 md:py-16">
        <h1 className="text-center font-outfit text-4xl font-bold md:text-5xl">
          Sample marketing and communications employee profiles
        </h1>
        <p className="text-center">
          At MicroSourcing, we have more than 4,500 media and communications
          specialists in our candidate database, and access to more than an
          additional 6,000 across the Philippines. So we’re well equipped to
          build your outsourcing team. Here are a few examples of real candidate
          profiles:
        </p>
        <img src={sectionImg} alt="" />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default MediaCommunications;
