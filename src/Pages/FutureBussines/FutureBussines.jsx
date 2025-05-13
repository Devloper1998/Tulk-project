// src\Pages\FutureBussines\FutureBussines.jsx
import React from 'react'
import Bussines from '../../Assets/bussines/1.png'
function FutureBussines() {
  return (
  <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <div className='heading'>
                        <h3>Featured businesses</h3>
                        <p>Join Us in Empowering Women in Business
We believe that collaboration is the key to success. If you are an entrepreneur, small business owner, or professional, we want to hear from you! Partner with us and be featured in our vibrant community of Telugu women in business.
Why Collaborate with Us?
Access to a supportive and growing network.
Opportunities for mentorship and resource sharing.
Showcase your business and expertise to an engaged audience.
Ready to Get Featured?
Let's create something incredible together! Click below to start the conversation and explore the possibilities.</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <img src= {Bussines} alt='' id='aboutimg'  className='rounded'/>
                </div>
            </div>
        </div>
</section>
  )
}

export default FutureBussines