"use client"
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';
import { useCart } from '@/context/CartContext';
import { useFavourites } from '@/context/FavouritesContext';
import { useRouter } from 'next/navigation';
import Notifications from './Notifications';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart } = useCart();
  const { favourites } = useFavourites();
  const router = useRouter();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/Search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

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
          <Link href="/About" className="hover:text-black">
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
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="relative top-1">
            <FiSearch className="w-5 h-5 cursor-pointer hover:text-black" />
          </button>
        </li>
        <li>
          <Link href={'/Favourites'} className="relative">
            <AiOutlineHeart className="w-5 h-5 cursor-pointer hover:text-black" />
            {favourites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {favourites.length}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link href={'/Cart'} className="relative">
            <AiOutlineShoppingCart className="w-5 h-5 cursor-pointer hover:text-black" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </li>
        <li>
            <Notifications/>
        </li>
      </ul>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div ref={searchContainerRef} className="bg-white p-4 rounded-lg shadow-lg w-full max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-200"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <FiSearch className="w-5 h-5 text-gray-500 hover:text-black" />
              </button>
            </form>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </nav>
    );
    { isSearchOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setIsSearchOpen(false)}
      />
    )}
}

