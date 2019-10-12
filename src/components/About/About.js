import React from 'react';
import './css/about.css';
import aboutImg from './img/love_below.png';
import logo from './img/celon_log.PNG';
import aboutVid from './video/celon_vid.mov'
import poster from './img/poster.jpg'

function About() {
  return (<section id="about" className="about-section text-center">
    <div className="container">
    <video width="100%" controls poster={`${poster}`}>
      <source src={`${aboutVid}`} type="video/mp4" />
      Your browser does not support video.
    </video>

    <div className="row">
        <div className="col-lg-8 mx-auto">
          <p className="text-white-50"><img src={`${aboutImg}`} style={{"width":"60%"}}/></p>
          </div>
          <div className="col-lg-6 mx-auto">
          <h1 style={{"display": "block"}}className="text-white">
          at</h1>  <img src={`${logo}`} style={{"width":"60%"}}/>
        </div>
      </div>




        </div>
    </section>
    
  );
}

export default About;