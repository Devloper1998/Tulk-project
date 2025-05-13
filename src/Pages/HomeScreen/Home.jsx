// src\Pages\HomeScreen\Home.jsx
import React from 'react'
// import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import Aboutus from '../../Components/AboutUs/Aboutus'
import UpEvents from '../../Components/Events/UpEvents'
import UpWebinars from '../../Components/Upwebnareis/UpWebinars'
import Newsleter from '../../Components/NewsLeter/Newsleter'
import Business from '../../Components/Businesses/Business'
import LatestStories from '../../Components/LatestStories/LatestStories'



export default function Home() {
  return (
   <>
   {/* <Navbar/> */}
   <Slider/>
   <Aboutus/>
    <LatestStories/>
   <UpEvents/>
   <UpWebinars/>
   <Business/>
    <Newsleter/>
   </>
  )
}
