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
    <div className="text-alpha mx-auto max-w-7xl py-10 md:py-16 lg:py-18 px-4">
      <div className="mb-8 md:mb-16">
        <p className="text-alpha uppercase text-[16px] text-center font-bold leading-[33px] mb-1 tracking-[0.25em] font-alpha">
          Redesign, Reimagine, Decorate and Furnish
        </p>
        <h1 className="text-alpha text-2xl md:text-3xl lg:text-5xl lg:leading-[55px] text-center mb-1">
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
              className="object-contain mx-auto rounded-xl mb-1"
            />
            <p className="md:text-lg font-semibold whitespace-pre-line">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRedesign;
