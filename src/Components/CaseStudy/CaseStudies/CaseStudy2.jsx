import React from "react";
import ReadMore from "../ReadMore";

const CaseStudy2 = () => {
  return (
    <div className="mx-auto w-[86=5%] max-w-7xl bg-white px-5 py-10 md:px-40">
      <div>
        <p className="inline-block bg-[#50aab2] px-2 py-1 text-xs font-semibold text-white">
          CASE STUDY
        </p>
        <h1 className="py-8 text-5xl font-semibold leading-snug text-[#303030]">
          Ticketing app with 5 million users clears backlog and maintains 86%
          CSAT on 6,000+ tickets/month
        </h1>
      </div>

      <div className="case-study-con">
        <h2>The Challenge</h2>
        <p>
          A digital ticketing platform with more than 5 million worldwide users
          struggles to manage a 1,000+ ticket backlog and needs extended
          coverage to better assist global audiences.
        </p>
        <p>
          The two-sided eCommerce platform works with over 2,000 theatres,
          producers, and cultural institutions globally, bringing inventory to
          consumers with more than 1,000 media and travel partners.
        </p>
        <p>
          As the platform grew, so did customer support volume—creating a
          backlog and (once that was solved) the opportunity to expand into new
          channels. In 2022, the company came to Influx for help.
        </p>
        <h2>The Need</h2>
        <p>
          Due to the nature of event tickets, customers often have changes to
          their purchases—cancellations, date swaps, seating adjustments—that
          require a quick and efficient response.
        </p>
        <p>
          The ticketing platform had a few specific needs for their customer
          support solution:
        </p>
        <ul>
          <li>
            Clear the backlog and maintain inbox zero - the 1,000+ ticket
            backlog was a priority. After the backlog was taken care of, the
            platform needed a solution that resolved tickets quickly and
            efficiently to prevent further backlogs from piling up.
          </li>
          <li>
            Extended coverage - with customers all over the world, the platform
            needed agents with availability from 10am - 6pm (BST), 7 days/week.
          </li>
          <li>
            Quality + customer satisfaction - as the brand grew, the team
            continued to prioritize high-quality interactions with an emphasis
            on enhancing customer satisfaction.
          </li>
          <li>
            Flexibility + scalability - volume is not always consistent. During
            peak periods, the platform needed a solution that would scale up in
            accommodation for a consistent support experience year-round.
          </li>
        </ul>
        <h2>The Solution</h2>
        <p>
          Influx provided 6 dedicated digital-only agents to help clear out the
          backlog. Once the backlog was solved, the team handled live chat and
          email support, gradually scaling to 10+ agents who achieved:
        </p>
        <ul>
          <li>86% CSAT</li>
          <li>6,000+ tickets/month for both email and chat</li>
          <li>90+% quality control</li>
          <li>3 min average handle time (AHT) for chat</li>
          <li>&lt;20 sec first response time (FRT) for chat</li>
          <li>5 min average handle time (AHT) for email</li>
          <li>&lt;4 hr first response time (FRT) for 80% of emails</li>
          <li>80 tickets solved per agent daily</li>
        </ul>
        <p>
          With a focus on quality and customer satisfaction, Influx’s Client
          Team Lead (CTL) provides weekly summary feedback on quality checks.
          Today, Influx is the main extension for the platform’s customer
          support team, scaling up or down to match volume.
        </p>
        <img
          src="https://influx.com/blog/uploads/todaytix-group-2.png"
          alt=""
        />
      </div>
      <ReadMore />
    </div>
  );
};

export default CaseStudy2;
