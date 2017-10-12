import React from 'react';

export default function UberFooter (props) {

  return (
    <main className="uber-footer">
      <section className="uber-footer-buttons">
        <div className="uber-footer-logo"></div>
        <div className="uber-footer-signup-btn"><p>SIGN UP TO RIDE</p></div>
        <div className="uber-footer-drive-btn"><p>BECOME A DRIVER</p></div>
      </section>

      <section className="uber-footer-nav-cols">
        <div className="nav-col nav-col-1">
          <p className="nav-col-link"><i className="fa fa-map-marker" aria-hidden="true"></i>
          Enter Your Location</p>
          <p className="nav-col-link"><i className="fa fa-globe" aria-hidden="true"></i>ENGLISH</p>
          <p className="nav-col-link"><i className="fa fa-life-ring" aria-hidden="true"></i>Help</p>
          <div className="uber-footer-social-icons">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
        <div className="nav-col nav-col-2">
          <p className="nav-col-link">Ride</p>
          <p className="nav-col-link">Drive</p>
          <p className="nav-col-link">Cities</p>
          <p className="nav-col-link">Fare Estimate</p>
          <p className="nav-col-link">Deliver</p>
          <p className="nav-col-link">Food</p>
          <p className="nav-col-link">Business Travel</p>
          <p className="nav-col-link">How It Works</p>
          <p className="nav-col-link">Airports</p>
          <p className="nav-col-link">Countries</p>
        </div>
        <div className="nav-col nav-col-3">
          <p className="nav-col-link">Safety</p>
          <p className="nav-col-link">Careers</p>
          <p className="nav-col-link">Helping Cities</p>
          <p className="nav-col-link">Our Story</p>
          <p className="nav-col-link">Blog</p>
          <p className="nav-col-link">Newsroom</p>
          <p className="nav-col-link">Media</p>
          <p className="nav-col-link">Uber API</p>
          <p className="nav-col-link">Gift Cards</p>
          <p className="nav-col-link">Uber vs Driving Jobs</p>
        </div>
      </section>
    </main>
  )
}
