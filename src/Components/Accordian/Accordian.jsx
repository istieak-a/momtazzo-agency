import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "What is a virtual assistant?",
      content:
        "Virtual assistants are individuals who provide virtual assistance services remotely. They perform various tasks such as administrative support, scheduling appointments, managing emails, conducting research, social media management, and data entry, among others. They utilize their skills, expertise, and organizational abilities to assist individuals or businesses in accomplishing their tasks and improving productivity.",
    },
    {
      title: "What does a virtual assistant do?",
      content:
        "A virtual assistant can perform just about anything as long as your business has the right tools. VAs can tackle anything from sales to customer service to administrative work — answering calls, managing inboxes, data entry, customer support, graphic design, cold-calling, number crunching, payroll, etc. If it can be done remotely on a PC, they can likely do it. Montazzo carefully evaluates your business objectives to make sure that a Virtual Assistant will meet or exceed your expectations.",
    },
    {
      title: "How much time does a virtual assistant save?",
      content:
        "Hiring a virtual assistant means you don’t need to go through a lengthy recruitment or interview process, saving you time and money.",
    },
    {
      title: "Why should I use Montazzo for virtual assistant services?",
      content:
        "Since 2008 Montazzo has delivered the highest quality virtual assistant services to businesses across the nation – including 36 of the RealTrends™ Top-100 ranked Real Estate teams in the country and several Inc 5000 and Fortune 500 companies! We value our clients & treat them all with white-glove service & support, whether you’re a startup or an established business with decades of experience. We employ a stringent talent matching process that uses detailed work experience profiling, FBI grade background checks, and even DISC personality matching to ensure you receive the most experienced, educated & skilled virtual assistant services possible. Virtual assistants cost up to 70% less than in-house staff and allow you to scale your business rapidly – our virtual assistants make our clients over $100 million a year!",
    },
    {
      title: "Will I have to train my virtual assistant?",
      content:
        "Your virtual assistant will need to be trained just as any in-house employee would. Each business is unique and there is no silver bullet to avoid having to spend time with your virtual assistant teaching them your business processes, procedures, and systems. Montazzo will give you the top 1% of talent, the tools, and the resources to make sure you hit the ground running. You will also get a copy of our e-book “Scaling Your Business With Virtual Professionals” when you have a consultation with us, which will give you the recipe to go from a single virtual assistant to having an entire team. No strings attached.",
    },
    {
      title: "How long does it take to hire a virtual assistant with Montazzo?",
      content:
        "The average time to hire an assistant in the US is roughly 30 days. At Montazzo we can provide you with multiple highly-qualified VAs to select from and hit the ground running in as little as 1 week.",
    },
    {
      title: "How does the hiring process work?",
      content:
        "We present several virtual assistants from our diverse pool of professionals, handpicked to fit your specific business needs. You then select which one(or more) you’d like to start onboarding.",
    },
    {
      title: "What services can a virtual assistant provide?",
      content:
        "A virtual assistant can provide a wide range of services to any business owner, including administrative tasks, social media management, bookkeeping, research, customer support, and other specialized tasks based on the business’s unique needs. If it can be done remotely via laptop, chances are a VA can handle it for you.",
    },
    {
      title: "How do I know if a virtual assistant is right for me?",
      content:
        "You should consider hiring a virtual assistant if you find yourself overwhelmed with tasks or struggling to manage your workload efficiently. A virtual assistant could be a cost-effective solution if you’re spending too much time on non-core business activities. Furthermore, if you want to scale your business without the numerous costs of hiring an in-house assistant, then a VA can provide the necessary support at a fraction of the cost.",
    },
    {
      title: "What makes a good virtual assistant?",
      content:
        "A virtual assistant should always have, at minimum, the typically expected skills of any assistant professional. Such as; good communication, proper time management, self-discipline and motivation, organization, confident typing abilities, and technical know-how.",
    },
    {
      title: "How challenging is it to hire a virtual assistant?",
      content:
        "Hiring a capable virtual assistant requires planning and effort. Clearly define your needs, set expectations, and leverage online platforms or agencies to find qualified candidates. Invest time in thorough interviewing and reference checks to ensure a successful match. The long-term benefits of increased productivity and time freedom for your business growth often outweigh the initial effort.",
    },
    {
      title: "Are there any tasks virtual assistants can’t do?",
      content:
        "Virtual professionals are remote working professionals, so tasks requiring a physical presence, like picking up an order or greeting customers at the door would of course be impossible. However, for most administrative, technical, customer service, and creative tasks, virtual assistants can be fantastic remote partners.",
    },
    {
      title:
        "Can virtual assistants provide more than just administrative tasks?",
      content:
        "Virtual assistants transcend mere administrative support. Imagine a skilled, remote extension of your team, adept at managing social media channels, conducting in-depth research, crafting compelling content, and even wielding graphic design magic. By delegating diverse tasks, you regain focus on your business core, leaving the rest to your versatile VA partner.",
    },
    {
      title: "What tasks should I outsource to my virtual assistant first?",
      content:
        "Free up your day by handing off email management, calendar wrangling, and meeting logistics to your VA. Let them research and book travel, handle social media scheduling, and tackle basic data entry. These are some of the most common initial tasks virtual assistants are utilized for, allowing you to save your precious time for the work that truly demands your focus.",
    },
    {
      title: "When should I hire a virtual assistant?",
      content:
        "The perfect timing depends on your unique needs. Hire a VA if you’re drowning in admin tasks, missing deadlines, or sacrificing growth due to time constraints. Even a small business can benefit if you lack specialized skills or simply want to focus on higher-level work. Don’t wait until you’re overwhelmed; be proactive, not reactive.",
    },
    {
      title:
        "Which industries benefit from virtual assistant services the most?",
      content:
        "Industries that see the most value in virtual assistant services are customer service, tech, marketing, sales, real estate, HR, insurance, etc. The list goes on. Businesses in any industry with work to be done digitally and remotely are a great fit for VA services!",
    },
    {
      title: "How does pricing work?",
      content:
        "Our clients pay us a flat monthly rate, and we pay our virtual assistants ourselves, as well as handle all insurance, benefits, and PTO.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center py-10 md:py-20">
      <h2 className="mb-5 font-outfit text-5xl font-bold">
        Frequently asked questions
      </h2>
      <div className="rounded-lg bg-white p-5 shadow-md">
        {accordionData.map((item, index) => (
          <div key={index} className="mb-2 last:mb-0">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-10 py-5 text-left hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
              aria-expanded={openIndex === index}
            >
              <span className="text-xl font-medium text-gray-700">
                {item.title}
              </span>
              <span className="text-lg">{openIndex === index ? "-" : "+"}</span>
            </button>
            <div
              className={`transition-max-height overflow-hidden duration-500 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"}`}
            >
              <div className="rounded-lg bg-white p-5 text-xl text-gray-600 shadow-inner">
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
