import React from "react";
import Image from "next/image";
import Link from "next/link";
import Instantdesign from "../public/assets/computer.png";
const InstantRedesign = () => {
  return (
    <div className="text-alpha mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4">
      <div className="mb-8 md:mb-16">
        <p className="text-alpha text-[16px] text-center font-bold leading-[33px] mb-2 font-['Inter']">
          Instantly redesign any home with AI.
        </p>
        <h1 className="text-alpha text-2xl md:text-[64px] text-center md:leading-[66px] mb-4 md:mb-10">
          Works on any device. Trusted by professionals. Made for everyone.
        </h1>
      </div>
      <div>
        <Image
          src={Instantdesign}
          
          alt="instant design"
          className="object-contain  rounded-xl mb-8"
        />
      </div>
    </div>
  );
};

export default InstantRedesign;
