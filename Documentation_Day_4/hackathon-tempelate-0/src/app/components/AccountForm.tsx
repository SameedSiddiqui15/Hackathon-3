"use client";
import Link from 'next/link';

import React, { useState } from "react";

export default function AccountForm() {
  const [view, setView] = useState("login"); // Tracks the current view: "login", "signup", "register"
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (view === "signup") {
      console.log("Sign Up:", formData);
    } else if (view === "login") {
      console.log("Login:", formData);
    } else if (view === "register") {
      console.log("Register:", formData);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-xl md:text-3xl font-bold mb-6">
        {view === "login" && "Log In"}
        {view === "signup" && "Sign Up"}
        {view === "register" && "Register"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {view === "signup" && (
          <>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
              />
            </div>
          </>
        )}
        {view === "login" && (
          <>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
              />
            </div>
          </>
        )}
        {view === "register" && (
          <>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
              />
            </div>
            <p className="text-sm text-gray-700 mb-4">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b>
          </p></>
            
          )}
        <div className="flex justify-between">
          <Link href={'/'}>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-white border border-black rounded-md font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:text-sm"
            >
              {view === "signup" && "Sign Up"}
              {view === "login" && "Login"}
              {view === "register" && "Register"}
            </button>
          </Link>
          {view === "login" && (
            <button
              onClick={() => setView("register")}
              className="text-sm py-2 text-black hover:underline hover:underline-offset-4"
            >
              Forgot your password? Register
            </button>
          )}
          {view === "register" && (
            <button
              onClick={() => setView("login")}
              className="text-sm py-2 text-black hover:underline hover:underline-offset-4"
            >
              Go back to Login
            </button>
          )}
        </div>
      </form>
      <div className="mt-4 text-center">
        {view === "login" && (
          <button
            onClick={() => setView("signup")}
            className="text-sm py-2 text-black hover:underline hover:underline-offset-4"
          >
            Don&rsquo;t have an account?<u>Sign Up</u>
          </button>
        )}
        {view === "signup" && (
          <button
            onClick={() => setView("login")}
            className="text-sm py-2 text-black hover:underline hover:underline-offset-4"
          >
            Already have an account? <u>Login</u>
          </button>
        )}
      </div>
    </div>
  );
}
