import Link from 'next/link';
import React from 'react'

export default function CartMiddle() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 py-8">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-4">
                <div className="col-span-2">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#FFF9E5] text-left">
                                <th className="py-3 lg:px-4 hidden sm:block"></th>
                                <th className="py-3 lg:px-4 px-2 text-sm font-semibold text-gray-700">Product</th>
                                <th className="py-3 lg:px-4 px-2 text-sm font-semibold text-gray-700">Price</th>
                                <th className="py-3 lg:px-4 px-2 text-sm font-semibold text-gray-700">Quantity</th>
                                <th className="py-3 lg:px-4 px-2 text-sm font-semibold text-gray-700">Subtotal</th>
                                <th className="py-3 lg:px-4 px-2 hidden sm:block"></th>
                            </tr>
                        </thead>
                        <tbody className='mt-6'>
                            <tr className="border-b border-gray-50">
                                <td className="py-4 hidden sm:block">
                                    <img
                                        src="\images\Asgaard sofa 4.png"
                                        alt="Product Image"
                                        className="w-16 h-16 rounded-md object-contain bg-[#fbebb5]"
                                    />
                                </td>
                                <td className="py-4 lg:px-4 px-2">
                                    <span className="text-sm font-medium text-[#9F9F9F]">Asgaard sofa</span>
                                </td>
                                <td className="py-4 lg:px-4 px-2 text-sm text-[#9F9F9F]">Rs. 250,000.00</td>
                                <td className="py-4 lg:px-4 px-2">
                                    <input
                                        type="number"
                                        defaultValue="1"
                                        className="w-10 h-8 border border-[#9F9F9F] rounded-md text-center text-sm"
                                    />
                                </td>
                                <td className="py-4 lg:px-4 px-2 text-sm text-gray-900">Rs. 250,000.00</td>
                                <td className="py-4">
                                    <button className="text-yellow-500 hover:text-yellow-600 hidden sm:block"
                                    >
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#FBEBB5" />
                                        </svg>

                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-span-1 bg-[#FFF9E5] lg:p-6 md:p-4 p-6 lg:px-16 px-12  max-w-full sm:mx-40 md:mx-0">
                    <h2 className="text-3xl text-center font-semibold text-gray-800 mb-12">
                        Cart Totals
                    </h2>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-sm text-gray-950">Subtotal</span>
                        <span className="text-sm text-[#9F9F9F]">Rs. 250,000.00</span>
                    </div>
                    <div className="flex justify-between items-center mb-12">
                        <span className="text-sm text-black font-semibold">Total</span>
                        <span className="text-lg font-bold text-[#B88E2F]">Rs. 250,000.00</span>
                    </div>
                    <div className="flex justify-center w-full lg:mb-16 md:mb-2 mb-12">
                        <button className="w-9/12 bg-transparent text-black border border-black py-2 px-4 rounded-lg hover:bg-[#f7eece] transition">
                            <Link href={'/Checkout'}>
                                Check Out
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

