// src\Components\Footer\FooterBlock.jsx

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './Footer.css'
import axios from 'axios'
import baseurl from '../../baseUrl';

function FooterBlock() {

   const [logos, setLogos] = useState(null); 
   const  [contact,setContact] = useState(null);
   const  [icons,setIcons] = useState(null);
    const [loading, setLoading] = useState(true);





  useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveLogo.php`, formData)
    .then(response => {
      //  console.log('Fetched logos:', response.data);
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

useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveContact.php`, formData)
    .then(response => {
      //  console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data[0];
        setContact(fetcheddata);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);

useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveSocialIcons.php`, formData)
    .then(response => {
      //  console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data;
        setIcons(fetcheddata);
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
            {contact ? (
              <>
                <p>{contact.address}</p>
                {/* <p>{contact.city}, {contact.zip}</p> */}
                <p className="mt-3"><strong>Phone:</strong> <span>{contact.mobile}</span></p>
                <p><strong>Email:</strong> <span>{contact.email}</span></p>
              </>
            ) : (
              <p>Loading contact...</p>
            )}
          </div>

        </div>
        <div className="col-lg-4 col-md-3 footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><i className="bi bi-chevron-right" /> <Link to="/">Home</Link></li>
            <li><i className="bi bi-chevron-right" /> <Link to="/about">About us</Link></li>
            <li><i className="bi bi-chevron-right" /> <Link to="/upevents">Upcomming Events</Link></li>
            <li><i className="bi bi-chevron-right" /> <Link to="/stories">Stories</Link></li>
              <li><i className="bi bi-chevron-right" /> <Link to="webinars">Webinars</Link></li>
            <li><i className="bi bi-chevron-right" /> <Link to="/futureBussines">Featured Post</Link></li>
            <li><i className="bi bi-chevron-right" /> <Link to="/contact">Contact us</Link></li>
          </ul>
        </div>
        {/* <div className="col-lg-3 col-md-3 footer-links py-5">
          
       
          <ul>
          
          
          </ul>
        </div> */}
        <div className="col-lg-4 col-md-12">
          <h4>Follow Us</h4>
         
          <div className="social-links d-flex">
            {icons ? (
              icons.map((icon) => (
                icon.link && (
                  <a key={icon.id} href={icon.link} target="_blank" rel="noopener noreferrer">
                    <i className={`bi bi-${icon.title.toLowerCase()}`} />
                  </a>
                )
              ))
            ) : (
              <p>Loading social links...</p>
            )}
          </div>

        </div>
      </div>
    </div>
<section class="copyright text-center">
<div class="container">
<div class="row">
<div class="col-sm-12">
<p>Copyright © Design By  TLUK - 2025.</p>
</div>
<div class="col-sm-6"></div>
</div>
</div>
</section>
  </footer>
  {/* Scroll Top */}
 
</>


  )
}

export default FooterBlock