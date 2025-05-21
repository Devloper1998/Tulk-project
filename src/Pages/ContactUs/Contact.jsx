// src\Pages\ContactUs\Contact.jsx
import './contact.css';
import axios from 'axios';
import baseurl from '../../baseUrl';
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    phone: '',
    message: ''
  });

  // Refs for focusing fields on error
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Step-by-step validation
    if (!formData.username.trim()) {
      toast.error("Name is required.");
      nameRef.current.focus();
      return;
    }

    if (!formData.useremail.trim()) {
      toast.error("Email is required.");
      emailRef.current.focus();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.useremail)) {
      toast.error("Please enter a valid email address.");
      emailRef.current.focus();
      return;
    }

  if (!formData.phone.trim()) {
  toast.error("Phone number is required.");
  phoneRef.current.focus();
  return;
}

if (!/^[0-9]{10}$/.test(formData.phone)) {
  toast.error("Please enter a valid 10-digit phone number.");
  phoneRef.current.focus();
  return;
}


    if (!formData.message.trim()) {
      toast.error("Message is required.");
      messageRef.current.focus();
      return;
    }

    // If all valid, submit
    const newFormData = new FormData();
    newFormData.append('username', formData.username);
    newFormData.append('useremail', formData.useremail);
    newFormData.append('phone', formData.phone);
    newFormData.append('message', formData.message);
    newFormData.append('action', 'save');

    axios.post(`${baseurl}/saveContact.php`, newFormData)
      .then(response => {
        toast.success("Thank you! Your enquiry has been received.");
        setFormData({
          username: '',
          useremail: '',
          phone: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center" id="headingContain">
          <h1>Get in Touch</h1>
          <p>Please complete the form below for any queries regarding working with us, business listings, or other enquiries.</p>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Your Name"
                      value={formData.username}
                      onChange={handleChange}
                      ref={nameRef}
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="useremail"
                      placeholder="Your Email"
                      value={formData.useremail}
                      onChange={handleChange}
                      ref={emailRef}
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => {
                        // Allow only numbers
                        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData(prev => ({ ...prev, phone: value }));
                      }}
                      ref={phoneRef}
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      ref={messageRef}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btnbig">Submit</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default Contact;
