// src\Components\AboutUs\Aboutus.jsx
import React, {useEffect,useState} from 'react'
// import aboutlogo from '../../Assets/About/about.jpg'
import aboutlogo2 from '../../Assets/About/about2.jpg'
import aboutlogo3 from '../../Assets/About/about3.jpg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import baseurl from '../../baseUrl';



function Aboutus() {
    const [about, setAbout] = useState(null);
    const [impact, setImpact] = useState(null);
    const [whyjoin, setWhyjoin] = useState(null);
    const [loading, setLoading] = useState(true);
    
       useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

    useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveAbout.php`, formData)
    .then(response => {
        // console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data[0];
        if (fetcheddata.image) {
            fetcheddata.image = `${baseurl}/${fetcheddata.image}`;
        }
        
        setAbout(fetcheddata);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);
useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveImpact.php`, formData)
    .then(response => {
        // console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data[0];
        if (fetcheddata.image) {
            fetcheddata.image = `${baseurl}/${fetcheddata.image}`;
        }
        
        setImpact(fetcheddata);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);
useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveWhyjoinus.php`, formData)
    .then(response => {
        // console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data[0];
        if (fetcheddata.image) {
            fetcheddata.image = `${baseurl}/${fetcheddata.image}`;
        }
        
        setWhyjoin(fetcheddata);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);
  return (
<>
<section className='py-5 bg-light'> 
  <div className='container'>
    {about ? (
      <div className='row'>
        <div className='col-md-6 col-lg-6'>
          <div className='heading'>
            <h3>About Us</h3>
            <p>{about.description}</p>
          </div>
        </div>
        <div
          className='col-md-6 col-lg-6'>
          <img
            src={about?.image}
            alt=''
            id='aboutimg'
            className='rounded'
          />
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
</section>


{/* our imparct */}

<div className='container test'>
  {impact ? (
  <div className='row custom-flex'>
    <div className='col-lg-6 col-md-6 image-block'>
      <img src={impact?.image} alt='' id='aboutimg1' className='rounded' />
    </div>
    <div className='col-lg-6 col-md-6 py-5 mt-3 text-block'>
      <div className='heading2'>
        <h3>Our Impact</h3>
        <p>{impact.description}
        </p>
      </div>
    </div>
  </div>
   ) : (
      <p>Loading...</p>
    )}
</div>


{/* Why Join us */}
       <div className='container test'>
        {whyjoin ? (
        <div className='row'>
            <div className='col-lg-6 col-md-6 py-5 mt-5'>
                  <div className='heading3'>
                        <h3>Why Join us?</h3>
                        <p>“{whyjoin.description}”</p>
                       
                    </div>
               
            </div>
                <div className='col-lg-6 col-md-6 '>
                 <img src= {whyjoin?.image} alt='' className='rounded' id='aboutimg1'/>
            </div>
        </div>
        ) : (
      <p>Loading...</p>
    )}
     </div>
</>
  )
}

export default Aboutus
