// src\Pages\HomeScreen\Home.jsx
import React from 'react'

import Slider from '../../Components/Slider/Slider'
import Aboutus from '../../Components/AboutUs/Aboutus'
import LatestStories from '../../Components/LatestStories/LatestStories'

import UpEvents from '../../Components/Events/UpEvents'
import UpWebinars from '../../Components/Upwebnareis/UpWebinars'
import Business from '../../Components/Businesses/Business'
import Newsleter from '../../Components/NewsLeter/Newsleter'




export default function Home() {
  return (
   <>
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
