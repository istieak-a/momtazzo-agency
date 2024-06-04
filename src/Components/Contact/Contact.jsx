import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#1c2336] py-20 text-white flex items-center justify-center">
        <h1 className="font-outfit text-5xl font-semibold">Contact US</h1>
      </div>
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-zinc-800 my-20">
        <h1 className="text-center text-2xl font-bold text-zinc-800 dark:text-zinc-200">
          Strategy Call with
        </h1>
        <h2 className="text-center text-2xl font-bold text-orange-500">
          an Expert
        </h2>
        <form className="mt-6 space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                First Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-zinc-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Last Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-zinc-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Business Email Address: <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border border-zinc-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Phone Number: <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="mt-1 block w-full rounded-md border border-zinc-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Company Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-zinc-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full rounded-md bg-orange-500 px-4 py-2 font-semibold text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Book A Strategy Call
            </button>
          </div>
        </form>
        <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
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
