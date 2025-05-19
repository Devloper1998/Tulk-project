// src\Components\Upwebnareis\UpWebinars.jsx
import React ,{useState,useEffect}from 'react';

import Slider from "react-slick";
import Logo from '../../Assets/Events/1.jpg';
import Logo2 from '../../Assets/Events/2.jpg';
import Logo3 from '../../Assets/Events/3.jpg';
import Logo4 from '../../Assets/Events/Contentful_banner_size__6_.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './upwebinars.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../baseUrl';

function UpWebinars() {
  const [webinar, setWebinar] = useState([]);
    const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

   useEffect(() => {
      const formData = new FormData();
      formData.append('action', 'Display');
  
      axios
        .post(`${baseurl}/saveWebinar.php`, formData)
        .then(response => {
          // console.log('Fetched data:', response.data);
          if (response.data && response.data.data && response.data.data.length > 0) {
            const fetchedData = response.data.data.map(item => ({
              ...item,
              main_image: `${baseurl}/${item.main_image}`,
            }));
            setWebinar(fetchedData);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
          setLoading(false);
        });
    }, []);

  const settings = {
    dots: false, 
    arrows: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className='container mt-5 '>
      <div className="d-flex justify-content-between align-items-center mb-2" id='head'>
        <h2 className="section-title">Upcoming Webinars</h2>

        <NavLink to="allwebnaiers" className="text-danger text-decoration-none fw-medium subhead">All Webinars →</NavLink>
      </div>

      <Slider {...settings}>
        {webinar.map((webinar, index) => (
          <div key={index} className="p-2">
              <NavLink
                          to="/webinar"
                          state={{ webinar }}
                          className="text-decoration-none text-dark"
                        >
      <div className="card h-100 border-0">
  <div className="image-wrapper">
    <img src={webinar.main_image} className="card-img-top" alt="Event" />
  </div>
  <div className="card-body">
    <h5 className="card-title fw-bold">{webinar.event_name}</h5>
    <p className="text-danger mb-1">{webinar.date}, {webinar.start_time} - {webinar.end_time}</p>
    <p className="mb-1">
        {webinar.description1.length > 100
          ? `${webinar.description1.substring(0, 40)}`
          : webinar.description1}
      </p>
    {/* <p className="text-muted">Tickets from £40.00</p> */}
  </div>
</div>
</NavLink>
          </div>
        ))}
      </Slider>

      {/* Custom numbered dots */}
      <div className="custom-dots text-center mt-3">
        {webinar.map((_, index) => (
          <button
            key={index}
            className={`dot-btn mx-1 ${index === activeIndex ? 'active' : ''}`}
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
