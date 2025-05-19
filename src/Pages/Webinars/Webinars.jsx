// src\Pages\Webinars\Webinars.jsx
import React,{useState,useEffect} from 'react'
import testts from '../../Assets/patners/wew.jpg'
import './Webns.css'
import axios from 'axios';
import baseurl from '../../baseUrl';

function Webinars() {

      const [webinar, setWebinar] = useState([]);
        const [loading, setLoading] = useState(true);
    
       useEffect(() => {
          const formData = new FormData();
          formData.append('action', 'Display');
      
          axios
            .post(`${baseurl}/saveWebinar.php`, formData)
            .then(response => {
              // console.log('Fetched data:', response.data);
              if (response.data && response.data.data && response.data.data.length > 0) {
                const fetchedStory = response.data.data[0];
                console.log(fetchedStory);
                fetchedStory.profile_image = `${baseurl}/${fetchedStory.profile_image}`;
                fetchedStory.main_image = `${baseurl}/${fetchedStory.main_image}`;
                fetchedStory.story_image = `${baseurl}/${fetchedStory.story_image}`;
                setWebinar(fetchedStory);
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
                        <h3>Webinars for Growth & Empowerment</h3>
                        <p>{webinar.description1}</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <img src= {webinar.main_image} alt='' id='aboutimg'  className='rounded'/>
                </div>
            </div>
        </div>
</section>
  )
}

export default Webinars