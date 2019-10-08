import React from 'react';
import './css/signup.css';

function SignUp() {
  return (
    <section id="signup" className="signup-section">
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto text-center">

          <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
          <h2 className="text-white mb-5">Subscribe to recieve updates on new events</h2>

          <form className="form-inline d-flex">
            <input type="email" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Enter email address..." />
            <button type="submit" className="btn btn-primary mx-auto">Subscribe</button>
          </form>

        </div>
      </div>
    </div>
  </section>
  );
}

export default SignUp;



