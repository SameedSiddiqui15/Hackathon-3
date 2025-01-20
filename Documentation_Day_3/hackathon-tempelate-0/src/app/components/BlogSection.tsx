import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { LuClock5 } from "react-icons/lu";

export default function BlogSection() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Our Blogs</h2>
                    <p className="text-gray-500">
                        Find a bright ideal to suit your taste with our great selection
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white rounded-md overflow-hidden mx-auto">
                        <Image
                            width={392}
                            height={393}
                            src="/images/Rectangle 13.png"
                            alt="Blog 1"
                            className="w-[393px] h-[393px] object-contain"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-medium mb-2">
                                Going all-in with millennial design
                            </h3>
                            <Link
                                href="/Blog"
                                className="text-black text-xl font-semibold underline underline-offset-8 mb-4 block"
                            >
                                Read More
                            </Link>
                            <div className="flex items-center text-gray-950 text-sm justify-center">
                                <div className="flex items-center mr-4 text-lg">
                                    <LuClock5 className="text-xl"/> 5 min
                                </div>
                                <div className="flex items-center text-lg">
                                    <CiCalendar className="text-xl"/> 12<sup>th</sup> Oct 2022
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-md overflow-hidden mx-auto">
                        <Image
                            width={393}
                            height={393}
                            src="/images/Rectangle 14.png"
                            alt="Blog 2"
                            className="w-[393px] h-[393px] object-contain"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-medium mb-2">
                                Going all-in with millennial design
                            </h3>
                            <Link
                                href="/Blog"
                                className="text-black text-xl font-semibold underline underline-offset-8 mb-4 block"
                            >
                                Read More
                            </Link>
                            <div className="flex items-center text-gray-950 text-sm justify-center">
                                <div className="flex items-center mr-4 text-lg">
                                    <LuClock5 className="text-xl"/> 5 min
                                </div>
                                <div className="flex items-center text-lg">
                                    <CiCalendar className="text-xl"/> 12<sup>th</sup> Oct 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-md overflow-hidden mx-auto">
                        <Image
                            width={393}
                            height={393}
                            src="/images/Rectangle 15.png"
                            alt="Blog 3"
                            className="w-[393px] h-[393px] object-contain"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-medium mb-2">
                                Going all-in with millennial design
                            </h3>
                            <Link
                                href="/Blog"
                                className="text-black text-xl font-semibold underline underline-offset-8 mb-4 block"
                            >
                                Read More
                            </Link>
                            <div className="flex items-center text-gray-950 text-sm justify-center">
                                <div className="flex items-center mr-4 text-lg">
                                    <LuClock5 className="text-xl"/> 5 min
                                </div>
                                <div className="flex items-center text-lg">
                                    <CiCalendar className="text-xl"/> 12<sup>th</sup> Oct 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/Blog"
                        className="text-black underline underline-offset-8 font-bold"
                    >
                        View All Post
                    </Link>
                </div>
            </div>
        </section>
    );
}
