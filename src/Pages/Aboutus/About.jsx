// src\Pages\Aboutus\About.jsx
import React from 'react'
import aboutlogo from '../../Assets/About/about.jpg'
import aboutlogo1 from '../../Assets/About/Aboutdata.jpg'
import support from '../../Assets/About/support.jpg'
import connect from '../../Assets/About/connectpeople.jpg'
import community from '../../Assets/About/commity.jpg'
import growth from '../../Assets/About/groth.jpg'
import './about.css'

export default function About() {
  return (
    <>
      <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <div className='heading'>
                        <h3>About Us</h3>
                        <p>Welcome to Our Telugu Ladies Support Network in the UK
Founded in December 2011  by Sridevi Meenavalli, We are a supportive and empowering community for Telugu Ladies living in the United Kingdom. Rooted in our shared culture and values, our group was founded to create a safe, welcoming space where women can connect, uplift, and inspire each other while </p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <img src= {aboutlogo} alt='' id='aboutimg'  className='rounded'/>
                </div>
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
