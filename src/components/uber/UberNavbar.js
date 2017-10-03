import React, {Component} from 'react';

export default class UberNavbar extends Component {
  constructor(props){
    super(props);
    this.state={
      hideRideDropdown: true,
      hideDriveDropdown: true
    }
  }

  showRideDropdown(){
    this.setState({
      hideRideDropdown: false
    })
  }

  hideRideDropdown(){
    this.setState({
      hideRideDropdown: true
    })
  }

  showDriveDropdown(){
    this.setState({
      hideDriveDropdown: false
    })
  }

  hideDriveDropdown(){
    this.setState({
      hideDriveDropdown: true
    })
  }

  render(){

    let dropdownHidden = {display: "none"};
    let focusBarDisplayed = {backgroundColor: "#377037"}
    return(
      <main className="uber-navbar">
        <div className="uber-navbar-contents">
          <section className="uber-nav-left">
            <img src="http://www.underconsideration.com/brandnew/archives/uber_2016_logo.png" alt="uber logo" />
            <div className="uber-ride-drive">
            <div className="uber-nav-link">
              <div className="focus-bar" style={!this.state.hideRideDropdown ? focusBarDisplayed : null} onMouseEnter={this.showRideDropdown.bind(this)}
              onMouseLeave={this.hideRideDropdown.bind(this)}><p>Ride</p></div>
            </div>
            <div className="uber-nav-link">
              <div className="focus-bar"style={!this.state.hideDriveDropdown ? focusBarDisplayed : null} onMouseEnter={this.showDriveDropdown.bind(this)}
              onMouseLeave={this.hideDriveDropdown.bind(this)}><p>Drive</p></div>
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

        <div className="uber-ride-dropdown" style={this.state.hideRideDropdown ? dropdownHidden : null} onMouseLeave={this.hideRideDropdown.bind(this)}>
          <div className="uber-hover-bridge" onMouseEnter={this.showRideDropdown.bind(this)}></div>
          <div className="uber-dropdown-contents">
            <div className="uber-dropdown-nav-column">
              <p>Overview</p>
              <p>Cities</p>
            </div>
            <div className="uber-dropdown-nav-column">
              <p>How It Works</p>
              <p>Airports</p>
            </div>
            <div className="uber-dropdown-nav-column">
              <p>Fare Estimator</p>
            </div>
            <div className="uber-dropdown-nav-column">
              <p>Safety</p>
            </div>
          </div>
        </div>

        <div className="uber-drive-dropdown" style={this.state.hideDriveDropdown ? dropdownHidden : null} onMouseLeave={this.hideDriveDropdown.bind(this)}>
          <div className="uber-hover-bridge" onMouseEnter={this.showDriveDropdown.bind(this)}></div>
          <div className="uber-dropdown-contents">
            <div className="uber-dropdown-nav-column">
              <p>Overview</p>
              <p>Insurance</p>
              <p>Resources</p>
            </div>
            <div className="uber-dropdown-nav-column">
              <p>Requirements</p>
              <p>Safety</p>
            </div>
            <div className="uber-dropdown-nav-column">
            <p>Driver App</p>
            <p>Rewards</p>
            </div>
            <div className="uber-dropdown-nav-column">
            <p>Vehicle Solutions</p>
            <p>Delivery</p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
