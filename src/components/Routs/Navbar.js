import React from 'react';
import {NavLink} from 'react-router-dom';

import "../../index.css";
const Navbar = () => {
  return (
    <div className ="container-fluid nav_bg">
    <div className = 'row'>
    <div className = "col-10 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
  <div className="container-floud">
   
  
    <div className="collapse navbar-collapse" id="navbarNav"  >
      <ul className="nav justify-content-center ml-auto ">
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/contect">Contect</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  </div>
  </div>
  </div>


  )
}

export default Navbar