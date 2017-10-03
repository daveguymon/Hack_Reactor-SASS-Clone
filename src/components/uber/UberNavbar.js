import React, {Component} from 'react';

export default class UberNavbar extends Component {
  constructor(props){
    super(props);
    this.state={
      prop: null
    }
  }

  render(){
    return(
      <main className="uber-navbar">
        <div className="uber-navbar-contents">
          <section className="uber-nav-left">
            <img src="http://www.underconsideration.com/brandnew/archives/uber_2016_logo.png" alt="uber logo" />
            <div className="uber-ride-drive">
              <p>Ride</p>
              <p>Drive</p>
            </div>
          </section>
          <section className="uber-nav-right">
            <div className="uber-help-signin">
            <p>HELP</p>
            <p>SIGN IN</p>
            </div>

          <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
          <div className="uber-nav-btn">
            <p>BECOME A DRIVER</p>
          </div>
          <div className="uber-ham-icon">
            <div className="uber-ham"></div>
            <div className="uber-ham"></div>
            <div className="uber-ham"></div>
          </div>
          </section>
        </div>
      </main>
    )
  }
}
