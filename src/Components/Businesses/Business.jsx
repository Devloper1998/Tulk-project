// src\Components\Businesses\Business.jsx
import React, { useState,useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Business.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../baseUrl';


function Business() {

   const [business, setBusiness] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const formData = new FormData();
      formData.append('action', 'Display');
  
      axios.post(`${baseurl}/saveFeatureBusiness.php`, formData)
        .then(response => {
          if (response.data?.data?.length > 0) {
            console.log(response.data);
            const fetchedData = response.data.data.map(item => ({
              ...item,
              main_image: `${baseurl}/${item.main_image}`,
            }));
            setBusiness(fetchedData);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data!', error);
          setLoading(false);
        });
    }, []);

  const settings = {
    dots: false, 
    arrows: false, 
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

  return (
    <>
     <div className='container mt-5 '>
      <div className="d-flex justify-content-between align-items-center mb-2" id='head'>
        <h2 className="section-title">Featured Businesses</h2>
        
      </div>

      <Slider {...settings}>
        {business.map((businesses, index) => (
          <div key={index} className="p-3">
            <NavLink
            to={`/businessDetail/${businesses.id}`}
            state={{ businesses }}
            className="text-decoration-none"
            >
          

              <div className="story-card position-relative">
                  <div className="image-wrapper">
                    <img src={businesses.main_image} className="card-img-top" alt="Event" />
                  </div>
                  <div className="cardData">
                    <h5 className="card-title fw-bold">{businesses.event_name}</h5>
                    <span className="text-danger mb-1">{businesses.date}, {businesses.start_time} - {businesses.end_time}</span>
                      <p className="text-muted small">{businesses.description.length > 100
          ? `${businesses.description.substring(0, 40)}`
          : businesses.description}</p>
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
        {business.map((_, index) => (
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


    
    </>
   
  );
}

export default Business;
