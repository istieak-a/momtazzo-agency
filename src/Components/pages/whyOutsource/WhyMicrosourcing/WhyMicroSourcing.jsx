import React from "react";
import hero from "../../../../assets/banner-img/M_Web_Why-MicroSourcing_Banner_202307.jpg";
import heroRes from "../../../../assets/banner-img/M_Mobile_Why-MicroSourcing_Banner_202307.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";
import GuranteePricing from "../../../Sections/GuranteePricing/GuranteePricing";
import { Link } from "react-router-dom";
import './WhyMicroSourcing.css'
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const whyMicroSourcing = () => {
  const heroBanner = {
    title: "Reasons To Choose MicroSourcing",
    desc: "When you partner with the strongest provider, you get the best outcome, and no hidden costs or unforeseen risks.",
    img: hero,
    imgRes: heroRes,
  };
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
      <div className="flex flex-col items-center gap-5 pt-10">
        <GuranteePricing />
        <Link to={`#`} className="btn px-10 py-4">Get a quote</Link>
      </div>
      <div className="microsourcing-divs">
        <p>Offshoring parts of your business can lead to huge savings and free up your time to focus on what’s most important. But when it comes to the value you get from an offshore provider, there’s a lot more to consider than just the price.</p>
        <h1>Transparent fees, with everything you need</h1>
        <p>Business is about risk mitigation. Understanding the risks and making an informed decision.</p>
        <p>So when comparing the value of offshoring providers, you definitely need to consider more than just their quoted costs. Even if two providers charge exactly the same total monthly fees, the value each delivers will vary wildly depending on their location, office fit-out, IT infrastructure and operational capability. There may even be a vast difference in the experience and capabilities of the staff they recruit for you.</p>
        <p>So it pays to compare the details to ensure there are no unforeseen risks. Here are the factors to consider when choosing an offshoring provider:</p>
        <ul>
          <li>Fees & inclusions</li>
          <li>Infrastructure</li>
          <li>Facilities</li>
          <li>Location</li>
          <li>Recruitment process</li>
          <li>Recruitment & HR capability</li>
          <li>Employee engagement</li>
          <li>Control & scalability</li>
          <li>Quality</li>
          <li>Track record & financial stability</li>
        </ul>
        <p>Let’s take a look at each of these important features in more detail, so you can evaluate the MicroSourcing model, and judge for yourself why it pays to partner with the strongest offshoring provider in the Philippines.</p>
      </div>
      <div className="microsourcing-divs">
        <h1>Fees & inclusions – Transparency is key</h1>
        <p>Unlike most offshoring providers, we break our fees into two components:</p>
        <ul>
          <li>Fixed monthly service fee</li>
          <li>Salaries</li>
        </ul>
        <p>Your fixed monthly service fee covers:</p>
        <ul>
          <li>World-class facilities and infrastructure</li>
          <li>Fully furnished offices including a computer, monitor, mouse and keyboard for each workstation</li>
          <li>Support services, including HR, recruitment, finance, payroll, compensation and benefits</li>
          <li>High-speed internet (with redundant connections from multiple providers)</li>
          <li>24/7 on-site IT support</li>
          <li>Client management and team management</li>
        </ul>
        <p>With other service providers, you may find that not everything is included in the service fee. And in almost every case, what started out looking like a good deal actually ends up being a ‘from’ price with a shopping list of ‘optional extras’ that quickly add up to the true price.</p>
        <h4>Salaries</h4>
        <p>By separating salaries from service costs, we make it very easy for you to see you’re getting the best possible talent for your money. You have complete control over salaries and incentives, and the salary component of your monthly fee goes directly to your staff, without any mark-up.</p>
        <p>Most service providers don’t do this. Instead, they charge a ‘fixed hourly rate’ that bundles the service fee and the employee’s salary. This pricing model incentivizes the provider to find the cheapest possible labor, in order to maximize their margin. As a result, candidate quality suffers and staff are quick to leave as soon as they’re offered market rate elsewhere.</p>
        <p>We pay market rates for the skills you need. This attracts the best candidates, and ensures they feel valued and rewarded for their work. In fact, MicroSourcing’s employee attrition rate is less than half the industry average.</p>
      </div>
      <div className="microsourcing-divs">
        <h1>Robust infrastructure, designed for maximum uptime</h1>
        <p>When you’re comparing offshoring services, ask about their infrastructure, technology and emergency systems. The Philippines is exposed to a number of typhoons each year, and we’ve seen how other businesses get into trouble when the power and internet go out in extreme weather. A cheap or unreliable provider may have skimped on infrastructure, which can make the difference between the success and failure of your offshore investment.</p>
        <p>It’s important to make sure you’re getting a reliable service with solid uptime guarantees.</p>
        <p>So why choose MicroSourcing? Every MicroSourcing facility provides 100% infrastructure redundancy and world-class business continuity processes. To keep things running smoothly, our offices have:</p>
        <ul>
          <li>Backup generators</li>
          <li>Multiple, dedicated internet connections from tier-1 providers at each site (any site can be used as a fail-over for any other site)</li>
          <li>24/7/365 dedicated IT support on site</li>
        </ul>
        <p>So no matter what the weather throws at the Philippines, it’s business as usual for you, and your customers won’t notice the difference.</p>
      </div>
      <div className="microsourcing-divs">
        <h1>State-of-the-art facilities</h1>
        <p>Our offices are located in purpose-built business process outsourcing (BPO) hubs. We’ve invested in state-of-the-art office fit-outs that are regarded as class-A facilities, with everything you’re used to seeing in a modern, big-city office: the latest computers, ergonomic workstation furniture, on-site cafés, and even onsite nurses and medical centers. Indeed, many of our clients are surprised that their offshore staff are based in offices that surpass their onshore office space!</p>
        <p>Take a virtual tour of our state-of-the-art premises. Or better yet, come take a look in person and really get to know us! We’d love to give you a personal tour.</p>
      </div>
      <div className="microsourcing-divs">
        <h1>CBD locations</h1>
        <p>MicroSourcing operates 13 offshoring facilities across Manila – all strategically located in CBD business estates. This helps you tap into the vast Philippines labor pool, and also gives your team easy access to transport and affordable local restaurants.</p>
      </div>
      <div className="microsourcing-divs">
        <h1>You’re involved in the recruitment process</h1>
        <p>No one knows your business like you do, which is why you’re involved in the recruitment process from start to finish. We do the heavy lifting to shortlist candidates with the right skills. Then you choose the strongest talent with the personality and work style that suit your business.</p>
        <p>So you get the control and choice you need, without the hassle of sifting through piles of applicants.</p>
        <ol>
          <li>We get to know your company, your onshore business objectives and the objectives of the offshore role(s).</li>
          <li>You provide a detailed job description including qualifications, skills, prior experience, responsibilities, personality traits and work style.</li>
          <li>We analyze the job description and research the role. We provide a transparent cost sheet specific to the Philippines labor market, for you to make an informed commercial decision. (Most of our customers save approximately 70% on salaries when compared with recruiting the same skills and experience onshore.)</li>
          <li>When you’re ready, we make a formal engagement to begin the recruitment process.</li>
          <li>We run a sophisticated, multi-channel recruitment process to advertise and attract the strongest candidates from the pool. This process can include your own custom assessments if you required.</li>
          <li>We interview candidates and create a shortlist of the best talent.</li>
          <li>You interview your favorites to determine who will be the best fit for your business. You’re welcome to conduct multiple rounds of interviews with different stakeholders.</li>
          <li>Once you’ve selected your favorite candidate, we make a formal offer on your behalf and negotiate their start date.</li>
          <li>We complete the candidate’s induction to MicroSourcing, which includes assigning your new employee a workstation, and introducing them to the facilities and policies.</li>
          <li>Then it’s over to you for company-specific and role-specific training.</li>
        </ol>
        <p>This process typically takes about 6-8 weeks. Then you can settle in and get to know your new superstar, knowing that you’ve made the right choice for your business.</p>
      </div>
      <div className="microsourcing-divs">
        <h1>Recruitment & HR capability</h1>
        <p>MicroSourcing is the biggest provider of this offshoring model in the Philippines. We pioneered it, and we now employ more than 9,000 people for 700+ clients around the world.</p>
        <p>So you can rest assured we have the recruitment and HR capability to find and retain the talent you need. Our internal recruitment team boasts more than 40 recruitment specialists (most of our competitors have fewer than 5), and we leverage 5 primary recruitment channels, including our internal pre-screened recruitment database of 200,000+ candidates.</p>
        <p>Once your offshore staff are recruited, our Client Implementation Team project manages the setup and establishment of the team and their IT requirements before going live.</p>
        <p>And finally, we invest heavily in employee training and engagement programs, to ensure your staff are happy in the workplace, and satisfied (and supported) in their role.</p>
      </div>
      <div className="microsourcing-divs">
        <h1>Employee engagement</h1>
        <p>MicroSourcing is one of the Philippines’ premier employers. We employ more than 8,000 people, across 13 offices, and we invest heavily in employee engagement and development programs. This means we can attract and retain top talent for your business. In fact, our annual attrition rate is less than half the industry average.</p>
        <div>
          <h4>Employee engagement</h4>
          <p>The Filipino people are very social by nature and generally love company parties and events. We have a dedicated employee engagement department that organizes a variety of events throughout the year, including Christmas, Valentines, Halloween, the MicrOlympics (sports), summer outings, and monthly get-togethers. We also have our MicroClubs where employees with similar interests, like photography, music and sports, can come together.</p>
        </div>
        <div>
          <h4>Training</h4>
          <p>Our dedicated training team operates the MicroSourcing University training platform, where employees can receive quality online and classroom training in a wide variety of hard and soft skills.</p>
        </div>
        <div>
          <h4>Recognition</h4>
          <p>We have a number of special awards and employee recognition events, where we recognize our employees for exceptional performance.</p>
        </div>
      </div>
      <div className="microsourcing-divs">
        <h1>Grow and evolve the team with your business</h1>
        <p>Once appointed, your staff are your own and you get to shape them into your ideal team. Just as with your local team, you have complete control over your offshore team’s workload, performance, KPIs and job satisfaction. (Although, naturally, we’ll guide you on these aspects wherever you need it.) You can train your team in your company’s systems, processes, culture and preferences, to bring out their best work.</p>
        <p>As your business grows, the offshore model helps you respond quickly to increasing demand and workload, because it enables you to expand your team headcount and infrastructure quickly, and without big up-front investments. We can also help you devise an appropriate management team structure and employee levels to help keep things organized.</p>
      </div>
      <div className="microsourcing-divs">
        <h1>Quality and continuous improvement</h1>
        <p>Over the years, we’ve developed our proprietary support platforms, systems for time and attendance tracking, HR processing, recruitment and referral programs, so we know exactly how to provide the best value support for our clients.</p>
        <p>We’re also certified in ISO standards: ISO/IEC 27001:2013 (Information Security Management System) and ISO 9001:2008 (Quality Management Systems). For you and our clients, this means you get a premium offshoring service that’s been independently audited and certified for quality.</p>
      </div>
      <div className="microsourcing-divs">
        <h1>Track record & financial stability</h1>
        <p>MicroSourcing has been providing offshoring services since 2006. In fact, we pioneered this particular offshoring model in the Philippines, and we’re still the country’s largest and most experienced provider, with 700+ active clients and 9,000+ employees in 13 state-of-the-art offices across Manila, and 1 office in Sydney, Australia.</p>
        <p>Plus we’re backed by a large, Australian group, the Probe CX. Obviously this means we’re financially stable, and here for the long haul. The BPO industry is still quite new, with more than its fair share of startup BPOs run by opportunistic expats with little experience and no financial means. In fact, it’s worth remembering that quite a number of small companies like these have gone under, in the last decade, taking down their clients’ offshore operations with them. With MicroSourcing, you can rest easy in the knowledge that this will never happen.</p>
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default whyMicroSourcing;
