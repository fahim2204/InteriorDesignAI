import React from "react";
import Exteriorimg from "../public/assets/AIexterior.png";
import Image from "next/image";
import Link from "next/link";

const AIexterior = () => {
  // Define an array of checkbox data
  const checkboxData = [
    { text: "You, family & friends" },
    { text: "Online communities" },
    { text: "Interior designers" },
    { text: "Architects, Home builders" },
    { text: "Real estate agent" },
    { text: "Gardeners" },
  ];

  return (
    <div className="text-alpha mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="h-full">
          <Image
            className="object-cover px-2 rounded-3xl"
            alt="hero"
            src={Exteriorimg}
          />
        </div>
        <div className="h-full">
          <div className="bg-[#D1DDE6] p-8 px-12 rounded-3xl">
            <p className="text-alpha text-[16px] font-bold leading-[33px] mb-2 font-['Inter']">
              USE AI TO REDESIGN & DECORATE
            </p>
            <h1 className="text-alpha text-3xl md:text-[56px] md:leading-[75px] mb-2">
              Easy & Fast AI Technology for Interiors, Exteriors
            </h1>
            {/* Map through the array to render checkboxes and text */}
            {checkboxData.map((checkbox, index) => (
              <div key={index} className="flex items-center gap-4 mb-2">
                <Image
                  src={"/icon/checkbox-icon.svg"}
                  width={18}
                  height={18}
                  alt=""
                  className="object-contain"
                />
                <p className="text-alpha text-[18px]">{checkbox.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIexterior;
