import Link from "next/link";
import { BsFillClockFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";

export default function ContactForm() {
    return (
        <div className="bg-white p-8 rounded-lg max-w-[1440px] mx-auto">
            <h2 className="text-2xl font-extrabold mb-4 text-center">Get In Touch With Us</h2>
            <p className="text-gray-500 mb-6 text-center xl:px-96 lg:px-52 md:px-28 sm:px-16">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:px-60 lg:px-40 md:px-20 mt-12">
                <div className="col-span-1 xl:pr-40 lg:pr-28 md:pr-16 sm:pr-8">
                    <h6 className="text-2xl flex gap-6 items-center"><FaLocationDot /> Address
                    </h6>
                    <p className="ml-12">236 5th SE Avenue, New York NY10000, United States</p>
                    <h6 className="text-2xl flex gap-6 items-center"><MdLocalPhone /> Phone
                    </h6>
                    <p className="ml-12">
                        Mobile: +(84) 546-6789<br />
                        Hotline: +(84) 456-6789</p>
                    <h6 className="text-2xl flex gap-6 items-center"><BsFillClockFill /> Working Time
                    </h6>
                    <p className="ml-12">
                        Monday-Friday: 9:00 - 22:00 <br />
                        Saturday-Sunday: 9:00 - 21:00</p>
                </div>
                <div className="col-span-1 mt-10 sm:mt-0">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        ></textarea>
                    </div>
                    <div className="mt-4">
                        <Link href={"/"}>
                        <input
                            type="submit"
                            value={"Submit"}
                            className="inline-flex items-center px-20 py-2 border border-black rounded-xl font-medium text-black hover:bg-gray-100 sm:w-auto sm:text-sm"
                        />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
