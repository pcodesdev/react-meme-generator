import React from 'react';

import './App.css';

import { FaCat } from 'react-icons/fa';

function Navbar() {
    return(
    <nav className="navbar navHeader">
  <div className="container-fluid">
  
    <a className="navbar-brand " href="#">
     <h1 className='App-logo text-info'><FaCat/> <span className='ml-3'>Meme Generator</span></h1> 
     
    </a>
    <form className="d-flex m-1 p-1" role="search">
    <h3 className="fw-light fs-4 text-white">React Course-Project 3</h3>
    </form>
    
  </div>
</nav>


    )
}

export default Navbar