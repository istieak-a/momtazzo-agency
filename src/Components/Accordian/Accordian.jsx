import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "Do you offer full time or part time?",
      content: "We offer full-time dedicated teams for clients. Our staff will work exclusively within your systems, ensuring they carry their learnings from one day to the next and provide onshore reporting directly to you and your teams. This level of commitment ensures that you receive the undivided attention it deserves. In contrast, some offshore providers offer part-time services where the staff members may be shared across multiple clients simultaneously, providing a more flexible but less dedicated approach."
    },
    {
      title: "As a client, will I have visibility over the salary and benefits of my offshore team members?",
      content: "Yes, you will have complete visibility because we prioritize transparency. You will have the final say in determining the compensation for your staff member. Our fees consist of two components: A fixed monthly service fee - per employee: covers our top-notch facilities, furnished offices, support services, IT assistance and client management. Direct employee costs: base salary and benefits - with no margin attached. We separate salaries from service costs to give you control over compensation. The salary component of your fee goes directly to your staff without any markup. This transparency not only provides visibility into your labor costs but also allows you to discern precisely what you're paying for in terms of skills and experience."
    },
    {
      title: "Do you have an option to deliver work from home or hybrid?",
      content: "We prioritize delivering top talent and outstanding results. While our preference is for an in-office culture, we understand the importance of flexibility. That's why we offer options for both in-office and remote work arrangements, supported by advanced digital infrastructure. With our approach, you have the freedom to assemble a skilled workforce tailored to your needs, all while maintaining data security and data loss prevention. We're here to help you achieve excellence in talent and output, regardless of the work mode you choose."
    },
    {
      title: "What happens if it doesn't work out or go to plan?",
      content: "We have protocols in place to address situations where things may not go as expected. We employ performance management frameworks to ensure that any issues are addressed promptly and effectively. Regarding your partnership with Montazzo, you have the flexibility to terminate the agreement at any time with proper notice."
    },
    {
      title: "What is included in your pricing model?",
      content: "Our pricing model is designed for transparency and value. It consists of two components: A fixed monthly service fee - per employee: This fee covers access to our premium facilities, fully furnished offices, comprehensive support services, IT assistance and dedicated client management. Direct employee costs: We are transparent in our approach, separating base salaries and benefits from service costs. There are no additional margins added. The salary component of your fee is directly allocated to your staff without any markup. This transparent structure not only provides clarity on your labor costs but also enables you to precisely determine the value you receive in terms of skills and experience."
    }
  ];
  

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 md:py-20 mx-auto max-w-7xl flex flex-col items-center">
      <h2 className="text-5xl font-bold font-outfit mb-5">Frequently asked questions</h2>
      <div className='bg-white p-5 shadow-md rounded-lg'>
      {accordionData.map((item, index) => (
        <div key={index} className="mb-2 last:mb-0">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full px-10 py-5 text-left bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-blue-500"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-gray-700 text-xl">{item.title}</span>
            <span className="text-lg">
              {openIndex === index ? '-' : '+'}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="p-5 text-gray-600 bg-white rounded-lg text-xl shadow-inner">
              {item.content}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Accordion;
