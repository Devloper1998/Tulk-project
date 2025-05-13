// src\App.js
import './App.css';

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



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/about' element= {<About/>} />
          <Route path='/stories' element= {<Stories/>} />
          <Route path='/upevents' element= {<Upevents/>} />
          <Route path='/webinars' element= {<Webinars/>} />
          <Route path='/futureBussines' element= {<FutureBussines/>} />
          <Route path='/fullstories' element= {<OtherStories/>} />
      </Routes>
      <FooterBlock/>
      </BrowserRouter>
    </div>
  );
}

export default App;
