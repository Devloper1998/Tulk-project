// src\Components\All-webnaiers\Allwebnaiers.jsx
import React ,{useState,useEffect}from 'react';
import Logo from '../../Assets/Events/1.jpg';
import Logo2 from '../../Assets/Events/2.jpg';
import Logo3 from '../../Assets/Events/3.jpg';
import Logo4 from '../../Assets/Events/Contentful_banner_size__6_.webp';
import { NavLink } from 'react-router-dom';
import './allwebnaiers.css'; // Optional
import axios from 'axios';
import baseurl from '../../baseUrl';

function Allwebnaiers() {
const [webinar, setWebinar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  useEffect(() => {
    const formData = new FormData();
    formData.append('action', 'Display');

    axios
      .post(`${baseurl}/saveWebinar.php`, formData)
      .then(response => {
        // console.log('Fetched data:', response.data);
        if (response.data && response.data.data && response.data.data.length > 0) {
          const fetchedData = response.data.data.map(item => ({
            ...item,
            main_image: `${baseurl}/${item.main_image}`,
          }));
          setWebinar(fetchedData);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5 py-5">
      <h2 className="section-title mb-4">All Webinars</h2>

      <div className="row">
        {webinar.map((webinar, index) => (
          <div key={index} className="col-md-3 mb-4">
            <NavLink
              to="/webinar"
              state={{ webinar }}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 border-0">
                <div className="image-wrapper">
                  <img src={webinar.main_image} className="card-img-top" alt="webinar" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{webinar.title}</h5>
                  <p className="text-danger mb-1">{webinar.date}, {webinar.start_time} - {webinar.end_time}</p>
                  <p className="mb-1">
                          {webinar.description1.length > 100
                            ? `${webinar.description1.substring(0, 40)}`
                            : webinar.description1}
                        </p>
                  {/* <p className="text-muted">Tickets from £40.00</p> */}
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
