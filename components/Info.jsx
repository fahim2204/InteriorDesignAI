import React from "react";
import Image from "next/image";

const Info = () => {
  const ServiceList = [
    {
      icon: "info-icon (3).svg",
      title: "556872+ Designs",
      desc: "Our members are generating thousands of ideas every day with Artificial Intelligence.",
      bgColor: "#D1DDE6",
    },
    {
      icon: "info-icon (2).svg",
      title: "7031+ PRO Members",
      desc: "Our members are generating thousands of ideas every day with Artificial Intelligence.",
      bgColor: "#F8D0AA",
    },
    {
      icon: "info-icon (1).svg",
      title: "40+ Design Styles",
      desc: "Our members are generating thousands of ideas every day with Artificial Intelligence.",
      bgColor: "#C1A0DA",
    },
  ];

  return (
    <div className="text-alpha rounded-3xl mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-8 md:px-12 bg-[#F5F0EB] overflow-hidden mt-8 md:mt-16">
      <div>
        <p className="text-black text-center  text-xl md:text-4xl ">
          Trusted by nearly 5000+ paying customers
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 justify-between max-w-5xl mx-auto items-center mt-12 mb-8 md:mb-0">
          <Image
            src={"/icon/info-1.png"}
            height={200}
            width={350}
            alt=""
            loading="eager"
            className="object-contain opacity-40 h-8 select-none drag-none"
          />
          <Image
            src={"/icon/info-2.png"}
            height={200}
            width={350}
            alt=""
            loading="eager"
            className="object-contain opacity-40 h-8 select-none drag-none"
          />
          <Image
            src={"/icon/info-3.png"}
            height={200}
            width={350}
            alt=""
            loading="eager"
            className="object-contain opacity-40 h-8 select-none drag-none"
          />
          <Image
            src={"/icon/info-4.png"}
            height={200}
            width={350}
            alt=""
            loading="eager"
            className="object-contain opacity-40 h-8 select-none drag-none"
          />
        </div>
      </div>
      {/* services */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
        {ServiceList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-8 md:p-12 rounded-2xl"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="bg-[rgba(255,255,255,0.04)] rounded-lg">
                <Image
                className="object-contain w-10 md:w-16"
                  src={`/icon/${item.icon}`}
                  height={100}
                  width={100}
                  alt={item.title}
                />
              </div>
              <div className="font-alpha text-black text-xl font-medium text-center">
                {item.title}
              </div>
              <div className="text-sm text-black text-center opacity-70">
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Info;
