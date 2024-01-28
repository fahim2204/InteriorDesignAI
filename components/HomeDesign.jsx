import React from "react";
import Homedesign1 from "../public/assets/HomeDesign (1).png";
import Homedesign2 from "../public/assets/HomeDesign (2).png";
import Image from "next/image";
import Link from "next/link";
const HomeDesign = () => {
  const links = [
    { href: "#", text: "Home Decoration AI" },
    { href: "#", text: "Home Furniture AI" },
    { href: "#", text: "Backyard Redesign AI"},
    { href: "#", text: "Home Decoration AI" },
    { href: "#", text: "Home Furniture AI" },
    { href: "#", text: "Backyard Redesign AI" },
  ];
  return (
    <div className="rounded-3xl text-alpha  mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4  bg-[#F8D0AA] shadow border">
      <div className="mx-auto grid lg:grid-cols-2 md:gap-12 p-4">
        <div className=" mb-8 ">
          <p className="text-alpha text-[20px] font-bold leading-[33px] mb-4 font-['Inter']">
            DO IT IN SECONDS
          </p>
          <h1 className="mb-5 text-2xl md:text-[64px] font-medium md:leading-[71px]">
            Home Designs AI is for Homeowners and Professionals
          </h1>
        </div>
        <div className=" mb-8 flex items-center justify-center">
          <p className="text-alpha text-[20px] leading-[30px] mb-4 font-['Inter']">
            Upload your photo, choose a mode and pick from over 40 design
            styles. Reimagine Any Home Interior, Exterior, or Garden using AI.
          </p>
        </div>
        <div className="mb-4">
          <Image
            className="object-cover object-center  px-2 w-full rounded-2xl mb-4"
            alt="hero"
            src={Homedesign1}
          />
        </div>
        <div className="mb-4">
          <Image
            className="object-cover object-center px-2 w-full rounded-2xl mb-4"
            alt="hero"
            src={Homedesign2}
          />
        </div>
        <div className="mb-8">
          <p className="text-alpha text-[20px] font-bold leading-[33px] mb-4 font-['Inter']">
            01
          </p>
          <h1 className="mb-5 text-2xl md:text-[48px] leading-[96px]">
            Personal Use
          </h1>
          <p className="text-alpha text-[20px] leading-[33px] mb-4 ">
            Discover the decorating style that suits your preferences and
            generate unlimited creative and realistic concepts for your home's
            interior and outdoor spaces.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center mt-12">
            {links.map((link, index) => (
              <div key={index} className="text-center mb-4">
                <Link
                  href={link.href}
                  className="text-sm md:text-base inline-flex bg-[#FFFFFF] 
                   text-alpha opacity-50 rounded-3xl px-3 py-2 md:py-3 items-center"
                >
                  {link.text}
                  <Image
                    src="/icon/Arrow.svg"
                    height={16}
                    width={16}
                    alt=""
                    loading="eager"
                    className=""
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <p className="text-alpha text-[20px] font-bold leading-[33px] mb-4 font-['Inter']">
            02
          </p>
          <h1 className="mb-5 text-2xl md:text-[48px] leading-[96px]">
            Professional Use
          </h1>
          <p className="text-alpha text-[20px]  leading-[33px] mb-4 ">
            Make a great first impression on potential clients by showing them
            how much your work can improve their home and save time.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center mt-12">
            {links.map((link, index) => (
              <div key={index} className="text-center mb-4">
                <Link
                  href={link.href}
                  className="text-sm md:text-base inline-flex bg-[#FFFFFF] 
                   text-alpha opacity-50 rounded-3xl px-3 py-2 md:py-3 items-center"
                >
                  {link.text}
                  <Image
                    src="/icon/Arrow.svg"
                    height={16}
                    width={16}
                    alt=""
                    loading="eager"
                    className=""
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8"></div>
      </div>
    </div>
  );
};

export default HomeDesign;
