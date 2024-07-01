import React from "react";
import ReadMore from "../ReadMore";

const CaseStudy3 = () => {
  return (
    <div className="mx-auto w-[86=5%] max-w-7xl bg-white px-5 py-10 md:px-40">
      <div>
        <p className="inline-block bg-[#50aab2] px-2 py-1 text-xs font-semibold text-white">
          CASE STUDY
        </p>
        <h1 className="py-8 text-5xl font-semibold leading-snug text-[#303030]">
          Handling 2000 calls per week while achieving a 94% CSAT
        </h1>
      </div>

      <div className="case-study-con">
        <h2>The Challenge</h2>
        <p>
          A growing healthcare marketplace platform struggles to keep up with
          increased call volumes and unpredictable spikes.
        </p>
        <p>
          This healthcare platform experienced tremendous growth (6-15% per
          month), stretching their 50 support agent team. By partnering with
          Montazzo, they were able to keep up with growth, while maintaining an
          excellent customer experience.
        </p>
        <h2>The Need</h2>
        <p>
          The healthcare marketplace required a robust customer service solution
          for its high-volume inquiries. Here’s what they needed to meet the
          demand:
        </p>
        <ul>
          <li>
            24/7 omnichannel support - Due to the nature of the healthcare
            industry, the company needed a 24/7 omnichannel solution delivering
            voice, live chat, email, and SMS to help their internal team handle
            over:
            <ul>
              <li>1500-2000 calls/week</li>
              <li>300 live chat tickets/week</li>
              <li>100 emails/week</li>
              <li>800 SMS tickets/week</li>
            </ul>
          </li>
          <li>
            Workforce management systems - The platform needed strict adherence
            to work schedules to ensure no calls were missed. Workforce
            management systems would guarantee not only the right people are
            rostered and showing up, but active and available to take calls.
          </li>
          <li>
            Integrated recruitment, training, and management - With a 50-person
            support team of their own to manage, the healthcare marketplace
            needed sufficient management for their outsourced team. They needed
            a support provider capable of delivering end-to-end recruitment
            processes and thorough agent compliance training tailored to the
            platform and its audience.
          </li>
          <li>
            Additionally, quality assurance was a key support need, with regular
            audits and performance assessments to maintain high standards across
            all channels. The marketplace platform came to Montazzo for help.
          </li>
        </ul>
        <h2>The Solution</h2>
        <p>
          Montazzo initially launched a pilot-phase team of 5 CX professionals
          with dedicated team leadership for 24/7 coverage. Within 3 months, the
          company scaled their Montazzo team to 15+ full-time customer support
          specialists across 6 regions.
        </p>
        <p>
          Each Montazzo agent was pre-vetted and pre-trained for an accurate and
          compliant onboarding process to ensure top-notch quality assurance
          through every customer interaction. Montazzo established tiers of
          management with workforce management expertise, including predictions,
          attritions, coaching, and volume.
        </p>
      </div>

      <ReadMore />
    </div>
  );
};

export default CaseStudy3;
