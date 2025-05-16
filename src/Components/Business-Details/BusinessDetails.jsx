// src\Components\Business-Details\BusinessDetails.jsx

import { useLocation } from 'react-router-dom';
import './Business.css'
import React, { useState } from "react";


function BusinessDetails() {
    const [selected, setSelected] = useState("surf");
     const location = useLocation();
  const { event } = location.state || {};

    if (!event) return <p>No Event Data</p>;

  return (
    <div className='container py-5 mt-5'>
        <div className='container'>
            <div className='row'>
               <div className='col-md-6 col-lg-6' id='imghead'>
                    <img src= {event.img} alt='test' className='rounded' />
               </div>
               <div className='col-md-6 col-lg-6' id='titlehead'>
                <h2>{event.title}</h2>
                 <div className="rating mb-1">0.0 <span className="text-warning">★★★★★</span> <span className="text-muted small">0 reviews</span></div>
                 <p>Based in Ratho, 25 mins from the centre of Edinburgh, Lost Shore is set within extensive grounds with luxury accommodation, waterfront bar, café and restaurant, surf schools, surf shop, The Surfskate Academy and wellness treatments.</p>
                 <p>Based in Ratho, 25 mins from the centre of Edinburgh, Lost Shore is set within extensive grounds with luxury accommodation, waterfront bar, café and restaurant, surf schools, surf shop, The Surfskate Academy and wellness treatments.</p>
                 <p>Based in Ratho, 25 mins from the centre of Edinburgh, Lost Shore is set within extensive grounds with luxury accommodation, waterfront bar, café and restaurant, surf schools, surf shop, The Surfskate Academy and wellness treatments.</p>
                 <p>Based in Ratho, 25 mins from the centre of Edinburgh, Lost Shore is set within extensive grounds with luxury accommodation, waterfront bar, café and restaurant, surf schools, surf shop, The Surfskate Academy and wellness treatments.</p>
                 <p>Based in Ratho, 25 mins from the centre of Edinburgh, Lost Shore is set within extensive grounds with luxury accommodation, waterfront bar, café and restaurant, surf schools, surf shop, The Surfskate Academy and wellness treatments.</p>
                  <div className="discount-container">
      <div
        className={`cardss ${selected === "surf" ? "active" : ""}`}
        onClick={() => setSelected("surf")}
      >
        <div className="radio-circle">
          {selected === "surf" && <div className="dot" />}
        </div>
        <div className="card-content">
          <h3>10% off surf lessons & surf sessions</h3>
          <p>
            Enjoy 10% off across lessons & surf sessions at Lost Shore Surf
            Resort (Valid Monday-Friday only. Not valid in July & August, 5
            uses per person)
          </p>
        </div>
      </div>

      <div
        className={`cardss ${selected === "accommodation" ? "active" : ""}`}
        onClick={() => setSelected("accommodation")}
      >
        <div className="radio-circle">
          {selected === "accommodation" && <div className="dot" />}
        </div>
        <div className="card-content">
          <h3>10% off accommodation at Lost Shore!</h3>
          <p>
            Enjoy 10% off accommodation at Lost Shore Surf Resort (Valid
            Monday-Friday only. Not valid in July & August). 10% discount on
            accommodation must be booked via email info@lostshore.com
          </p>
        </div>
      </div>

      <button className="submit-btnss">Get this discount</button>
    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessDetails