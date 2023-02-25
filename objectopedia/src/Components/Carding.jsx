import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carding() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.dailyobjects.com/marche/assets/images/other/condo-watch-charging-stand-new-arrival-imge.png?tr=cm-pad_resize,v-2,dpr-1" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://images.dailyobjects.com/marche/assets/images/other/group-6681.jpg?tr=cm-pad_crop,v-2,dpr-1" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6679.jpg?tr=cm-pad_crop,v-2,dpr-1" alt=""/></SwiperSlide>
        <SwiperSlide> <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6680.jpg?tr=cm-pad_crop,v-2,dpr-1" alt=""/></SwiperSlide>
        <SwiperSlide> <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6678.jpg?tr=cm-pad_crop,v-2,dpr-1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.dailyobjects.com/marche/assets/images/other/condo-watch-charging-stand-new-arrival-imge.png?tr=cm-pad_resize,v-2,dpr-1" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://images.dailyobjects.com/marche/assets/images/other/group-6681.jpg?tr=cm-pad_crop,v-2,dpr-1" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6679.jpg?tr=cm-pad_crop,v-2,dpr-1" alt=""/></SwiperSlide>
        <SwiperSlide> <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6680.jpg?tr=cm-pad_crop,v-2,dpr-1" alt=""/></SwiperSlide>
        <SwiperSlide> <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6678.jpg?tr=cm-pad_crop,v-2,dpr-1" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
