// src\Pages\UpEvents\Upevents.jsx
import React from 'react'
import upimg from '../../Assets/patners/upcomming.jpg'
import './Upevents.css'

export default function Upevents() {
  return (
       <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <div className='heading'>
                        <h3>Events & Gatherings</h3>
                        <p>Our events are at the heart of our community, bringing Telugu women together to connect, learn, and celebrate. From empowerment workshops and wellness sessions to cultural festivals and networking meetups, each event is designed to uplift, inspire, and strengthen the bonds of sisterhood. Whether in-person or online, there’s always something meaningful happening where you belong.</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <img src= {upimg} alt='' id='aboutimg'  className='rounded'/>
                </div>
            </div>
        </div>
</section>
  )
}
