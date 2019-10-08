import React from 'react';
import './css/event.css';
import fly1 from './img/casual-flyer.jpeg';
import fly2 from './img/golden-flyer.jpg';
import fly3 from './img/night-flyer.jpeg';
import fly4 from './img/party-flyer.jpg';

function Event() {
  return (  <section id="projects" className="projects-section bg-light">
  <div className="container">

    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
      <div className="col-xl-8 col-lg-7">
        <img className="img-fluid mb-3 mb-lg-0" src={`${fly2}`} alt="" />
      </div>
      <div className="col-xl-4 col-lg-5">
        <div className="featured-text text-center text-lg-left">
          <h4>Upcoming Event</h4>
          <p className="text-black-50 mb-0"></p>
        </div>
      </div>
    </div>



    <div class="row justify-content-center no-gutters">
        <div class="col-lg-6">
        <img className="img-fluid mb-3 mb-lg-0" src={`${fly2}`} alt="" />
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Mountains</h4>
                <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                <hr class="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

  
    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
      <div className="col-lg-6">
      <img className="img-fluid mb-3 mb-lg-0" src={`${fly2}`} alt="" />
      </div>
      <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Misty</h4>
                <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                <hr class="d-none d-lg-block mb-0 ml-0" />
              </div>
            </div>
          </div>
        </div>
    </div>

  
    
    <div class="row justify-content-center no-gutters">
        <div class="col-lg-6">
        <img className="img-fluid mb-3 mb-lg-0" src={`${fly2}`} alt="" />
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Mountains</h4>
                <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                <hr class="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>



  </div>
</section>
    
  );
}

export default Event;