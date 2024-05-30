import React from "react";
import hero from "../../../../assets/banner-img/ms-banner-why-the-philippines.jpg";
import heroRes from "../../../../assets/banner-img/ms-banner-why-the-philippines-m.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";
import icon1 from "../../../../assets/icons/1.png";
import icon2 from "../../../../assets/icons/2.png";
import icon3 from "../../../../assets/icons/3.png";
import icon4 from "../../../../assets/icons/4.png";
import icon5 from "../../../../assets/icons/5.png";
import icon6 from "../../../../assets/icons/6.png";

import strong from '../../../../assets/icons/strong-work-ethic.png';
import commitment from '../../../../assets/icons/commitment-to-quality.png';
import exceptional from '../../../../assets/icons/exceptional-communication-skills.png';
import adaptable from '../../../../assets/icons/adaptible.png';
import creative from '../../../../assets/icons/creative.png';
import positive from '../../../../assets/icons/positive-attitude-to-work.png';
import technical from '../../../../assets/icons/technical-aptitude.png';
import willingness from '../../../../assets/icons/willingness-to-learn-and-contribute.png';
import Card from '../../../Card/Card';
import GetInTouch from '../../../Sections/GetInTouch/GetInTouch';

const whyThePhilippines = () => {
  const heroBanner = {
    title: "Why outsource to the Philippines?",
    desc: "To effectively lower costs and boost growth, businesses often turn to offshore teams in the Philippines.",
    img: hero,
    imgRes: heroRes,
  };
  const cardsData = [
    {
      title: 'Strong work ethic',
      ico: strong,
    }, 
    {
      title: 'Commitment to quality',
      ico: commitment,
    }, 
    {
      title: 'Exceptional communication skills',
      ico: exceptional,
    }, 
    {
      title: 'Adaptable',
      ico: adaptable,
    }, 
    {
      title: 'Creative',
      ico: creative,
    }, 
    {
      title: 'Positive attitude to work',
      ico: positive,
    }, 
    {
      title: 'Technical aptitude',
      ico: technical,
    }, 
    {
      title: 'Willingness to learn and contribute',
      ico: willingness,
    }
  ]
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
      <div className="mx-10 my-5 border-b-2 border-t-2 border-[#ece6e6] px-5 py-10 text-center md:px-16">
        <h1 className="font-outfit text-2xl font-semibold ">
          Curious why the Philippines has become a top outsourcing destination?
        </h1>
        <p className="pt-2 font-dmsans ">
          Here are the primary reasons organizations choose to outsource to this
          vibrant and dynamic country.
        </p>
      </div>
      <div className="py-10">
        <div className="flex flex-col items-center gap-5 px-5 py-10 md:flex-row md:gap-10 md:px-16">
          <img className="object-cover" src={icon1} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              1. Filipinos speak English to a high standard
            </h1>
            <p className="font-dmsans">
              Education First's 2021 English Proficiency Index(1) ranked the
              Philippines as the 18th most English-proficient country out of 122
              surveyed, and second only to Singapore in Asia. English is one of
              the official languages in the Philippines, and it's used in the
              country's educational systems and institutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 bg-[#f6fafd] px-5 py-10 md:flex-row-reverse md:gap-10 md:px-16">
          <img className="object-cover" src={icon2} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              2. The Philippines produce highly-skilled graduates
            </h1>
            <p className="font-dmsans">
              The Philippines has outstanding universities and a young
              population, producing hundreds of thousands of highly motivated
              graduates every year with college degrees that meet international
              education standards. With legal, financial, and government systems
              similar to those in the United States, Filipino professionals are
              familiar with Western business practices, making it easy for
              Western companies to work with them.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 px-5 py-10 md:flex-row md:gap-10 md:px-16">
          <img className="object-cover" src={icon3} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              3. Filipinos have a strong work ethic
            </h1>
            <p className="font-dmsans">
              Filipino teams are highly valued by business owners because of
              their exceptional work ethic, integrity, loyalty and
              service-oriented mindset. They create a friendly work environment,
              respect time and individuals and value professionalism. Filipinos
              balance fun and responsibility while remaining respectful in
              workplace interactions with managers, colleagues and clients. They
              remain calm under pressure and possess a positive attitude towards
              work, which contributes to the success of outsourcing teams in the
              Philippines.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 bg-[#f6fafd] px-5 py-10 md:flex-row-reverse md:gap-10 md:px-16">
          <img className="object-cover" src={icon4} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              4. The Philippine government supports companies that outsource
            </h1>
            <p className="font-dmsans">
              The Philippine government is highly supportive of the outsourcing
              industry and provides strong infrastructure and support for
              outsourcing companies and businesses setting up an offshore team.
              They have implemented initiatives such as partnerships with
              universities to prepare the future BPO workforce, a voucher system
              for call center training, tax and non-tax incentives to support
              foreign investment and the creation of a national Information and
              Communications Technology Council.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 px-5 py-10 md:flex-row md:gap-10 md:px-16">
          <img className="object-cover" src={icon5} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              5. Filipinos are culturally compatible with Western ways of
              working
            </h1>
            <p className="font-dmsans">
              The Philippines has been colonized by several foreign countries in
              the past, such as Spain, the United States, Japan, Portugal and
              others, which has influenced their values, traditions, customs,
              behaviors and ways of life. As a result, Filipinos have adopted
              many Western cultural traditions and lifestyles, which has created
              compatibility between them and foreign cultures, making them an
              excellent choice for BPO services. Filipinos are easy to work with
              due to their warm, hospitable and customer-focused nature, thanks
              to their culturally diverse background. They are also effective
              communicators and share common interests with their foreign
              partners in the industry.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 bg-[#f6fafd] px-5 py-10 md:flex-row-reverse md:gap-10 md:px-16">
          <img className="object-cover" src={icon1} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              6. The Philippines has a lower cost of living and labor
            </h1>
            <p className="font-dmsans">
              By collaborating with a reliable outsourcing provider in the
              Philippines, businesses can achieve significant cost savings of up
              to 70% on employment expenses, without compromising on the quality
              of talent and work output. The Philippines has a relatively low
              cost of living, and by outsourcing to the country, businesses can
              not only save costs but also improve the lives of their Filipino
              staff. The outsourcing industry has created many long-term,
              fulfilling career opportunities for the local population, who may
              not have had access to such opportunities otherwise.
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-16 flex flex-col items-center gap-10 py-10">
        <h1 className="font-outfit text-4xl font-bold text-center">Best skills and qualities of Filipino employees</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {
            cardsData.map((card, index) => (
              <Card key={index} title={card.title} ico={card.ico} />
            ))
          }
        </div>
      </div>
      <div className="px-5 md:px-16 flex flex-col-reverse gap-5 bg-[#f6fafd] py-10 md:py-16 items-center md:flex-row-reverse">
        <img src="https://www.microsourcing.com/hubfs/MicroSourcing/why-the-philippines/How%20to%20hire%20FIlipino%20staff.png" alt="employees" />
        <div className="flex flex-col gap-2 font-dmsans ">
          <h1 className="font-outfit text-4xl md:text-5xl">How to hire Filipino staff</h1>
          <p>To effectively hire offshore Filipino staff: </p>
          <ul className="pt-5 list-inside list-disc">
            <li>Clearly define your needs and expectations</li>
            <li>Partner with a reputable outsourcing provider that offers recruitment and HR support</li>
            <li>Conduct rigorous interviews and tests to ensure the candidates have the required skills and fit your company culture</li>
            <li>Provide comprehensive onboarding and ongoing training to bridge any cultural or language gaps</li>
            <li>Establish regular communication and feedback channels to build a strong working relationship and ensure expectations are met.</li>
          </ul>
        </div>
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default whyThePhilippines;
