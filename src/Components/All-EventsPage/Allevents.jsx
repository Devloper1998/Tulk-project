// src\Components\All-EventsPage\Allevents.jsx
import React, { useState} from 'react';
import Logo from '../../Assets/Events/1.jpg';
import Logo2 from '../../Assets/Events/2.jpg';
import Logo3 from '../../Assets/Events/3.jpg';
import Logo4 from '../../Assets/Events/Contentful_banner_size__6_.webp';
import { NavLink } from 'react-router-dom';
import './event.css';

function Allevents() {

  const events = [
    { img: Logo, title: 'Women on Top the Evening Edition' },
    { img: Logo2, title: 'Women on Top the Evening Edition' },
    { img: Logo3, title: 'Women on Top the Evening Edition' },
    { img: Logo4, title: 'Women on Top the Evening Edition' },
    { img: Logo, title: 'Extra Event 1' },
    { img: Logo2, title: 'Extra Event 2' },
    { img: Logo3, title: 'Extra Event 3' },
    { img: Logo4, title: 'Extra Event 4' },
    { img: Logo, title: 'Extra Event 5' },
    { img: Logo2, title: 'Extra Event 6' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handleClick = (pageNum) => setCurrentPage(pageNum);

  return (
    <div className='container py-5 mt-5' id='headcontainer'>
      <h2>All Evevnts</h2>
      {/* Desktop View */}
      <div className="row d-none d-md-flex">
        {currentEvents.map((event, index) => (
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
      <div className="row d-md-none">
        {currentEvents.map((event, index) => (
          <div key={index} className="col-12 mb-4">
            <NavLink
              to="/eventDetail"
              state={{ event }}
              className="text-decoration-none text-dark"
            >
              <div className="card border-0 event-card">
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

      {/* Pagination in Middle */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <ul className="pagination custom-pagination">
            {[...Array(totalPages)].map((_, idx) => (
              <li
                key={idx}
                className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => handleClick(idx + 1)}
                >
                  {idx + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Allevents;
