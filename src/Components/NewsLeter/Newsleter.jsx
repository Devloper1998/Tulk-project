// src\Components\NewsLeter\Newsleter.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './newsleter.css'
// import imgData from '../../Assets/News/1A.jpg'

function Newsleter() {
  return (
    <>
       <section className='py-5' id='bglatter'>
  <div className="container text-center">
    <h2 className="fw-bold mb-3">Stay Updated with Our Business News</h2>
    <p className="mb-4 fs-5">
      Be First to Know About Events, Deals & More!
    </p>

    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <Link to="/" className="btn btn-primary btn-lg fw-bold px-4 rounded-3">
        Subscribe to our Newsletter
      </Link>
      <Link to="/" className="btn btn-danger btn-lg fw-bold px-4 rounded-3">
        Become a Member
      </Link>
    </div>
  </div>
</section>


    </>



  )
}

export default Newsleter
