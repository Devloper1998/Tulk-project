// src\Components\LatestStories\LatestStories.jsx
import React from 'react'
import Logo1 from '../../Assets/LatestStories/1.jpg'
import Logo2 from '../../Assets/LatestStories/2.png'
import Logo3 from '../../Assets/LatestStories/3.jpg'
import Logo4 from '../../Assets/LatestStories/4.jpg'
// import Logo5 from '../../Assets/LatestStories/5.jpg'
import { NavLink } from 'react-router-dom'
import './Lateststories.css'

function LatestStories() {
  return (
<div className="container py-5 latestst">
  <div className="d-flex justify-content-between align-items-center mb-2">
    <h2 className="section-title">Latest stories</h2>
    <NavLink to="/stories" className="text-danger text-decoration-none fw-medium">All stories →</NavLink>
  </div>
  <p className="text-muted mb-4">Words from people we love on things we care about.</p>
  <div className="row flex-nowrap overflow-auto g-3 pb-2">
    {/* Card 1 */}
    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
      <div className="story-card position-relative">
        <img src= {Logo1} className="story-image" alt="Logo1" />
        <div className="story-content">
          <div className="story-title text-primary">Kitchen Makeover Calling? Step Insid...</div>
          <div className="story-meta">Egg Partners</div>
          {/*  <div class="author-row mt-2">
      <img src="https://via.placeholder.com/30" class="author-img" alt="">
      <span>Nicky Howden</span>
    </div> */}
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
      <div className="story-card">
        <img src= {Logo2} className="story-image" alt="logo2" />
        <div className="story-content">
          <div className="story-title">Embracing the power of conversation...</div>
          <div className="story-meta">Other</div>
          {/*  <div class="author-row mt-2">
      <img src="https://via.placeholder.com/30/ffcccc" class="author-img" alt="">
      <span>Team egg</span>
    </div> */}
        </div>
      </div>
    </div>
    {/* Card 3 (Featured) */}
    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
      <div className="story-card position-relative">
        <span className="featured-badge">FEATURED</span>
        <img src= {Logo3} className="story-image" alt="Logo3" />
        <div className="story-content">
          <div className="story-title">Easy on the eyes: Dry eye relief &amp; wh...</div>
          <div className="story-meta">Egg Partners</div>
          {/* <div class="author-row mt-2">
      <img src="https://via.placeholder.com/30/ffcccc" class="author-img" alt="">
      <span>Team egg</span>
    </div> */}
        </div>
      </div>
    </div>
    {/* Card 4 (Featured) */}
    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
      <div className="story-card position-relative">
        <span className="featured-badge">FEATURED</span>
        <img src= {Logo4} className="story-image" alt="Logo5" />
        <div className="story-content">
          <div className="story-title">Meet the women behind Gilson Gray...</div>
          <div className="story-meta">Egg Partners</div>
          {/*  <div class="author-row mt-2">
      <img src="https://via.placeholder.com/30/ffcccc" class="author-img" alt="">
      <span>Team egg</span>
    </div> */}
        </div>
      </div>
    </div>
  </div>

</div>

  )
}

export default LatestStories