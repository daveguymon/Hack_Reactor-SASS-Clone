import React, {Component} from 'react';

export default class UberPartners extends Component {
  constructor(props){
    super(props);
    this.state={
      slideLeft: false,
      slideRight: true
    }
  }

  clickSlideLeft(){
    this.setState({
      slideLeft: true,
      slideRight: false
    })
  }

  clickSlideRight(){
    this.setState({
      slideLeft: false,
      slideRight: true
    })
  }

  render() {

    let slideLeft = {padding: "0px 1000px 0px 0px", transition: "all .4s ease-in-out"};
    let slideRight = {padding: "0px 0px 0px 1000px", transition: "all .4s ease-in-out"};
    let hideSlide = {display: 'none'};
    let openDot = {width: "11.5px", height: "11.5px", border: "1px solid #377037", borderRadius: "50%", backgroundColor: "transparent", transition: "all .2s ease-in-out"};
    let closedDot = {width: "6.5px", height: "6.5px", border: "none", borderRadius: "50%", backgroundColor: "#377037", transition: "all .2s ease-in-out"};


      return (
        <main className="uber-partners">
          <h2>At the wheel</h2>
          <h1>Meet our partners</h1>
          <div
          className="partners-container"
          style={this.state.slideLeft ? slideLeft : slideRight}>
            <div className="partner-card">
              <div className="partner-img partner1"></div>
              <p className="partner-quote">"I started driving with Uber because I liked the idea that<br /> my own car could make me money. After just about a<br/> couple weeks, I saw that this was something I wanted to<br /> do permanently."</p>
              <p className="partner-citation"><span>Brandon</span>, Coach and Chicago partner</p>
            </div>

            <div className="partner-card">
              <div className="partner-img partner2"></div>
              <p className="partner-quote">"I wanted something where I could meet new people and<br /> get out of the house. Uber has helped with both of those<br /> things, plus I’m seeing new parts of the city I’ve never<br /> seen before!"</p>
              <p className="partner-citation"><span>Katrina</span>, Mother and Seattle partner</p>
            </div>

            <div className="partner-card">
              <div className="partner-img partner3"></div>
              <p className="partner-quote">"Uber enables me to have the creative freedom for<br /> baking my cakes and also driving on the side so I can<br /> make more money and also have my dream job."</p>
              <p className="partner-citation citation-jenny"><span>Jenny</span>, Business owner and Los Angeles partner</p>
            </div>

            <div className="partner-card">
              <div className="partner-img partner4"></div>
              <p className="partner-quote">"With Uber, I’m able to realize my goals. I’m able to<br /> pursue my dreams. I’m able to stay focused on sharing<br /> amazing musical experiences with the world."</p>
              <p className="partner-citation citation-sean"><span>Sean</span>, Musician and LA partner</p>
            </div>
          </div>

          <div className="slide-partners slide-left"
          style={this.state.slideLeft ? hideSlide : null} onClick={this.clickSlideLeft.bind(this)}>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>

          <div className="slide-partners slide-right"
          style={this.state.slideLeft ? null : hideSlide} onClick={this.clickSlideRight.bind(this)}>
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </div>
          <div className="circles-right">
            <div
            className="left-circle"
            onClick={this.clickSlideRight.bind(this)}
            style={this.state.slideRight ? openDot : closedDot}></div>
            <div
            className="right-circle"
            onClick={this.clickSlideLeft.bind(this)}
            style={this.state.slideLeft ? openDot : closedDot}></div>
          </div>
        </main>
      )
    }
  }
