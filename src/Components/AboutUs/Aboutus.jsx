// src\Components\AboutUs\Aboutus.jsx
import React, {useEffect,useState} from 'react'
import aboutlogo from '../../Assets/About/about.jpg'
import aboutlogo2 from '../../Assets/About/about2.jpg'
import aboutlogo3 from '../../Assets/About/about3.jpg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import baseurl from '../../baseUrl';



function Aboutus() {
    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);
    
       useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Whether animation should happen only once
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
  return (
<>
     <section className='py-5 bg-light'>
        <div className='container'>
                          
                        {about ? (
              <>
            <div className='row'>
                <div className='col-md-6 col-lg-6' >

                    <div className='heading'>
          
                        <h3>About Us</h3>
                        <p>{about.description}</p>
                    </div>
                </div>
                <div className='col-md-6 col-lg-6' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <img src={about?.image} alt='' id='aboutimg'  className='rounded' />

                </div>
            </div>

            </>
            ) : (
              <p>Loading contact...</p>
            )}
        </div>
</section>

     <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 py-2'>
                <img src= {aboutlogo2} alt='' id='aboutimg1'  className='rounded'/>
            </div>
                <div className='col-lg-6 col-md-6 py-2 mt-5'>
                  <div className='heading'>
                        <h3>Our Impact</h3>
                        <p>   Living far from India can be isolating, but you don’t have to go through it alone. Here, you'll find a caring sisterhood that understands your journey and supports your dreams. Whether you're seeking friendship, advice, or simply a place to belong, you’re welcome here. </p>

                    </div>
            </div>
        </div>
     </div>


       <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 mt-5 py-5'>
                  <div className='heading'>
                        <h3>Why Join us?</h3>
                        <p>“Incredible work by the team — you absolutely nailed it! I thoroughly enjoyed every moment, from meeting inspiring new connections to the beautiful venue, the brilliant format, and that game-changing LinkedIn tip. A fantastic way to kickstart the day you should be so proud.”</p>
                       
                    </div>
               
            </div>
                <div className='col-lg-6 col-md-6 '>
                 <img src= {aboutlogo3} alt='' className='rounded' id='aboutimg1'/>
            </div>
        </div>
     </div>
</>
  )
}

export default Aboutus
