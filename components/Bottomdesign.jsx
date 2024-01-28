import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bottomimage from "../public/assets/Rectangle 6.png";
const Bottomdesign = () => {
  return (
    <div className="text-alpha mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <Image
            src={Bottomimage}
            alt="Bottomimage"
            className="object-contain  rounded-xl mb-8"
          />
        </div>
        <div className="bg-[#FFB6AD] rounded-3xl p-8">
          <p className="text-alpha text-[16px] font-bold leading-[33px] mb-2 font-['Inter']">
            MADE FOR EVERYONE.
          </p>
          <h1 className="text-alpha text-2xl md:text-[56px]  md:leading-[71px] mb-4 md:mb-10">
            The Best Home Design AI Tool for Interiors & Exteriors
          </h1>
          <p className="text-alpha text-[16px] md:text-[20px] md:leading-[30px] mb-4 md:mb-10">
            Use HomeDesignsAI to redesign any home in seconds: AI decoration, AI
            Interior Design, Exterior AI, Landscaping AI, House AI.
          </p>
          <div className="flex gap-3 mt-2 md:mt-4">
            <Link
              href={"#"}
              className="text-sm md:text-base flex bg-[#292D32] text-[#FFFFFF] rounded-3xl px-4 md:px-6 py-2 md:py-3"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottomdesign;
