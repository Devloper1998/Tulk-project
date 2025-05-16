// src\Pages\Loader\Loaders.jsx
import React from 'react'
import './Preloader.css';

function Loaders() {
  return (
 <div className="preloader">
      <div className="loader-container">
        <div className="empower-logo"></div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="loading-text">Empowering Women... Please Wait</p>
      </div>
    </div>
  )
}

export default Loaders