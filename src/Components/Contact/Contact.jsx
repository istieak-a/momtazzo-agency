import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-200">Strategy Call with</h1>
          <h2 className="text-2xl font-bold text-center text-orange-500">an Expert</h2>
          <form className="mt-6 space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">First Name: <span className="text-red-500">*</span></label>
                <input type="text" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200" required/>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Last Name: <span className="text-red-500">*</span></label>
                <input type="text" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200" required/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Business Email Address: <span className="text-red-500">*</span></label>
              <input type="email" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200" placeholder="name@company.com" required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Phone Number: <span className="text-red-500">*</span></label>
              <input type="tel" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200" required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Company Name: <span className="text-red-500">*</span></label>
              <input type="text" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200" required/>
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Book A Strategy Call</button>
            </div>
          </form>
          <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
            MyOutDesk is going to call you, probably in less than 5 min (speed to lead), and send you email/text, and a lot of valuable content/offers (we want to help make your dreams come true)! You can see our privacy policy here and opt out anytime. By filling out this form, you are consenting to getting a call on a recorded line from MyOutDesk.
          </p>
        </div>
        </div>
    );
};

export default Contact;