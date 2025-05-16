// src\Pages\ContactUs\Contact.jsx
import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
<div className="container py-5 mt-5">
  <div className="row justify-content-center align-items-center">
    <div className="col-md-6 text-center" id="headingContain">
      <h1>Get in Touch</h1>
      <p>
        Please complete the form below for any queries regarding working with us,
        business listings, or any other general enquiries.
      </p>

      <p>If you need any support please email info@weareegg.co.uk We aim to respond to customer emails within 48 hours.</p>

      {/* Form page */}
<div className="container ">
  <div className="row">
    {/* Right Side: Contact Form */}
    <div className="col-lg-12 col-md-6">
     
      <form>
        {/* Name */}
        <div className="mb-3 row align-items-center">
         
          <div className="col-sm-12">
            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3 row align-items-center">
         
          <div className="col-sm-12">
            <input type="email" className="form-control" id="email" placeholder="Your Email" required />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-3 row align-items-center">
         
          <div className="col-sm-12">
            <input type="tel" className="form-control" id="phone" placeholder="Your Phone Number" required />
          </div>
        </div>

        {/* Message */}
        <div className="mb-3 row align-items-start">
        
          <div className="col-sm-12">
            <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..." required></textarea>
          </div>
        </div>

        {/* Submit Button */}
    
        <Link to= '/' className="btnbig">Submit</Link>
        

      </form>
    </div>
  </div>
</div>

    </div>
  </div>
</div>









    </>



  )
}

export default Contact