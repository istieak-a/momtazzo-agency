import React from "react";
import HeroBanner4 from "../Sections/HeroBanner4/HeroBanner4";
import checkIco from "../../assets/icons/pngegg.png";
import Reviews from "../Reviews/Reviews";
import { Link } from "react-router-dom";

const Pricing = () => {
  const heroBanner = {
    title: "Montazzo's Pricing Plans",
    img: "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/M_Web_Role-page_Accountant_Banner.png",
    imgRes:
      "https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/Job%20Roles/M_Banner%20mobile_Accounting.jpg",
    desc: "Hire college educated, experienced virtual assistants that won’t stress your bottom line.",
  };
  return (
    <div>
      <div>
        <HeroBanner4
          title={heroBanner.title}
          img={heroBanner.img}
          imgRes={heroBanner.imgRes}
          desc={heroBanner.desc}
        />
      </div>
      <div className="mx-auto flex max-w-5xl flex-col bg-white p-6 py-10 md:flex-row">
        <div className="flex flex-col items-center justify-center rounded-lg bg-blue-900 p-6 text-white md:w-1/3">
          <div className="mb-2 text-4xl font-bold">$1,988</div>
          <div className="mb-4 text-lg">per month*</div>
          <button className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
            Book a Strategy Call
          </button>
        </div>
        <div className="p-6 md:w-2/3">
          <h2 className="mb-4 text-3xl font-bold">
            Scale With <span className="text-orange-500">Unbeatable ROI</span>
          </h2>
          <p className="mb-4">
            Virtual Assistants can save you up to 70% of the cost of a full-time
            employee – without the headaches of insurance, retirement, office &
            equipment costs, and unemployment. We’ve saved our clients over 55M
            in 2023.
          </p>
          <h3 className="mb-2 font-bold">What’s Included:</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" /> VA
                Benefits & Medical Coverage
              </li>
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" /> FBI
                Grade Background Checks
              </li>
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" /> 15
                Years Of Experience
              </li>
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" />{" "}
                Script & Dialogue Library
              </li>
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" />{" "}
                College Educated + Work Experience
              </li>
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" />{" "}
                Talent Onboarding & Training Materials
              </li>
            </ul>
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" /> Dual
                Candidate Vetting Process
              </li>
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" />{" "}
                Legal Entity in US\PH
              </li>
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" />{" "}
                Personality Profiling
              </li>
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" />{" "}
                Secure PCI Compliant Payments
              </li>
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" />{" "}
                Standardized Office & Equipment Policy
              </li>
              <li className="flex items-start">
                <img alt="check" src={checkIco} className="mr-2 h-4 w-4" />{" "}
                Productivity Tracking Software via MyTimeIn
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f8f8] py-10">
        <div className=" mx-auto max-w-7xl p-4">
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-semibold">Us vs Them</h1>
            <p className="mt-3 text-zinc-600">
              MyOutDesk is miles ahead of the competition
            </p>
          </div>
          <div className="overflow-x-auto text-lg">
            <table className="min-w-full border border-zinc-300">
              <thead>
                <tr>
                  <th className="w-1/2"></th>
                  <th className="w-1/4 bg-blue-500 py-2 text-white">
                    MYOUTDESK
                  </th>
                  <th className="w-1/4 bg-zinc-100 py-2 text-zinc-700">THEM</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  title="FBI Grade Background Checks"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow
                  title="College Education Required"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow
                  title="Work Experience Required"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow
                  title="Legally Entity In US \ PH"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow
                  title="Secure, PCI Compliant Payment Options"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow
                  title="Standardized Equipment Policies"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow
                  title="Productivity Tracking Software"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow
                  title="White Glove Onboarding"
                  myOutDesk="✔"
                  them="✖"
                />
                <TableRow title="HIPAA Verified" myOutDesk="✔" them="✖" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-20">
        <Reviews />
      </div>
      <div className="relative bg-black bg-opacity-50">
        <img
          src="https://mod-cdn.myoutdesk.com/wp-content/uploads/2023/06/global-cta-slate.png"
          alt="Business meeting"
          className="h-[50vh] w-full object-cover"
        />
        <div className="absolute inset-0 mx-auto flex  max-w-7xl flex-col items-start justify-center space-y-5 px-5 md:px-10 lg:px-20">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Ready to scale your business?
          </h2>
          <p className="text-base text-white md:text-lg lg:text-xl">
            Find a virtual professional that meets your unique business needs
            and save up to 70% on hiring costs today.
          </p>
          <Link className="btn">Book a Strategy Call</Link>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ title, myOutDesk, them }) => {
  const tableCellClasses = "py-2 px-4 text-center";
  const greenTextClasses = "text-green-500";
  const redTextClasses = "text-red-500";
  const borderClasses = "border-t border-zinc-300";

  return (
    <tr className={borderClasses}>
      <td className={`${tableCellClasses}`}>{title}</td>
      <td className={`${tableCellClasses} ${greenTextClasses}`}>{myOutDesk}</td>
      <td className={`${tableCellClasses} ${redTextClasses}`}>{them}</td>
    </tr>
  );
};

export default Pricing;
