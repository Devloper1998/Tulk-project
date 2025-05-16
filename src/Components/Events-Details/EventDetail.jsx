// src\Components\Events-Details\EventDetail.jsx
import React from 'react'
import { useLocation } from 'react-router-dom';
import './eventsdetail.css'

function EventDetail() {
    const location = useLocation();
  const { event } = location.state || {};

    if (!event) return <p>No Event Data</p>;
  return (
    <div className="container mt-4 py-5">
      <div className='row'>
        <div className='col-lg-12 col-md-12' id='imagdata'>
           <img src={event.img} alt={event.title} className="img-fluid mb-3" />
        </div>
        <div className='headimgdata'>
           <div className='row'>
              <div className='col-md-8'>
                <h2>{event.title}</h2>
                <p>29 May 2025, 18:00 - 21:00</p>
                <p>The Spiritualist, 62 Miller Street, Glasgow</p>
                <p>We’re so excited to be bringing our very first Women on Top Supperclub to Glasgow! Join us on Thursday 29th May, from 6pm–9pm at The Spiritualist for an inspiring evening designed to spark meaningful connections and lift you up.</p>
                <p>We’re so excited to be bringing our very first Women on Top Supperclub to Glasgow! Join us on Thursday 29th May, from 6pm–9pm at The Spiritualist for an inspiring evening designed to spark meaningful connections and lift you up.</p>
                <p>We’re so excited to be bringing our very first Women on Top Supperclub to Glasgow! Join us on Thursday 29th May, from 6pm–9pm at The Spiritualist for an inspiring evening designed to spark meaningful connections and lift you up.</p>
                <img src={event.img} alt={event.title} className="img-fluid mb-3" />
                <p>The nitty gritty details - when, where, who, dress code?</p>
                <p>Where? We’re delighted to be hosting this Supperclub at The Spiritualist, 62 Miller Street, Glasgow — a gorgeous spot right in the heart of the city.</p>
                <p>Who? The event is open to everyone (that means paying members and non-members). We want our ‘Women on Top’ series to reach as many good eggs as possible.</p>
                <p>When? Thursday 29th May 2025, 6pm – 9pm Dress code? There isn’t one! We’re a relaxed, friendly bunch — come as you are, be yourself, and feel totally comfortable.
                 </p>
                   <img src={event.img} alt={event.title} className="img-fluid mb-3" />
                   <p>​We are delighted to launch the egg Business Club - a curated membership for ambitious women ready to grow, connect, and thrive in business.</p>
                   <p>​We are delighted to launch the egg Business Club - a curated membership for ambitious women ready to grow, connect, and thrive in business.</p>
                   <p>​We are delighted to launch the egg Business Club - a curated membership for ambitious women ready to grow, connect, and thrive in business.</p>
              </div>
              
               <div className='col-md-4'>
              <div class="ticket-card">
    <div class="ticket-option">
      <span>Egg members</span>
      <span>£50.00</span>
    </div>
    <div class="ticket-option">
      <span>Standard entry</span>
      <span>£55.00</span>
    </div>
    <button class="book-button">Book tickets</button>
  </div>

              </div>
           </div>
        </div>
      </div>

    
     
    </div>
  )
}

export default EventDetail