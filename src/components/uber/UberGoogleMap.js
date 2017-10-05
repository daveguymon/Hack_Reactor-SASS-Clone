import React,{Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class UberGoogleMap extends Component {

  render(){
    return (
      <main className="uber-google-map">
      <Map
      google={this.props.google}
      zoom={14}
      initialCenter={{
            lat: 40.4241,
            lng: -111.8882
          }} />
      </main>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(UberGoogleMap)
