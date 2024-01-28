import React from "react";
import Image from "next/image";
import Link from "next/link";

const AIMagic = () => {
  const serviceData = [
    {
      icon: "info-icon (3).svg",
      title: "556872+ Designs",
      desc: "Our members are generating thousands of ideas every day with Artificial Intelligence.",
    },
    {
      icon: "info-icon (2).svg",
      title: "7031+ PRO Members",
      desc: "Our members are generating thousands of ideas every day with Artificial Intelligence.",
    },
    {
      icon: "info-icon (1).svg",
      title: "40+ Design Styles",
      desc: "Our members are generating thousands of ideas every day with Artificial Intelligence.",
    },
    {
      icon: "star-icon.svg",
      title: "5 Start Ratings",
      desc: "Our members are generating thousands of ideas every day with Artificial Intelligence.",
    },
  ];

  return (
    <div className="text-alpha mx-auto max-w-7xl py-10 md:pt-16 px-4">
      <div className="mb-12">
        <p className="text-alpha text-[16px] text-center font-semibold tracking-[0.25em] uppercase mb-1 font-alpha">
          Why Choose Us
        </p>
        <h1 className="text-alpha text-2xl md:text-3xl lg:text-4xl lg:leading-[55px] mb-2 text-center">
          Let AI do the magic for you.
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 rounded-2xl"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="bg-[rgba(255,255,255,0.04)] rounded-lg">
                <Image
                  src={`/icon/${item.icon}`}
                  height={40}
                  width={40}
                  alt={item.title}
                />
              </div>
              <div className="font-alpha text-black text-lg font-medium text-center">
                {item.title}
              </div>
              <div className="text-sm text-black text-center opacity-70">
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIMagic;
