// src\Components\Business-Details\BusinessDetails.jsx

import { useParams,useLocation } from 'react-router-dom';
import './Business.css'
import React, { useState,useEffect } from "react";
import axios from 'axios';
import baseurl from '../../baseUrl';


function BusinessDetails() {
    const [selected, setSelected] = useState("surf");
     const location = useLocation();
     const { id } = useParams();
  const { event } = location.state || {};

   
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Displays');
  formData.append('id', id);

  axios.post(`${baseurl}/saveFeatureBusiness.php`, formData)
    .then(response => {
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetchedStory = response.data.data[0];
        console.log(fetchedStory);
        fetchedStory.profile_image = `${baseurl}/${fetchedStory.profile_image}`;
        fetchedStory.main_image = `${baseurl}/${fetchedStory.main_image}`;
        fetchedStory.story_image = `${baseurl}/${fetchedStory.story_image}`;
        setBusiness(fetchedStory);
      } else {
        setBusiness(null);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, [id]);

    if (!business) return <p>No Event Data</p>;

  return (
    <div className='container py-5 mt-5'>
        <div className='container'>
            <div className='row'>
               <div className='col-md-6 col-lg-6' id='imghead'>
                    <img src= {business.main_image} alt='test' className='rounded' />
               </div>
               <div className='col-md-6 col-lg-6' id='titlehead'>
                <h2>{business.title}</h2>
                 <div className="rating mb-1">0.0 <span className="text-warning">★★★★★</span> <span className="text-muted small">0 reviews</span></div>
                 <p>{business.description}</p>
                  <div className="discount-container">
      {/* <div
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
      </div> */}

      {/* <div
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
      </div> */}

      {/* <button className="submit-btnss">Get this discount</button> */}
    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessDetails