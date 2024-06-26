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
    title: "Why outsource to the India?",
    desc: "To effectively lower costs and boost growth, businesses often turn to offshore teams in the India.",
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
      <div className="mx-10 my-5 border-b-2 border-t-2 border-[#ece6e6] px-5 py-10 text-center md:px-16 max-w-7xl mx-auto">
        <h1 className="font-outfit text-2xl font-semibold ">
          Curious why the India has become a top outsourcing destination?
        </h1>
        <p className="pt-2 font-dmsans ">
          Here are the primary reasons organizations choose to outsource to this
          vibrant and dynamic country.
        </p>
      </div>
      <div className="py-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-5 px-5 py-10 md:flex-row md:gap-10 md:px-16">
          <img className="object-cover" src={icon1} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              1. Indians speak English to a high standard
            </h1>
            <p className="font-dmsans">
            Indian professionals are known for their high standard of English proficiency, a result of rigorous education systems that emphasize English language skills from an early age. This linguistic capability facilitates seamless communication in global business environments, enhancing their value in outsourcing and international collaborations.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 bg-[#f6fafd] px-5 py-10 md:flex-row-reverse md:gap-10 md:px-16">
          <img className="object-cover" src={icon2} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              2. The India produce highly-skilled graduates
            </h1>
            <p className="font-dmsans">
              The India has outstanding universities and a young
              population, producing hundreds of thousands of highly motivated
              graduates every year with college degrees that meet international
              education standards. With legal, financial, and government systems
              similar to those in the United States, Indian professionals are
              familiar with Western business practices, making it easy for
              Western companies to work with them.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 px-5 py-10 md:flex-row md:gap-10 md:px-16">
          <img className="object-cover" src={icon3} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              3. Indians have a strong work ethic
            </h1>
            <p className="font-dmsans">
              Indian teams are highly valued by business owners because of
              their exceptional work ethic, integrity, loyalty and
              service-oriented mindset. They create a friendly work environment,
              respect time and individuals and value professionalism. Indians
              balance fun and responsibility while remaining respectful in
              workplace interactions with managers, colleagues and clients. They
              remain calm under pressure and possess a positive attitude towards
              work, which contributes to the success of outsourcing teams in the
              India.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 bg-[#f6fafd] px-5 py-10 md:flex-row-reverse md:gap-10 md:px-16">
          <img className="object-cover" src={icon4} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              4. The Indian government supports companies that outsource
            </h1>
            <p className="font-dmsans">
              The Indian government is highly supportive of the outsourcing
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

        <div className="flex flex-col items-center gap-5  px-5 py-10 md:flex-row-reverse md:gap-10 md:px-16">
          <img className="object-cover" src={icon1} alt="icon" />
          <div className="flex flex-col gap-4 md:gap-7">
            <h1 className="font-outfit text-3xl font-normal md:text-5xl">
              5. The India has a lower cost of living and labor
            </h1>
            <p className="font-dmsans">
              By collaborating with a reliable outsourcing provider in the
              India, businesses can achieve significant cost savings of up
              to 70% on employment expenses, without compromising on the quality
              of talent and work output. The India has a relatively low
              cost of living, and by outsourcing to the country, businesses can
              not only save costs but also improve the lives of their Indian
              staff. The outsourcing industry has created many long-term,
              fulfilling career opportunities for the local population, who may
              not have had access to such opportunities otherwise.
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-16 flex flex-col items-center gap-10 py-10 max-w-7xl mx-auto">
        <h1 className="font-outfit text-4xl font-bold text-center">Best skills and qualities of Indian employees</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {
            cardsData.map((card, index) => (
              <Card key={index} title={card.title} ico={card.ico} />
            ))
          }
        </div>
      </div>
      <div className="px-5 md:px-16  bg-[#f6fafd] py-10 md:py-16 ">
        <div className="flex flex-col-reverse gap-5 items-center md:flex-row-reverse max-w-7xl mx-auto">
        <img src="https://www.microsourcing.com/hubfs/MicroSourcing/why-the-philippines/How%20to%20hire%20FIlipino%20staff.png" alt="employees" />
        <div className="flex flex-col gap-2 font-dmsans ">
          <h1 className="font-outfit text-4xl md:text-5xl">How to hire Indian staff</h1>
          <p>To effectively hire offshore Indian staff: </p>
          <ul className="pt-5 list-inside list-disc">
            <li>Clearly define your needs and expectations</li>
            <li>Partner with a reputable outsourcing provider that offers recruitment and HR support</li>
            <li>Conduct rigorous interviews and tests to ensure the candidates have the required skills and fit your company culture</li>
            <li>Provide comprehensive onboarding and ongoing training to bridge any cultural or language gaps</li>
            <li>Establish regular communication and feedback channels to build a strong working relationship and ensure expectations are met.</li>
          </ul>
        </div>
        </div>
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default whyThePhilippines;
