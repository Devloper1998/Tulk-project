// src\Pages\Stories\Stories.jsx
import React from 'react'
import './Stories.css'
import storiimg from '../../Assets/patners/1q.jpg'

export default function Stories() {
  return (
     <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <div className='heading'>
                        <h3>Our Stories</h3>
                        <p>In this space, we share real stories from Telugu women who have faced challenges, embraced change, and grown stronger through their journeys in the UK. These voices reflect courage, resilience, and hope—offering inspiration and connection to others walking similar paths. Every story is a reminder that we are not alone, and that together, we rise higher. </p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 storie'>
                    <img src= {storiimg} alt='' className='rounded'/>
                </div>
            </div>
        </div>
</section>
  )
}
