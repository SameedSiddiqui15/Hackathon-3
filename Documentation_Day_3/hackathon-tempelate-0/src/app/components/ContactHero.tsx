import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

export default function ContactHero() {
  return (
    <header className="bg-white flex flex-col justify-center items-center h-80 bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url('/images/Rectangle 1.png')"}}>
  <div className="max-w-[1440px] mx-auto py-8 px-4">
    <img src="/images/Meubel House_Logos-05.png" alt="" className='mx-auto' />
    <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
    <nav aria-label="Breadcrumb" className="text-gray-500 mt-4">
      <ul className="flex items-center justify-center">
        <li className="mr-1"><a href="/" className="hover:text-gray-700">Home</a></li>
        <FaAngleRight />
        <li className="ml-1">Contact</li>
      </ul>
    </nav>
  </div>
</header>
  )
}
