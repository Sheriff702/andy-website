"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo/12.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="https://sheriff702.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
            >
              <Image
                src={logo}
                className=" "
                alt="Logo"
                width={300}
                height={100}
              />
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li>
              <a
                href="#"
                className="block text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
