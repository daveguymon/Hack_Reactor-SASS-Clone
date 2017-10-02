import React from 'react';

export default function MXFooter (props) {

  return (
    <main className="mx-footer">
      <div className="logo-location">
        <img src="https://data.mx.com/assets/images/mx-logo.svg" alt="MX logo"/>
        <p>© 2017 – MX Technologies Inc.</p>
        <p>3401 North Thanksgiving Way Ste 500<br />
        Lehi, UT 84043</p>
        <p>(801) 669-5500</p>
      </div>
      <div className="mx-footer-nav">
        <div className="mx-nav-column">
          <p className="nav-column-head">SOLUTIONS</p>
          <p>Collect Data</p>
          <p>Enrich Data</p>
          <p>Present Data</p>
          <p>Act on Data</p>
        </div>

        <div className="mx-nav-column">
          <p className="nav-column-head">PRODUCTS</p>
          <p>Next-Gen PFM</p>
          <p>Cross-Platform Framework</p>
          <p>Data Aggregation</p>
          <p>Banking API</p>
          <p>Fintech API</p>
          <p>Data Analytics</p>
          <p>Personalized Marketing</p>
        </div>

        <div className="mx-nav-column">
          <p className="nav-column-head">COMPANY</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>

        <div className="mx-nav-column">
          <p className="nav-column-head">BLOG</p>
          <p>Resources</p>
          <p>MoneySummit</p>
          <p>New & Culture</p>
        </div>
      </div>
    </main>
  )
}
