import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "@/components/Form";
import Design from "@/components/Design";

const WhyChooseUs = () => {
  return (
    <div className="rounded-3xl text-alpha  mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4 bg-[#DFDFDF] shadow border mt-8 md:mt-16">
      <div className="md:p-4">
        <p className="text-[16px] font-bold leading-[33px] text-center mb-4 uppercase tracking-[0.25em] font-alpha">
          WHY CHOOSE US
        </p>
        <p className="text-3xl md:text-5xl md:leading-[60px] mb-4 text-center">
          Select AI Interiors, <br /> AI Exteriors or AI Gardens below:
        </p>
        <p className="text-lg md:text-xl text-center mb-4">
          Upload your photo, choose a mode and pick from over 40 design styles.
          Reimagine Any Home <br /> Interior, Exterior, or Garden using AI
        </p>
        <div className="flex justify-center gap-3 items-center flex-wrap mx-auto mt-12">
          <Link
            href={"#"}
            className="items-center flex bg-alpha text-white text-base md:text-lg rounded-3xl px-4 md:px-6 py-2"
          >
            <Image
              src={"/icon/interior-ai-1.svg"}
              height={36}
              width={36}
              alt=""
              loading="eager"
              className="mr-2 object-contain h-8 md:h-12"
            />
            Interiors
          </Link>
          <Link
            href={"#"}
            className="flex items-center text-base md:text-lg rounded-3xl px-4 md:px-6 py-2"
          >
            <Image
              src={"/icon/interior-ai-2.svg"}
              height={36}
              width={36}
              alt=""
              loading="eager"
              className="mr-2 object-contain h-8 md:h-12"
            />
            Exteriors
          </Link>
          <Link
            href={"#"}
            className="flex items-center text-base md:text-lg rounded-3xl px-4 md:px-6 py-2"
          >
            <Image
              src={"/icon/interior-ai-3.svg"}
              height={36}
              width={36}
              alt=""
              loading="eager"
              className="mr-2 object-contain h-8 md:h-12"
            />
            Gardens
          </Link>
        </div>

        {/* Design Section */}
        <Design />

        {/* Form Section */}
        <Form />

      </div>
    </div>
  );
};

export default WhyChooseUs;
