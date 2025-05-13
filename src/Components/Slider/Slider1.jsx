// src\Components\Slider\Slider1.jsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Sliders from '../../Assets/Banner/15.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'

function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide><img src={Sliders} alt='logo'/></SwiperSlide>
      <SwiperSlide><img src={Sliders} alt='logo'/></SwiperSlide>
      <SwiperSlide><img src={Sliders} alt='logo'/></SwiperSlide>
      <SwiperSlide><img src={Sliders} alt='logo'/></SwiperSlide>
      <SwiperSlide><img src={Sliders} alt='logo'/></SwiperSlide>
      <SwiperSlide><img src={Sliders} alt='logo'/></SwiperSlide>
    
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  </>
  )
}

export default Slider;
