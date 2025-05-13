// src\Components\Navbar\Navbar.jsx
import React from 'react';
import './Navbar.css';
import { NavLink,Link } from 'react-router-dom';
// import Logo from '../../Assets/Logo/dummy-logo.png';

const Navbar = () => {
  // Define the navigation items to avoid repetition
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/stories', label: 'Stories' },
    { to: '/upevents', label: 'Upcoming Events' },
    { to: '/webinars', label: 'Webinars' },
    { to: '/futureBussines', label: 'Featured Post' },
  ];

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
    <Link class="navbar-brand" to="/">TLUK</Link>
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


      {/* Mobile Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-start d-lg-none custom-offcanvas"
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
          />
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav mb-4">
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
