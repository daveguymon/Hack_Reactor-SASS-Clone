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
            <div className="uber-nav-link">
              <div className="focus-bar">Ride</div>
            </div>
            <div className="uber-nav-link">
              <div className="focus-bar">Drive</div>
            </div>
            </div>
          </section>
          <section className="uber-nav-right">
            <div className="uber-help-signin">
            <div className="uber-nav-link">
              <div className="focus-bar">HELP</div>
            </div>
            <div className="uber-nav-link">
              <div className="focus-bar">SIGN IN</div>
            </div>
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
