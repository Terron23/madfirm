import React from 'react';
import './css/header.css';
// import bg  from './img/bg-masthead.jpg';

function Header() {
  return (
    <header className="masthead" >
    <div className="container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <h1 className="mx-auto my-0 text-uppercase">Celon NYC</h1>
        <h2 className="text-white-50 mx-auto mt-2 mb-5"></h2>
        <a href="#about" className="btn btn-primary js-scroll-trigger">View More</a>
      </div>
    </div>
  </header>
  );
}

export default Header;
