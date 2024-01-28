import React from "react";
import Homedesign1 from "../public/assets/HomeDesign (1).png";
import Homedesign2 from "../public/assets/HomeDesign (2).png";
import Image from "next/image";
import Link from "next/link";
const HomeDesign = () => {
  const links = [
    { href: "#", text: "Home Decoration AI" },
    { href: "#", text: "Home Furniture AI" },
    { href: "#", text: "Backyard Redesign AI" },
    { href: "#", text: "Home Exteriors AI" },
    { href: "#", text: "DIY Home Deco" },
    { href: "#", text: "Patio & Terraces AI" },
  ];
  return (
    <div className="rounded-3xl text-alpha mx-auto max-w-7xl py-7 md:py-10 px-4 bg-[#F8D0AA] shadow border">
      <div className="mx-auto grid lg:grid-cols-2 gap-3 md:gap-6 p-4">
        <div className="">
          <p className="text-alpha md:text-lg font-medium mb-3 tracking-[0.25em] uppercase font-alpha">
            DO IT IN SECONDS
          </p>
          <h1 className="mb-2 text-2xl md:text-4xl font-medium">
            Home Designs AI is for Homeowners and Professionals
          </h1>
        </div>
        <p className="text-alpha md:text-lg mb-2 font-alpha">
          Upload your photo, choose a mode and pick from over 40 design
          styles. Reimagine Any Home Interior, Exterior, or Garden using AI.
        </p>
        <Image
          className="object-cover object-center  px-2 w-full rounded-2xl mb-4"
          alt="hero"
          src={Homedesign1}
        />
        <Image
          className="object-cover object-center px-2 w-full rounded-2xl mb-4"
          alt="hero"
          src={Homedesign2}
        />
        <div className="">
          <p className="text-alpha md:text-lg font-bold mb-2 font-alpha">
            01
          </p>
          <h1 className="mb-2 text-2xl md:text-4xl">
            Personal Use
          </h1>
          <p className="text-alpha md:text-lg mb-4">
            Discover the decorating style that suits your preferences and
            generate unlimited creative and realistic concepts for your home's
            interior and outdoor spaces.
          </p>
          <div className="flex gap-2 flex-wrap items-center">
            {links.map((link, index) => (
              <div key={index} className="text-center">
                <Link
                  href={link.href}
                  className="text-sm md:text-base inline-flex bg-white/40 
                   text-alpha rounded-3xl px-4 py-2 items-center"
                >
                  {link.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <p className="text-alpha md:text-lg font-bold mb-2 font-alpha">
            02
          </p>
          <h1 className="mb-2 text-2xl md:text-4xl">
            Professional Use
          </h1>
          <p className="text-alpha md:text-lg mb-4">
            Make a great first impression on potential clients by showing them
            how much your work can improve their home and save time.
          </p>
          <div className="flex gap-2 flex-wrap items-center">
            {links.map((link, index) => (
              <div key={index} className="text-center">
                <Link
                  href={link.href}
                  className="text-sm md:text-base inline-flex bg-white/40 
                   text-alpha rounded-3xl px-4 py-2 items-center"
                >
                  {link.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDesign;
