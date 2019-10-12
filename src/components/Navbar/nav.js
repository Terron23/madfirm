import React from 'react';
import './css/nav.css';
import logo from './img/celon_logo.png';



function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top"><img style={{"width": "20%"}} src={`${logo}`} /></a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" 
          data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#projects">Upcoming Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#signup">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    );
  }
export default Nav;
