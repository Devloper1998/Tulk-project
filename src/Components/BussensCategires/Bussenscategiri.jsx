// src\Components\BussensCategires\Bussenscategiri.jsx
import React from 'react'
import './Categiri.css'
import bussensimg from './../../Assets/News/Tigerlily_Edinburgh-feature.webp'
function Bussenscategiri() {
  return (
   <>
<section className="py-5 bg-light">
  <div className="container py-5 bg-gray">
    <h2 className="section-title mb-3">Businesses by category</h2>
    <p className="text-muted mb-4">Search trusted recommendations for businesses in Scotland.</p>
    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="category-card">
          <img src= {bussensimg} alt="Food & Drink" />
          <div className="category-info">
            <h5 className="mb-1">Food &amp; Drink →</h5>
            <p className="text-muted mb-0">84 businesses</p>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="category-card">
          {/* <img src="https://via.placeholder.com/300x200?text=Hair+%26+Beauty" alt="Hair & Beauty"> */}
          <div className="category-info">
            <h5 className="mb-1">Hair &amp; Beauty →</h5>
            <p className="text-muted mb-0">49 businesses</p>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="category-card">
          <img src= {bussensimg} alt="Gilson Gray" />
          <div className="category-info">
            <h5 className="mb-1">On the market with Gilson Gray →</h5>
            <p className="text-muted mb-0">11 businesses</p>
          </div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="category-card">
          <img src={bussensimg} alt="Professional Services" />
          <div className="category-info">
            <h5 className="mb-1">Professional Services →</h5>
            <p className="text-muted mb-0">79 businesses</p>
          </div>
        </div>
      </div>

      {/* button */}
        <div className='container mt-4'>
        <div className='row'>
        <div className='col-md-3'>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Show
        </button>
        </h2>

        </div>
        </div>
        </div>
        </div>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body mt-5" >
         <div className='row'>
                  <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="category-card">
          <img src= {bussensimg} alt="Gilson Gray" />
          <div className="category-info">
            <h5 className="mb-1">On the market with Gilson Gray →</h5>
            <p className="text-muted mb-0">11 businesses</p>
          </div>
        </div>
      </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="category-card">
          <img src= {bussensimg} alt="Gilson Gray" />
          <div className="category-info">
            <h5 className="mb-1">On the market with Gilson Gray →</h5>
            <p className="text-muted mb-0">11 businesses</p>
          </div>
        </div>
      </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="category-card">
          <img src= {bussensimg} alt="Gilson Gray" />
          <div className="category-info">
            <h5 className="mb-1">On the market with Gilson Gray →</h5>
            <p className="text-muted mb-0">11 businesses</p>
          </div>
        </div>
      </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="category-card">
          <img src= {bussensimg} alt="Gilson Gray" />
          <div className="category-info">
            <h5 className="mb-1">On the market with Gilson Gray →</h5>
            <p className="text-muted mb-0">11 businesses</p>
          </div>
        </div>
      </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mt-5">
        <div className="category-card">
          <img src= {bussensimg} alt="Gilson Gray" />
          <div className="category-info">
            <h5 className="mb-1">On the market with Gilson Gray →</h5>
            <p className="text-muted mb-0">11 businesses</p>
          </div>
        </div>
      </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mt-5">
        <div className="category-card">
          <img src= {bussensimg} alt="Gilson Gray" />
          <div className="category-info">
            <h5 className="mb-1">On the market with Gilson Gray →</h5>
            <p className="text-muted mb-0">11 businesses</p>
          </div>
        </div>
      </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mt-5">
        <div className="category-card">
          <img src= {bussensimg} alt="Gilson Gray" />
          <div className="category-info">
            <h5 className="mb-1">On the market with Gilson Gray →</h5>
            <p className="text-muted mb-0">11 businesses</p>
          </div>
        </div>
      </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mt-5">
        <div className="category-card">
          <img src= {bussensimg} alt="Gilson Gray" />
          <div className="category-info">
            <h5 className="mb-1">On the market with Gilson Gray →</h5>
            <p className="text-muted mb-0">11 businesses</p>
          </div>
        </div>
      </div>
         </div>
        </div>
        </div>
        </div>


    </div>
  </div>
</section>


{/* Latest stories Block */}

   
   </>
  )
}

export default Bussenscategiri