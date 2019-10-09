import React from 'react';
import './css/about.css';
import aboutImg from './img/love_below.png';
import aboutVid from './video/celon_vid.mov'

function About() {
  return (<section id="about" className="about-section text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-white mb-4">Celon Presents</h2>
          <p className="text-white-50"><img src={`${aboutImg}`} style={{"width":"60%"}}/></p>
        </div>
      </div>
     
<video width="80%" controls>
  <source src={`${aboutVid}`} type="video/mp4" />

  Your browser does not support HTML5 video.
</video>
    </div>
    </section>
    
  );
}

export default About;