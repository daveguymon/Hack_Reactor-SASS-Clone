import React, {Component} from 'react';

export default class MXNavbar extends Component {

  render(){
    return (
      <main className="mx-navbar">
        <div className="mx-navbar-contents">
          <div className="mx-logo-container">
            <img src="https://data.mx.com/assets/images/mx-logo.svg" alt="mx logo"/>
          </div>

          <div className="mx-navlinks">
            <div className="mx-links-contents">
              <p>SOLUTIONS</p>
              <p>PRODUCTS</p>
              <p>COMPANY</p>
              <p>BLOG</p>
            </div>
          </div>

          <div className="mx-demo-button-container">
            <div className="mx-demo-button">
              <p>REQUEST A DEMO</p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
