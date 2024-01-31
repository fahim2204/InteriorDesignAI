import Person from "../public/assets/person.png";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

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
      img:"/assets/person.png",
    },
    {
      text: "“ I needed to replace my living room furniture so I generated a few design ideas with HomeDesigns.AI. I picked my favorite, sent it to the furniture maker and now I have it in real life. Awesome technology ” ",
      author: "Cristian Rama",
      business: "Real State",
      img:"/assets/person.png",
      img:"/assets/person.png",
    },
    {
      text: "“ I needed to replace my living room furniture so I generated a few design ideas with HomeDesigns.AI. I picked my favorite, sent it to the furniture maker and now I have it in real life. Awesome technology ”",
      author: "Cristian Rama",
      business: "Real State",
      img:"/assets/person.png",
    },
  ];
  return (
    <div className="text-alpha mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="h-full">
          <div className="bg-[#C3D3C8] p-8 px-12 rounded-3xl h-full flex flex-col pb-10">
            <p className="text-alpha text-[16px] font-bold tracking-[0.25em] uppercase mb-3 font-alpha">
              Testimonials
            </p>
            <h1 className="text-alpha text-2xl font-semibold md:text-3xl lg:text-4xl lg:leading-[50px] mb-5">
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
                      <p className="text-alpha md:text-xl mb-4 font-alpha md:leading-[40px]">
                        {item.text}
                      </p>
                      <p className="text-alpha text-[16px] md:text-2xl font-medium md:leading-[33px] uppercase tracking-widest font-alpha">
                        {item.author}
                      </p>
                      <h1 className="text-alpha text-[16] md:text-xl md:leading-[30px] mb-5">
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
                className="select-none rounded-full border-2 cursor-pointer border-alpha hover:bg-alpha group hover:translate-y-0.5 transition-all duration-300 p-1"
              >
                <Image
                  src={"/icon/arrow(1).svg"}
                  width={22}
                  height={22}
                  alt="<"
                  className="group-hover:invert"
                />
              </button>
              <button
                onClick={() => swiperRef?.current?.slideNext()}
                className="select-none rounded-full border-2 cursor-pointer border-alpha hover:bg-alpha group hover:translate-y-0.5 transition-all duration-300 p-1"
              >
                <Image
                  src={"/icon/arrow(1).svg"}
                  width={22}
                  height={22}
                  alt="<"
                  className="group-hover:invert rotate-180"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 px-12 rounded-3xl h-full flex items-center">
          <Image
            className="object-cover px-2 rounded-3xl"
            alt="hero"
            src={Person}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
