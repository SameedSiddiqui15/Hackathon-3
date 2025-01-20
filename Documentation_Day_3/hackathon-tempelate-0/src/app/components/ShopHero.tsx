import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

export default function ShopHero() {
  return (
    <header className="bg-white flex flex-col justify-center items-center h-80 bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url('/images/Rectangle 1.png')"}}>
  <div className="max-w-[1440px] mx-auto py-8 px-4">
    <img src="/images/Meubel House_Logos-05.png" alt=""  className='mx-auto'/>
    <h1 className="text-4xl font-bold text-gray-800 text-center">Shop</h1>
    <nav aria-label="Breadcrumb" className="text-gray-500 mt-4">
      <ul className="flex items-center">
        <li className="mr-1"><Link href="/" className="hover:text-gray-700">Home</Link></li>
        <FaAngleRight />
        <li className="ml-1">Shop</li>
      </ul>
    </nav>
  </div>
</header>
  )
}
