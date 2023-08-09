import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import React from 'react';
import Resturant from "./components/basic/Resturant";
import Home from "./components/Routs/Home";
import About from "./components/Routs/About";
import Contect from "./components/Routs/Contect";
export default function App(){
  return(
    // <div className="text-center">
    // <Resturant />
   
    // </div>
 
 <BrowserRouter>
  <Routes>
<Route path="/" element={<div><Home /></div>} />
<Route path="/about" element={<div><About /></div>} />
<Route path="/Contect" element={<div><Contect /></div>} />

  </Routes>
 
 </BrowserRouter>
 
    )
}
