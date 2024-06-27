import React from "react";
import hero from "../../../../assets/banner-img/ms-banner-how-offshoring-works.jpg";
import heroRes from "../../../../assets/banner-img/ms-banner-how-offshoring-works-m.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";
import icon1 from "../../../../assets/icons/How does offshoring work-01_dark.png";
import icon2 from "../../../../assets/icons/How does offshoring work-02_dark.png";
import icon3 from "../../../../assets/icons/How does offshoring work-03_dark.png";
import Card from "../../../Card/Card";
import "./HowOffshoringWorks.css";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";
import checkIco from "../../../../assets/icons/pngegg.png";

const HowOffshoringWorks = () => {
  const heroBanner = {
    title: "How Does Offshoring Work?",
    desc: "It’s your team. With offshore staffing, you have full visibility and control, without having to worry about facilities, operations and regulations.",
    img: hero,
    imgRes: heroRes,
  };
  const cardData = [
    {
      title: "COLLABORATE",
      ico: icon1,
      desc: "We discuss your offshore resourcing requirements",
    },
    {
      title: "RECRUIT",
      ico: icon2,
      desc: "We recruit and employ your offshore team",
    },
    {
      title: "SUPPORT",
      ico: icon3,
      desc: "We support the operations of your offshore team",
    },
  ];
  return (
    <div>
      <div>
        <HeroBanner
          title={heroBanner.title}
          desc={heroBanner.desc}
          img={heroBanner.img}
          imgRes={heroBanner.imgRes}
        />
      </div>
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cardData.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              ico={data.ico}
              desc={data.desc}
            />
          ))}
        </div>
        <p className="pt-10 text-center font-dmsans">
          Offshoring is a type of outsourcing where you create an extension of
          your business or team in another country. There are a few traditional
          models of offshoring, but here at Montazzo, we provide a unique
          solution.
        </p>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-10 md:px-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <img className="size-36" src={icon1} alt="icon" />
            <div className="flex flex-col items-center md:items-start md:gap-5">
              <h5 className="bg-[#50aab2] px-8 py-3 font-outfit font-bold text-white">
                STEP 1
              </h5>
              <h1 className="text-center font-outfit text-4xl md:text-left md:text-6xl">
                We discuss your offshore resourcing requirements
              </h1>
            </div>
          </div>
          <div className="step-desc">
            <p>
              How do you know if your business is offshore ready? Due to the
              remote work nature of offshoring, you need certain systems and
              processes in place to be able to work with an offshore team. So,
              ask yourself:
            </p>

            <p>Do you have:</p>
            <ul>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Access to cloud-based tools and platforms?
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Your internal processes clearly documented so it is easy to
                train new employees, or could you create some?
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                CRM’s and programs that are accessible in a remote work setting
                or a different location, such as the Indian?
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Licenses and certifications that allow you to export tasks,
                offshore and online?
              </li>
            </ul>
            <p>
              If you answered no to the questions above, your business might not
              be as ready for outsourcing as you may have originally thought.
              But, that doesn’t mean outsourcing isn’t the solution for you, it
              simply means that you may need to invest more in getting your
              business offshore ready. We are more than happy to discuss your
              business plans and provide advice on how you can get started.
            </p>

            <p>
              If you answered yes to all of these questions, then offshoring
              could be the solution for you and it’s time to begin discussions
              with one of our business development managers. In these
              discussions, we will ask you about your offshore team, IT and
              infrastructure requirements as these factors will be crucial to
              getting started.
            </p>

            <p>Questions covered include:</p>
            <ul>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Who will your offshore team members report to within your
                onshore team?
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                How many team members will our offshore staff be collaborating
                with?
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                What IT programs do you use?
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                How many offshore team members do you need and in what
                functions?
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Are you looking to reduce costs, in particular, employment
                costs?
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Are you transitioning to a remote workforce?
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                What are your business goals and objectives for this year?
              </li>
            </ul>
            <p>
              Based on these answers, we can start to customize our offshoring
              solutions to meet the individual needs of your organization.
            </p>

            <p>
              If our offshoring solution is right for you, then we discuss your
              offshore team’s job descriptions.
            </p>

            <p>
              Covering topics such as daily tasks, KPI’s, existing
              qualifications and systems knowledge, years of experience within
              similar roles and what hours of work they will be required to
              perform.
            </p>

            <p>
              These components are essential in creating your ideal offshore
              candidate profiles, which then get passed onto our recruitment
              team to understand the costs of setting up your offshore team. We
              will then share a transparent and fully itemized cost proposal
              outlining the costs associated with your offshore team so you can
              then determine if our offshoring solution fits your business
              requirements.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <img className="size-36" src={icon2} alt="icon" />
            <div className="flex flex-col items-center md:items-start md:gap-5">
              <h5 className="bg-[#50aab2] px-8 py-3 font-outfit font-bold text-white">
                STEP 2
              </h5>
              <h1 className="text-center font-outfit text-4xl md:text-left md:text-6xl">
                We recruit and employ your offshore team
              </h1>
            </div>
          </div>
          <div className="step-desc">
            <p>
              In step two, we take a look at the job descriptions you’ve created
              for your offshore team. These job descriptions include ideal
              qualifications, level of experience, systems knowledge and any
              additional qualities you feel would be necessary for us to recruit
              the right person for the job. Just as you would write the job
              descriptions for your onshore team, you’d do the same for your
              offshore staff. After we’ve analyzed those requirements, we then
              provide feedback to ensure that they will attract the best Indian
              talent for the role. By supporting you with this process, we are
              able to confidently source suitable candidates from the local
              market and our database of more than 275,000 applicants. We then
              present our shortlist to you to select the staff that best suit
              your business, company culture and individual team dynamics.
              Naturally, you can screen and interview the candidates exactly as
              you would when hiring locally.
            </p>

            <p>
              Once you’ve selected the right people for your team, we will then
              set them up within one of our seven modern, state-of-the-art
              facilities located in Manila. This process includes organizing all
              infrastructure requirements like setting up their desk spaces and
              ensuring appropriate IT systems and hardware are ready for them to
              use on their first day. We also assist with organizing any
              software licenses or security controls to make sure they can
              communicate with your onshore team effectively.
            </p>

            <p>
              If you have any concerns about technical or logistical challenges
              that may arise along the way, we can provide expert guidance as we
              will be there step-by-step throughout the setup.
            </p>
{/* 
            <p>
              In summary, your new team should be ready to begin work in as
              little as six weeks after you engage us. Why not check out our HQ
              office facilities for yourself…
            </p> */}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <img className="size-36" src={icon3} alt="icon" />
            <div className="flex flex-col items-center md:items-start md:gap-5">
              <h5 className="bg-[#50aab2] px-8 py-3 font-outfit font-bold text-white">
                STEP 3
              </h5>
              <h1 className="text-center font-outfit text-4xl md:text-left md:text-6xl">
                We support the operation of your offshore team
              </h1>
            </div>
          </div>
          <div className="step-desc">
            <p>
              Once we have your team set up on our side, it’s then time for you
              to start organizing their onboarding and training including things
              like how to use your systems, what processes and workflows they
              need to use and overall company culture and history to help them
              feel as much a part of your business success as possible.
            </p>

            <p>
              When you are satisfied that they are up to speed with all of the
              onboarding requirements, it’s time to start assigning them tasks
              and managing their work in progress. You will be able to delegate,
              coordinate and organize all of the tasks your offshore team does,
              the same way you would for your onshore team.
            </p>

            <p>
              But, you’re not expected to manage your offshore team alone. We
              support your offshore management team on an operational level.
              This involves the following:
            </p>
            <ul>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                IT deployment and support
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                KPI development and performance management
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Ensure staff productivity levels are high through monitoring
                work habits
              </li>
              <li className="flex items-center gap-3">
                Employee engagement activities
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Proactive advice and best practices on optimizing overall
                performance
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Management of Indian-specific legal and compliance matters
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Ongoing recruitment, HR, payroll, facilities management and IT
                support
              </li>
              <li className="flex items-center gap-3">
                <img className="size-4" src={checkIco} alt="" />
                Expat settlement assistance
              </li>
            </ul>
            <p>
              While we handle all of this, you retain as much control of quality
              and productivity as you would like. In other words, we take care
              of everything on the ground, enabling you to focus purely on the
              business processes you want to run out of the Indian.
            </p>

            <p>
              It’s important to note that for your offshore team to work, you
              need to put in the time and effort to train them up and get them
              across all of your systems and processes. What our offshore
              management team does is provide the back-end support to facilitate
              this. If you don’t invest in establishing, developing and
              maintaining your offshore team, then your offshore investments may
              not be as successful as they could be.
            </p>

            <p>
              Learn more about how you can work with your offshore team to
              achieve your business objectives…
            </p>
          </div>
        </div>
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default HowOffshoringWorks;
