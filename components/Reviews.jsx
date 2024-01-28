import Person from "../public/assets/person.png";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Reviews = () => {
  const swiperRef = useRef();

  const ReviewList = [
    {
      text: "“ I needed to replace my living room furniture so I generated a few design ideas with HomeDesigns.AI. I picked my favorite, sent it to the furniture maker and now I have it in real life. Awesome technology ”",
      author: "Cristian Rama",
      business: "Real State",
    },
    {
      text: " “ I needed to replace my living room furniture so I generated a few design ideas with HomeDesigns.AI. I picked my favorite, sent it to the furniture maker and now I have it in real life. Awesome technology ” ",
      author: "Cristian Rama",
      business: "Real State",
    },
    {
      text: " “ I needed to replace my living room furniture so I generated a few design ideas with HomeDesigns.AI. I picked my favorite, sent it to the furniture maker and now I have it in real life. Awesome technology ”",
      author: "Cristian Rama",
      business: "Real State",
    },
  ];
  return (
    <div className="text-alpha mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
        <div className="h-full">
          <div className="bg-[#C3D3C8] p-8 px-12 rounded-3xl h-full pb-10">
            <p className="text-alpha text-[16px] font-bold leading-[33px] mb-5 font-['Inter']">
              Testimonials
            </p>
            <h1 className="text-alpha text-2xl md:text-[82px] md:leading-[85px] mb-5">
              Don’t believe us, read the reviews:
            </h1>
            <div className="overflow-hidden">
              <Swiper
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={1}
                slidesPerGroupSkip={1}
                loop={true}
                rewind={true}
                lazy={true}
                navigation={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  550: {
                    slidesPerView: 1,
                  },
                  900: {
                    slidesPerView: 1,
                  },
                }}
                pagination={false}
                modules={[Pagination, Autoplay]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {ReviewList.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      {/* <div className="p-2 pt-10 "> */}
                      <p className="text-alpha text-[16px] md:text-[36px] font-[300] md:leading-[63px] mb-5 font-['Inter']">
                        {item.text}
                      </p>
                      <p className="text-alpha text-[16px] md:text-[24px] font-[500] md:leading-[33px] mb-2 font-['Inter']">
                        {item.author}
                      </p>
                      <h1 className="text-alpha text-[16] md:text-[20px] md:leading-[30px] mb-5">
                        {item.business}
                      </h1>
                      {/* </div> */}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex gap-2 justify-start">
              <button
                onClick={() => swiperRef?.current?.slidePrev()}
                className="select-none rounded-full border-2 cursor-pointer border-[#292D32] transition-all duration-300 p-1"
              >
                <Image
                  src={"/icon/arrow (1).svg"}
                  width={20}
                  height={20}
                  alt="<"
                />
              </button>
              <button
                onClick={() => swiperRef?.current?.slideNext()}
                className="select-none rounded-full border-2 cursor-pointer border-[#292D32] bg-[#292D32] p-1 transition-all duration-300"
              >
                <Image
                  src={"/icon/arrow (2).svg"}
                  width={20}
                  height={20}
                  alt="<"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="bg-white p-8 px-12 rounded-3xl h-full">
            <Image
              className="object-cover px-2 rounded-3xl"
              alt="hero"
              src={Person}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
