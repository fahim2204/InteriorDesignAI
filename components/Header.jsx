'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";


const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="max-w-7xl mx-auto pt-5 pb-8 px-4 text-alpha">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="font-extrabold text-lg font-alpha tracking-[3px] md:tracking-[6px] hover:text-alpha/60 transition-all duration-300"> INTERIOR-DESIGN.AI</div>
        </Link>
        <div>
          <ul
            className="hidden lg:flex items-center space-x-4 m-auto">
            <li className="py-3 hover:text-alpha/60 transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="py-3 hover:text-alpha/60 transition-all duration-300">
              <Link href="/#features">Features</Link>
            </li>
            <li className="py-3 hover:text-alpha/60 transition-all duration-300">
              <Link href="/#api">API</Link>
            </li>
            <li className="py-3 hover:text-alpha/60 transition-all duration-300">
              <Link href="/#blog">Blogs</Link>
            </li>
            <div className="menu space-x-2 flex items-center">
              <li>
                <Link href={"#"} className="hidden lg:flex px-2 lg:px-4 py-2.5 menu-padding bg-white rounded-full text-black ">
                  Log in
                </Link>
              </li>
              <li>
                <Link href={'/'} className='flex items-center gap-1 border px-5 py-2.5 bg-black rounded-full text-white hover:bg-alpha/90 hover:translate-y-0.5 transition-all duration-300'>
                  <Image src={'/icon/Diamond.svg'} height={24} width={24} alt="+" loading="eager" />Upgrade To Pro
                </Link>
              </li>
            </div>
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className="lg:hidden">
            <AiOutlineMenu size={25} className="text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        onClick={() => setNav(false)}
        className={`${nav ? 'lg:hidden fixed left-0 top-0 h-screen w-screen bg-black/60' : ''} m-auto transition-all ease-in-out duration-500`}>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-[2.5%] m-auto top-16 h-[50%] bg-[#ffffff] w-[95%] p-4"
              : "hidden fixed left top-[-100%] w-full "
          }>
          <div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="">
              <li onClick={() => setNav(false)} className="py-2 px-10 text-sm hover:text-alpha/60 transition-all duration-300">
                <Link href="/">
                  Home
                </Link>
              </li>
              <li onClick={() => setNav(false)} className="py-2 px-10 text-sm hover:text-alpha/60 transition-all duration-300">
                <Link href="/#features">
                  Features
                </Link>
              </li>
              <li onClick={() => setNav(false)} className="py-2 px-10 text-sm hover:text-alpha/60 transition-all duration-300">
                <Link href="/#api">
                  API
                </Link>
              </li>
              <li onClick={() => setNav(false)} className="py-2 px-10 text-sm hover:text-alpha/60 transition-all duration-300">
                <Link href="/#blog">
                  Blogs
                </Link>
              </li>
              <li className=" py-3 px-8">
                <Link href="/#delivery-login">
                  <span className="px-10 py-2 bg-black rounded-full text-white hover:bg-alpha/90 hover:translate-y-0.5 transition-all duration-300">
                    Log in
                  </span>
                </Link>
              </li>
              <li className="py-3 px-8 flex">
                <Link href={'/'} className='flex items-center gap-1 border px-5 py-2.5 bg-black rounded-full text-white hover:bg-alpha/90 hover:translate-y-0.5 transition-all duration-300'>
                  <Image src={'/icon/Diamond.svg'} height={24} width={24} alt="+" loading="eager" />Upgrade To Pro
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;