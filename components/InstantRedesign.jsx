import React from "react";
import Image from "next/image";
import Instantdesign from "../public/assets/computer.png";

const InstantRedesign = () => {
  return (
    <div className="text-alpha mx-auto max-w-7xl py-8 px-4">
      <div className="mb-8 md:mb-16">
        <p className="text-alpha text-xs md:text-base text-center font-bold leading-[33px] tracking-[0.25em] uppercase mb-1 font-alpha">
          Instantly redesign any home with AI.
        </p>
        <h1 className="text-alpha text-2xl md:text-3xl lg:text-5xl lg:leading-[55px] text-center max-w-5xl mx-auto">
          Works on any device. Trusted by professionals. Made for everyone.
        </h1>
      </div>
      <div>
        <Image
          src={Instantdesign}
          alt="instant design"
          className="object-contain rounded-xl w-full max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
};

export default InstantRedesign;
