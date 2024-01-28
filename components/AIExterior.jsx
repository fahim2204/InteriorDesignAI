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
    <div className="text-alpha mx-auto max-w-7xl py-10 md:py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full items-center">
        <div className="h-full flex items-center">
          <Image
            className="object-contain px-2 rounded-3xl h-auto w-full"
            alt="hero"
            src={Exteriorimg}
          />
        </div>
          <div className="h-full bg-[#D1DDE6] p-7 px-10 rounded-3xl">
            <p className="text-alpha text-[16px] font-bold leading-[33px] tracking-[0.25em] uppercase mb-1 font-alpha">
              USE AI TO REDESIGN & DECORATE
            </p>
            <h1 className="text-alpha text-2xl md:text-3xl lg:text-4xl lg:leading-[55px] mb-2">
              Easy & Fast AI Technology for Interiors, Exteriors
            </h1>
            {/* Map through the array to render checkboxes and text */}
            {checkboxData.map((checkbox, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={"/icon/checkbox-icon.svg"}
                  width={18}
                  height={18}
                  alt=""
                  className="object-contain"
                />
                <p className="text-alpha text-lg">{checkbox.text}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default AIexterior;
