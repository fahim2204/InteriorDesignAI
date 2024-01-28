import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Form from "@/components/Form";
import Design from "@/components/Design";
const WhyChooseUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="rounded-3xl text-alpha  mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4 bg-[#DFDFDF] shadow border">
      <div className="p-4">
        <p className="text-[16px] font-bold leading-[33px] text-center mb-4 font-['Inter']">
          WHY CHOOSE US
        </p>
        <p className="text-2xl md:text-[64px] md:leading-[70px] mb-4 text-center">
          Select AI Interiors, <br /> AI Exteriors or AI Gardens below:
        </p>
        <p className="text-xl text-center mb-4">
          Upload your photo, choose a mode and pick from over 40 design styles.
          Reimagine Any Home <br /> Interior, Exterior, or Garden using AI
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 items-center mx-auto mt-12">
          <Link
            href={"#"}
            className="text-sm md:text-base items-center flex bg-[#292D32] text-[#FFFFFF] text-[18px] rounded-3xl px-4 md:px-6 py-2 md:py-3"
          >
            <Image
              src={"/icon/interior-icon (1).svg"}
              height={20}
              width={20}
              alt=""
              loading="eager"
              className="mr-2 object-contain h-8"
            />
            Interiors
          </Link>
          <Link
            href={"#"}
            className="text-sm md:text-base flex items-center text-alpha text-[18px] rounded-3xl px-4 md:px-6 py-2 md:py-3"
          >
            <Image
              src={"/icon/interior-icon (2).svg"}
              height={20}
              width={20}
              alt=""
              loading="eager"
              className="mr-2 object-contain h-8"
            />
            Exteriors


          </Link>
          <Link
            href={"#"}
            className="text-sm md:text-base flex items-center text-[18px] text-alpha rounded-3xl px-4 md:px-6 py-2 md:py-3"
          >
            <Image
              src={"/icon/interior-icon (3).svg"}
              height={20}
              width={20}
              alt=""
              loading="eager"
              className="mr-2 object-contain h-8"
            />
            Gardens
          </Link>
        </div>
        {/* design */}
        <Design />
        {/* form */}
        <Form />
      </div>
    </div>
  );
};

export default WhyChooseUs;
