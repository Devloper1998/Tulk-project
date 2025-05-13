// src\Components\OtherStories\OtherStories.jsx
import React from 'react';
import Logo3 from '../../Assets/LatestStories/3.jpg';

const stories = Array(7).fill({
  image: Logo3,
  title: "Easy on the eyes: Dry eye relief & wh...",
  meta: "Egg Partners",
  featured: true
});

function OtherStories() {
  return (
    <div className="container py-8 mt-5 pt-5">
      <div className="row">
        {stories.map((story, index) => (
          <div key={index} className="col-10 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="story-card position-relative">
              {story.featured && <span className="featured-badge">FEATURED</span>}
              <img src={story.image} className="story-image" alt={`story-${index}`} />
              <div className="story-content">
                <div className="story-title">{story.title}</div>
                <div className="story-meta">{story.meta}</div>
                {/* Optional author block */}
                {/* 
                <div className="author-row mt-2">
                  <img src="https://via.placeholder.com/30/ffcccc" className="author-img" alt="Author" />
                  <span>Team egg</span>
                </div> 
                */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherStories;
