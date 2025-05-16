// src\Pages\Aboutus\About.jsx
import React, {useEffect,useState} from 'react'
import aboutlogo from '../../Assets/About/about.jpg'
import aboutlogo1 from '../../Assets/About/Aboutdata.jpg'
import support from '../../Assets/About/support.jpg'
import connect from '../../Assets/About/connectpeople.jpg'
import community from '../../Assets/About/commity.jpg'
import growth from '../../Assets/About/groth.jpg'
import './about.css'
import axios from 'axios';
import baseurl from '../../baseUrl';

export default function About() {
    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);

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
      <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
                     {about ? (
              <>
                <div className='col-md-6 col-lg-6' >

                    <div className='heading'>
          
                        <h3>About Us</h3>
                        <p>{about.description}</p>
                    </div>
                </div>
                <div className='col-md-6 col-lg-6' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <img src={about?.image} alt='' id='aboutimg'  className='rounded' />

                </div>
            </>
            ) : (
              <p>Loading contact...</p>
            )}
            </div>
        </div>
</section>

{/* Our Mission  */}
<section className='py-5' id='demos'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 col-lg-6 order-2 order-md-1'>
                <img src={aboutlogo1} alt='' id='missions' className='rounded' />
            </div>
            <div className='col-md-6 col-lg-6 order-1 order-md-2'>
                <div className='missionhead'>
                    <h3>Our Mission</h3>
                    <p>To empower Telugu women through support, guidance, and community—fostering strength, independence, and sisterhood in every stage of life abroad.</p>
                </div>
            </div>
        </div>
    </div>
</section>



{/* What you do? */}
      <section className='py-5' id='demos'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <div className='heading'>
                        <h3> Support & Guidance</h3>
                        <p>We offer emotional support, practical advice, and mentorship to help each other navigate life’s challenges,whether it’s settling into the UK, parenting, work-life balance, or personal growth.</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <img src= {support} alt='' id='suportimg'  className='rounded'/>
                </div>
            </div>
        </div>
</section>

{/* Cultural Connection */}
      <section className='py-5' id='demos'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 order-2 order-md-1'  >
                     <img src= {connect} alt='' id='missions' className='rounded'/>
          
                </div>
                <div className='col-md-6 col-lg-6 order-1 order-md-2'>
                           <div className='missionhead'>
                        <h3>Cultural Connection</h3>
                        <p>From festivals and language programs to traditional cooking classes and storytelling, we celebrate our Telugu heritage with pride.</p>
                       
                    </div>
                </div>
            </div>
        </div>
</section>

{/* Community Circles */}
      <section className='py-5' id='demos'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 '>
                    <div className='heading'>
                        <h3> Community Circles</h3>
                        <p>Regular meetups, virtual check-ins, and discussion forums where women share experiences, learn from each other, and build lasting friendships.</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 '>
                    <img src= {community} alt='' id='suportimg'  className='rounded'/>
                </div>
            </div>
        </div>
</section>


     {/* Empowerment & Growth */}
      <section className='py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 order-2 order-md-1' >
                     <img src= {growth} alt='' id='missions' className='rounded'/>
          
                </div>
                <div className='col-md-6 col-lg-6 order-1 order-md-2'>
                           <div className='missionhead'>
                        <h3>Empowerment & Growth</h3>
                        <p>Workshops, speaker sessions, and networking opportunities to help women grow personally and professionally.</p>
                       
                    </div>
                </div>
            </div>
        </div>
</section> 
    </>
  )
}
