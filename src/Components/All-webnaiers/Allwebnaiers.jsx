// src\Components\All-webnaiers\Allwebnaiers.jsx
import React from 'react';
import Logo from '../../Assets/Events/1.jpg';
import Logo2 from '../../Assets/Events/2.jpg';
import Logo3 from '../../Assets/Events/3.jpg';
import Logo4 from '../../Assets/Events/Contentful_banner_size__6_.webp';
import { NavLink } from 'react-router-dom';
import './allwebnaiers.css'; // Optional

function Allwebnaiers() {
  const events = [
    { img: Logo, title: "Women on Top the Evening Edition" },
    { img: Logo2, title: "Women on Top the Evening Edition" },
    { img: Logo3, title: "Women on Top the Evening Edition" },
    { img: Logo4, title: "Women on Top the Evening Edition" }
  ];

  return (
    <div className="container mt-5 py-5">
      <h2 className="section-title mb-4">All Webinars</h2>

      <div className="row">
        {events.map((event, index) => (
          <div key={index} className="col-md-3 mb-4">
            <NavLink
              to="/webinar"
              state={{ event }}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 border-0">
                <div className="image-wrapper">
                  <img src={event.img} className="card-img-top" alt="Event" />
                </div>
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

export default Allwebnaiers;
