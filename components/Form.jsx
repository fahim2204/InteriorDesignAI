import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
const Form = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage) {
      console.log("Image uploaded:", selectedImage);
      // You can implement the logic for uploading the image to your server here
    } else {
      console.log("No image selected");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-12">
      {/* step-1 */}
      <div className="h-full flex flex-col">
        <p className="text-alpha text-[16px] font-bold leading-[33px] mb-4 font-['Inter']">
          STEP 1
        </p>
        <p className="text-alpha text-2xl md:text-4xl lg:text-5xl md:leading-[54px] mb-4 ">
          Upload Image
        </p>
        <div className="bg-white p-5 md:p-8 rounded-2xl flex-1 flex">
          <div className="bg-[#E3E3E3] w-full flex flex-col justify-center items-center p-8 rounded-2xl text-center">
            <div className="text-4xl mb-4">
              <Image
                src={"/icon/uploadimage-icon.svg"}
                height={200}
                width={350}
                alt=""
                loading="eager"
                className="object-contain opacity-40 h-8 mb-8 sm:mb-0"
              />
            </div>
            <p className="text-alpha text-xl leading-[30px] mb-4 mt-4">
              Drop an image, tap, take a photo or CTRL +Ve
            </p>
            <form onSubmit={handleSubmit}>
              <label className="block mt-4 mb-4">
                <span className="bg-alpha text-white px-4 py-4 rounded-3xl cursor-pointe hover:bg-alpha/90 hover:translate-y-0.5 transition-all duration-300">
                  Upload Image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
      {/* step-2 */}
      <div className="h-full">
        <p className="text-alpha text-[16px] font-bold leading-[33px] mb-4 font-['Inter']">
          STEP 2
        </p>
        <p className="text-alpha text-2xl md:text-4xl lg:text-5xl md:leading-[54px] mb-4 ">
          Customize
        </p>
        <div className="bg-white p-6 md:p-8 rounded-2xl flex flex-col justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="RoomType">Room Type</label>
              <select
                className="block appearance-none w-full bg-[#E3E3E3] border border-white/20 text-gray-700 py-2 px-6 rounded-3xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="room"
              >
                <option>Living Room</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mode">Mode</label>
              <select
                className="block appearance-none w-full bg-[#E3E3E3] border border-white/20 text-gray-700 py-2 px-6 rounded-3xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="mode"
              >
                <option>Living Room</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="design">Design Style</label>
              <select
                className="block appearance-none w-full bg-[#E3E3E3] border border-white/20 text-gray-700 py-2 px-6 rounded-3xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="design"
              >
                <option>Living Room</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="noOfDesign">No. of designs</label>
              <select
                className="block appearance-none w-full bg-[#E3E3E3] border border-white/20 text-gray-700 py-2 px-6 rounded-3xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="noOfDesign"
              >
                <option>Living Room</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[#00000] text-[16px] font-[200] leading-[30px]">
                AI Intervention
              </p>
              {/* <div className="relative bg-[#E3E3E3] rounded-2xl px-6 py-2">
                <div className="absolute bottom-0 left-2/3 transform -translate-x-1/2">
                  <div className="bg-alpha h-4 w-4 rounded-full"></div>
                </div>
              </div> */}
              <label for="steps-range-slider-usage" class="sr-only">
                Example range
              </label>
              <input
                type="range"
                class="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
[&::-webkit-slider-thumb]:w-2.5
[&::-webkit-slider-thumb]:h-2.5
[&::-webkit-slider-thumb]:-mt-0.5
[&::-webkit-slider-thumb]:appearance-none
[&::-webkit-slider-thumb]:bg-alpha
[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
[&::-webkit-slider-thumb]:rounded-full
[&::-webkit-slider-thumb]:transition-all
[&::-webkit-slider-thumb]:duration-150
[&::-webkit-slider-thumb]:ease-in-out
[&::-webkit-slider-thumb]:dark:bg-alpha

[&::-moz-range-thumb]:w-2.5
[&::-moz-range-thumb]:h-2.5
[&::-moz-range-thumb]:appearance-none
[&::-moz-range-thumb]:bg-alpha
[&::-moz-range-thumb]:border-4
[&::-moz-range-thumb]:border-alpha
[&::-moz-range-thumb]:rounded-full
[&::-moz-range-thumb]:transition-all
[&::-moz-range-thumb]:duration-150
[&::-moz-range-thumb]:ease-in-out

[&::-webkit-slider-runnable-track]:w-full
[&::-webkit-slider-runnable-track]:h-2
[&::-webkit-slider-runnable-track]:bg-gray-100
[&::-webkit-slider-runnable-track]:rounded-full
[&::-webkit-slider-runnable-track]:dark:bg-gray-700

[&::-moz-range-track]:w-full
[&::-moz-range-track]:h-2
[&::-moz-range-track]:bg-gray-100
[&::-moz-range-track]:rounded-full"
                id="steps-range-slider-usage"
                min="1"
                max="4"
                step="1"
              ></input>
            </div>
            <div className="flex justify-between text-md cursor-pointer">
              <span className="hover:underline">Very Low</span>
              <span className="hover:underline">Low</span>
              <span className="hover:underline">Medium</span>
              <span className="hover:underline">Extreme</span>
            </div>
          </div>
        </div>
      </div>
      {/* step-3 */}
      <div className="h-full flex flex-col">
        <p className="text-alpha text-[16px] font-bold leading-[33px] mb-4 font-['Inter']">
          STEP 3
        </p>
        <p className="text-alpha text-2xl md:text-4xl lg:text-5xl md:leading-[54px] mb-4 ">
          Generate
        </p>
        <div className="bg-white p-6 md:p-8 rounded-2xl flex-1 flex flex-col">
          <div className="bg-[#E3E3E3] flex flex-col h-auto justify-center items-center flex-grow p-8 rounded-2xl text-center">
            <div className="text-4xl mb-4">
              <Image
                src={"/icon/generate-icon.svg"}
                height={200}
                width={350}
                alt=""
                loading="eager"
                className="object-contain opacity-40 h-8 mb-8 sm:mb-0"
              />
            </div>
            <p className="text-alpha text-xl leading-[30px] mb-4 mt-4">
              Please wait we are generating you image
            </p>
          </div>
          <form>
            <div className="flex justify-between mt-4 md:mt-8 mb-4">
              <label className="mb-2">
                <input type="checkbox" name="#" value="#" className="mr-2" />
                Public Gallery
              </label>
              <label className="mb-2">
                <input type="checkbox" name="#" value="#" className="mr-2 " />
                Private Gallery
              </label>
            </div>
          </form>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-alpha text-white px-6 py-3 mx-auto rounded-full hover:bg-alpha/90 hover:translate-y-0.5 transition-all duration-300 "
            >
              Generate New Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
