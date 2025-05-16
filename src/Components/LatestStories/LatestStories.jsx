// src\Components\LatestStories\LatestStories.jsx
<<<<<<< HEAD
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logow from '../../Assets/LatestStories/3.jpg'
import Logo2 from '../../Assets/LatestStories/4.jpg'
import Logo3 from '../../Assets/LatestStories/5.jpg'
import Logo4 from '../../Assets/LatestStories/10.jpg'
=======
import React,{useState,useEffect} from 'react'
import Logo1 from '../../Assets/LatestStories/1.jpg'
import Logo2 from '../../Assets/LatestStories/2.png'
import Logo3 from '../../Assets/LatestStories/3.jpg'
import Logo4 from '../../Assets/LatestStories/4.jpg'
// import Logo5 from '../../Assets/LatestStories/5.jpg'
import { NavLink } from 'react-router-dom'
>>>>>>> 6682c11a16b4a7ef12622f45f3e7bd129563c480
import './Lateststories.css'
import axios from  'axios'
import  baseurl from '../../baseUrl'

<<<<<<< HEAD
export default function LatestStories() {
=======
function LatestStories() {
  const  [stories,setStories] = useState(null);
  const [loading, setLoading] = useState(true);

  
useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveStories.php`, formData)
    .then(response => {
      //  console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data;
          if (fetcheddata.main_image) {
          fetcheddata.main_image = `${baseurl}/${fetcheddata.main_image}`;
        }
        setStories(fetcheddata);
        
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);

  
>>>>>>> 6682c11a16b4a7ef12622f45f3e7bd129563c480
  return (
<div className="container py-5" id='heads'>
  <div className="d-flex justify-content-between align-items-center mb-2" id='headnew'>
    <h2 className="section-title">Latest stories</h2>
    <Link to="/allstories" className="text-danger text-decoration-none fw-medium subheading">All stories →</Link>
  </div>
  <p className="text-muted mb-4">Words from people we love on things we care about.</p>
  <div className="row flex-nowrap overflow-auto g-3 pb-2">
    {/* Card 1 */}
    
    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
<NavLink 
  className="text-decoration-none"
  to="/stories-details" 
  state={{
    image: Logow,
    title: "12 Top Tips for Selling Your Home from Gilson Gray",
    title2: "6 days ago",
    title3: "Posted in Egg Partners",
    meta: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    author: "Nicky Howden"
  }}
>
      <div className="story-card position-relative">
        <img src= {Logo4} className="story-image" alt='imag3' />
        <div className="story-content">
          <div className="story-title text-primary">Kitchen Makeover Calling? Step Insid...</div>
          <div className="story-meta">Egg Partners</div>
         <div className="author-row mt-2">
  <img src={Logo4} className="author-img" alt='imag3' />
  <span>Nicky Howden</span>
</div>

        </div>
      </div>
      </NavLink>
    </div>
    {/* Card 2 */}
    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
<NavLink 
  className="text-decoration-none"
  to="/stories-details" 
  state={{
    image: Logow,
    title: "12 Top Tips for Selling Your Home from Gilson Gray",
    title2: "6 days ago",
    title3: "Posted in Egg Partners",
    meta: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    author: "Nicky Howden"
  }}
>
      <div className="story-card">
        <img src= {Logow} className="story-image" alt='imag3' />
        <div className="story-content">
          <div className="story-title">Embracing the power of conversation...</div>
          <div className="story-meta">Other</div>
        <div className="author-row mt-2">
  <img src= {Logo4} className="author-img" alt='imag3' />
  <span>Team egg</span>
</div>

        </div>
      </div>
      </NavLink>
    </div>
    {/* Card 3 (Featured) */}
    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
<NavLink 
  className="text-decoration-none"
  to="/stories-details" 
  state={{
    image: Logow,
    title: "12 Top Tips for Selling Your Home from Gilson Gray",
    title2: "6 days ago",
    title3: "Posted in Egg Partners",
    meta: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    author: "Nicky Howden"
  }}
>
      <div className="story-card position-relative">
        <span className="featured-badge">FEATURED</span>
       <img src= {Logo2} className="story-image" alt='imag3'/>
        <div className="story-content">
          <div className="story-title">Easy on the eyes: Dry eye relief &amp; wh...</div>
          <div className="story-meta">Egg Partners</div>
         <div className="author-row mt-2">
  <img src= {Logo2} className="author-img" alt='imag3' />
  <span>Team egg</span>
</div>

        </div>
      </div>
      </NavLink>
    </div>
    {/* Card 4 (Featured) */}
    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
<NavLink 
  className="text-decoration-none"
  to="/stories-details" 
  state={{
    image: Logow,
    title: "12 Top Tips for Selling Your Home from Gilson Gray",
    title2: "6 days ago",
    title3: "Posted in Egg Partners",
    meta: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    author: "Nicky Howden"
  }}
>
      <div className="story-card position-relative">
        <span className="featured-badge">FEATURED</span>
        <img src= {Logo3} className="story-image" alt='imag3' />
        <div className="story-content">
          <div className="story-title">Meet the women behind Gilson Gray...</div>
          <div className="story-meta">Egg Partners</div>
          <div className="author-row mt-2">
  <img src= {Logo3} className="author-img" alt='imag3' />
  <span>Team egg</span>
</div>

        </div>
      </div>
      </NavLink>
    </div>
  </div>
</div>

  )
}
