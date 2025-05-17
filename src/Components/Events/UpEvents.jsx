// src\Components\Events\UpEvents.jsx
import React from 'react';
import './Events.css';
import Logo from '../../Assets/Events/1.jpg';
import Logo2 from '../../Assets/Events/2.jpg';
import Logo3 from '../../Assets/Events/3.jpg';
import Logo4 from '../../Assets/Events/Contentful_banner_size__6_.webp';
import { NavLink } from 'react-router-dom';

function UpEvents() {
  const events = [
    { img: Logo, title: 'Women on Top the Evening Edition' },
    { img: Logo2, title: 'Women on Top the Evening Edition' },
    { img: Logo3, title: 'Women on Top the Evening Edition' },
    { img: Logo4, title: 'Women on Top the Evening Edition' },
  ];

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
        {events.map((event, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-4">
            <NavLink
              to="/eventDetail"
              state={{ event }}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 border-0 event-card">
                <img
                  src={event.img}
                  className="card-img-top rounded-top event-img"
                  alt={`Event ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <p className="text-danger mb-1">30 Apr 2025, 18:00 - 20:00</p>
                  <p className="mb-1">The Lyceum, 30b Grindlay Street Edinburgh</p>
                  <p className="text-muted">Tickets from £40.00</p>
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
              to="/eventDetail"
              state={{ event }}
              className="text-decoration-none text-dark"
            >
              <div className="card border-0 event-card" style={{ width: '260px' }}>
                <img
                  src={event.img}
                  className="card-img-top rounded-top event-img"
                  alt={`Event ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <p className="text-danger mb-1">30 Apr 2025, 18:00 - 20:00</p>
                  <p className="mb-1">The Lyceum, 30b Grindlay Street Edinburgh</p>
                  <p className="text-muted">Tickets from £40.00</p>
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
