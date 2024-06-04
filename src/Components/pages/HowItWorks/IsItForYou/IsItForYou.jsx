import React from "react";
import hero from "../../../../assets/banner-img/M_banner_Why-outsource-pillar-page.jpg";
import heroRes from "../../../../assets/banner-img/M_banner_Why-outsource-pillar-page_m.jpg";
import HeroBanner from "../../../Sections/HeroBanner/HeroBanner";
import BuildTeam from "../../../Sections/BuildTeam/BuildTeam";

const IsItForYou = () => {
  const heroBanner = {
    title: "Outsourcing models and their benefits",
    desc: "Learn about your offshoring options and explore the benefits of Montazzo’s model over less effective models.",
    img: hero,
    imgRes: heroRes,
  };
  return (
    <div>
      <div>
        <HeroBanner
          title={heroBanner.title}
          desc={heroBanner.desc}
          img={heroBanner.img}
          imgRes={heroBanner.imgRes}
        />
      </div>
      <div className="section-container mx-16 my-10 border-b border-t max-w-7xl mx-auto">
        <p className="text-center text-lg">
          To decide if offshoring is for you, you first need to understand
          exactly what the term ‘offshoring’ means. There are a few different
          types of offshoring, and they’re not all right for all businesses.
          They all have their own pros and cons.
        </p>
      </div>
      <div className="section-container flex  flex-col max-w-7xl mx-auto">
        <img
          src="https://www.microsourcing.com/hs-fs/hubfs/Costing%20table-01.png?width=1052&name=Costing%20table-01.png"
          alt="chart"
          className="md:w-[60%] mx-auto"
        />
        <p className="text-lg mx-auto">
          Please read on for more information about each model.
        </p>
      </div>
      <div className="section-container max-w-7xl mx-auto">
        <h1>Project Based Outsourcing</h1>
        <h2>(we don’t do this)</h2>
        <p>
          This approach to offshoring involves paying someone overseas (often a
          freelancer) to complete a project with a limited scope and duration.
        </p>
        <p>
          This might work for you if you only have one-off projects that require
          specialist knowledge/skills, rather than long-term, ongoing work. We
          usually find this works for start-ups and micro businesses who are on
          very limited budgets.
        </p>
        <p>
          The main downside is you have little control over when and how your
          freelance completes the work, so you’ll need to build a buffer into
          any timelines in case of potential delays. Plus you don’t have control
          over the capacity planning of your vendor, so you can never be sure
          who’ll be working on your project, from one day to the next. And
          because the vendor has to contend with varying demand for their
          services, they’ll be busy one month and quiet the next, and they’ll
          factor this into their pricing, resulting in higher project rates than
          you’d pay a dedicated resource. (i.e. You’ll pay more to cover their
          quiet times.)
        </p>
      </div>
      <div className="section-container max-w-7xl mx-auto">
        <h1>Business Process Outsourcing</h1>
        <h2>(we don’t do this)</h2>
        <p>
          Business Process Outsourcing (BPO) is what most people think of when
          they think of offshoring. It involves paying an overseas company to
          handle absolutely everything related to your offshore business
          processes.
        </p>
        <p>
          The benefits are that you get a very hands-off approach. You don’t
          need any local knowledge and you don’t have to spend time recruiting
          or managing staff yourself. (You could, for example, set up an
          offshore legal or web development team without any knowledge of those
          fields, whatsoever.)
        </p>
        <p>
          But on the flip side, it’s more expensive than other models, and you
          don’t get any control over your offshore team’s business processes,
          which means quality nearly always suffers. Your offshore team isn’t
          properly integrated into your business, and there can be a disconnect
          between the two cultures. Service Level Agreements (SLAs) can mitigate
          these risks somewhat but, in reality, even with an SLA, there’s very
          little you can do if your provider fails to satisfy their obligations,
          because it’s usually not feasible to simply shut down and move your
          operations and litigation is costly, time-consuming and a distraction
          you don’t need.
        </p>
        <p>
          What’s more, full outsourcing tends to be more expensive because your
          vendor has to factor risk into their pricing – all the things that
          could possibly go wrong at their end (major IT outages, staff
          attrition, etc.). So you end up paying unsustainably high margins to
          cover things that will probably never happen.
        </p>
      </div>
      <div className="section-container max-w-7xl mx-auto">
        <h1>Offshore Company Incorporation</h1>
        <h2>(we don’t do this)</h2>
        <p>
          This is where you set up an overseas division of your company, and you
          handle everything yourself. Facilities, IT, labor laws, recruitment,
          HR and payroll, as well as day-to-day quality and productivity.
        </p>
        <p>
          This approach is all about control – you do all the hiring, setup and
          management, from beginning to end. But because it’s such a hands-on
          approach, it can take longer to set up, it requires more upfront
          investment, and it isn’t cost-effective unless you’re doing it well,
          and on a large scale.
        </p>
        <p>
          Plus, with no partner on-the-ground, you’ll need to quickly get up to
          scratch on local culture and regulations. In our experience, this
          approach only works for businesses that have a genuine understanding
          of the culture/country they’re offshoring in and are committed to
          long-term operations offshore so they can recoup their investment.
        </p>
        <p>
          And finally, offshore incorporation is a very slow process, and all
          investment made in the new country are sunk. So if things don’t work
          out, shutting down the operation usually comes at a very high cost to
          the business.
        </p>
      </div>
      <div className="section-container max-w-7xl mx-auto">
        <h1>Montazzo model: (what we do)</h1>
        <p>
          Last but not least, is Montazzo’s solution. This model involves
          getting a partner in the offshore location to set up an overseas
          division of your company, and getting them to handle facilities, IT
          recruitment and HR, while you handle quality and productivity. This is
          the model we use, because we find it fits our clients’ needs – from
          quickly scaling up small businesses, to improving efficiency in larger
          enterprises.
        </p>
        <p>The main benefits include:</p>
        <ul>
          <li>
            A full-time, dedicated team you can integrate into your business
          </li>
          <li>
            You select your staff from the candidates we present, so hiring is
            nearly the same as hiring local staff
          </li>
          <li>
            Full control over your team’s processes, tasks, KPIs and service
            quality
          </li>
          <li>Simple, transparent costs</li>
          <li>
            A specialist partner on the ground who understands the local culture
            and labor laws, and who has experience recruiting and setting up
            teams, and providing ongoing support
          </li>
          <li>
            Works well for virtually any role that can be performed with a
            computer program or over the phone
          </li>
        </ul>
        <p>
          As far as the amount of work involved for you, our model sits in
          between the DIY model and the BPO model. You don’t have to do all the
          work on the ground to set up the team and your facilities, but you
          still have to be prepared to invest some time and energy into managing
          your team and their output. Learn more about how our unique offshoring
          model works…
        </p>
      </div>
      <div>
        <BuildTeam />
      </div>
    </div>
  );
};

export default IsItForYou;
