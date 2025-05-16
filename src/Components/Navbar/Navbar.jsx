// src\Components\Navbar\Navbar.jsx
import React, { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/stories', label: 'Stories' },
    { to: '/upevents', label: 'Upcoming Events' },
    { to: '/webinars', label: 'Webinars' },
    { to: '/futureBussines', label: 'Featured Post' },
    { to: '/', label: 'Contect' },
  ];

  const location = useLocation();

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
