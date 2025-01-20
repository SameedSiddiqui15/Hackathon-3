"use client"
import React, { useState } from "react";

export default function PopupCart()  {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={togglePopup}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Open Cart
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50">
          <div className="w-full max-w-md bg-white h-full shadow-xl p-6 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <button
                onClick={togglePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Item */}
            <div className="flex items-center justify-between mb-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Product"
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="ml-4">
                <h3 className="text-sm font-medium">Asgaard sofa</h3>
                <p className="text-sm text-gray-500">1 x Rs. 250,000.00</p>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center border-t border-gray-200 pt-4">
              <span className="text-sm font-medium">Subtotal</span>
              <span className="text-lg font-semibold text-yellow-500">
                Rs. 250,000.00
              </span>
            </div>

            {/* Actions */}
            <div className="mt-6 flex space-x-4">
              <button className="w-1/2 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                View Cart
              </button>
              <button className="w-1/2 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


