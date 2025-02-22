"use client";

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
import { useEffect, useState } from "react";

export const Slideshow = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const w = window.innerWidth;
    if (w < 550) {
      setIsMobile(true);
    }
    setIsLoading(false);
  }, [isMobile, isLoading]);
  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          spaceBetween={10}
          navigation={isMobile ? false : true}
          autoplay={{
            delay: 2500,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2 fade-in"
        >
          {slideImgs.map((img) => (
            <SwiperSlide key={img.id}>
              <span className="absolute bg-black w-screen h-screen opacity-40 z-10"></span>
              <img src={img.img} alt={img.alt} className="object-fill" />
              <div className="absolute flex flex-col gap-5 bottom-10 md:bottom-52 left-4 md:left-20 z-20">
                <span
                  className={`${titleFont.className} text-4xl md:text-6xl text-white `}
                >
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
      )}
    </>
  );
};
