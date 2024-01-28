import React from "react";

import Image from "next/image";
import Link from "next/link";
const Info = () => {
  return (
    <div className="shadow border rounded-3xl text-alpha  mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4 bg-[#FFB6AD] mt-8 md:mt-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-4 ">
        <div>
          <p className="text-alpha text-[20px] font-semibold leading-[33px] mb-4 font-['Inter']">
            HOME DESIGN MADE EASY
          </p>
          <h1 className="text-alpha text-2xl md:text-[56px]  md:leading-[75px] mb-4">
            How to Use interior- design.ai in 3 Easy Steps
          </h1>
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <Image
              src={"/icon/interior-icon (2).svg"}
              width={50}
              height={50}
              alt=""
              className="object-contain"
            />
            <div>
              <p className="text-alpha text-2xl md:text-[36px] md:leading-[55px] mb-2">
                Step 1
              </p>
              <p className="text-alpha text-xl md:text-[24px] md:leading-[30px] mb-4">
              Upload your image of any room type, house or garden
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src={"/icon/interior-icon (3).svg"}
              width={50}
              height={50}
              alt=""
              className="object-contain"
            />
            <div>
              <p className="text-alpha  text-2xl md:text-[36px] md:leading-[55px] mb-2">
                Step 2
              </p>
              <p className="text-alpha text-xl md:text-[24px] md:leading-[30px] mb-4">
              Customize room type, AI strength, custom instructions, mode and design style
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src={"/icon/interior-icon (1).svg"}
              width={50}
              height={50}
              alt=""
              className="object-contain"
            />
            <div>
              <p className="text-alpha  text-2xl md:text-[36px] md:leading-[55px] mb-2">
                Step 3
              </p>
              <p className="text-alpha text-xl md:text-[24px] md:leading-[30px] mb-4">
              Generate new decoration and design ideas in less than 30 seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
