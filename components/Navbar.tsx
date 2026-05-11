"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full h-20 z-50 flex items-center justify-between 
      px-4 md:px-10 lg:px-20 absolute top-5 left-0"
      id="navbar"
    >
      <span>
        <Image
          loading="lazy"
          src="/CafeLogo.svg"
          alt="cafe logo"
          width={105}
          height={105}
          className="w-16 md:w-20 lg:w-24"
        />
      </span>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-10 text-white">
        <li>
          <Link href="/">HOME</Link>
        </li>

        <li>
          <Link href="/drinks">DRINKS</Link>
        </li>

        <li>
          <Link href="/hunger">SMALL HUNGER</Link>
        </li>

        <li>
          <Link href="/suggestions">SUGGESTIONS</Link>
        </li>

        <li>
          <Link href="/photos">PHOTOS</Link>
        </li>

        {/* <li>
          <Link href="/aboutus">ABOUT US</Link>
        </li> */}

        <li>
          <Link href="/contact">CONTACT US</Link>
        </li>
      </ul>

      {/* Hamburger Button */}
      <button
        className="lg:hidden flex flex-col gap-1 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
            }`}
        ></span>

        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""
            }`}
        ></span>

        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md 
        transition-all duration-300 overflow-hidden lg:hidden
        ${isOpen ? "max-h-screen py-6" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 text-white">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
          </li>

          <li>
            <Link href="/drinks" onClick={() => setIsOpen(false)}>
              DRINKS
            </Link>
          </li>

          <li>
            <Link href="/hunger" onClick={() => setIsOpen(false)}>
              SMALL HUNGER
            </Link>
          </li>

          <li>
            <Link href="/suggestions" onClick={() => setIsOpen(false)}>
              SUGGESTIONS
            </Link>
          </li>

          <li>
            <Link href="/photos" onClick={() => setIsOpen(false)}>
              PHOTOS
            </Link>
          </li>

          {/* <li>
            <Link href="/aboutus" onClick={() => setIsOpen(false)}>
              ABOUT US
            </Link>
          </li> */}

          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;