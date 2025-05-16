// src\Components\Businesses\Business.jsx
import React, { useState } from 'react';
import Slider from "react-slick";
import Logo from '../../Assets/Events/1.jpg';
import Logo2 from '../../Assets/Events/2.jpg';
import Logo3 from '../../Assets/Events/3.jpg';
import Logo4 from '../../Assets/Events/Contentful_banner_size__6_.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Business.css';
import { NavLink } from 'react-router-dom';


function Business() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false, // Disable default dots
    arrows: false, // Disable arrows
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
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
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
    <div className='container mt-5 '>
      <div className="d-flex justify-content-between align-items-center mb-2" id='head'>
        <h2 className="section-title">Featured Businesses</h2>
        
      </div>

      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="p-2">
            <NavLink
            to="/businessDetail"
            state={{ event }}
            className="text-decoration-none"
            >
          <div className="card h-100 border-0">
            
          <div className="position-relative">
          <img src= {event.img} className="card-img-top" alt="Business 1" />
          <span className="featured-badge">FEATURED</span>
          <div className="favorite-icon"><i className="bi bi-heart" /></div>
          </div>
          <div className="card-body">
          <h5 className="card-title">The Aesthetics Club</h5>
          <p className="text-muted small">15 Comely Bank Road, Stockbridge, Edinburgh</p>
          <div className="rating mb-1">0.0 <span className="text-warning">★★★★★</span> <span className="text-muted small">0 reviews</span></div>
          <span className="discount-tag">20% OFF FIRST TREATMENT!</span>
          </div>
          
          </div>

</NavLink>
          </div>
        ))}
      </Slider>

      {/* Custom numbered dots */}
      <div className="custom-dot text-center mt-3">
        {events.map((_, index) => (
          <button
            key={index}
            className={`dot-botn mx-1 ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Business;
