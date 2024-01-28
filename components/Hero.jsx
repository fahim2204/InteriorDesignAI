import React from "react";
import Heroimg from "../public/assets/heroimg.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="rounded-3xl text-alpha mx-auto max-w-7xl py-10 md:py-16 lg:py-20 px-6 bg-[#EADDD3] shadow border">
      <div className="mx-auto grid lg:grid-cols-2 md:gap-2">
        <div className="md:items-start md:text-left mb-10 md:mb-0 ">
          <h1 className="mb-5 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Redesign Interiors <br />
            with AI, in Less than 30 Seconds
          </h1>
          <p className="mb-8 text-lg md:text-xl leading-8 md:pr-12 ">
            Upload your photo, choose a mode and pick from over 40 design
            styles. Re-imagine Any Home Interior, Exterior, or Garden using AI.
          </p>

          <div className="flex gap-3 mt-2 md:mt-4">
            <Link href={"#"} className="text-sm md:text-base flex gap-2 bg-alpha text-white rounded-3xl px-4 md:px-6 py-2 md:py-3">
              Start Now
              <Image
                className="object-contain"
                src={"/icon/Arrow.svg"}
                height={16}
                width={16}
                alt=""
                loading="eager"
              />
            </Link>
          </div>

          <div className="flex gap-0.5 md:gap-5 mt-8 md:mt-12">
            <Image
              src={"/assets/heroGroup.png"}
              height={150}
              width={90}
              alt="+"
              loading="eager"
              className="ml-2 object-contain"
            />
            <p className="ml-2 md:ml-4">
              <span className="font-medium text-xl md:text-3xl tracking-tight">
                40+
              </span>{" "}
              <br /> Design styles
            </p>
            <p className="ml-2 md:ml-16">
              <span className="font-medium text-xl md:text-3xl tracking-tight">
                Fast & Easy
              </span>{" "}
              <br /> Design styles
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="flex flex-col items-center">
            <Image
              className="object-cover object-center items-center px-2 w-full rounded-2xl mb-4"
              alt="hero"
              src={Heroimg}
            />
            <p className="mt-4 text-sm  text-[#3D4043]">
              Home Design AI, Exterior AI, and Landscaping AI.
              <br />
              Best quality, lightning-fast, used by homeowners and
              professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
