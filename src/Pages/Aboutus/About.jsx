// src\Pages\Aboutus\About.jsx
import React, {useEffect,useState} from 'react'
import aboutlogo from '../../Assets/About/about.jpg'
import aboutlogo1 from '../../Assets/About/Aboutdata.jpg'
import support from '../../Assets/About/support.jpg'
import connect from '../../Assets/About/connectpeople.jpg'
import community from '../../Assets/About/commity.jpg'
import growth from '../../Assets/About/groth.jpg'
import './about.css'
import axios from 'axios';
import baseurl from '../../baseUrl';

export default function About() {
    const [about, setAbout] = useState(null);
    const [mission, setMission] = useState(null);
    const [support, setSupport] = useState(null);
    const [connection, setConnection] = useState(null);
    const [community, setCommunity] = useState(null);
    const [empowerment, setEmpowerment] = useState(null);
    const [loading, setLoading] = useState(true);

        useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveAbout.php`, formData)
    .then(response => {
        // console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data[0];
        if (fetcheddata.image) {
            fetcheddata.image = `${baseurl}/${fetcheddata.image}`;
        }
        
        setAbout(fetcheddata);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);
    useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveMission.php`, formData)
    .then(response => {
        // console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data[0];
        if (fetcheddata.image) {
            fetcheddata.image = `${baseurl}/${fetcheddata.image}`;
        }
        
        setMission(fetcheddata);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);
    useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveSupport.php`, formData)
    .then(response => {
        // console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data[0];
        if (fetcheddata.image) {
            fetcheddata.image = `${baseurl}/${fetcheddata.image}`;
        }
        
        setSupport(fetcheddata);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);
    useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveCommunity.php`, formData)
    .then(response => {
        // console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data[0];
        if (fetcheddata.image) {
            fetcheddata.image = `${baseurl}/${fetcheddata.image}`;
        }
        
        setCommunity(fetcheddata);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);
    useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveConnection.php`, formData)
    .then(response => {
        // console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data[0];
        if (fetcheddata.image) {
            fetcheddata.image = `${baseurl}/${fetcheddata.image}`;
        }
        
        setConnection(fetcheddata);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);
    useEffect(() => {
  const formData = new FormData();
  formData.append('action', 'Display'); 
  axios.post(`${baseurl}/saveEmpowerment.php`, formData)
    .then(response => {
        // console.log('Fetched data:', response.data);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const fetcheddata = response.data.data[0];
        if (fetcheddata.image) {
            fetcheddata.image = `${baseurl}/${fetcheddata.image}`;
        }
        
        setEmpowerment(fetcheddata);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setLoading(false);
    });
}, []);
  return (
    <>
      <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
                     {about ? (
              <>
                <div className='col-md-6 col-lg-6' >

                    <div className='heading'>
          
                        <h3>About Us</h3>
                        <p>{about.description}</p>
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <img src={about?.image} alt='' id='aboutimg'  className='rounded' />

                </div>
            </>
            ) : (
              <p>Loading ..</p>
            )}
            </div>
        </div>
</section>

{/* Our Mission  */}
<section className='py-5' id='demos'>
    <div className='container'>
        {mission ? (
        <div className='row'>
            <div className='col-md-6 col-lg-6 order-2 order-md-1'>
                <img src={mission?.image} alt='' id='missions' className='rounded' />
            </div>
            <div className='col-md-6 col-lg-6 order-1 order-md-2'>
                <div className='missionhead'>
                    <h3>Our Mission</h3>
                    <p>{mission.description}</p>
                </div>
            </div>
        </div>
        ) : (
      <p>Loading...</p>
    )}
    </div>
</section>



{/* What you do? */}
      <section className='py-5' id='demos'>
        <div className='container'>
            {support ? (
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <div className='heading'>
                        <h3> Support & Guidance</h3>
                        <p>{support.description}</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <img src= {support?.image} alt='' id='suportimg'  className='rounded'/>
                </div>
            </div>
            ) : (
      <p>Loading...</p>
    )}
        </div>
</section>

{/* Cultural Connection */}
      <section className='py-5' id='demos'>
        <div className='container'>
            {connection ? (
            <div className='row'>
                <div className='col-md-6 col-lg-6 order-2 order-md-1'  >
                     <img src= {connection ?.image} alt='' id='missions' className='rounded'/>
          
                </div>
                <div className='col-md-6 col-lg-6 order-1 order-md-2'>
                           <div className='missionhead'>
                        <h3>Cultural Connection</h3>
                        <p>{connection.description}</p>
                       
                    </div>
                </div>
            </div>
            ) : (
      <p>Loading...</p>
    )}
        </div>
</section>

{/* Community Circles */}
      <section className='py-5' id='demos'>
        <div className='container'>
            {community ? (
            <div className='row'>
                <div className='col-md-6 col-lg-6 '>
                    <div className='heading'>
                        <h3> Community Circles</h3>
                        <p>{community.description}</p>
                       
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 '>
                    <img src= {community?.image} alt='' id='suportimg'  className='rounded'/>
                </div>
            </div>
             ) : (
      <p>Loading...</p>
    )}
        </div>
</section>


     {/* Empowerment & Growth */}
      <section className='py-5'>
        <div className='container'>
             {empowerment ? (
            <div className='row'>
                <div className='col-md-6 col-lg-6 order-2 order-md-1' >
                     <img src= {empowerment?.image} alt='' id='missions' className='rounded'/>
          
                </div>
                <div className='col-md-6 col-lg-6 order-1 order-md-2'>
                           <div className='missionhead'>
                        <h3>Empowerment & Growth</h3>
                        <p>{empowerment.description}</p>
                       
                    </div>
                </div>
            </div>
             ) : (
      <p>Loading...</p>
    )}
        </div>
</section> 
    </>
  )
}
