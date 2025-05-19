// src\Pages\UpEvents\Upevents.jsx
import React,{useState,useEffect} from 'react'
import upimg from '../../Assets/patners/upcomming.jpg'
import './Upevents.css'
import axios from 'axios';
import baseurl from '../../baseUrl';

export default function Upevents() {

    const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const formData = new FormData();
    formData.append('action', 'Display');

    axios
      .post(`${baseurl}/saveEvents.php`, formData)
      .then(response => {
        console.log('Fetched data:', response.data);
        if (response.data && response.data.data && response.data.data.length > 0) {
          const fetchedStory = response.data.data[0];
            console.log(fetchedStory);
            fetchedStory.profile_image = `${baseurl}/${fetchedStory.profile_image}`;
            fetchedStory.main_image = `${baseurl}/${fetchedStory.main_image}`;
            fetchedStory.story_image = `${baseurl}/${fetchedStory.story_image}`;
            setEvents(fetchedStory);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, []);

  return (
       <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <div className='heading'>
                        <h3>Events & Gatherings</h3>
                        <p>{events.description1}</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <img src= {events.main_image} alt='' id='aboutimg'  className='rounded'/>
                </div>
            </div>
        </div>
</section>
  )
}
