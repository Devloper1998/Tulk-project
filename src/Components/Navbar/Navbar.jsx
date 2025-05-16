// src\Components\Navbar\Navbar.jsx
<<<<<<< HEAD
import React, { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  
=======
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink,Link } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../baseUrl';

const Navbar = () => {
  const [logos, setLogos] = useState(null); 
  const [loading, setLoading] = useState(true);

>>>>>>> 6682c11a16b4a7ef12622f45f3e7bd129563c480
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/stories', label: 'Stories' },
    { to: '/upevents', label: 'Upcoming Events' },
    { to: '/webinars', label: 'Webinars' },
    { to: '/futureBussines', label: 'Featured Post' },
    { to: '/', label: 'Contect' },
  ];

<<<<<<< HEAD
  const location = useLocation();
=======
useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveLogo.php`, formData)
    .then(response => {
      // console.log('Fetched logos:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetchedLogo = response.data.data[0];
        if (fetchedLogo.header_logo) {
          fetchedLogo.header_logo = `${baseurl}/${fetchedLogo.header_logo}`;
        }
        setLogos(fetchedLogo);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);


  return (
 <section id="bgback">
 <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container logocontainer">
    {/* Logo */}
    {/* <img src={Logo} alt="Logo" className="navbar-brand" /> */}
    
    {/* Mobile Toggle Button */}
    <button
      className="btn btn-outline-light d-lg-none "
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#mobileMenu"
      aria-controls="mobileMenu"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/* <Link class="navbar-brand" to="/">TLUK</Link> */}
    <img src={logos?.header_logo} alt="Logo" style={{ width: '90px', marginBottom: '-40px', marginTop: '-34px' }}/>
    {/* Desktop Menu */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
       <li className="nav-item">
                  <NavLink to="/" end className={({ isActive }) =>
                    isActive ? 'nav-link active-link' : 'nav-link inactive-link'}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about/" className={({ isActive }) =>
                    isActive ? 'nav-link active-link' : 'nav-link inactive-link'}>
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/stories" className={({ isActive }) =>
                    isActive ? 'nav-link active-link' : 'nav-link inactive-link'}>
                    Stories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/upevents" className={({ isActive }) =>
                    isActive ? 'nav-link active-link' : 'nav-link inactive-link'}>
                    Upcoming Events
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/webinars" className={({ isActive }) =>
                    isActive ? 'nav-link active-link' : 'nav-link inactive-link'}>
                    Webinars
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/futureBussines" className={({ isActive }) =>
                    isActive ? 'nav-link active-link' : 'nav-link inactive-link'}>
                    Featured Post
                  </NavLink>
                </li>
      </ul>
    </div>
  </div>
</nav>
>>>>>>> 6682c11a16b4a7ef12622f45f3e7bd129563c480

  useEffect(() => {
    const offcanvasElement = document.getElementById('mobileMenu');
    if (offcanvasElement && window.bootstrap) {
      const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    }
  }, [location]);

  return (
    <section id="bgback">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" id='bg-back'>
        <div className="container logocontainer">
          {/* Logo */}
          <Link className="navbar-brand fw-bold" to="/">TLUK</Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler p-1 px-2 btn-sm"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
           
          >
            <span className="navbar-toggler-icon" style={{ transform: 'scale(0.8)' }}></span>
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active-link' : 'nav-link inactive-link'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-start text-bg-dark d-lg-none"
        tabIndex={-1}
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header border-bottom border-secondary">
          <h5 className="offcanvas-title text-white" id="mobileMenuLabel">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-primary fw-bold' : 'text-white'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
