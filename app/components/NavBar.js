"use client"; // Required for client-side rendering in Next.js
import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-800 py-4"> {/* Fixed positioning */}
      <div className="flex items-center justify-between mx-5">
        <Link href="/" className='text-red-500 text-3xl font-bold px-2 py-3 cursor-pointer'>
          Horizon
        </Link>
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)} // Toggle menu open/close
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "❌" : "☰"} {/* Hamburger icon */}
        </button>
        <ul className={`md:flex items-center gap-5 z-10 ${isOpen ? "flex flex-col absolute top-16 left-0 w-full bg-gray-800 py-4" : "hidden"} md:static md:bg-transparent md:flex-row`}>
          <li>
            <Link href="/pages/home" className="text-white hover:bg-red-500 px-3 py-2 rounded transition duration-200">Home</Link>
          </li>
          <li>
            <Link href="/pages/about" className="text-white hover:bg-red-500 px-3 py-2 rounded transition duration-200">About</Link>
          </li>
          <li>
            <Link href="/pages/map" className="text-white hover:bg-red-500 px-3 py-2 rounded transition duration-200">Map</Link>
          </li>
          <li>
            <Link href="/pages/sign" className="text-white hover:bg-red-500 px-3 py-2 rounded transition duration-200">Sign</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
