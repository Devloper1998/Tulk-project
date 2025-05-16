// src\Components\Navbar\Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';
import baseurl from '../../baseUrl';

const Navbar = () => {
  const [logos, setLogos] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/stories', label: 'Stories' },
    { to: '/upevents', label: 'Upcoming Events' },
    { to: '/webinars', label: 'Webinars' },
    { to: '/futureBussines', label: 'Featured Post' },
    { to: '/contact', label: 'Contactus' },
  ];

  useEffect(() => {
    const formData = new FormData();
    formData.append('action', 'Display');
    axios.post(`${baseurl}/saveLogo.php`, formData)
      .then(response => {
        if (response.data?.data?.length > 0) {
          const fetchedLogo = response.data.data[0];
          if (fetchedLogo.header_logo) {
            fetchedLogo.header_logo = `${baseurl}/${fetchedLogo.header_logo}`;
          }
          setLogos(fetchedLogo);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the logo!", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const offcanvasElement = document.getElementById('mobileMenu');
    if (offcanvasElement && window.bootstrap) {
      const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) offcanvas.hide();
    }
  }, [location]);

  return (
    <section id="bgback">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" id="bg-back">
        <div className="container logocontainer">
          {/* Logo */}
          {logos?.header_logo ? (
            <img
              src={logos.header_logo}
              alt="Logo"
              style={{ width: '90px', marginBottom: '-40px', marginTop: '-34px' }}
            />
          ) : (
            <Link className="navbar-brand fw-bold" to="/">TLUK</Link>
          )}

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler p-1 px-2 btn-sm"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            style={{backgroundColor: '#fff'}}
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
         backdrop={true}
      >
        <div className="offcanvas-header border-bottom border-secondary">
          <h5 className="offcanvas-title text-white" id="mobileMenuLabel">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{backgroundColor: '#fff !importent'}}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li className="nav-item" data-bs-dismiss="offcanvas" key={index}>
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
