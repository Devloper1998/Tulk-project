// src\Pages\FutureBussines\FutureBussines.jsx
import React,{useEffect,useState} from 'react'
import Bussines from '../../Assets/bussines/1.png'
import axios from 'axios';
import baseurl from '../../baseUrl';
function FutureBussines() {

    const [business, setBusiness] = useState([]);
        const [loading, setLoading] = useState(true);
        const [activeIndex, setActiveIndex] = useState(0);
      
        useEffect(() => {
          const formData = new FormData();
          formData.append('action', 'Display');
      
          axios.post(`${baseurl}/saveFeatureBusiness.php`, formData)
            .then(response => {
              if (response.data?.data?.length > 0) {
               
                const fetchedStory = response.data.data[0];
                console.log(fetchedStory);
                fetchedStory.profile_image = `${baseurl}/${fetchedStory.profile_image}`;
                fetchedStory.main_image = `${baseurl}/${fetchedStory.main_image}`;
                setBusiness(fetchedStory);
              }
              setLoading(false);
            })
            .catch(error => {
              console.error('Error fetching data!', error);
              setLoading(false);
            });
        }, []);
  return (
  <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <div className='heading'>
                        <h3>Featured businesses</h3>
                        <p>{business.description}</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <img src= {business.main_image} alt='' id='aboutimg'  className='rounded'/>
                </div>
            </div>
        </div>
</section>
  )
}

export default FutureBussines