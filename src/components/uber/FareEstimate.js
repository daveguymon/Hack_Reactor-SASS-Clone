import React,{Component} from 'react';
import UberGoogleMap from './UberGoogleMap';


export default class FareEstimate extends Component {
  constructor(props){
    super(props);
    this.state={
      pickup: '',
      destination: ''
    }
  }

updatePickup(event){
  this.setState({
    pickup: event.target.value
  })
}

updateDestination(event){
  this.setState({
    destination: event.target.value
  })
}

clearPickup(){
  this.setState({
    pickup: ''
  })
}

clearInputs(){
  this.setState({
    pickup: '',
    destination: ''
  })
}

  render(){

    let hideIcon={display: "none"}

    return(
      <main className="fare-estimate">
        <div className="fare-estimate-contents">
          <div className="fare-estimate-text">
            <h2>Pricing</h2>
            <h1>Get a fare estimate</h1>
            <div className="fare-estimate-inputs">
              <input
              className="pickup"
              placeholder="Enter pickup location" value={this.state.pickup}
              onChange={this.updatePickup.bind(this)}/>
              <i className="fa fa-location-arrow"
              style={!this.state.pickup ? null : hideIcon} aria-hidden="true"></i>
              <i className="fa fa-times"
              style={this.state.pickup ? null : hideIcon}
              onClick={this.clearPickup.bind(this)} aria-hidden="true"></i>
              <div className="destination-container">
                <input
                className="destination"
                placeholder="Enter destination" value={this.state.destination}
                onChange={this.updateDestination.bind(this)}/>
                <div
                className="destination-arrow" onClick={this.clearInputs.bind(this)}>
                  <i className="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i>
                </div>
              </div>
              <div className="input-connector-dot green-dot"></div>
              <div className="input-connector-dot red-dot"></div>
              <div className="dot-connector"></div>
            </div>
          </div>
          <UberGoogleMap />
        </div>
      </main>
    )
  }
}
