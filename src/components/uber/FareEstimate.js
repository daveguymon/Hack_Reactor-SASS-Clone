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

  render(){
    return(
      <main className="fare-estimate">
        <div className="fare-estimate-contents">
          <div className="fare-estimate-text">
            <h2>Pricing</h2>
            <h1>Get a fare estimate</h1>
            <div className="fare-estimate-inputs">
              <input className="pickup" placeholder="Enter pickup location" />
              <div className="destination-container">
                <input className="destination" placeholder="Enter destination" />
                <div className="destination-arrow">
                  <i className="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <UberGoogleMap />
        </div>
      </main>
    )
  }
}
