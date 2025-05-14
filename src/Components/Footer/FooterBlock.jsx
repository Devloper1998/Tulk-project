// src\Components\Footer\FooterBlock.jsx

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './Footer.css'
import axios from 'axios'
import baseurl from '../../baseUrl';

function FooterBlock() {
  const [isVisible, setIsVisible] = useState(false);
   const [logos, setLogos] = useState(null); 
    const [loading, setLoading] = useState(true);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveLogo.php`, formData)
    .then(response => {
       console.log('Fetched logos:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetchedLogo = response.data.data[0];
        if (fetchedLogo.footer_logo) {
          fetchedLogo.footer_logo = `${baseurl}/${fetchedLogo.footer_logo}`;
        }
        setLogos(fetchedLogo);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);

  return (
<>
  <footer id="footer" className="footer mt-0">

    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          {/* <Link to="/" className="d-flex align-items-center">
            <span className="sitename">Logo</span>
          </Link> */}
    <img src={logos?.footer_logo} alt="Logo" style={{ width: '90px', marginBottom: '-40px', marginTop: '-34px' }}/>

          <div className="footer-contact pt-3">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
            <p><strong>Email:</strong> <span>info@example.com</span></p>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><i className="bi bi-chevron-right" /> <Link to="/">Home</Link></li>
            <li><i className="bi bi-chevron-right" /> <Link to="/">About us</Link></li>
            <li><i className="bi bi-chevron-right" /> <Link to="/">Upcomming Events</Link></li>
            <li><i className="bi bi-chevron-right" /> <Link to="/">Stories</Link></li>
              <li><i className="bi bi-chevron-right" /> <Link to="/">Webinars</Link></li>
            <li><i className="bi bi-chevron-right" /> <Link to="/">Featured Post</Link></li>
          </ul>
        </div>
        {/* <div className="col-lg-3 col-md-3 footer-links py-5">
          
       
          <ul>
          
          
          </ul>
        </div> */}
        <div className="col-lg-4 col-md-12">
          <h4>Follow Us</h4>
         
          <div className="social-links d-flex">
            <a href><i className="bi bi-twitter-x" /></a>
            <a href><i className="bi bi-facebook" /></a>
            <a href><i className="bi bi-instagram" /></a>
            <a href><i className="bi bi-linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
<section class="copyright text-center">
<div class="container">
<div class="row">
<div class="col-sm-12">
<p>Copyright © Design By Spondias India - 2025.</p>
</div>
<div class="col-sm-6"></div>
</div>
</div>
</section>
  </footer>
  {/* Scroll Top */}
   <>
      {isVisible && (
        <Link onClick={scrollTop} className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </Link>
      )}
    </>
</>


  )
}

export default FooterBlock