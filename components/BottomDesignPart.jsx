import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bottomimage from "../public/assets/Rectangle 6.png";

const BottomDesign = () => {
  return (
    <div className="text-alpha mx-auto max-w-7xl py-10 md:py-16 px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="h-full flex items-center">
          <Image
            className="object-contain px-2 rounded-3xl h-auto w-full"
            src={Bottomimage}
            alt="Bottomimage"
          />
        </div>
        <div className="bg-[#FFB6AD] rounded-3xl p-8">
          <p className="text-alpha text-[16px] font-bold leading-[33px] tracking-[0.25em] uppercase mb-1 font-alpha">
            MADE FOR EVERYONE.
          </p>
          <h1 className="text-alpha text-2xl md:text-3xl lg:text-4xl lg:leading-[55px] mb-2 font-semibold">
            The Best Home Design AI Tool for Interiors & Exteriors
          </h1>
          <p className="text-alpha md:text-lg md:leading-[30px] mb-4 md:mb-6">
            Use HomeDesignsAI to redesign any home in seconds: AI decoration, AI
            Interior Design, Exterior AI, Landscaping AI, House AI.
          </p>
          <div className="flex gap-3 mt-2 md:mt-4">
            <Link
              href={"#"}
              className="text-sm md:text-base flex bg-alpha text-white rounded-3xl px-4 md:px-6 py-2 md:py-3"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomDesign;
