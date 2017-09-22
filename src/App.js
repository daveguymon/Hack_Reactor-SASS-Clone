import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavbarAd from './components/NavbarAd';
import SplashBanner from './components/SplashBanner';
import SplashOutcomes from './components/SplashOutcomes';
import SplashImmersive from './components/SplashImmersive';
import SplashLocations from './components/SplashLocations';
import GetSyllabus from './components/GetSyllabus';
import Partnerships from './components/Partnerships';

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
        <GetSyllabus />
        <Partnerships />
      </div>
    );
  }
}

export default App;
