import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Plan() {
  const PlanList = [
    {
      title: "Individual",
      price: "12.99",
      text: "cancel Anytime",
      icon: "checkbox-icon.svg",
      feature: [
        "100 Designs / month",
        "Standard AI Model",
        "Standard Quality Renders",
        "10+ Room Types Available",
        "15+ Styles Available",
        "Download Renders (480p)",
        "Public Gallery",
        "Personal License",
      ],
    },
    {
      title: "Pro",
      price: "26.99",
      text: "cancel Anytime",
      icon: "checkbox-white-icon.png",
      feature: [
        "100 Designs / month",
        "Standard AI Model",
        "Standard Quality Renders",
        "10+ Room Types Available",
        "15+ Styles Available",
        "Download Renders (480p)",
        "Public Gallery",
        "Personal License",
        "40+ Styles Available",
        "Download High Quality",
        "No Watermark",
      ],
    },
    {
      title: "Pro Yearly",
      price: "36.99",
      text: "cancel Anytime",
      icon: "checkbox-icon.svg",
      feature: [
        "100 Designs / month",
        "Standard AI Model",
        "Standard Quality Renders",
        "10+ Room Types Available",
        "15+ Styles Available",
        "Download Renders (480p)",
        "Public Gallery",
        "Personal License",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col items-center py-20 relative rounded-3xl bg-[#DFDFDF]">
      <p className="text-alpha text-[16px] font-bold leading-[33px] mb-2 font-['Inter']">
        Pricing
      </p>
      <h3 className="md:text-[56px] text-2xl font-medium text-center pb-3">
        Choose Plan that’s right for you
      </h3>
      <div className="grid md:grid-cols-3 gap-8 md:gap-4 w-full pt-24">
        {PlanList.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col relative  px-6 lg:px-12 py-10 ${
                index === 0
                  ? "bg-[#FFFFFF] rounded-3xl md:rounded-l-3xl"
                  : index === 1
                  ? "bg-[#292D32]  text-white rounded-3xl md:rounded-b-3xl border "
                  : "bg-[#FFFFFF] rounded-3xl md:rounded-r-3xl"
              }`}
            >
              <div className="text-start text-[16px] font-bold leading-[33px] mb-2 font-['Inter']">
                {item.title}
              </div>
              <div className=" text-3xl mb-2 lg:text-[64px] font-medium">
                ${item.price}
              </div>
              <div className=" text-[16px] font-bold leading-[33px] mb-8 font-['Inter']">
                {item.text}
              </div>
              <div className=" opacity-20 rounded-xl md:px-6 border mb-8 border-b-black"></div>
              <div className="flex flex-col gap-3 h-full mb-8 self-start">
                {item.feature.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <Image
                      src={`/icon/${item.icon}`}
                      width={18}
                      height={18}
                      alt=""
                      className="object-contain"
                    />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mb-8 opacity-20 rounded-xl md:px-6 border border-t-black"></div>
              <div className="flex items-center justify-center mt-8">
                <Link
                  href={"#"}
                  className="text-sm md:text-base inline-flex border  bg-[#FFFFFf] text-alpha rounded-3xl px-4 md:px-6 py-2 md:py-3 items-center"
                >
                  Get Access Now
                  <Image
                    src={"/icon/Arrow (3).svg"}
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
        })}
      </div>
    </div>
  );
}
