// src\Pages\Stories\Stories.jsx
import React, { useEffect, useState } from 'react';
import './Stories.css'
import storiimg from '../../Assets/patners/1q.jpg'
import axios from 'axios';
import baseurl from '../../baseUrl';


export default function Stories() {

      const [stories, setStories] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const formData = new FormData();
        formData.append('action', 'Display');
        axios.post(`${baseurl}/saveStories.php`, formData)
          .then(response => {
            if (response.data && response.data.data && response.data.data.length > 0) {
              const fetchedStory = response.data.data[0];
            console.log(fetchedStory);
            fetchedStory.profile_image = `${baseurl}/${fetchedStory.profile_image}`;
            fetchedStory.main_image = `${baseurl}/${fetchedStory.main_image}`;
            fetchedStory.story_image = `${baseurl}/${fetchedStory.story_image}`;
            setStories(fetchedStory);
            }
            setLoading(false);
          })
          .catch(error => {
            console.error("There was an error fetching the data!", error);
            setLoading(false);
          });
      }, []);

  return (
     <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <div className='heading'>
                        <h3>Our Stories</h3>
                        <p>{stories.description1}</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 storie'>
                    <img src= {stories.main_image} alt='' className='rounded'/>
                </div>
            </div>
        </div>
</section>
  )
}
