// src\Components\Upwebnareis\UpWebinars.jsx
import React, { useState } from 'react';
import Slider from "react-slick";
import Logo from '../../Assets/Events/1.jpg';
import Logo2 from '../../Assets/Events/2.jpg';
import Logo3 from '../../Assets/Events/3.jpg';
import Logo4 from '../../Assets/Events/Contentful_banner_size__6_.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './upwebinars.css';
import { NavLink } from 'react-router-dom';

function UpWebinars() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,  // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveIndex(next), 
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const events = [
    { img: Logo, title: "Women on Top the Evening Edition" },
    { img: Logo2, title: "Women on Top the Evening Edition" },
    { img: Logo3, title: "Women on Top the Evening Edition" },
    { img: Logo4, title: "Women on Top the Evening Edition" }
  ];

  return (
    <div className='container mt-5 head'>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className="section-title">Upcoming Webinars</h2>
          <NavLink to="/webinars" className="text-danger text-decoration-none fw-medium">All Webinars →</NavLink>
        </div>
    
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="p-2">
            <div className="card h-100 border-0">
              <img src={event.img} className="card-img-top rounded-top aspect-4/3" alt="Event" />
              <div className="card-body">
                <h5 className="card-title fw-bold">{event.title}</h5>
                <p className="text-danger mb-1">30 Apr 2025, 18:00 - 20:00</p>
                <p className="mb-1">The Lyceum, 30b Grindlay Street Edinburgh</p>
                <p className="text-muted">Tickets from £40.00</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom numbered navigation */}
      <div className="slider-navigation">
        {events.map((_, index) => (
          <button
            key={index}
            className={`slider-nav-button ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UpWebinars;
