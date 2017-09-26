import React, {Component} from 'react';

export default class MXNavbar extends Component {
  constructor(props){
    super(props);
    this.state={
      hideSolutions: true,
      hideProducts: true
    }
  }

  showSolutions(){
    this.setState({
      hideSolutions: false
    })
  }

  hideSolutions(){
    this.setState({
      hideSolutions: true
    })
  }

  render(){

    const hideDisplay={display: "none"};

    return (
      <main className="mx-navbar">
        <div className="mx-navbar-contents">
          <div className="mx-logo-container">
            <img src="https://data.mx.com/assets/images/mx-logo.svg" alt="mx logo"/>
          </div>

          <div className="mx-navlinks">
            <div className="mx-links-contents">
              <div className="mx-link" onMouseEnter={this.showSolutions.bind(this)}
              onMouseLeave={this.hideSolutions.bind(this)}>
                <p>SOLUTIONS</p>
              </div>
              <div className="mx-link">
                <p>PRODUCTS</p>
              </div>
              <p>COMPANY</p>
              <p>BLOG</p>
            </div>
          </div>

          <div className="mx-dropdown solutions-dropdown" style={this.state.hideSolutions ? hideDisplay : null}
          onMouseEnter={this.showSolutions.bind(this)}
          onMouseLeave={this.hideSolutions.bind(this)}>
            <div className="dropdown-bridge"
            onMouseEnter={this.showSolutions.bind(this)}></div>
            <p>COLLECT DATA</p>
            <p>ENRICH DATA</p>
            <p>PRESENT DATA</p>
            <p>ACT ON DATA</p>
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
