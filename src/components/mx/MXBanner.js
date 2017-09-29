import React from 'react';

export default function MXBanner(props) {

  return(
    <main className="mx-banner">
      <div className="mx-banner-content">
        <h1 className="mx-banner-lg-text">DATA FOR<br /><span>BETTER BANKING</span></h1>
        <p className="mx-banner-sm-text">With $70 million in total funding and 1,700+ signed clients, MX<br /> enables you to collect, enrich, present, and act on data — giving your<br /> users a 5-star digital experience.</p>
      </div>
      <div className="mx-fintech-companies">
        <p>We work with some of the most innovative financial institutions and fintech companies</p>
        <div className="mx-fintech-logos">
          <img src="https://data.mx.com/assets/images/home/client-compass-logo.svg" alt="bbva compass" />
          <img src="https://data.mx.com/assets/images/home/client-afcu-logo.svg" alt="bbva compass" />
          <img src="https://data.mx.com/assets/images/home/client-visa-logo.svg" alt="bbva compass" />
          <img src="https://data.mx.com/assets/images/home/client-homeownership-logo.svg" alt="bbva compass" />
          <img src="https://data.mx.com/assets/images/home/client-becu-logo.svg" alt="bbva compass" />
          <img src="https://data.mx.com/assets/images/home/client-moneyguidepro-logo.svg" alt="bbva compass" />
        </div>
      </div>
    </main>
  )
}
