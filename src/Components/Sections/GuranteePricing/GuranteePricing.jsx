import React from "react";
import gurantee from "../../../assets/icons/Pricing Guarantee.svg";
import fixed from "../../../assets/icons/Fixed monthly service.svg";
import hidden from "../../../assets/icons/No hidden costs.svg";
import transparent from "../../../assets/icons/Transparent pricing model.svg";
import security from "../../../assets/icons/security_ico.png";

const GuranteePricing = () => {
  return (
    <div className="mx-5 flex flex-col gap-10 rounded-lg bg-[#20253d] px-5 py-10 md:mx-16 md:px-40">
      <div className="flex flex-col items-center gap-5">
        <img src={gurantee} alt="ico" />
        <div className="flex flex-col items-center">
          <h1 className="text-center font-outfit text-4xl font-[700] text-white">
            Montazzo’s pricing guarantee
          </h1>
          <p className="pt-3 text-center font-dmsans text-3xl font-bold text-[#02b6f4]">
            Unlock your potential- no surprises, just result.{" "}
          </p>
        </div>
      </div>
      <div className="items-center flex md:flex-row flex-col justify-around gap-10 py-10">
        <div className="flex flex-col items-center gap-4">
          <img src={fixed} alt="ico" />
          <h2 className="text-center font-outfit text-[20px] font-bold text-white">
            DIRECT EMPLOYEE COSTS
          </h2>
          <p className="text-center text-sm font-bold text-[#02b6f4]">
            The total direct costs of each employee in terms of base salary,
            benefits, taxes, and insurance
          </p>
        </div>
        <h1 className="text-5xl text-white">+</h1>
        <div className="flex flex-col items-center gap-4">
          <img src={transparent} alt="ico" />
          <h2 className="text-center font-outfit text-2xl font-bold text-white">
            SERVICES FEE
          </h2>
          <p className="text-center text-sm font-bold text-[#02b6f4]">
            The fee we charge for the assets and support services we provide to
            your operations
          </p>
        </div>

        <h1 className="text-5xl text-white">=</h1>

        <div className="flex flex-col items-center gap-4">
          <img src={hidden} alt="ico" />
          <h2 className="text-center font-outfit text-2xl font-bold text-white">
            TOTAL FEE
          </h2>
          <p className="text-center text-sm font-bold text-[#02b6f4]">
            We charge a fixed fee per employee per month
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuranteePricing;
