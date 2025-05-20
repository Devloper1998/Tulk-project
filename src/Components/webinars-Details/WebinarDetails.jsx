// src\Components\webinars-Details\WebinarDetails.jsx
import React,{useState,useEffect}from 'react'
import { useParams,useLocation ,useNavigate} from 'react-router-dom';
import './webnaiers.css'
import axios from 'axios';
import baseurl from '../../baseUrl';


function WebinarDetails() {

  const { id } = useParams();
  const navigate = useNavigate();


  const [webinar, setWebinar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Displays');
  formData.append('id', id);

  axios.post(`${baseurl}/saveWebinar.php`, formData)
    .then(response => {
      if (response.data && response.data.data && response.data.data.length > 0) {
        
        const fetchedStory = response.data.data[0];
        console.log(fetchedStory);
        fetchedStory.profile_image = `${baseurl}/${fetchedStory.profile_image}`;
        fetchedStory.main_image = `${baseurl}/${fetchedStory.main_image}`;
        fetchedStory.image = `${baseurl}/${fetchedStory.image}`;
        setWebinar(fetchedStory);
      } else {
        setWebinar(null);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, [id]);
        const location = useLocation();
      // const { event } = location.state || {};
       if (!webinar) return <p>No Event Data</p>;
  return (
     <div className='container py-5 mt-5'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-12' id='imageData'>
           <img src= {webinar.main_image} alt='test' />
           <div className='row'>
            <div className='col-lg-8 col-md-8' id='demo'>
               <h2>{webinar.webinar_name}</h2>
               <p>{webinar.date}</p>

               <p>{webinar.description1}</p>
                <img src= {webinar.image} alt='test' />
                <p>{webinar.description2}</p>
            </div>
             <div className='col-lg-4 col-md-4'>
              {/* emty fill */}
            </div>
           </div>
        </div>
      </div>
     </div>
  )
}

export default WebinarDetails