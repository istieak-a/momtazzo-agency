import React from "react";
import faqbg from "../../assets/faqbg.png";
import Faq from "react-faq-component";
import './Howitworks.css'

const HowItWorks = () => {
  const data = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "What is the package version",
        content: "v1.0.5",
      },
    ],
  };
  const styles = {
    bgColor: "#f9f9f9",
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
        <h1 className="font-outfit text-5xl font-normal">How does it works?</h1>
        <p className="w-1/2 text-center text-lg">
          We source, train, and assemble your new team in as little as 2 weeks.
          Once you go live, we continuously work to ensure you hit KPIs.
        </p>
      </div>

      <div className="flex items-center justify-between gap-10 px-5 md:px-28 py-10">
        <div>
        <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
        <div>
          <img className="w-[80%]" src={faqbg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
