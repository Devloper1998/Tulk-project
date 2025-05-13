// src\Components\PatnersBlock\Patnersblock.jsx
import React from 'react'
import './Patners.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Logoslid from '../../Assets/patners/1.png'
import Logoslid1 from '../../Assets/patners/2.png'
import Logoslid2 from '../../Assets/patners/3.png'
import Logoslid3 from '../../Assets/patners/4.jpg'
import { Link } from 'react-router-dom';

function Patnersblock() {
      const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="container patners">
   <h2 className="text-left mb-4" style={{ color: '#333' }}>Our Partners</h2>

      <Slider {...settings}>

        <img src={Logoslid} alt="1" />
        <img src={Logoslid1} alt="2" />
        <img src={Logoslid2} alt="3" />
        <img src={Logoslid3} alt="4" />
        <img src={Logoslid3} alt="5" />
        <img src={Logoslid3} alt="6" />
        <img src={Logoslid3} alt="7" />
        <img src={Logoslid3} alt="8" />
   
      </Slider>
      <div className="button-wrapper">
     <Link to="/" className="btn-membership1 mt-5">Become a Member</Link>
     </div>
    </div>
    
  )
}

export default Patnersblock
