"use client";

import { useState } from "react";

import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slideshow.css";
import { slideImgs } from "@/utils";
import Link from "next/link";
import { titleFont } from "@/config/fonts";

export const Slideshow = () => {
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {slideImgs.map((img) => (
          <SwiperSlide key={img.id}>
            <span className="absolute bg-black w-screen h-screen opacity-40 z-10"></span>
            <img src={img.img} alt={img.alt} className="object-fill" />
            <div className="absolute flex flex-col gap-5 bottom-52 left-20 z-20">
              <span className={`${titleFont.className} text-6xl text-white `}>
                {img.desc}
              </span>
              <Link
                href={img.url}
                className="rounded-3xl bg-white text-black font-semibold p-3 w-max hover:bg-orange-500 transition-colors"
              >
                Comprar ahora
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
