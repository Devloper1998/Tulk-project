import React, { useEffect, useState } from 'react';
import { NavLink ,Link} from 'react-router-dom';
import './Lateststories.css';
import axios from 'axios';
import baseurl from '../../baseUrl';

function Allstories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const formData = new FormData();
    formData.append('action', 'Display');
    axios.post(`${baseurl}/saveStories.php`, formData)
      .then(response => {
        if (response.data && response.data.data && response.data.data.length > 0) {
          const fetchedData = response.data.data.map(item => ({
            ...item,
            profile_image: `${baseurl}/${item.profile_image}`,
            main_image: `${baseurl}/${item.main_image}`
          }));
          setStories(fetchedData);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container py-5 mt-5" id="heads">
      <div className="d-flex justify-content-between align-items-center mb-2" id="headnew">
        <h2 className="section-title">Latest stories</h2>
        <Link to="/allstories" className="text-danger text-decoration-none fw-medium subheading">
          All stories →
        </Link>
      </div>

      <div className="row g-3">
        {stories.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <NavLink
              className="text-decoration-none"
              to={`/stories-details/${item.id}`}
              state={{
                image: item.main_image,
                title: item.title,
                title2: item.date || "6 days ago",
                title3: item.category || "Posted in Egg Partners",
                meta: item.meta_description || "It is a long established fact...",
                author: item.name
              }}
            >
              <div className="story-card position-relative">
                <span className="featured-badge">FEATURED</span>
                <img src={item.main_image} className="story-image" alt="story" />
                <div className="story-content">
                  <div className="story-title text-primary">{item.title}</div>
                  <div className="story-meta">{item.designation}</div>
                  <div className="author-row mt-2">
                    <img src={item.profile_image} className="author-img" alt="author" />
                    <span>{item.name}</span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allstories;
