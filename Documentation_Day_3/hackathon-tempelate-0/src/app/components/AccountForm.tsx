import Link from 'next/link';
import React from 'react';

export default function AccountForm() {
  return (
    <div className="bg-white p-8 rounded-lg max-w-screen-xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-around lg:gap-36 md:gap-24 sm:gap-12 xl:px-40 lg:px-20 md:px-10 sm:mt-12">
        <div className="flex-1 mt-10 sm:mt-0 items-stretch">
          <h2 className="text-xl md:text-3xl font-bold mb-6">Log In</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username or email address
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberMe" className="mr-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            <label htmlFor="rememberMe" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-white border border-black rounded-md font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:text-sm"
            >
              <Link href={'/'}>
              Log In
              </Link>
            </button>
            <a href="#" className="text-sm py-2 text-black hover:underline hover:underline-offset-4">
              Lost Your Password?
            </a>
          </div>
        </div>
        <div className="flex-1 mt-10 sm:mt-0 ">
          <h2 className="text-xl md:text-3xl font-bold mb-6">Register</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <p className="text-sm text-gray-700 mb-4">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b>
          </p>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-white border border-black rounded-md font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:text-sm"
          ><Link href={'/'}>
            Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}