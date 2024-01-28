import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export default function Design() {
  const swiperRef = useRef();

  const ReviewList = [
    { pic: "design (1).png" },
    { pic: "design (2).png" },
    { pic: "design (3).png" },
    { pic: "design (4).png" },
    { pic: "design (5).png" },
    { pic: "design (6).png" },
  ];

  return (
    <div className="">
      <div className="mx-auto px-3  items-center py-6">
        <div className="flex flex-col">
          <p className="text-alpha text-2xl md:text-[42px] md:leading-[54px] mb-4">
            Latest Design
          </p>
          <div className="flex gap-2 justify-end">
        
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
                slidesPerView: 3,
              },
              900: {
                slidesPerView: 5,
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
                  <div className="p-2 pt-10 ">
                    <Image
                      src={`/assets/${item.pic}`}
                      width={200}
                      height={200}
                      alt="design"
                      className="object-cover rounded-3xl"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
