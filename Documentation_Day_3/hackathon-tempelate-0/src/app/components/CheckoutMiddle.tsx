import Link from 'next/link';

export default function CheckoutMiddle() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 py-12">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:justify-items-center">
                <div className="bg-white sm:mx-20 md:mx-0">
                    <h2 className="text-3xl font-semibold mb-6">Billing details</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    First Name
                                </label>
                                <input
                                    id="first-name"
                                    type="text"

                                    className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Last Name
                                </label>
                                <input
                                    id="last-name"
                                    type="text"
                                    className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="company-name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Company Name (Optional)
                            </label>
                            <input
                                id="company-name"
                                type="text"
                                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Country / Region
                            </label>
                            <select
                                id="country"
                                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                            >
                                <option>Pakistan</option>
                                <option>United Kingdom</option>
                                <option>United Arab Emirates</option>
                                <option>United States</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="street-address"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Street Address
                            </label>
                            <input
                                id="street-address"
                                type="text"
                                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="town-city"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Town / City
                            </label>
                            <input
                                id="town-city"
                                type="text"
                                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="province"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Province
                            </label>
                            <select
                                id="province"
                                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                            >
                                <option>Sindh</option>
                                <option>Punjab</option>
                                <option>Balochistan</option>
                                <option>Gilgit-Baltistan</option>
                                <option>Islamabad Capital Territory</option>
                                <option>Khyber Pakhtunkhwa</option>
                                <option>Azad Jammu and Kashmir</option>
                                <option>England</option>
                                <option>Scotland</option>
                                <option>Wales</option>
                                <option>Northern Ireland</option>
                                <option>Alabama</option>
                                <option>Alaska</option>
                                <option>Arizona</option>
                                <option>Arkansas</option>
                                <option>California</option>
                                <option>Colorado</option>
                                <option>Connecticut</option>
                                <option>Delaware</option>
                                <option>Florida</option>
                                <option>Georgia</option>
                                <option>Hawaii</option>
                                <option>Idaho</option>
                                <option>Illinois</option>
                                <option>Indiana</option>
                                <option>Iowa</option>
                                <option>Kansas</option>
                                <option>Kentucky</option>
                                <option>Louisiana</option>
                                <option>Maine</option>
                                <option>Maryland</option>
                                <option>Massachusetts</option>
                                <option>Michigan</option>
                                <option>Minnesota</option>
                                <option>Mississippi</option>
                                <option>Missouri</option>
                                <option>Montana</option>
                                <option>Nebraska</option>
                                <option>Nevada</option>
                                <option>New Hampshire</option>
                                <option>New Jersey</option>
                                <option>New Mexico</option>
                                <option>New York</option>
                                <option>North Carolina</option>
                                <option>North Dakota</option>
                                <option>Ohio</option>
                                <option>Oklahoma</option>
                                <option>Oregon</option>
                                <option>Pennsylvania</option>
                                <option>Rhode Island</option>
                                <option>South Carolina</option>
                                <option>South Dakota</option>
                                <option>Tennessee</option>
                                <option>Texas</option>
                                <option>Utah</option>
                                <option>Vermont</option>
                                <option>Virginia</option>
                                <option>Washington</option>
                                <option>West Virginia</option>
                                <option>Wisconsin</option>
                                <option>Wyoming</option>
                                <option>Abu Dhabi</option>
                                <option>Ajman</option>
                                <option>Dubai</option>
                                <option>Fujairah</option>
                                <option>Ras Al Khaimah</option>
                                <option>Sharjah</option>
                                <option>Umm Al Quwain</option>


                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="zip-code"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                ZIP Code
                            </label>
                            <input
                                id="zip-code"
                                type="text"
                                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Phone
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                id="email-address"
                                type="email"
                                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                            />
                        </div>
                        <div>
                            <input
                                id="additional-info"
                                placeholder='Additional Information'
                                className="border border-gray-300 rounded-md w-full p-3 text-sm focus:ring focus:ring-gray-400"
                            ></input>
                        </div>
                    </form>
                </div>
                <div className="p-8 rounded-md sm:mx-12 md:mx-0 mt-4">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-semibold mb-6">Product</h2>
                        <h2 className="text-2xl font-semibold mb-6">Subtotal</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-sm text-[#9F9F9F]">Asgaard sofa x 1</span>
                            <span className="text-sm">Rs. 250,000.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm">Subtotal</span>
                            <span className="text-sm">Rs. 250,000.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm font-bold">Total</span>
                            <span className="text-lg font-bold text-[#B88E2F]">
                                Rs. 250,000.00
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 border-t border-gray-300 pt-4">
                        <div className="space-y-3">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="accent-black mr-3"
                                    defaultChecked
                                />
                                Direct Bank Transfer
                            </label>
                            <p className="text-sm text-gray-500">
                                Make your payment directly into our bank account. Please use
                                your Order ID as the payment reference. Your order will not be
                                shipped until the funds have cleared in our account.
                            </p>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="accent-black mr-3"
                                />
                                Cash On Delivery
                            </label>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            Your personal data will be used to support your experience
                            throughout this website, to manage access to your account, and
                            for other purposes described in our{" "}
                            <b>
                                privacy policy
                            </b>

                        </p>
                        <button className="mt-6 w-full sm:w-auto justify-self-center flex bg-transparent text-black border border-black py-2 sm:px-28 justify-center rounded-lg hover:bg-gray-100 hover:text-black transition">
                            <Link href={'/'}>
                            Place order
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


