import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavbarAd from './components/NavbarAd';
import SplashBanner from './components/SplashBanner';
import SplashOutcomes from './components/SplashOutcomes';
import SplashImmersive from './components/SplashImmersive';
import SplashLocations from './components/SplashLocations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarAd />
        <Navbar />
        <SplashBanner />
        <SplashOutcomes />
        <SplashImmersive />
        <SplashLocations />
      </div>
    );
  }
}

export default App;
