import React from 'react';
//import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import Slider from './Slider';
import Resturant from '../basic/Resturant';
const Home = () => {
  return (
   <>
   <Navbar />
   <Slider />
   <div className="text-center">
     <Resturant />
   
     </div>
  
   </>
  )
}

export default Home