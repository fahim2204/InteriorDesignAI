import React from "react";
import Image from "next/image";
import Link from "next/link";

const AIRedesign = () => {
  const serviceData = [
    {
      imageUrl: "/assets/AIimage (7).png",
      title: "Minimalist",
    },
    {
      imageUrl: "/assets/AIimage (6).png",
      title: "Christmas",
    },
    {
      imageUrl: "/assets/AIimage (5).png",
      title: "Scandinavian",
    },
    {
      imageUrl: "/assets/AIimage (4).png",
      title: "Modern",
    },
    {
      imageUrl: "/assets/AIimage (3).png",
      title: "Zen",
    },
    {
      imageUrl: "/assets/AIimage (2).png",
      title: "Tropical",
    },
    {
      imageUrl: "/assets/AIimage (1).png",
      title: "Biophlic",
    },
    {
      imageUrl: "/assets/AIimage (9).png",
      title: "Bohemian",
    },
    {
      imageUrl: "/assets/AIimage (8).png",
      title: "Eclectic",
    },
  ];

  return (
    <div className="text-alpha mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4">
      <div className="mb-8 md:mb-16">
        <p className="text-alpha text-[16px] text-center font-bold leading-[33px] mb-2 font-['Inter']">
          Redesign, Reimagine, Decorate and Furnish
        </p>
        <h1 className="text-alpha text-3xl md:text-[56px] text-center md:leading-[96px] mb-4">
          Using Over 40+ AI Home Design Styles
        </h1>
      </div>
      <div className="grid md:grid-cols-9 grid-cols-3 gap-5">
        {serviceData.map((feature, index) => (
          <div key={index} className="text-center">
            <Image
              src={feature.imageUrl}
              width={100}
              height={100}
              alt={`Feature ${index + 1}`}
              className="object-contain mx-auto rounded-xl mb-8"
            />
            <p className="text-[24px] font-semibold leading-[36px] mb-3 whitespace-pre-line">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRedesign;
