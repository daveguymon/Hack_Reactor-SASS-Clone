import React, {Component} from 'react';


export default class Navbar extends Component {


  render(){
    return (
      <main className="navbar">
        <div className="logo-container"></div>
        <div className="nav-links-container">
          <p className="nav-link">Onsite <i className="fa fa-caret-down" aria-hidden="true"></i></p>
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
