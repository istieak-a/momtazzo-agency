import React from "react";
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";
import GetInTouch from "../../../Sections/GetInTouch/GetInTouch";

const Education = () => {
  const banner = {
    img: "https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1190548731.png?width=828&height=465&name=iStock-1190548731.png",
    title: "Education outsourcing to the Philippines",
    btn: "HOW IT WORKS",
    cate: "Education",
  };
  return (
    <div>
      <div>
        <HeroBanner2
          img={banner.img}
          title={banner.title}
          btn={banner.btn}
          cate={banner.cate}
        />
      </div>
      <div className="section-container">
        <h1>Outsourcing Education Services</h1>
        <p>
          Outsourcing education services has become an increasingly popular
          strategy for educational providers of all sizes - from universities
          and higher education institutions to smaller private training
          providers. Education outsourcing can help organizations address
          various challenges such as reducing operational costs, accessing a
          pool of skilled educators, streamlining administrative tasks, and
          improving the quality of education delivered to students.
        </p>
        <p>
          By outsourcing education services, institutions can focus on core
          business functions and invest in growing digital education tools.
          Outsourcing can provide an opportunity to work with a partner who has
          expertise and experience in delivering educational services, which can
          ultimately improve the overall quality of education offered to
          students. Ultimately, offshoring helps institutions stay competitive
          in the ever-evolving education industry while ensuring business growth
          opportunities are not missed.
        </p>

        <h1>What are the benefits of education outsourcing?</h1>
        <p>
          Outsourcing education services has become an increasingly popular
          strategy for educational institutions and businesses alike due to its
          ability to address a range of challenges, streamline processes, and
          free up resources to focus on core business functions.
        </p>

        <h1>Lower costs</h1>
        <p>
          Outsourcing education services can significantly reduce operational
          and employment costs for institutions by up to 70%. By outsourcing
          tasks such as administrative work or content creation, institutions
          can save on salaries, benefits, and office space expenses.
        </p>

        <h1>Access to global talent</h1>
        <p>
          Outsourcing education services provides access to a pool of skilled
          educators from around the world. This can help institutions ensure
          that they have the best talent available to deliver quality education
          to their students.
        </p>

        <h1>Improve efficiencies</h1>
        <p>
          Outsourcing can help institutions streamline their education
          processes, reducing the time and effort required to complete tasks.
          This can improve efficiencies and free up resources to focus on core
          business functions.
        </p>

        <h1>Scale fast</h1>
        <p>
          Education outsourcing can help institutions scale quickly by providing
          additional resources to manage increased demands for educational
          services. This can be especially useful for institutions that are
          experiencing rapid growth or need to quickly adapt to changing market
          conditions.
        </p>

        <h1>Stay competitive</h1>
        <p>
          Outsourcing education services can help institutions stay competitive
          in a rapidly evolving education industry. By working with a partner
          who has expertise and experience in delivering educational services,
          institutions can stay up-to-date with the latest trends and best
          practices in education.
        </p>

        <h1>Frequently offshored education roles</h1>
        <p>
          Outsourcing providers can find quality and qualified specialists to
          fill almost any education position or team. More frequently outsourced
          roles include:
        </p>
        <ul>
          <li>Accounting</li>
          <li>Accounts Receivable and Payable Officers</li>
          <li>Admin Assistant</li>
          <li>Bookkeeper</li>
          <li>Content Moderator</li>
          <li>Copywriter</li>
          <li>Customer Service Representative</li>
          <li>Data Analyst</li>
          <li>Data Entry Specialist</li>
          <li>Debt Collection Specialist</li>
          <li>Digital Marketer</li>
          <li>Enrollment Administrator</li>
          <li>Graphic Designer</li>
          <li>Live Chat Agent</li>
          <li>Payroll Processor</li>
          <li>Project Manager</li>
          <li>QA Specialist</li>
          <li>Sales Support</li>
          <li>SEM Specialist</li>
          <li>SEO Specialist</li>
          <li>Social Media Marketer</li>
          <li>Software Developer</li>
          <li>Talent Acquisition Specialists</li>
          <li>Technical Support Engineer</li>
          <li>Technical Support Specialist</li>
          <li>Video Editor</li>
          <li>Virtual Assistant</li>
          <li>Web Developer</li>
        </ul>
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default Education;
