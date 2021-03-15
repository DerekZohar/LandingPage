import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import CourseSwiperItem from "../CourseSwiperItem";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);
SwiperCore.use([EffectFade]);
export default function index(props) {
  let courses = [1, 2, 345, 5];
  return (
    <div className="multicarousel">
      <h2 className="most-view">Most View</h2>
      <Swiper
        id="multicarousel-container"
        spaceBetween={50}
        slidesPerView={4}
        navigation
        speed={400}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay
        loop
      >
        <SwiperSlide>
          <CourseSwiperItem />
        </SwiperSlide>  
        <SwiperSlide>
          <CourseSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <CourseSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <CourseSwiperItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
