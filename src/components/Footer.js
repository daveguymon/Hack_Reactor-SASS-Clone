import React from 'react';

export default function Footer(props){

  return (
    <main className="footer">
      <div className="footer-top">
        <div className="footer-logo-container">
        </div>
        <div className="footer-signup-container">
          <p>Receive the Latest News & Upcoming Events</p>
          <span>
            <input placeholder="Email Address" />
            <div className="footer-email-btn">
              <p className="signup-btn-text">Sign Up</p>
            </div>
          </span>
        </div>
      </div>

      <div className="footer-middle">

      </div>

      <div className="footer-bottom">

      </div>
    </main>
  )
}
