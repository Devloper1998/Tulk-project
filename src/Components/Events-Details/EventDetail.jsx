// src\Components\Events-Details\EventDetail.jsx
import React ,{useState,useEffect}from 'react'
import Logo from '../../Assets/Events/1.jpg';
import {useParams, useLocation } from 'react-router-dom';
import './eventsdetail.css'
import axios from 'axios';
import baseurl from '../../baseUrl';

function EventDetail() {
  const { id } = useParams();
    const location = useLocation();
  const { event } = location.state || {};
  
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);

   useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Displays');
  formData.append('id', id);

  axios.post(`${baseurl}/saveEvents.php`, formData)
    .then(response => {
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetchedStory = response.data.data[0];
        console.log(fetchedStory);
        fetchedStory.main_image = `${baseurl}/${fetchedStory.main_image}`;
        fetchedStory.image = `${baseurl}/${fetchedStory.image}`;
        setEvents(fetchedStory);
      } else {
        setEvents(null);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, [id]);

    if (!events) return <p>No Event Data</p>;
  return (
    <div className="container mt-4 py-5">
      <div className='row'>
        <div className='col-lg-12 col-md-12' id='imagdata'>
           <img src={events.main_image} alt={events.event_name} className="img-fluid mb-3" />
        </div>
        <div className='headimgdata'>
           <div className='row'>
              <div className='col-md-8'>
                <h2>{events.event_name}</h2>
                <p>{events.date},{events.start_time}-{events.end_time}</p>
                <p>{events.description1}</p>
                <img src={events.image} alt={events.title} className="img-fluid mb-3" />
                <p>{events.description2}</p>
                
                   
              </div>
              
               <div className='col-md-4'>
              {/* <div class="ticket-card">
    <div class="ticket-option">
      <span>Egg members</span>
      <span>£50.00</span>
    </div>
    <div class="ticket-option">
      <span>Standard entry</span>
      <span>£55.00</span>
    </div>
    <button class="book-button">Book tickets</button>
  </div> */}

              </div>
           </div>
        </div>
      </div>

    
     
    </div>
  )
}

export default EventDetail