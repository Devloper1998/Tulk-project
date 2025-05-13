// src\Components\Businesses\Business.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Business.css';
import dataslider from './../../Assets/bussines/1.png';

function Business() {
  const businesses = [
    {
      image: dataslider,
      title: 'The Aesthetics Club',
      address: '15 Comely Bank Road, Stockbridge, Edinburgh',
      discount: '20% OFF FIRST TREATMENT!',
    },
    {
      image: dataslider,
      title: 'Cairndale Hotel & Spa',
      address: '132-136 English Street, Dumfries',
      discount: '10% OFF SPA',
    },
    {
      image: dataslider,
      title: 'The Lioness Of Leith Bistro',
      address: '21-25 Duke Street, EH6 8HH',
      discount: '10% OFF',
    },
    {
      image: dataslider,
      title: 'The Auction Rooms',
      address: '22 Queen St, Edinburgh, EH2 1JX',
      discount: '25% OFF',
    },
    {
      image: dataslider,
      title: 'Salon Bliss',
      address: '5 George St, Glasgow',
      discount: '15% OFF FIRST VISIT',
    },
    {
      image: dataslider,
      title: 'Urban Yoga Studio',
      address: '12 Green Lane, Dundee',
      discount: 'Free Trial Class!',
    },
    {
      image: dataslider,
      title: 'Zen Wellness',
      address: '8 Peace Road, Aberdeen',
      discount: '10% OFF THERAPY',
    },
    {
      image: dataslider,
      title: 'Glow Beauty Bar',
      address: '42 Hope St, Edinburgh',
      discount: 'Buy 1 Get 1 FREE',
    },
  ];

  return (
    <section className="py-5 test">
      <div className="container my-5">
        <h2 className="fw-bold mb-4">Featured Businesses</h2>
        <Swiper
          modules={[Pagination,Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
         autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
         pagination={{
  el: '.custom-pagination',
  clickable: true,
  renderBullet: (index, className) => {
    return `<span class="${className}">${index + 1}</span>`;
  },
}}


          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
        <div className='row'>
          <div className='col-md-4'>

        
          {businesses.map((biz, index) => (
            <SwiperSlide key={index}>
             
<div className="card ">
  <div className="position-relative">
    <img src= {biz.image} className="card-img-top" alt="Business 1" />
    <span className="featured-badge">FEATURED</span>
    <div className="favorite-icon"><i className="bi bi-heart" /></div>
  </div>
  <div className="card-body">
    <h5 className="card-title">The Aesthetics Club</h5>
    <p className="text-muted small">15 Comely Bank Road, Stockbridge, Edinburgh</p>
    <div className="rating mb-1 test2">4.0 <span className="text-warning">★★★★★</span> <span className="text-muted small">0 reviews</span></div>
    <span className="discount-tag">20% OFF FIRST TREATMENT!</span>
  </div>
</div>

              


            </SwiperSlide>
            
          ))}
  </div>
        </div>
        </Swiper>
       
      
        <div className="custom-pagination mt-3" />
      </div>
    </section>
  );
}

export default Business;
