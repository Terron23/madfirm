import React from 'react';
import './css/contact.css'


function Contact() {
  return (
    <section className="contact-section bg-black">
    <div className="container">
<h3 className="text-center text-white-50">Contact Us</h3>
<hr className="my-4" />
      <div className="row">

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-map-marked-alt text-primary mb-2 celon-text"></i>
              <h4 className="text-uppercase m-0">Address</h4>
              <hr className="my-4" />
              <div className="small text-white-50">40w 40th Street, New York, NY</div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-envelope text-primary mb-2 celon-text"></i>
              <h4 className="text-uppercase m-0">Email</h4>
              <hr className="my-4" />
              <div className="small text-white-50">
               test@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-mobile-alt text-primary mb-2 celon-text"></i>
              <h4 className="text-uppercase m-0">Phone</h4>
              <hr className="my-4" />
              <div className="small text-white-50">+1(347)555-5555</div>
            </div>
          </div>
        </div>
      </div>

      <div className="social d-flex justify-content-center">
        <a href="#" className="mx-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="mx-2">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="mx-2">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

    </div>
  </section>

  );
}

export default Contact;