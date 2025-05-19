// src\App.js
import './App.css';
import React, { useState, useEffect } from 'react';


import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/HomeScreen/Home';
import About from './Pages/Aboutus/About';
import Stories from './Pages/Stories/Stories';
import Upevents from './Pages/UpEvents/Upevents';
import Webinars from './Pages/Webinars/Webinars';
import FutureBussines from './Pages/FutureBussines/FutureBussines';
import Navbar from './Components/Navbar/Navbar';
import FooterBlock from './Components/Footer/FooterBlock';
import OtherStories from './Components/OtherStories/OtherStories';
import ScrollToTop from './ScrollToTop';
import Contact from './Pages/ContactUs/Contact';

// Params data Pages
import StoriesDetails from './Components/Stories-Details/StoriesDetails';
import Allstories from './Components/All-Stories/Allstories';
import EventDetail from './Components/Events-Details/EventDetail';
import Allevents from './Components/All-EventsPage/Allevents';
import WebinarDetails from './Components/webinars-Details/WebinarDetails';
import Allwebnaiers from './Components/All-webnaiers/Allwebnaiers';
import BusinessDetails from './Components/Business-Details/BusinessDetails';

import Loaders from './Pages/Loader/Loaders';



function App() {
   const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loaders />;
  }

  return (
    <div className="App">
      <BrowserRouter>
       <ScrollToTop />
      <Navbar/>
      <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/about' element= {<About/>} />
          <Route path='/stories' element= {<Stories/>} />
          <Route path='/upevents' element= {<Upevents/>} />
          <Route path='/webinars' element= {<Webinars/>} />
          <Route path='/futureBussines' element= {<FutureBussines/>} />
          <Route path='/fullstories' element= {<OtherStories/>} />
          <Route path="/stories-details/:id" element={<StoriesDetails />} />
          <Route path='/eventDetail' element= {<EventDetail/>} />
          <Route path='/allevents' element= {<Allevents/>} />
          <Route path='/webinar' element= {<WebinarDetails/>} />
          <Route path='/allstories' element= {<Allstories/>} />
          <Route path='/allwebnaiers' element= {<Allwebnaiers/>} />
          <Route path='/businessDetail' element= {<BusinessDetails/>} />
          <Route path='/contact' element= {<Contact/>} />
        
      </Routes>
      <FooterBlock/>
      </BrowserRouter>
    </div>
  );
}

export default App;
