import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-[#1c2336] py-20 text-white">
        <h1 className="font-outfit text-5xl font-semibold">Contact US</h1>
      </div>
      <div className="mx-auto my-20 max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Strategy Call with
        </h1>
        <h2 className="text-center text-2xl font-bold text-[#50aab2]">
          an Expert
        </h2>
        <form className="mt-6 space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                First Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#50aab2] focus:ring-[#50aab2]"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Last Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#50aab2] focus:ring-[#50aab2]"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Email Address: <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#50aab2] focus:ring-[#50aab2]"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number: <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#50aab2] focus:ring-[#50aab2]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#50aab2] focus:ring-[#50aab2]"
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
        <p className="mt-4 text-xs text-gray-600">
          MyOutDesk is going to call you, probably in less than 5 min (speed to
          lead), and send you email/text, and a lot of valuable content/offers
          (we want to help make your dreams come true)! You can see our privacy
          policy here and opt out anytime. By filling out this form, you are
          consenting to getting a call on a recorded line from MyOutDesk.
        </p>
      </div>
    </div>
  );
};

export default Contact;
