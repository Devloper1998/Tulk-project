import './contact.css';
import axios from 'axios';
import baseurl from '../../baseUrl';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newFormData = new FormData();
    newFormData.append('username', formData.username);
    newFormData.append('useremail', formData.useremail);
    newFormData.append('phone', formData.phone);
    newFormData.append('message', formData.message);
    newFormData.append('action', 'save');

    axios.post(`${baseurl}/saveContact.php`, newFormData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        alert('Thank you for contacting us!');
        setFormData({
          username: '',
          useremail: '',
          phone: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
        alert('Something went wrong. Please try again later.');
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
                      required
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
                      required
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
                      onChange={handleChange}
                      required
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
                      required
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
    </div>
  );
}

export default Contact;
