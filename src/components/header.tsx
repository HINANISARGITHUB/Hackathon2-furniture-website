"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      {/* <!-- top bar --> */}
      <div className="md:px-56 hidden text-gray-200 md:flex justify-between items-center px-4 py-2 bg-[#272343]">
        <div className="text-sm flex opacity-[70%] gap-[3px] items-center">
          <FaCheck />
          <span className="font-inter text-[13px]">
            Free shipping on all orders over $50
          </span>
        </div>
        <div className="flex items-center space-x-6 text-sm opacity-[70%]">
          <select className="bg-[#272343] text-[#FAFAFA] hover:underline">
            <option value="Eng">Eng</option>
          </select>
          <div className="hover:underline">Faqs</div>
          <div className="flex items-center space-x-1">
            <CiCircleAlert size={16} />
            <span className="hover:underline">Need Help</span>
          </div>
        </div>
      </div>

      {/* <!-- middle bar --> */}
      <div className="w-[1,980] h-[84px] justify-between bg-gray-100 md:px-56 shadow-md border-b border-gray-200 px-4 py-[20px] ">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center space-x-2 size-10">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
            <span className="text-xl font-bold text-gray-700">Comforty</span>
          </div>

          {/* cart */}
          <div className="relative hidden md:flex items-center lg:flex w-[120px] h-[44px] gap-[12px] rounded-[8px] bg-[#FFFFFF] px-[16px] py-[11px]">
            <PiShoppingCartSimpleBold size ={22} className="text-gray-700" />
            <span className="font-inter font-[500] text-[17px] leading-[13.2px] mt-1">
              cart
            </span>

            <Image
              src="/images/roundpic.png"
              alt="rounded"
              width={100}
              height={100}
              className="w-[20px] h-[20px] "
            />
          </div>

          {/* mobile menu icon */}
          <div className="md:hidden flex items-center">
            <FaBars
              size={20}
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* <!-- section3 menu and contact --> */}
      <div className="hidden md:px-56 md:flex  lg:flex w-[1,920] h-[84px] justify-between bg-[#FAFAFA] px-[300px] py-[14px]">
        <div className="container mx-auto flex justify-between items-center">
          {/* Links */}
          <div className="flex space-x-6 font-thin text-gray-700">
            <a href="#" className="hover:text-teal-600">
              Home
            </a>
            <a href="#" className="hover:text-teal-600">
              Shop
            </a>
            <a href="#" className="hover:text-teal-600">
              Product
            </a>
            <a href="#" className="hover:text-teal-600">
              Pages
            </a>
            <a href="#" className="hover:text-teal-600">
              About
            </a>
          </div>
          {/* contact */}
          <div className="text-gray-700">Contact: (808) 555-0111</div>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2 text-gray-700">
          <a href="#" className="hover:text-teal-600">
            Home
          </a>
          <a href="#" className="hover:text-teal-600">
            Shop
          </a>
          <a href="#" className="hover:text-teal-600">
            Product
          </a>
          <a href="#" className="hover:text-teal-600">
            Pages
          </a>
          <a href="#" className="hover:text-teal-600">
            About
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
