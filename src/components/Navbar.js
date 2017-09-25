import React, {Component} from 'react';


export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      hideOnsite: true
    }
  }

  showOnsite(){
    this.setState({
      hideOnsite: false
    })
  }

  hideOnsite(){
    this.setState({
      hideOnsite: true
    })
  }

  render(){

    const dropdownHide = {display: "none"}

    return (
      <main className="navbar">
        <div className="logo-container"></div>
        <div className="nav-links-container">
          <p className="nav-link"
          onMouseEnter={this.showOnsite.bind(this)}
          onMouseLeave={this.hideOnsite.bind(this)}>Onsite <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <div className="dropdown onsite-dropdown" style={this.state.hideOnsite ? dropdownHide : null}
          onMouseEnter={this.showOnsite.bind(this)}
          onMouseLeave={this.hideOnsite.bind(this)}>
            <div className="onsite-bridge"
            onMouseEnter={this.showOnsite.bind(this)}></div>
            <div className="onsite-programs">
              <p className="dropdown-section-header">PROGRAMS</p>
              <p className="first-link">Software Engineering Immersive</p>
              <p>Telegraph Track</p>
              <p>FAQ</p>
            </div>

            <div className="onsite-programs">
              <p className="dropdown-section-header">CAMPUSES</p>
              <p className="first-link">San Francisco</p>
              <p>Austin</p>
              <p>Los Angeles</p>
              <p>New York City</p>

            </div>
          </div>

          <p className="nav-link">Remote <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="nav-link">Prepare <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="nav-link">Partnerships <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="nav-link">Outcomes <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="nav-link">Events <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="nav-link">Scholarships</p>
        </div>
        <div className="button"><p>Apply Now</p></div>
      </main>
    )
  }
}
