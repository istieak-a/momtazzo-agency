import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ktzilk7", "template_x6gmzhg", form.current, {
        publicKey: "nFV8rFh4ndxn4-C_9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.open("https://calendly.com/tanveer-montazzocalendar/30mins", "_blank");  // Open a new tab with the URL
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-[#1c2336] py-20 text-white">
        <h1 className="font-outfit text-5xl font-semibold">Contact Us</h1>
      </div>
      <div className="mx-auto my-20 max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Strategy Call with an Expert
        </h1>
        <form className="mt-6 space-y-4" onSubmit={sendEmail} ref={form}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company_name"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#50aab2] focus:ring-[#50aab2]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Email Address: <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="business_email"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#50aab2] focus:ring-[#50aab2]"
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full rounded-md bg-[#50aab2] px-4 py-2 font-semibold text-white shadow-sm hover:bg-[#449ca3] focus:outline-none focus:ring-2 focus:ring-[#50aab2] focus:ring-offset-2"
            >
              Book A Strategy Call
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
