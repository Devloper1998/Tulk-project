// src\Components\AboutUs\Aboutus.jsx
import React, {useEffect} from 'react'
import aboutlogo from '../../Assets/About/about.jpg'
import aboutlogo2 from '../../Assets/About/about2.jpg'
import aboutlogo3 from '../../Assets/About/about3.jpg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Aboutus() {
       useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);
  return (
<>
     <section className='py-5 bg-light'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6' data-aos="zoom-in" >
                    <div className='heading'>
                        <h3>About Us</h3>
                        <p>Welcome to Our Telugu Ladies Support Network in the UK
Founded in December 2011  by Sridevi Meenavalli, We are a supportive and empowering community for Telugu Ladies living in the United Kingdom. Rooted in our shared culture and values, our group was founded to create a safe, welcoming space where women can connect, uplift, and inspire each other while </p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <img src= {aboutlogo} alt='' id='aboutimg'  className='rounded' />
                </div>
            </div>
        </div>
</section>

{/* our imparct */}

<div className='container test'>
  <div className='row custom-flex'>
    <div className='col-lg-6 col-md-6 image-block'>
      <img src={aboutlogo2} alt='' id='aboutimg1' className='rounded' />
    </div>
    <div className='col-lg-6 col-md-6 py-5 mt-3 text-block' data-aos="zoom-in-right">
      <div className='heading2'>
        <h3>Our Impact</h3>
        <p>
          Living far from India can be isolating, but you don’t have to go through it alone.
          Here, you'll find a caring sisterhood that understands your journey and supports your dreams.
          Whether you're seeking friendship, advice, or simply a place to belong, you’re welcome here.
        </p>
      </div>
    </div>
  </div>
</div>


{/* Why Join us */}
       <div className='container test'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 py-5 mt-5'>
                  <div className='heading3'>
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
