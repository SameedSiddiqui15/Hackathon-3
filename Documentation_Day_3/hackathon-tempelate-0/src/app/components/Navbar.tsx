"use client"
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="grid grid-cols-12 items-center mx-auto sm:px-8 px-4 py-4 max-w-[1440px]">
      <ul className="flex md:justify-end justify-start sm:col-span-7 col-span-8 sm:space-x-8 space-x-4 text-gray-800 font-medium">
        <li>
          <Link href="/" className="hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Shop" className="hover:text-black">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/Blog" className="hover:text-black">
            About
          </Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-black">
            Contact
          </Link>
        </li>
      </ul>

      <div className="sm:hidden flex justify-end items-center col-span-4">
        <button
          className="text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6 cursor-pointer" />
          ) : (
            <HiMenu className="w-6 h-6 cursor-pointer" />
          )}
        </button>
      </div>

      <ul
        className={`sm:flex ${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-row sm:justify-end justify-center gap-8 sm:gap-0 sm:col-span-5 col-span-12 items-center space-x-0 sm:space-x-6 text-gray-800 mt-2 sm:mt-0`}
      >
        <li>
          <Link href={'/Account'}>
            <FaRegUser className="w-5 h-5 cursor-pointer hover:text-black" />
          </Link>
        </li>
        <li>
          <Link href={'/Checkout'}>
            <FiSearch className="w-5 h-5 cursor-pointer hover:text-black" />
          </Link>
        </li>
        <li>
          <Link href={'/SingleProduct'}>
            <AiOutlineHeart className="w-5 h-5 cursor-pointer hover:text-black" />
          </Link>
        </li>
        <li>
          <Link href={'/Cart'}>
            <AiOutlineShoppingCart className="w-5 h-5 cursor-pointer hover:text-black" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
