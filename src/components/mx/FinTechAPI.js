import React from 'react';

export default function FinTechAPI (props) {

  return (
    <main className="fintech-api">
      <div className="fintech-api-container">
        <div className="fintech-api-text-contents">
          <h1>FinTech<span> API</span></h1>
          <p>The Atrium API allows fintech companies to pick and choose which features<br /> they’d like to integrate directly into their current offerings — all with the data<br /> and algorithms of MX working behind the scenes.</p>
          <div className="fintech-api-btn">
            <p>TRY IT OUT NOW</p>
          </div>
          <div className="trusted-by-container">
            <p>TRUSTED BY:</p>
            <div className="trusted-by-logos">
              <div className="gold-source-logo"></div>
              <div className="self-score-logo"></div>
              <div className="spent-logo"></div>
            </div>
          </div>
        </div>
      </div>
      <img src="https://data.mx.com/assets/images/home/developer-api@2x.png" alt="fintech api" />
    </main>
  )
}
