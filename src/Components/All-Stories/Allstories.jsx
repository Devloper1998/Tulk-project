// src\Pages\All-Stories\Allstories.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logow from '../../Assets/LatestStories/3.jpg';
import Logo2 from '../../Assets/LatestStories/4.jpg';
import Logo3 from '../../Assets/LatestStories/5.jpg';
import Logo4 from '../../Assets/LatestStories/10.jpg';
import './Stories.css';

function Allstories() {
  return (
    <div className="container py-5 mt-5" id="heads">
      <div className="d-flex justify-content-between align-items-center mb-2" id="headnew">
        <h2 className="section-title">All stories</h2>
       
      </div>
     

      {/* Main card grid without horizontal scroll */}
      <div className="row g-3">
        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <NavLink className="text-decoration-none" to="/stories-details" state={{ image: Logow, title: "12 Top Tips for Selling Your Home from Gilson Gray", title2: "6 days ago", title3: "Posted in Egg Partners", meta: `It is a long established fact...`, author: "Nicky Howden" }}>
            <div className="story-card position-relative">
              <img src={Logo4} className="story-image" alt="imag3" />
              <div className="story-content">
                <div className="story-title text-primary">Kitchen Makeover Calling? Step Insid...</div>
                <div className="story-meta">Egg Partners</div>
                <div className="author-row mt-2">
                  <img src={Logo4} className="author-img" alt="imag3" />
                  <span>Nicky Howden</span>
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <NavLink className="text-decoration-none" to="/stories-details" state={{ image: Logow, title: "12 Top Tips for Selling Your Home from Gilson Gray", title2: "6 days ago", title3: "Posted in Egg Partners", meta: `It is a long established fact...`, author: "Nicky Howden" }}>
            <div className="story-card">
              <img src={Logow} className="story-image" alt="imag3" />
              <div className="story-content">
                <div className="story-title">Embracing the power of conversation...</div>
                <div className="story-meta">Other</div>
                <div className="author-row mt-2">
                  <img src={Logo4} className="author-img" alt="imag3" />
                  <span>Team egg</span>
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Card 3 (Featured) */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <NavLink className="text-decoration-none" to="/stories-details" state={{ image: Logow, title: "12 Top Tips for Selling Your Home from Gilson Gray", title2: "6 days ago", title3: "Posted in Egg Partners", meta: `It is a long established fact...`, author: "Nicky Howden" }}>
            <div className="story-card position-relative">
              <span className="featured-badge">FEATURED</span>
              <img src={Logo2} className="story-image" alt="imag3" />
              <div className="story-content">
                <div className="story-title">Easy on the eyes: Dry eye relief &amp; wh...</div>
                <div className="story-meta">Egg Partners</div>
                <div className="author-row mt-2">
                  <img src={Logo2} className="author-img" alt="imag3" />
                  <span>Team egg</span>
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Card 4 (Featured) */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <NavLink className="text-decoration-none" to="/stories-details" state={{ image: Logow, title: "12 Top Tips for Selling Your Home from Gilson Gray", title2: "6 days ago", title3: "Posted in Egg Partners", meta: `It is a long established fact...`, author: "Nicky Howden" }}>
            <div className="story-card position-relative">
              <span className="featured-badge">FEATURED</span>
              <img src={Logo3} className="story-image" alt="imag3" />
              <div className="story-content">
                <div className="story-title">Meet the women behind Gilson Gray...</div>
                <div className="story-meta">Egg Partners</div>
                <div className="author-row mt-2">
                  <img src={Logo3} className="author-img" alt="imag3" />
                  <span>Team egg</span>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Allstories;
