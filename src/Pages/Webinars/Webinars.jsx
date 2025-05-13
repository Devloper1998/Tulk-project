// src\Pages\Webinars\Webinars.jsx
import React from 'react'
import testts from '../../Assets/patners/wew.jpg'
import './Webns.css'

function Webinars() {
  return (
 <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <div className='heading'>
                        <h3>Webinars for Growth & Empowerment</h3>
                        <p>Our webinars offer a flexible and accessible way for Telugu women to learn, grow, and stay inspired.no matter where they are in the UK. Led by experts and community voices, these online sessions cover a wide range of topics including career development, mental wellness, parenting abroad, financial independence, and cultural identity. Join us from the comfort of your home and be part of meaningful conversations that empower and connect.</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <img src= {testts} alt='' id='aboutimg'  className='rounded'/>
                </div>
            </div>
        </div>
</section>
  )
}

export default Webinars