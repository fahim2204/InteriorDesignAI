import React from "react";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  const serviceData = [
    {
      imageUrl: "/icon/service-icon-1.svg",
      title: "Interior & Exterior Image Generation",
      text: "Get decoration ideas for every corner of your house. Inside and outside.",
    },
    {
      imageUrl: "/icon/service-icon-2.svg",
      title: "High-Quality Images",
      text: "Download the AI-generated images to a crystal-clear quality.",
    },
    {
      imageUrl: "/icon/service-icon-3.svg",
      title: "Unlimited AI Ideas for everything",
      text: "Use HomeDesigns AI to generate unlimited AI ideas for your home.",
    },
    {
      imageUrl: "/icon/service-icon-1.svg",
      title: "Fast Image Rendering",
      text: "Get your first AI-generated image in under 30 seconds or less.",
    },
  ];

  return (
    <div className="text-alpha mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4">
      <div className="mb-8 md:mb-16">
        <p className="text-alpha text-[16px] text-center font-semibold leading-[33px] mb-2 font-['Inter']">
          FIRST-TO-MARKET FEATURES
        </p>
        <h1 className="text-alpha text-3xl md:text-[64px] text-center md:leading-[96px] mb-4">
          The "All You Need" AI Home Design Tool
        </h1>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {serviceData.map((feature, index) => (
          <div key={index} className="text-center">
            <Image
              src={feature.imageUrl}
              width={50}
              height={50}
              alt={`Feature ${index + 1}`}
              className="object-contain mx-auto rounded-lg mb-12 h-12"
            />
            <p className="md:text-[28px] text-xl md:leading-[36px] mb-3 whitespace-pre-line">
              {feature.title}
            </p>
            <p className="md:text-xl text-md md:leading-[30px] mb-3">{feature.text}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8">
        <Link
          href={"#"}
          className="text-sm md:text-base inline-flex bg-[#292D32] text-[#FFFFFF] rounded-3xl px-4 md:px-6 py-2 md:py-3 items-center"
        >
          Generate AI Redesigns
          <Image
            src={"/icon/Arrow.svg"}
            height={16}
            width={16}
            alt=""
            loading="eager"
            className="ml-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Service;
