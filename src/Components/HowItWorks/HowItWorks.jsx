import React from "react";
import faqbg from "../../assets/faqbg.png";
import Faq from "react-faq-component";
import './Howitworks.css'

const HowItWorks = () => {
  const data = {
    rows: [
      {
        title: "1. Deep dive into your goals and team structure.",
        content: "We take the time to understand your unique needs and goals. Our talent becomes an extension of your team, supporting your customer experience initiatives within your strategic direction, timelines and budgets."
    },
    {
        title: "2. We design a customized solution for you.",
        content: "Within 1 week, we'll design a customized solution tailored to your unique needs. This includes selecting the right talent, customizing training and onboarding, and integrating with your existing processes - optimized for you."
    },
    {
        title: "3. Review and assemble your dream team.",
        content: "Let us handle the screening and recruitment so you can build your dream team. We identify candidates who match your precise needs, coordinate interviews, collect your feedback, and refine the applicant pool until you land on just the right hires."
    },
    {
        title: "4. We'll implement a dedicated training program.",
        content: "Our training, onboarding and assessments integrate with your processes while optimizing for scale and cultural nuance. We develop programs tailored to complement your approach."
    },
    {
        title: "5. Go Live & schedule check-ins!",
        content: "Curtains Up - Your dedicated team is now fully operational. We will set up regular check-ins that work with your schedule, not ours. This ensures you have ongoing visibility into performance and can provide timely feedback based on your availability."
    }
    ],
  };
  const styles = {
    bgColor: "transparent",  
    titleTextColor: "#333",
    titleTextSize: "36px",
    rowTitleColor: "#444",
    rowTitleTextSize: "24px",
    rowContentColor: "#666",
    rowContentTextSize: "18px",
    rowContentPaddingTop: "15px",
    rowContentPaddingBottom: "15px",
    rowContentPaddingLeft: "20px",
    rowContentPaddingRight: "20px",
    arrowColor: "#333",
    transitionDuration: "0.5s",
    timingFunc: "ease",
};

const config = {
    animate: true,
    arrowIcon: "▼",
    expandIcon: "+",
    collapseIcon: "-",
};

  return (
    <div className="bg-[#fff9e6]">
    <div className="flex flex-col items-center gap-8 px-5 py-10 md:px-28 md:py-20">
      <h1 className="font-outfit text-5xl font-normal">How does it work?</h1>
      <p className="w-1/2 text-center text-lg">
        We source, train, and assemble your new team in as little as 2 weeks.
        Once you go live, we continuously work to ensure you hit KPIs.
      </p>
    </div>

    <div className="flex items-center justify-between gap-10 px-5 md:px-28 py-10">
      <div className="w-[70%] faq-container">
        <Faq
          data={data}
          styles={styles}
          config={config}
        />
      </div>
      <div>
        <img src={faqbg} alt="" />
      </div>
    </div>
  </div>
  );
};

export default HowItWorks;
