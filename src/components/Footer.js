import React, {Component} from 'react';

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state={
      email: ''
    }
  }

  trackChange(event){
    this.setState({
      email: event.target.value
    })
  }

  clickSubmit(){
    this.setState({
      email: ''
    })
  }

  render(){
    return (
      <main className="footer">
        <div className="footer-top">
          <div className="footer-logo-container">
          </div>
          <div className="footer-signup-container">
            <p>Receive the Latest News & Upcoming Events</p>
            <span>
              <input placeholder="Email Address" value={this.state.email} onChange={this.trackChange.bind(this)}/>
              <div className="footer-email-btn" onClick={this.clickSubmit.bind(this)}>
                <p className="signup-btn-text">Sign Up</p>
              </div>
            </span>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-nav footer-students">
            <p className="column-main-link">STUDENTS</p>
            <p>Tuition & Financing</p>
            <p>Prepare Courses</p>
            <p>Scholarships</p>
            <p>Student Projects</p>
            <p>Events</p>
          </div>

          <div className="footer-nav footer-company">
            <p className="column-main-link">COMPANY</p>
            <p>About</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Regulatory Information</p>
          </div>

          <div className="footer-nav footer-more">
            <p className="column-main-link">MORE</p>
            <p>Employer Partnerships</p>
            <p>Community<br />Partnerships</p>
            <p>FAQ</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-nav footer-reviews-social">
            <div className="footer-reviews">
              <p className="column-main-link">REVIEWS</p>
              <div className="footer-horizontal-links">
                <div className="google-link-container">
                  <p>Google</p>
                </div>
                <div className="switchup-link-container">
                  <p>Switch Up</p>
                </div>
                <div className="yelp-link-container">
                  <p>Yelp</p>
                </div>
                <div className="coursereport-link-container">
                  <p>Course Report</p>
                </div>
              </div>
            </div>

            <div className="footer-social">
              <p className="column-main-link">SOCIAL</p>
              <div className="social-circles-container">

                <a href="https://www.facebook.com/hackreactor" target="_blank" rel="noopener noreferrer">
                <div className="social-circle"><i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
                </a>

                <a href="https://twitter.com/hackreactor" target="_blank" rel="noopener noreferrer">
                <div className="social-circle"><i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
                </a>

                <a href="https://www.youtube.com/channel/UCHJFC4Ad1VokRmkzY7RfbDQ" target="_blank" rel="noopener noreferrer">
                <div className="social-circle"><i className="fa fa-youtube-square" aria-hidden="true"></i>
                </div>
                </a>

                <a href="https://www.instagram.com/hackreactor/" target="_blank" rel="noopener noreferrer">
                <div className="social-circle"><i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
                </a>

                <a href="https://www.linkedin.com/school/3032535/" target="_blank" rel="noopener noreferrer">
                <div className="social-circle"><i className="fa fa-linkedin" aria-hidden="true"></i>
                </div>
                </a>

              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2017 Hack Reactor.  All rights reserved.</p>
            <p>Terms<span>/</span>Privacy Policy</p>
          </div>
        </div>
      </main>
    )
  }
}
