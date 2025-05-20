// src\Components\webinars-Details\WebinarDetails.jsx
import React,{useState,useEffect}from 'react'
import { useLocation } from 'react-router-dom';
import './webnaiers.css'
import axios from 'axios';
import baseurl from '../../baseUrl';


function WebinarDetails() {
        const location = useLocation();
      const { event } = location.state || {};
       if (!event) return <p>No Event Data</p>;
  return (
     <div className='container py-5 mt-5'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-12' id='imageData'>
           <img src= {event.img} alt='test' />
           <div className='row'>
            <div className='col-lg-8 col-md-8' id='demo'>
               <h2>{event.title}</h2>
               <p>30 April 2025</p>

               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <img src= {event.img} alt='test' />
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
             <div className='col-lg-4 col-md-4'>
              {/* emty fill */}
            </div>
           </div>
        </div>
      </div>
     </div>
  )
}

export default WebinarDetails