import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './event.css';
import axios from 'axios';
import baseurl from '../../baseUrl';

function Allevents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

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

  // Pagination calculations
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handleClick = pageNum => setCurrentPage(pageNum);

  return (
    <div className="container py-5 mt-5" id="headcontainer">
      <h2>All Events</h2>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-5">Loading events...</div>
      ) : (
        <>
          {/* Desktop View */}
          <div className="row d-none d-md-flex">
            {currentEvents.map((item, index) => (
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
          <div className="row d-md-none">
            {currentEvents.map((item, index) => (
              <div key={index} className="col-12 mb-4">
                <NavLink
                  to={`/eventDetail/${item.id}`}
                  state={{ event: item }}
                  className="text-decoration-none text-dark"
                >
                  <div className="card border-0 event-card">
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <ul className="pagination custom-pagination">
                {[...Array(totalPages)].map((_, idx) => (
                  <li
                    key={idx}
                    className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}
                  >
                    <button className="page-link" onClick={() => handleClick(idx + 1)}>
                      {idx + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Allevents;
