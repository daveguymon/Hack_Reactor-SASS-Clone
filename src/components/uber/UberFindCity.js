import React, {Component} from 'react';

export default class UberFindCity extends Component {
  constructor(props){
    super(props);
    this.state={
      city: ''
    }
  }

  updateCity(event){
    this.setState({
      city: event.target.value
    })
  }

  clearCity(){
    this.setState({
      city: ''
    })
  }

  render(){
    return(
      <main className="uber-find-city">
        <h1>Uber is in San Francisco</h1>
        <h2>and 632 other cities worldwide</h2>
        <div className="find-city-input-container">
          <input
          className="find-city-input"
          placeholder="Find a City" value={this.state.city}
          onChange={this.updateCity.bind(this)}/>
          <div
          className="find-city-arrow" onClick={this.clearCity.bind(this)}>
            <i className="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </main>
    )
  }
}
