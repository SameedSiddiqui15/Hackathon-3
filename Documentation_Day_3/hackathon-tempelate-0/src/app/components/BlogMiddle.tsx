import Link from 'next/link';
import React from 'react'

export default function BlogMiddle() {
    const blogs = [
        {
            image: "images/Rectangle 68.png",
            title: "Going all-in with millennial design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Mus mauris vitae ultricies leo integer malesuada nunc.In nulla posuere sollicitudin aliquam ultrices.Morbi blandit cursus risus at ultrices mi tempus imperdiet.Libero enim sed faucibus turpis in.Cursus mattis molestie a iaculis at erat.Nibh cras pulvinar mattis nunc sed blandit libero.Pellentesque elit ullamcorper dignissim cras tincidunt.Pharetra et ultrices neque ornare aenean euismod elementum.",
            author: "Admin",
            date: "14 Oct 2022",
            tags: "Wood",
        },
        {
            image: "images/Rectangle 68 (1).png",
            title: "Exploring new ways of decorating",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Mus mauris vitae ultricies leo integer malesuada nunc.In nulla posuere sollicitudin aliquam ultrices.Morbi blandit cursus risus at ultrices mi tempus imperdiet.Libero enim sed faucibus turpis in.Cursus mattis molestie a iaculis at erat.Nibh cras pulvinar mattis nunc sed blandit libero.Pellentesque elit ullamcorper dignissim cras tincidunt.Pharetra et ultrices neque ornare aenean euismod elementum..",
            author: "Admin",
            date: "14 Oct 2022",
            tags: "Handmade",
        },
        {
            image: "images/Rectangle 68 (2).png",
            title: "Handmade pieces that took time to make",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Mus mauris vitae ultricies leo integer malesuada nunc.In nulla posuere sollicitudin aliquam ultrices.Morbi blandit cursus risus at ultrices mi tempus imperdiet.Libero enim sed faucibus turpis in.Cursus mattis molestie a iaculis at erat.Nibh cras pulvinar mattis nunc sed blandit libero.Pellentesque elit ullamcorper dignissim cras tincidunt.Pharetra et ultrices neque ornare aenean euismod elementum.",
            author: "Admin",
            date: "14 Oct 2022",
            tags: "Wood",
        },
    ];
    const posts = [
        {
            title: "Going all-in with millennial design",
            date: "03 Aug 2022",
            image: "images/Rectangle 69.png", // Replace with actual image URL
        },
        {
            title: "Exploring new ways of decorating",
            date: "03 Aug 2022",
            image: "images/Rectangle 69 (1).png",
        },
        {
            title: "Handmade pieces that took time to make",
            date: "03 Aug 2022",
            image: "images/Rectangle 69 (2).png",
        },
        {
            title: "Modern home in Milan",
            date: "03 Aug 2022",
            image: "images/Rectangle 69 (3).png",
        },
        {
            title: "Colorful office redesign",
            date: "03 Aug 2022",
            image: "images/Rectangle 69 (4).png",
        },
    ];

    return (
        <div className="bg-white py-12">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 grid-cols-1">
                <div className="px-4 sm:px-6 lg:px-8 lg:col-span-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg mb-8 overflow-hidden"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-auto object-cover"
                            />
                            <div className="py-6">
                                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                                    <span className='flex items-end'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='inline-block'>
                                            <path d="M9.99977 9.25C7.72977 9.25 7.26977 5.81 7.26977 5.81C6.99977 4.02 7.81977 2 9.96977 2C12.1298 2 12.9498 4.02 12.6798 5.81C12.6798 5.81 12.2698 9.25 9.99977 9.25ZM9.99977 11.82L12.7198 10C15.1098 10 17.2398 12.33 17.2398 14.53V17.02C17.2398 17.02 13.5898 18.15 9.99977 18.15C6.34977 18.15 2.75977 17.02 2.75977 17.02V14.53C2.75977 12.28 4.69977 10.05 7.22977 10.05L9.99977 11.82Z" fill="#9F9F9F" />
                                        </svg>
                                        {blog.author}
                                    </span>
                                    <span className='flex items-end'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='inline-block'>
                                            <path d="M1.66699 15.8334C1.66699 17.25 2.75033 18.3334 4.16699 18.3334H15.8337C17.2503 18.3334 18.3337 17.25 18.3337 15.8334V9.16669H1.66699V15.8334ZM15.8337 3.33335H14.167V2.50002C14.167 2.00002 13.8337 1.66669 13.3337 1.66669C12.8337 1.66669 12.5003 2.00002 12.5003 2.50002V3.33335H7.50033V2.50002C7.50033 2.00002 7.16699 1.66669 6.66699 1.66669C6.16699 1.66669 5.83366 2.00002 5.83366 2.50002V3.33335H4.16699C2.75033 3.33335 1.66699 4.41669 1.66699 5.83335V7.50002H18.3337V5.83335C18.3337 4.41669 17.2503 3.33335 15.8337 3.33335Z" fill="#9F9F9F" />
                                        </svg>
                                        {blog.date}
                                    </span>
                                    <span className='flex items-end'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='inline-block'>
                                        <path d="M12.8966 21.968C12.3666 21.97 11.8566 21.758 11.4826 21.382L3.64564 13.547C3.44131 13.3434 3.28363 13.0978 3.18349 12.8272C3.08335 12.5567 3.04314 12.2676 3.06564 11.98L3.56564 5.41401C3.60018 4.93599 3.80617 4.48652 4.1457 4.14827C4.48524 3.81002 4.93549 3.60574 5.41364 3.57301L11.9796 3.07301C12.0316 3.06201 12.0826 3.06201 12.1346 3.06201C12.6646 3.06201 13.1716 3.27201 13.5446 3.64801L21.3826 11.482C21.5684 11.6677 21.7158 11.8883 21.8164 12.131C21.917 12.3737 21.9687 12.6338 21.9687 12.8965C21.9687 13.1592 21.917 13.4194 21.8164 13.6621C21.7158 13.9048 21.5684 14.1253 21.3826 14.311L14.3106 21.382C14.1254 21.5683 13.905 21.716 13.6623 21.8166C13.4196 21.9172 13.1594 21.9687 12.8966 21.968ZM8.65364 6.65401C8.32475 6.65411 8.00096 6.73531 7.71094 6.89042C7.42093 7.04554 7.17364 7.26978 6.99099 7.54329C6.80834 7.8168 6.69596 8.13113 6.6638 8.45845C6.63164 8.78576 6.68069 9.11595 6.80662 9.41978C6.93255 9.72361 7.13146 9.99169 7.38574 10.2003C7.64002 10.4089 7.94181 10.5516 8.26439 10.6157C8.58698 10.6798 8.92039 10.6633 9.2351 10.5678C9.54982 10.4723 9.83611 10.3006 10.0686 10.068L10.0756 10.062L10.0826 10.055L10.0746 10.062C10.3526 9.78158 10.5414 9.42513 10.6171 9.03759C10.6928 8.65006 10.6522 8.24877 10.5002 7.88432C10.3482 7.51986 10.0918 7.20855 9.76318 6.98961C9.43457 6.77066 9.04851 6.65389 8.65364 6.65401Z" fill="#9F9F9F" />
                                    </svg>
                                        {blog.tags}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{blog.description}</p>
                                <Link
                                    href="/"
                                    className="text-black font-medium underline underline-offset-8"
                                >
                                    Read more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:col-span-4 flex-col flex sm:flex-row lg:flex-col items-start justify-evenly lg:justify-start">
                    <div className="p-4 xl:mx-20 mx-4 lg:ml-0 border w-11/12 sm:w-auto border-gray-200 rounded-md shadow-sm"
                    >
                        <div className="mb-6">
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="search"
                                    placeholder="Search"
                                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                />
                                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
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
                                            d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-8">Categories</h2>
                            <ul className="space-y-6">
                                <li className="flex justify-between items-center text-gray-700 hover:text-black">
                                    <span>Crafts</span>
                                    <span className="text-gray-500">2</span>
                                </li>
                                <li className="flex justify-between items-center text-gray-700 hover:text-black">
                                    <span>Design</span>
                                    <span className="text-gray-500">8</span>
                                </li>
                                <li className="flex justify-between items-center text-gray-700 hover:text-black">
                                    <span>Handmade</span>
                                    <span className="text-gray-500">7</span>
                                </li>
                                <li className="flex justify-between items-center text-gray-700 hover:text-black">
                                    <span>Interior</span>
                                    <span className="text-gray-500">1</span>
                                </li>
                                <li className="flex justify-between items-center text-gray-700 hover:text-black">
                                    <span>Wood</span>
                                    <span className="text-gray-500">6</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-lg p-4 xl:mx-20 lg:mt-8 ml-1">
                        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
                        <ul className="space-y-4 lg:pr-20">
                            {posts.map((post, index) => (
                                <li
                                    key={index}
                                    className="flex items-center space-x-4 pb-4"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-16 h-16 rounded-md object-cover"
                                    />
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">{post.title}</h3>
                                        <p className="text-xs text-gray-500">{post.date}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
            </div>
            <div className="flex justify-center mt-8">
                    <nav className="flex gap-4">
                        <button className="px-4 py-2  bg-[#FBEBB5] rounded-md hover:bg-gray-100">1</button>
                        <button className="px-4 py-2  rounded-md hover:bg-[#FBEBB5]"><Link href={'/Shop'}>2</Link></button>
                        <button className="px-4 py-2  rounded-md hover:bg-[#FBEBB5]"><Link href={'/Shop'}>3</Link></button>
                        <button className="px-4 py-2  rounded-md hover:bg-[#FBEBB5]"><Link href={'/Shop'}>Next</Link></button>
                    </nav>
                </div>
        </div>
    );
}
