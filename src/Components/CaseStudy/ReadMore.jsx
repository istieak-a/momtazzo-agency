import React from 'react'
import BlogCard from '../BlogCard/BlogCard';

const ReadMore = () => {
    const caseStudies = [
        {
          title: "Handling 8000 calls per week while achieving a 94% CSAT",
          desc: "A growing healthcare marketplace platform struggles to keep up with increased call volumes and unpredictable spikes.",
          img: "https://influx.com/blog/uploads/case-studies-2.png",
          link: "case-study-3",
        },

        {
          title: "Transforming Customer Service in the Home Furnishings Industry",
          desc: "A renowned home furnishings company celebrated for its stylish yet affordable furniture range faced customer support challenges during a highly publicized, online-only product launch. The company’s legacy customer service systems could not withstand the surge of demand",
          img: "https://influx.com/blog/uploads/winkl.jpg",
          link: "case-study-5",
        },

        {
          title: "Rewarding Shoppers: Hugo’s Strategic Cashback Alliance",
          desc: "A premier cashback platform, founded on the principle that every click holds the potential for reward, aimed to enhance every shopping experience with added value. Despite its innovative mission, the platform encountered challenges tracking transactions and meeting consumer expectations. ",
          img: "https://influx.com/blog/uploads/threadless-cover.jpeg",
          link: "case-study-7",
        },
      ];
  return (
    <div>
        <h1 className='text-2xl font-semibold pt-5 border-t border-black mt-20 md:ps-5'>Read More</h1>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5  py-3 md:grid-cols-3">
        {caseStudies.map((caseStudy, index) => (
          <BlogCard
            key={index}
            title={caseStudy.title}
            desc={caseStudy.desc}
            img={caseStudy.img}
            link={caseStudy.link}
          />
        ))}
      </div>

    </div>
  )
}

export default ReadMore