import React, {Component} from 'react';


export default class Navbar extends Component {


  render(){
    return (
      <main className="navbar">
        <div className="logoContainer"></div>
        <div className="navLinksContainer">
          <p className="navLink">Onsite <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="navLink">Remote <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="navLink">Prepare <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="navLink">Partnerships <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="navLink">Outcomes <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="navLink">Events <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="navLink">Scholarships</p>
        </div>
        <div className="button"><p>Apply Now</p></div>
      </main>
    )
  }
}
