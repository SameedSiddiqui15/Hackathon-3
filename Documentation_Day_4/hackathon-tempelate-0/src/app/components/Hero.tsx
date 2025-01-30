"use client"
import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Hero() {
  const pathname = usePathname();

  // Extract the last part of the URL path
  const currentPage = pathname.split('/').filter((segment) => segment).pop();

  // Capitalize the first letter of the page name
  const pageName = currentPage ? currentPage.charAt(0).toUpperCase() + currentPage.slice(1) : 'Home';

  return (
    <header className="bg-white flex flex-col justify-center items-center h-80 bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url('/images/Rectangle 1.png')"}}>
  <div className="max-w-[1440px] mx-auto py-8 px-4">
    <img src="/images/Meubel House_Logos-05.png" alt=""  className='mx-auto'/>
    <h1 className="text-4xl font-bold text-gray-800 text-center">{pageName}</h1>
    <nav aria-label="Breadcrumb" className="text-gray-500 mt-4">
      <ul className="flex items-center justify-center">
        <li className="mr-1"><Link href="/" className="hover:text-gray-700">Home</Link></li>
        <FaAngleRight />
        <li className="ml-1">{pageName}</li>
      </ul>
    </nav>
  </div>
</header>
  );
}
