// src\Components\Slider\Slider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Sliders from '../../Assets/Banner/15.png';
import image2 from '../../Assets/Banner/17.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'fraction',
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide id="demoimages"><img src={Sliders} alt="logo" /></SwiperSlide>
        <SwiperSlide id="demoimages"><img src={image2} alt="logo" /></SwiperSlide>
        <SwiperSlide id="demoimages"><img src={Sliders} alt="logo" /></SwiperSlide>
        <SwiperSlide id="demoimages"><img src={image2} alt="logo" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
