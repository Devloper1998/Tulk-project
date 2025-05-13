// src\Components\NutritionBlock\Nutrition.jsx
import React from 'react'
import './Nutrition.css'
import Logos from '../../Assets/LatestStories/7.jpg'
import Logos1 from '../../Assets/LatestStories/10.jpg'
import Logos2 from '../../Assets/LatestStories/9.jpg'
import { Link } from 'react-router-dom'

function Nutrition() {
  return (
<div className="container membership-section">
  <div className="row align-items-center">
    {/* Left Side */}
    <div className="col-md-6 mb-4">
      <h2 className="fw-bold display-5">Daily Nutrition Plan</h2>
      <p className="mt-3">Become a member and</p>
      <div className="benefit-item"><i className="bi bi-check-lg" /> access hundreds of <Link href="#">exclusive discounts</Link></div>
      <div className="benefit-item"><i className="bi bi-check-lg" /> attend <Link href="#">exclusive events</Link></div>
      <div className="benefit-item"><i className="bi bi-check-lg" /> cancel anytime</div>
      <p className="mt-4 fs-5">Join for <strong>£100/year</strong> or only <strong>£20/month</strong></p>
      <button className="btn-membership mb-3">Set up membership</button>
      {/* <div><a href="#">More about Egg membership</a></div> */}
    </div>
    {/* Right Side: Images */}
    <div className="col-md-6">
      <div className="img-grid">
        <img src= {Logos} alt="Main" />
        <img src={Logos1} alt="Bath" />
        <img src={Logos2} alt="Food" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Nutrition
