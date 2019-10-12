import React from 'react';
import './css/event.css';
import fly2 from './img/golden-flyer2.JPG';


function Event() {
  return (  <section id="projects" className="projects-section">
  <div className="container">

    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
      <div className="col-xl-12 col-lg-7">
        <img className="img-fluid mb-3 mb-lg-0" src={`${fly2}`} alt="" />
      </div>
      {/* <div className="col-xl-4 col-lg-5">
        <div className="featured-text text-center text-lg-left">
          <h3>Upcoming Event </h3>
          <p className="text-white-50 mb-0">Mad Firm Promotions Parties and Events</p>
        </div>
      </div> */}
    </div>



    {/* <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
        <img className="img-fluid mb-3 mb-lg-0" src={`${fly2}`} alt="" />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">Upcoming Events</h4>
                <p className="mb-0 text-white-50">Mad Firm Promotions Parties and Events</p>
                <hr className="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

  
    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
      <div className="col-lg-6">
      <img className="img-fluid mb-3 mb-lg-0" src={`${fly2}`} alt="" />
      </div>
      <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
              <h4 className="text-white">Upcomin Events</h4>
                <p className="mb-0 text-white-50">Mad Firm Promotions Parties and Events</p>
                <hr className="d-none d-lg-block mb-0 ml-0" />
              </div>
            </div>
          </div>
        </div>
    </div>

  
    
    <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
        <img className="img-fluid mb-3 mb-lg-0" src={`${fly2}`} alt="" />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
              <h4 className="text-white">Upcomin Events</h4>
                <p className="mb-0 text-white-50">Mad Firm Promotions Parties and Events</p>
                <hr className="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>



*/}
  </div> 
</section>
    
  );
}

export default Event;