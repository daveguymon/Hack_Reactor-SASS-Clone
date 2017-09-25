import React, {Component} from 'react';


export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      hideOnsite: true,
      hideOnline: true,
      hidePrepare: true,
      hidePartnerships: true,
      hideOutcomes: true,
      hideEvents: true

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

  showOnline(){
    this.setState({
      hideOnline: false
    })
  }

  hideOnline(){
    this.setState({
      hideOnline: true
    })
  }

  showPrepare(){
    this.setState({
      hidePrepare: false
    })
  }

  hidePrepare(){
    this.setState({
      hidePrepare: true
    })
  }

  showPartnerships(){
    this.setState({
      hidePartnerships: false
    })
  }

  hidePartnerships(){
    this.setState({
      hidePartnerships: true
    })
  }

  showOutcomes(){
    this.setState({
      hideOutcomes: false
    })
  }

  hideOutcomes(){
    this.setState({
      hideOutcomes: true
    })
  }

  showEvents(){
    this.setState({
      hideEvents: false
    })
  }

  hideEvents(){
    this.setState({
      hideEvents: true
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

          <p className="nav-link"
          onMouseEnter={this.showOnline.bind(this)}
          onMouseLeave={this.hideOnline.bind(this)}>Online<i className="fa fa-caret-down" aria-hidden="true"></i></p>
            <div className="dropdown online-dropdown"
            style={this.state.hideOnline ? dropdownHide : null}
            onMouseEnter={this.showOnline.bind(this)}
            onMouseLeave={this.hideOnline.bind(this)}>
              <div className="online-bridge"></div>
              <div className="online-programs">
                <p>Remote Immersive</p>
                <p>Remote Part Time</p>
                <p>FAQ</p>
              </div>
            </div>

          <p className="nav-link"
          onMouseEnter={this.showPrepare.bind(this)}
          onMouseLeave={this.hidePrepare.bind(this)}>Prepare<i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <div className="dropdown prepare-dropdown"
          style={this.state.hidePrepare ? dropdownHide : null}
          onMouseEnter={this.showPrepare.bind(this)}
          onMouseLeave={this.hidePrepare.bind(this)}>
            <div className="prepare-bridge"></div>
            <p>Self Paced Bootcamp Prep</p>
            <p>Live Bootcamp Prep</p>
          </div>

          <p className="nav-link"
          onMouseEnter={this.showPartnerships.bind(this)}
          onMouseLeave={this.hidePartnerships.bind(this)}>Partnerships<i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <div className="dropdown partnerships-dropdown"
          style={this.state.hidePartnerships ? dropdownHide : null}
          onMouseEnter={this.showPartnerships.bind(this)}
          onMouseLeave={this.hidePartnerships.bind(this)}>
            <div className="partnerships-bridge"></div>
            <p>Employer Partnerships</p>
            <p>Community Partnerships</p>
          </div>

          <p className="nav-link"
          onMouseEnter={this.showOutcomes.bind(this)}
          onMouseLeave={this.hideOutcomes.bind(this)}>Outcomes<i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <div className="dropdown outcomes-dropdown"
          style={this.state.hideOutcomes ? dropdownHide : null}
          onMouseEnter={this.showOutcomes.bind(this)}
          onMouseLeave={this.hideOutcomes.bind(this)}>
            <div className="outcomes-bridge"></div>
            <p>Student Outcomes</p>
            <p>Student Projects</p>
          </div>

          <p className="nav-link"
          onMouseEnter={this.showEvents.bind(this)}
          onMouseLeave={this.hideEvents.bind(this)}>Events<i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <div className="dropdown events-dropdown"
          style={this.state.hideEvents ? dropdownHide : null}
          onMouseEnter={this.showEvents.bind(this)}
          onMouseLeave={this.hideEvents.bind(this)}>
            <div className="events-bridge"></div>
            <p>Workshops & Events</p>
            <p>Schedule a Campus Tour</p>
          </div>


          <p className="nav-link">Scholarships</p>
        </div>
        <div className="button"><p>Apply Now</p></div>
      </main>
    )
  }
}
