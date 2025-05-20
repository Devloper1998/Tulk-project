// src\Components\Stories-Details\StoriesDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StoriesDetails.css';
import axios from 'axios';
import baseurl from '../../baseUrl';

function StoriesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [stories, setStories] = useState([]);
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Displays');
  formData.append('id', id);

  axios.post(`${baseurl}/saveStories.php`, formData)
    .then(response => {
      if (response.data && response.data.data && response.data.data.length > 0) {
        
        const fetchedStory = response.data.data[0];
        console.log(fetchedStory);
        fetchedStory.profile_image = `${baseurl}/${fetchedStory.profile_image}`;
        fetchedStory.main_image = `${baseurl}/${fetchedStory.main_image}`;
        fetchedStory.story_image = `${baseurl}/${fetchedStory.story_image}`;
        setStory(fetchedStory);
      } else {
        setStory(null);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, [id]);


  if (loading) {
    return <div className="container py-5"><h3>Loading story...</h3></div>;
  }

  if (!story) {
    return (
      <div className="container py-5">
        <h3>No story found.</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className='container py-5 mt-5'>
      <div className='row'>
        <div className='col-md-12' id='imagdata'>
          <img src={story.main_image} alt={story.title} className="img-fluid mb-3" />
        </div>
        <div className='headimgdata'>
          <div className='row'>
            <div className='col-md-8'>
              <h2>{story.title}</h2>
              <p>{story.date}</p>
              <p>{story.category}</p>
              <p>{story.description1}</p>
              <img src={story.story_image} alt={story.title} className="img-fluid mb-3" />
              <p>{story.description2}</p>
            </div>

            <div className='col-md-4 d-none d-md-block'>
              <div className='card border-none bg-white' id='leftData'>
                <div className="authow mt-2">
                  <img src={story.profile_image} className="author-img" alt='author' />
                  <h6>{story.designation}</h6>
                  <p>{story.name}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesDetails;
