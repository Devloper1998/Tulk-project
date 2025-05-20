// src\Components\Events\UpEvents.jsx
import React, { useState, useEffect } from 'react';
import './Events.css';

import { NavLink } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../baseUrl';

function UpEvents() {
const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const formData = new FormData();
    formData.append('action', 'Display');

    axios
      .post(`${baseurl}/saveEvents.php`, formData)
      .then(response => {
        console.log('Fetched data:', response.data);
        if (response.data && response.data.data && response.data.data.length > 0) {
          const fetchedData = response.data.data.map(item => ({
            ...item,
            profile_image: `${baseurl}/${item.profile_image}`,
            main_image: `${baseurl}/${item.main_image}`,
          }));
          setEvents(fetchedData);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='container'>
     <div className="d-flex justify-content-between align-items-center mb-3 w-100 flex-nowrap" id='head'>
        <h2 className="section-title">Upcoming Events</h2>

        <NavLink to="/allevents" className="text-danger text-decoration-none fw-medium subhed">
          All Events →
        </NavLink>
      </div>

      {/* Desktop View */}
      <div className="row d-none d-md-flex">
        {events.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-4">
            <NavLink
              to={`/eventDetail/${item.id}`}
              state={{ event: item }}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 border-0 event-card">
                <img
                  src={item.main_image}
                  className="card-img-top rounded-top event-img"
                  alt={`Event ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.event_name}</h5>
                  <p className="text-danger mb-1">{item.date}, {item.start_time} - {item.end_time}</p>
                  <p className="mb-1">
                      {item.description1.length > 100
                        ? `${item.description1.substring(0, 40)}`
                        : item.description1}
                    </p>
                  {/* <p className="text-muted">Tickets from £40.00</p> */}
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Mobile View */}
   
      <div className="d-md-none horizontal-scroll-container">
        {events.map((event, index) => (
          <div key={index} className="scroll-card me-3">
            <NavLink
              to={`/eventDetail/${event.id}`}
              state={{ event }}
              className="text-decoration-none text-dark"
            >
              <div className="card border-0 event-card" style={{ width: '260px' }}>
                <img
                  src={event.main_image}
                  className="card-img-top rounded-top event-img"
                  alt={`Event ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{event.event_name}</h5>
                  <p className="text-danger mb-1">
                    {event.date}, {event.start_time} - {event.end_time}
                  </p>
                  <p className="mb-1">
                    {event.description1.length > 100
                      ? `${event.description1.substring(0, 40)}...`
                      : event.description1}
                  </p>
                  {/* If ticket price is available in your data, you can uncomment this */}
                  {/* <p className="text-muted">Tickets from £{event.ticket_price}</p> */}
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

    </div>
  );
}

export default UpEvents;
