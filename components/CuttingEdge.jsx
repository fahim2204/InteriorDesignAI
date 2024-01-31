import React from "react";
import Cuttingimg from "../public/assets/cuttingedge.png";
import Creativedesign from "../public/assets/creative-design.png";
import Furnituredesign from "../public/assets/furniture-design.png";
import Furnituredesign2 from "../public/assets/furniture-design-2.png";
import Furnituredesign3 from "../public/assets/furniture-design-3.png";
import Image from "next/image";
import Link from "next/link";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
const CuttingEdge = () => {
  return (
    <div className=" text-alpha  mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4 ">
      <div className="mb-8 md:mb-12">
        <p className="md:text-xl text-center font-semibold md:leading-[33px] mb-2 tracking-[0.25em] uppercase font-alpha">
          EFFORTLESS AI HOME TRANSFORMATION
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl lg:leading-[55px] text-center mb-4">
          Meet Our Cutting-Edge AI Interior Tools
        </h1>
      </div>
      {/* Beautiful Design */}
      <div className="rounded-3xl mx-auto grid lg:grid-cols-2 gap-8 p-8 items-center bg-[#EADDD3] shadow border mb-8">
        <div className="md:items-start md:text-left">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl lg:leading-[55px] font-medium">
            Beautiful Redesign and Stunning Transformations
          </h1>
          <p className="md:text-xl text-[#000000] md:leading-8 md:pr-12">
            Want to make your home look stunning inside and out? Our Beautiful
            Redesign interior ai feature can do just that. It helps you change
            up your place in different styles, making it look amazing. Redesign
            any type of interior, exteriors or gardens.
          </p>
        </div>
        <div className="text-center">
          <div className="flex flex-col items-center">
          <div>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/assets/before-section-2.webp"
                    height={300}
                    width={300}
                    alt="Image one"
                    className="object-contain"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/assets/after-section-2.webp"
                    height={300}
                    width={300}
                    alt="Image two"
                    className="object-contain"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Creative Design */}
      <div className="rounded-3xl mx-auto grid lg:grid-cols-2 gap-8 p-8 items-center bg-[#EADDD3] shadow border mb-8">
        <div className="flex flex-col items-center">
        <div>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/assets/before-section-1.webp"
                    height={300}
                    width={300}
                    alt="Image one"
                    className="object-contain"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/assets/after-section-1.webp"
                    height={300}
                    width={300}
                    alt="Image two"
                    className="object-contain"
                  />
                }
              />
            </div>
        </div>
        <div className="md:items-start md:text-left">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl lg:leading-[55px] font-medium">
            Creative Redesign for Amazing Makeovers
          </h1>
          <p className="md:text-xl text-[#000000] md:leading-8 md:pr-12">
            Want to make your home look stunning inside and out? Our Beautiful
            Redesign interior ai feature can do just that. It helps you change
            up your place in different styles, making it look amazing. Redesign
            any type of interior, exteriors or gardens.
          </p>
        </div>
      </div>

      {/* Furniture and decoration */}
      <div className="rounded-3xl mx-auto grid lg:grid-cols-2 gap-8 p-8 items-center bg-[#EADDD3] shadow border mb-8">
        <div className="md:items-start md:text-left">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl lg:leading-[55px] font-medium">
            Fill The Room with Furniture and Decorations
          </h1>
          <p className="md:text-xl text-[#000000] md:leading-8 md:pr-12">
            Want to make your home look stunning inside and out? Our Beautiful
            Redesign interior ai feature can do just that. It helps you change
            up your place in different styles, making it look amazing. Redesign
            any type of interior, exteriors or gardens.
          </p>
        </div>
        <div className="text-center">
          <div className="flex flex-col items-center">
          <div>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/assets/before-section-3.webp"
                    height={300}
                    width={300}
                    alt="Image one"
                    className="object-contain"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/assets/after-section-3.webp"
                    height={300}
                    width={300}
                    alt="Image two"
                    className="object-contain"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful transformation*/}
      <div className="rounded-3xl mx-auto grid lg:grid-cols-2 gap-8 p-8 items-center bg-[#EADDD3] shadow border mb-8">
        <div className="flex flex-col items-center">
        <div>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/assets/before-section-1.webp"
                    height={300}
                    width={300}
                    alt="Image one"
                    className="object-contain"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/assets/after-section-1.webp"
                    height={300}
                    width={300}
                    alt="Image two"
                    className="object-contain"
                  />
                }
              />
            </div>
        </div>
        <div className="md:items-start md:text-left">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl lg:leading-[55px] font-medium">
            Beautiful Redesign and Stunning Transformations
          </h1>
          <p className="md:text-xl text-[#000000] md:leading-8 md:pr-12">
            Want to make your home look stunning inside and out? Our Beautiful
            Redesign interior ai feature can do just that. It helps you change
            up your place in different styles, making it look amazing. Redesign
            any type of interior, exteriors or gardens.
          </p>
        </div>
      </div>
      {/* AI furniture*/}
      <div className="rounded-3xl mx-auto grid lg:grid-cols-2 gap-8 p-8 items-center bg-[#EADDD3] shadow border mb-8">
        <div className="md:items-start md:text-left">
          <h1 className="mb-5 text-3xl md:text-5xl font-medium leading-[60px]">
            AI Furniture Removal or Instant Room Declutter
          </h1>
          <p className="md:text-xl text-[#000000] md:leading-8 md:pr-12">
            With AI Furniture Removal, you can erase anything you want, like
            furniture or objects and make your room completely empty in no time.
            This helps you see your room empty and redesign it from zero.
          </p>
        </div>
        <div className="text-center">
          <div className="flex flex-col items-center">
          <div>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/assets/before-section-3.webp"
                    height={300}
                    width={300}
                    alt="Image one"
                    className="object-contain"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/assets/after-section-3.webp"
                    height={300}
                    width={300}
                    alt="Image two"
                    className="object-contain"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuttingEdge;
